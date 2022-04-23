import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomBlock } from "../../data/bank";
import { handleCorrectCharacter } from "../../handlers/handleCorrectCharacter";
import { handleIncorrectCharacter } from "../../handlers/handleIncorrectCharacter";
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

    const { currentCharacterIndex, currentWordIndex, testTextSplit } =
      store.getState().process;

    const key = e.key;
    const actual = testTextSplit[currentWordIndex][currentCharacterIndex];

    if (key.length > 1) {
      return;
    }

    console.log({ key, actual });

    if (key === " ") {
      handleSpace(dispatch);
      return;
    }

    if (key === actual) {
      handleCorrectCharacter(dispatch);
    } else {
      handleIncorrectCharacter(dispatch);
    }
  }

  // used to prevent the page from scrolling when the space key is clicked
  function onKeyPressed(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
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
                  {Array.from(word).map((char, index) => (
                    <ArenaCharacter
                      key={index}
                      color={index === currentCharacterIndex ? "blue" : "black"}
                    >
                      {char}
                    </ArenaCharacter>
                  ))}
                  &nbsp;
                </ArenaWord>
                <GhostWord color="grey">
                  {Array.from(word).map((char, index) => (
                    <ArenaCharacter
                      key={index}
                      color={index < currentCharacterIndex ? "black" : "grey"}
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
