import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRandomBlock } from "../../data/bank";
import { handleCorrectCharacter } from "../../handlers/handleCorrectCharacter";
import { handleIncorrectCharacter } from "../../handlers/handleIncorrectCharacter";
import { handleShift } from "../../handlers/handleShift";
import handleSpace from "../../handlers/handleSpace";
import { setLoaded, setTestText } from "../../redux/slices/process";
import store, { RootState } from "../../redux/store";
import {
  ArenaCharacter,
  ArenaContainer,
  ArenaWord,
  ArenaWordWrapper,
  GhostWord,
} from "./Arena.styles";

interface ArenaProps {}

export const Arena: React.FC<ArenaProps> = ({}) => {
  const { loaded, currentWordIndex, currentCharacterIndex, testTextSplit } =
    useSelector((state: RootState) => state.process);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const currentCharElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) {
      dispatch(setLoaded(true));
      document.addEventListener("keyup", onKeyUp);
      document.addEventListener("keypress", onKeyPressed);
    }
  }, [dispatch, loaded]);

  useEffect(() => {
    dispatch(setTestText(getRandomBlock()));
  }, [dispatch]);

  // main logic for handling a key press
  function onKeyUp(e: KeyboardEvent) {
    e.preventDefault();

    const {
      currentCharacterIndex,
      currentWordIndex,
      testTextSplit,
      shiftActivated,
    } = store.getState().process;

    const key = e.key;
    const actual = testTextSplit[currentWordIndex][currentCharacterIndex];

    if (key === "Shift") {
      handleShift(dispatch);
    }

    if (key.length > 1) {
      return;
    }

    if (key === " ") {
      handleSpace(dispatch);
      return;
    }

    if (key === actual || (shiftActivated && key.toUpperCase() === actual)) {
      handleCorrectCharacter(dispatch, navigate);
    } else {
      handleIncorrectCharacter(dispatch);
      triggerIncorrectCharAnimation(key);
    }
  }

  // used to prevent the page from scrolling when the space key is clicked
  function onKeyPressed(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
    }
  }

  function triggerIncorrectCharAnimation(key: string) {
    const element = currentCharElRef.current;

    if (element) {
      const errorText = document.createElement("span");

      errorText.textContent = key;
      errorText.classList.add("animate");

      element.insertAdjacentElement("beforeend", errorText);

      setTimeout(() => {
        errorText.remove();
      }, 500);
    }
  }

  return (
    <ArenaContainer>
      <h2>
        {testTextSplit.map((word, index) => (
          <ArenaWordWrapper>
            {index === currentWordIndex ? (
              <>
                <ArenaWord>
                  {Array.from(word).map((char, index) =>
                    index === currentCharacterIndex ? (
                      <ArenaCharacter
                        ref={currentCharElRef}
                        key={index}
                        color="blue"
                      >
                        {char}
                      </ArenaCharacter>
                    ) : (
                      <ArenaCharacter key={index} color="black">
                        {char}
                      </ArenaCharacter>
                    )
                  )}
                  &nbsp;
                </ArenaWord>
                <GhostWord color="grey">
                  {Array.from(word).map((char, index) => (
                    <ArenaCharacter
                      key={index}
                      color={
                        index < currentCharacterIndex ? "limegreen" : "grey"
                      }
                    >
                      {char}
                    </ArenaCharacter>
                  ))}
                  &nbsp;
                </GhostWord>
              </>
            ) : (
              <>
                <ArenaWord>
                  {Array.from(word).map((char, index) => (
                    <ArenaCharacter key={index}>{char}</ArenaCharacter>
                  ))}
                  &nbsp;
                </ArenaWord>
                {/* this makes sure that the ghost word is invisible */}
                <GhostWord color="white">
                  {Array.from(word).map((char, index) => (
                    <ArenaCharacter key={index}>{char}</ArenaCharacter>
                  ))}
                  &nbsp;
                </GhostWord>
              </>
            )}
          </ArenaWordWrapper>
        ))}
      </h2>
    </ArenaContainer>
  );
};
