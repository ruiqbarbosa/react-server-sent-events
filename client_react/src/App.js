import React, { useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    function updateTimeList(time) {
      setData(oldArray => [
        ...oldArray,
        time + " (" + sum(oldArray.length, 1) + ")"
      ]);
    }

    function eventSource() {
      let eventSource = new EventSource(
        "http://localhost:3001/getTime"
      );
      eventSource.onmessage = e => updateTimeList(JSON.parse(e.data));
    }

    eventSource();
  }, []);

  const sum = (x, y) => {
    return x + y;
  };
  
  return (
    <div className="App">
      <header className="App-header">
		<table className="table table-hover">
		  <thead className="thead-dark">
			<tr>
			  <th>Time</th>
			</tr>
		  </thead>
		  <tbody>
			{data.map(p => (
			  <tr key={p}>
				<td>{p}</td>
			  </tr>
			))}
		  </tbody>
		</table>
      </header>
    </div>
  );
}

export default App;
