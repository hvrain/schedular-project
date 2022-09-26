import React, { useState } from 'react';
import './App.scss';
import MySchedulePage from './mySchedulePage/MySchedulePage';

function App() {
  const [_uids, set_uids] = useState(['qwerty123']);

  return (
    <div className="App">
      <header>
        <div className="title">My Schedular</div>
      </header>
      <main>
        <MySchedulePage _uids={_uids} />
      </main>
    </div>
  );
} 

export default App;
