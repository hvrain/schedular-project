
import { useState, useEffect, useRef } from 'react';
import './TodaySchedule.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function TodaySchedule(props) {
  const {title, body} = props;
  const [now, setNow] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeout = null;
    timeout = setTimeout(() => {
      setNow(new Date());
      setIsRunning(true);
    }, 60000 - now.getSeconds() * 1000 - now.getMilliseconds());
    return () => clearTimeout(timeout)
  })

  useInterval(() => {
    setNow(new Date())
  }, isRunning ? 60000 : null);


  
  return (
    <div className="today-schedule">
      <div className="header">
        <div className="title">{title}</div>
        <div className="remain">
          <div className="remain-things">{body.length}</div>
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <ul className="item-list">
        {body.map((item, index) => {
          return (
            <li className="item" key={`Today${index}`}>
              <div className="text">
                <div className="title">{item.title}</div>
                <div className="content">{item.body}</div>
              </div>
              <div className="subtext">
                <div className="time-remain">{timeRemaining(now, item.end).remainTime}</div>
                <div className="arrow">&gt;</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function timeRemaining(now, end) {
  // console.log(now.getMinutes(), now.getSeconds(), now.getMilliseconds());
  let remainHours = end.getHours() - now.getHours();
  let remainMinutes = end.getMinutes() - now.getMinutes();
  remainHours = remainMinutes < 0 ? remainHours - 1 : remainHours;
  remainMinutes = remainMinutes < 0 ? remainMinutes + 60 : remainMinutes;

  if (end.getTime() - now.getTime() <= 0) {
    return {
      state: 'red',
      remainTime: ``
    }
  }
  const remainTime = remainHours > 0
    ? `${remainHours}시간 ${remainMinutes}분 남음`
    : `${remainMinutes}분 남음`;
  
  return {
    state: 'yellow',
    remainTime,
  }
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}