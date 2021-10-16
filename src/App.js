import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Momenting from './components/MomentingIndex/Momenting';
import Home from './components/Home/Home';
import Test from './components/Test/Test';

function App() {
  dayjs.locale('ko');
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Momenting} />
          <Route path="/home" exact component={Home} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
