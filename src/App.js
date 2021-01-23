import './App.css';
import { useState} from 'react';
import Flexbox from 'flexbox-react';
import Time from './components/Time/Time'
import { interval} from "rxjs";
import { map } from "rxjs/operators";

const delay = 1000;

const App = () => {
const [timer, setTimer ] = useState(0);
const [timerOn, setTimerOn] = useState(false);
const [subscription, setSubscription] = useState("");


const startTimer = () => {
  setTimerOn(true)
  if (!subscription) {
    const timerSubscription = interval(delay)
      .pipe(map((v) => v + 1))
      .subscribe((v) => {
        setTimer(v + timer);
      });
    setSubscription(timerSubscription);
  }
  };

const stopTimer  = () => {
  subscription.unsubscribe();
  setTimer(0);
  setSubscription("");
  setTimerOn(false)
}

  const resetTimer = () => {
      subscription.unsubscribe();
      const timerSubscription = interval(delay).subscribe((v) => {
      setTimer(v);
    });
    setSubscription(timerSubscription);   
  };

  const waitTimer = () => {
    subscription.unsubscribe();
      setSubscription("");
      setTimerOn(false)
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

export default App;

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
