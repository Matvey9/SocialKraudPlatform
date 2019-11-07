import React from 'react';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Project from "./components/Project/Project";

function App() {
    return (
        <div className='app-wrapper'>
          <Header/>
          {/*<Body/>*/}
          <Project/>

        </div>
    );
}

export default App;