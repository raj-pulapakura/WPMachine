import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cleanseArray } from "../../utils/cleanseArray";

interface ProcessState {
  loaded: boolean;
  currentCharIndex: number;
  currentBlock: string;
  started: boolean;
  incorrectIndexes: number[];
  incorrectChars: number;
  shiftActivated: boolean;
  capsLockActivated: boolean;
}

const initialState: ProcessState = {
  loaded: false,
  currentCharIndex: 0,
  currentBlock: "",
  started: false,
  incorrectIndexes: [],
  incorrectChars: 0,
  shiftActivated: false,
  capsLockActivated: false,
};

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    clearProcessState(state) {
      state.loaded = true;
      state.currentCharIndex = 0;
      state.currentBlock = "";
      state.started = false;
      state.incorrectIndexes = [];
      state.incorrectChars = 0;
    },
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
    activateShift(state) {
      state.shiftActivated = true;
    },
    deactivateShift(state) {
      state.shiftActivated = false;
    },
    activateCapsLock(state) {
      state.capsLockActivated = true;
    },
    deactivateCapsLock(state) {
      state.capsLockActivated = false;
    },
  },
});

export const {
  clearProcessState,
  setLoaded,
  incrementCurrentCharIndex,
  decrementCurrentCharIndex,
  updateCurrentBlock,
  startProcess,
  endProcess,
  incrementIncorrectChars,
  setIncorrectIndexes,
  addIncorrectIndex,
  activateShift,
  deactivateShift,
  activateCapsLock,
  deactivateCapsLock,
} = processSlice.actions;
export default processSlice.reducer;
