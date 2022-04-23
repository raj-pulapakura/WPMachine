import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { textChangeRangeIsUnchanged } from "typescript";

interface ProcessState {
  testText: string;
  testTextSplit: string[];
  currentWordIndex: number;
  currentCharacterIndex: number;
  loaded: boolean;
  spaceRequired: boolean;
  shiftActivated: boolean;
  incorrectAttempts: number;
  mostRecentIncorrectIndex: {
    charIndex: number | null;
    wordIndex: number | null;
  };
}

const initialState: ProcessState = {
  testText: "",
  testTextSplit: [],
  currentWordIndex: 0,
  currentCharacterIndex: 0,
  loaded: false,
  spaceRequired: false,
  shiftActivated: false,
  incorrectAttempts: 0,
  mostRecentIncorrectIndex: {
    charIndex: null,
    wordIndex: null,
  },
};

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    clearProcessState(state) {
      state.testText = "";
      state.testTextSplit = [];
      state.currentCharacterIndex = 0;
      state.currentWordIndex = 0;
      state.loaded = false;
      state.spaceRequired = false;
      state.shiftActivated = false;
      state.incorrectAttempts = 0;
      state.mostRecentIncorrectIndex = {
        charIndex: null,
        wordIndex: null,
      };
    },
    setTestText(state, action: PayloadAction<string>) {
      state.testText = action.payload;
      state.testTextSplit = action.payload.split(" ");
    },
    setCurrentWordIndex(state, action: PayloadAction<number>) {
      state.currentWordIndex = action.payload;
    },
    setCurrentCharIndex(state, action: PayloadAction<number>) {
      state.currentCharacterIndex = action.payload;
    },
    setLoaded(state, action: PayloadAction<boolean>) {
      state.loaded = action.payload;
    },
    incrementCurrentWordIndex(state) {
      state.currentWordIndex++;
    },
    decrementCurrentWordIndex(state) {
      state.currentWordIndex--;
    },
    incrementCurrentCharacterIndex(state) {
      state.currentCharacterIndex++;
    },
    decrementCurrentCharacterIndex(state) {
      state.currentCharacterIndex--;
    },
    resetCurrentCharacterIndex(state) {
      state.currentCharacterIndex = 0;
    },
    setSpaceRequired(state, action: PayloadAction<boolean>) {
      state.spaceRequired = action.payload;
    },
    activateShift(state) {
      state.shiftActivated = true;
    },
    deactivateShift(state) {
      state.shiftActivated = false;
    },
    incrementIncorrectAttempts(state) {
      state.incorrectAttempts++;
    },
    updateMostRecentIncorrectIndex(
      state,
      action: PayloadAction<ProcessState["mostRecentIncorrectIndex"]>
    ) {
      state.mostRecentIncorrectIndex = action.payload;
    },
  },
});

export const {
  clearProcessState,
  setTestText,
  setCurrentWordIndex,
  setCurrentCharIndex,
  setLoaded,
  incrementCurrentCharacterIndex,
  incrementCurrentWordIndex,
  decrementCurrentCharacterIndex,
  decrementCurrentWordIndex,
  setSpaceRequired,
  resetCurrentCharacterIndex,
  activateShift,
  deactivateShift,
  incrementIncorrectAttempts,
  updateMostRecentIncorrectIndex,
} = processSlice.actions;
export default processSlice.reducer;
