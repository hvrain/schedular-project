
import { useState } from 'react';
import * as components from "./components";
import TodaySchedule from './components/TodaySchedule';
import { getComponent, pushComponentModules } from '../core/dynamicComponent';
import './MySchedulePage.scss';

export default function MySchedulePage({ _uids }) {
  // _uids 배열을 통해 uid별로 items을 api로 호출
  const [items, setItems] = useState(getTemporary());
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


function getTemporary() {
  return [
    {
      type: 'TodaySchedule',
      props: {
        title: '오늘 남은 일정',
        body: [
          {
            start: 1320,
            end: new Date(2022, 8, 26, 6, 0),
            title: '수면',
            body: '6시에 꼭 일어나자.',
          },
          {
            start: 480,
            end: new Date(2022, 8, 26, 9, 0),
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
            start: 1320,
            end: 360,
            title: '수면',
            body: '6시에 꼭 일어나자.',
          },
          {
            start: 480,
            end: 540,
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
            start: 1320,
            end: 360,
            title: '수면',
            body: '6시에 꼭 일어나자.',
          },
          {
            start: 480,
            end: 540,
            title: '출근',
            body: '지각하지말고 9시까지 출근',
          },
        ]
      }
    }
  ]
}