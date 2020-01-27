import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import {Auth,Home} from './views';
function App() {
  return (
    <Router>
      <Auth path={'/'}/>
      <Home path={'/home'}/>
    </Router>
  );
}

export default App;
