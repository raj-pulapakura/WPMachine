import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProcessState {
  currentChar: string;
  currentBlock: string;
}

const initialState = { currentChar: "", currentBlock: "" } as ProcessState;

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    updateCurrentChar(state, action: PayloadAction<string>) {
      state.currentChar = action.payload;
    },
    updateCurrentBlock(state, action: PayloadAction<string>) {
      state.currentBlock = action.payload;
    },
  },
});

export const { updateCurrentChar, updateCurrentBlock } = processSlice.actions;
export default processSlice.reducer;
