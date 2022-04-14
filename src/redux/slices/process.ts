import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProcessState {
  currentCharIndex: number;
  currentBlock: string;
  started: boolean;
  timeStarted: number;
  timeEnded: number;
}

const initialState = {
  currentCharIndex: 0,
  currentBlock: "",
  started: false,
  timeStarted: 0,
  timeEnded: 0,
} as ProcessState;

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    incrementCurrentCharIndex(state) {
      state.currentCharIndex++;
    },
    decrementCurrentCharIndex(state) {
      state.currentCharIndex--;
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
  },
});

export const {
  incrementCurrentCharIndex,
  decrementCurrentCharIndex,
  updateCurrentBlock,
  startProcess,
  endProcess,
  updateTimeStarted,
  updateTimeEnded,
} = processSlice.actions;
export default processSlice.reducer;
