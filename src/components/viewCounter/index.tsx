import { memo } from "react";

import { ViewCounterProps } from "../../interfaces/ViewCounter.interface";

const ViewCounter = memo((Props: ViewCounterProps) => {
  return <div className="display-4">{Props.counter}</div>;
});

export default ViewCounter;
