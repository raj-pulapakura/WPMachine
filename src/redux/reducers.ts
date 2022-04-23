import processReducer from "./slices/process";
import timerReducer from "./slices/timer";

const rootReducer = {
  process: processReducer,
  timer: timerReducer,
};

export default rootReducer;
