import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cleanseArray } from "../../utils/cleanseArray";

interface ProcessState {
  loaded: boolean;
  currentCharIndex: number;
  currentBlock: string;
  started: boolean;
  timeStarted: number;
  timeEnded: number;
  incorrectIndexes: number[];
  incorrectChars: number;
  ended: boolean;
}

const initialState = {
  loaded: false,
  currentCharIndex: 0,
  currentBlock: "",
  started: false,
  timeStarted: 0,
  timeEnded: 0,
  incorrectIndexes: [],
  incorrectChars: 0,
  ended: false,
} as ProcessState;

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    setLoaded(state) {
      state.loaded = true;
    },
    incrementCurrentCharIndex(state) {
      state.currentCharIndex++;
    },
    decrementCurrentCharIndex(state) {
      if (state.currentCharIndex > 0) {
        state.currentCharIndex--;
      }
    },
    updateCurrentBlock(state, action: PayloadAction<string>) {
      state.currentBlock = action.payload;
    },
    startProcess(state) {
      state.started = true;
    },
    updateTimeStarted(state, action: PayloadAction<number>) {
      state.timeStarted = action.payload;
    },
    updateTimeEnded(state, action: PayloadAction<number>) {
      state.timeEnded = action.payload;
    },
    incrementIncorrectChars(state) {
      state.incorrectChars++;
    },
    setIncorrectIndexes(state, action: PayloadAction<number[]>) {
      state.incorrectIndexes = cleanseArray(action.payload);
    },
    addIncorrectIndex(state, action: PayloadAction<number>) {
      state.incorrectIndexes.push(action.payload);
      state.incorrectIndexes = cleanseArray(state.incorrectIndexes);
    },
    setEnded(state) {
      state.ended = true;
    },
  },
});

export const {
  setLoaded,
  incrementCurrentCharIndex,
  decrementCurrentCharIndex,
  updateCurrentBlock,
  startProcess,
  updateTimeStarted,
  updateTimeEnded,
  incrementIncorrectChars,
  setIncorrectIndexes,
  addIncorrectIndex,
  setEnded,
} = processSlice.actions;
export default processSlice.reducer;
