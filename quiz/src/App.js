import logo from './logo.svg';
import './App.css';
import HomeComponent from "./components/HomeComponent"
import QuizComponent from "./components/QuizComponent"
import ResultComponent from "./components/ResultComponent"
import React from 'react';


function App() {
  return (
    <div className="App">
    {/* <React.Fragment> */}
        <HomeComponent/>
        <QuizComponent/>
        <ResultComponent/>
     {/* </React.Fragment> */}
    </div>
  );
}

export default App;
