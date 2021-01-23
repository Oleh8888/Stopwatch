import './App.css';
import { useState, useEffect} from 'react';
import Flexbox from 'flexbox-react';
import Time from './components/Time/Time'
import { interval, Observable } from "rxjs";




function Stopwatch() {
const [timer, setTimer ] = useState(0);
const [stopIncrement, setStopIncrement] = useState(0);
const [timerOn, setTimerOn] = useState(false);;
let increment = null;


let timerStream$ = new Observable(observer => {
    const interval = setInterval(() => observer.next(timer =>timer +1),1000)
    return () => clearInterval(interval)
});

const subscription = timerStream$.subscribe(val => console.log(val))

const startTimer = () => {
  setTimerOn(true)
  timerStream$.subscribe(timer => setTimer(timer))
  };

const stopTimer  = () => {
  subscription.unsubscribe();
}

  const resetTimer = () => {
    clearInterval(timerStream$.subscribe(0));
    setTimerOn(false);
    setTimer(0);
    startTimer();
  };

  const waitTimer = () => {
    clearInterval(timerStream$.subscribe());
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

// import './App.css';
// import { useState,useRef } from 'react';
// import Flexbox from 'flexbox-react';
// import Time from './components/Time/Time'




// function Stopwatch() {
// const [timer, setTimer ] = useState(0);
// const [timerOn, setTimerOn] = useState(false);
// const increment = useRef(null);

// const startTimer = () => {
//     setTimerOn(true)
//     increment.current = setInterval(() => {
//       setTimer((timer) => timer + 1)
//     }, 1000)
//   }

// const stopTimer  = () => {
//   clearInterval(increment.current);
//   setTimer(0);
// }

//   const resetTimer = () => {
//     clearInterval(increment.current);
//     setTimerOn(false);
//     setTimer(0);
//     startTimer();
//   };

  // const waitTimer = () => {
  //   clearInterval(increment.current);
  //   setTimerOn(false);
  // };

//   return (
//     <div className="Stopwatch">
//       <header className="Stopwatch-header">
//         <Time timer={timer}/>
//       <div>
//         <Flexbox flexDirection="row" justifyContent="center">
//           {!timerOn ? <button onClick={startTimer}>Start</button>
//             : <button onClick={stopTimer}>Stop</button>
//           }
//            <button onDoubleClick={waitTimer}>Wait</button>
//           <button onClick={resetTimer} >Reset</button>
//           </Flexbox>
//       </div>
//       </header>
//     </div>
//   );
// }

// export default Stopwatch;
