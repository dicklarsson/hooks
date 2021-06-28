import React from "react";
import ReactDOM from "react-dom";
import { useTime } from "./useTime";

//use the time hook
function Timer() {
  const time = useTime();
  return <div>{time.toLocaleString()}</div>;
}

//App, click button to hide Timer, check for console.log showing that we cleaned up the hook
function App() {
  const [showTime, setShowTime] = React.useState(true);
  return (
    <div>
      {showTime && <Timer />}
      <button
        onClick={() => {
          setShowTime(!showTime);
        }}
      >
        Toggla tiden
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
