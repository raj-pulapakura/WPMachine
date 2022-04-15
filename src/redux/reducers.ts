import calculationReducer from "./slices/calculation";
import processReducer from "./slices/process";

const rootReducer = {
  process: processReducer,
  calculation: calculationReducer,
};

export default rootReducer;
