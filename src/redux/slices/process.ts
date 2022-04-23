import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { textChangeRangeIsUnchanged } from "typescript";

interface ProcessState {
  testText: string;
  testTextSplit: string[];
  currentWordIndex: number;
  currentCharacterIndex: number;
  loaded: boolean;
  spaceRequired: boolean;
}

const initialState: ProcessState = {
  testText: "",
  testTextSplit: [],
  currentWordIndex: 0,
  currentCharacterIndex: 0,
  loaded: false,
  spaceRequired: false,
};

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
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
  },
});

export const {
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
} = processSlice.actions;
export default processSlice.reducer;
