import calculationReducer from "./slices/calculation";
import processReducer from "./slices/process";
import timerReducer from "./slices/timer";

const rootReducer = {
  process: processReducer,
  timer: timerReducer,
  calculation: calculationReducer,
};

export default rootReducer;
