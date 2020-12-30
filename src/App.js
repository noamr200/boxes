import React from 'react';
import RandomBoxColor from './RandomBoxColor';
import "./App.css";
function App() {
  const [showBox, setShowBox] = React.useState(true);
  const [msIntervalInput, setMSIntervalInput] = React.useState(500);
  const [msIntervalToSend, setMSIntervalToSend] = React.useState(500);


  return (
    <div>
      {showBox ? <RandomBoxColor colorChangeInterval={msIntervalToSend}/> : null}
      <button onClick={e => setShowBox(!showBox)}>Toggle Box</button>
      <div>
      <label>Interval: </label>
      <input type="number" value={msIntervalInput} 
        onChange={e => setMSIntervalInput(e.target.valueAsNumber)}/>
      <button onClick={() => setMSIntervalToSend(msIntervalInput)}>
        Udpate Interval
      </button>
      </div>
    </div>
  )
}


export default App;