import ViewCounter from "../viewCounter";

import { useCounter } from "../../hooks/useCounter";

const AppCounter = () => {
  const counter = useCounter({ initialValue: 0 });

  return (
    <div className="d-flex w-full vh-100  justify-content-center align-items-center border">
      <div className="border d-flex justity-content-center align-items-center gap-4 flex-column p-5 rounded shadow">
        <ViewCounter counter={counter.counter} />

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            onClick={() => counter.increaseCounter(2)}
            className="btn btn-outline-primary"
          >
            increase
          </button>
          <button
            type="button"
            onClick={() => counter.decreaseCounter(5)}
            className="btn btn-outline-primary"
          >
            decrease
          </button>
          <button
            type="button"
            onClick={() => counter.resetCounter()}
            className="btn btn-outline-primary"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCounter;
