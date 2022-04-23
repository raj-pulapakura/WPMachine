import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculationState {
  wpm: number;
  accuracy: number;
  calculating: boolean;
}

const initialState: CalculationState = {
  wpm: 0,
  accuracy: 0,
  calculating: false,
};

const calculationSlice = createSlice({
  name: "calculation",
  initialState,
  reducers: {
    clearCalculationState(state) {
      state.wpm = 0;
      state.accuracy = 0;
      state.calculating = false;
    },
    setWPM(state, action: PayloadAction<number>) {
      state.wpm = action.payload;
    },
    setAccuracy(state, action: PayloadAction<number>) {
      state.accuracy = action.payload;
    },
    startCalculating(state) {
      state.calculating = true;
    },
    finishCalculating(state) {
      state.calculating = false;
    },
  },
});

export const {
  clearCalculationState,
  setAccuracy,
  setWPM,
  startCalculating,
  finishCalculating,
} = calculationSlice.actions;
export default calculationSlice.reducer;
