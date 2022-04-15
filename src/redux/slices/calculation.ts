import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculationState {
  wpm: number;
  accuracy: number;
}

const initialState: CalculationState = {
  wpm: 0,
  accuracy: 0,
};

const calculationSlice = createSlice({
  name: "calculation",
  initialState,
  reducers: {
    setWPM(state, action: PayloadAction<number>) {
      state.wpm = action.payload;
    },
    setAccuracy(state, action: PayloadAction<number>) {
      state.accuracy = action.payload;
    },
  },
});

export const { setAccuracy, setWPM } = calculationSlice.actions;
export default calculationSlice.reducer;
