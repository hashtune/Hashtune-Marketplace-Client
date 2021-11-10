import { useState, useEffect } from "react";
const moment = require("moment");
import styles from "./Hero.module.scss";
import { PAGES } from "../../../utils/constants/enum";

interface CountdownProps {
  liveAt?: Date;
  page?: string;
}
const timeFormat: string = "DD MM YYYY hh:mm:ss";

const Countdown = (props: CountdownProps) => {
  let ending = props.liveAt && new Date(props.liveAt.getHours() + 24);
  let difference = props.liveAt && ending && +ending - +props.liveAt;

  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalState, setIntervalState] = useState(setInterval(() => {}));
  const update = () => {
    // const { timeTillDate, timeFormat } = props;
    const then = moment(difference, timeFormat, true);
    const now = moment();
    const countdown = moment(then - now);
    const hours = countdown.format("HH");
    const minutes = countdown.format("mm");
    const seconds = countdown.format("ss");

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    setIntervalState(
      setInterval(() => {
        update();
      }, 1000)
    );
  }, []);

  useEffect(() => {
    return () => {
      clearInterval();
    };
  }, []);

  const [style, setStyle] = useState("countdown");

  useEffect(() => {
    if (props.page === PAGES.ARTWORK) {
      setStyle("countdown-artwork");
    }
  });

  return (
    <div className={styles["countdown_card"] + " " + style}>
      <h3 className={style + "__title"}>Auction ending in</h3>
      <div className={styles["countdown-data"] + " " + style + "__data"}>
        <div className={style + "__data--item"}>
          <h3>6 </h3>
          {/* className="h3>6 </h-title" {hours} */}
          <span>hours</span>
        </div>
        <div className={style + "__data--item"}>
          <h3>29</h3> {/* {minutes} */}
          <span>minutes</span>
        </div>
        <div className={style + "__data--item"}>
          <h3>24</h3> {/* {seconds} */}
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
