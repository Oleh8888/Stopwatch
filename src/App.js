import './App.css';
import { useState,useRef } from 'react';
import Flexbox from 'flexbox-react';
import Time from './components/Time/Time'


function Stopwatch() {
const [timer, setTimer ] = useState(0);
const [timerOn, setTimerOn] = useState(false);
const increment = useRef(null);

const startTimer = () => {
    setTimerOn(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

const stopTimer  = () => {
  clearInterval(increment.current);
  setTimer(0);
}

  const resetTimer = () => {
    clearInterval(increment.current);
    setTimerOn(false);
    setTimer(0);
    startTimer();
  };

  const waitTimer = () => {
    clearInterval(increment.current);
    setTimerOn(false);
  };

  return (
    <div className="Stopwatch">
      <header className="Stopwatch-header">
        <Time timer={timer}/>
      <div>
        <Flexbox flexDirection="row" justifyContent="center">
          {!timerOn ? <button onClick={startTimer}>Start</button>
            : <button onClick={stopTimer}>Stop</button>
          }
           <button onDoubleClick={waitTimer}>Wait</button>
          <button onClick={resetTimer} >Reset</button>
          </Flexbox>
      </div>
      </header>
    </div>
  );
}

export default Stopwatch;
