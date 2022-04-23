import { Dispatch } from "@reduxjs/toolkit";
import { activateShift } from "../redux/slices/process";
import store from "../redux/store";

export function handleShift(dispatch: Dispatch<any>) {
  if (!store.getState().process.shiftActivated) {
    dispatch(activateShift());
  }
}
