import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimerState {
  timeStarted: number;
  timeEnded: number;
  intervalId: NodeJS.Timer | undefined;
}

const initialState: TimerState = {
  timeStarted: 0,
  timeEnded: 0,
  intervalId: undefined,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTimeStarted(state, action: PayloadAction<number>) {
      state.timeStarted = action.payload;
    },
    updateTimeEnded(state, action: PayloadAction<number>) {
      state.timeEnded = action.payload;
    },
    setIntervalId(state, action: PayloadAction<NodeJS.Timer>) {
      state.intervalId = action.payload;
    },
    clearState(state) {
      state.timeStarted = 0;
      state.timeEnded = 0;
      state.intervalId = undefined;
    },
  },
});

export const { updateTimeEnded, updateTimeStarted, setIntervalId } =
  timerSlice.actions;

export default timerSlice.reducer;
