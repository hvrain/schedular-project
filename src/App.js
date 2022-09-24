import React, { useState } from 'react';
import './App.css';
import MySchedule from './mySchedulePage/MySchedule';

function App() {
  const [_uids, set_uids] = useState(['qwerty123']);

  return (
    <div className="App">
      <header>
        <div>My Schedular</div>
      </header>
      <main>
        <MySchedule _uids={_uids} />
      </main>
    </div>
  );
}

export default App;
