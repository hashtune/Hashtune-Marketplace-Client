import {useState, useEffect} from 'react';

interface CountdownProps {
    liveAt?: Date,
}
const timeFormat = "DD MM YYYY hh:mm:ss"


const moment = require('moment')

const Countdown = (props: CountdownProps) => {
    let ending = props.liveAt && new Date(props.liveAt.getHours() + 24)
    let difference =  props.liveAt && ending && +ending - +props.liveAt;

    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [intervalState, setIntervalState] = useState(setInterval(()=>{}));
    const update = () => {
        // const { timeTillDate, timeFormat } = props;
        const then= moment(difference, timeFormat, true);
        const now = moment();
        const countdown = moment(then - now);
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');
        
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
    }

    useEffect(()=>{
        setIntervalState( setInterval(() => {
            update();
        }, 1000)
    )}, [])

    useEffect(()=> {
        return()=>{
            clearInterval()}
    }, [])
    
    return (
        <div data-cy= "cont-main-countdown">
            <h1>Auction ending in</h1>
            <div data-cy="cont-countdown">
                <div data-cy="countdown-hours">
                    {hours}
                    <span>hours</span>
                </div>
                <div data-cy="countdown-minutes">
                    {minutes}
                    <span>minutes</span>
                </div>
                <div data-cy="countdown-seconds">
                    {seconds}
                <span>seconds</span>
            </div>
        </div>
    </div>
    );
}

export default Countdown

