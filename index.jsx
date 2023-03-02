import * as React from "react";
import ReactDOM from "react-dom";
import { useTime } from "./useTime";
import { useUser } from "./useUser";
//use the time hook
function Timer() {
  const time = useTime();

  return <div>{time.toLocaleString()}</div>;
}

//App, click button to hide Timer, check for console.log showing that we cleaned up the hook
function App() {
  const [showTime, setShowTime] = React.useState(true);
  const [userName, setUserName] = React.useState("bob");
  const currentUser = useUser(userName);

  return (
    <div>
      <article>
        <h4>Current time</h4>

        {showTime && <Timer />}
        <button
          onClick={() => {
            setShowTime(!showTime);
          }}
        >
          Toggle time
        </button>
      </article>
      <article>
        <h4>Select user</h4>
        <select onChange={(event) => setUserName(event.target.value)}>
          <option>bob</option>
          <option>alice</option>
          <option>alfred (does not exist)</option>
        </select>
        <pre>{JSON.stringify(currentUser, null, 4)}</pre>
      </article>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
