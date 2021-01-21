import React from 'react';

const Time = (props) => {
const { timer } = props; 
const seconds = `0${(timer % 60)}`.slice(-2)
const minute = `${Math.floor(timer / 60)}`
const minutes = `0${minute % 60}`.slice(-2)
const hours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
return (
        <div className="Stopwatch-display">
            {hours} : {minutes} : {seconds} 
        </div>
    );
}

export default Time