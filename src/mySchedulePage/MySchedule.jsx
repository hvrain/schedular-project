
import { useState } from 'react';
import * as components from "./components";
import TodaySchedule from './components/TodaySchedule';
import { getComponent, pushComponentModules } from './../core/dynamicComponent';
import './MySchedule.scss';

export default function MySchedule({ _uids }) {
  // _uids 배열을 통해 uid별로 items을 api로 호출
  const [items, setItems] = useState([
    {
      type: 'TodaySchedule',
      props: {
        title: '오늘 일정',
        body: [
          {
            startTime: 1320,
            endTime: 360,
            title: '수면',
            body: '6시에 꼭 일어나자.',
          },
          {
            startTime: 480,
            endTime: 540,
            title: '출근',
            body: '지각하지말고 9시까지 출근',
          },
        ]
      }
    },
    {
      type: 'MonthSchedule',
      props: {
        title: '이번달 계획',
        body: [
          {
            startTime: 1320,
            endTime: 360,
            title: '수면',
            body: '6시에 꼭 일어나자.',
          },
          {
            startTime: 480,
            endTime: 540,
            title: '출근',
            body: '지각하지말고 9시까지 출근',
          },
        ]
      }
    }
  ]);
  // pushComponentModules(components);
  pushComponentModules({ ...components });

  return (
    <ul className='my-schedule-list'>
      {items.map(({ type, props }, index) => (
        <li className='my-schedule-item' key={`mySchedule${index}`}>
          {getComponent(type, props)}
        </li>
      ))}
    </ul>
  )
}