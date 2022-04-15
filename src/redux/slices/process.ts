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
    endProcess(state) {
      state.started = false;
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
  },
});

export const {
  setLoaded,
  incrementCurrentCharIndex,
  decrementCurrentCharIndex,
  updateCurrentBlock,
  startProcess,
  endProcess,
  updateTimeStarted,
  updateTimeEnded,
  incrementIncorrectChars,
  setIncorrectIndexes,
  addIncorrectIndex,
} = processSlice.actions;
export default processSlice.reducer;
