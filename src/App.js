import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Momenting from './components/MomentingIndex/Momenting';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Test from './components/Test/Test';

//바디 전체 색상 변경
const GlobalStyle = createGlobalStyle`
  body {
    background: #f0f2f5;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Momenting} />
          <Route path="/home" exact component={Home} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
