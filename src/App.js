import React from 'react';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Project from "./components/Project/Project";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    let projectsElements = props.state.projectsData.map(project => <Project description={project.desc} img={project.img}
                                                                            headline={project.headline} stateMoney={project.money}/>);
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                {/*Исправить в боди не должна идти вся бесполезная ему дата!*/}
                <Route exact strict path="/" render={() => <Body data={props.state.projectsData}/>}/>
                <Route exact strict path="/project1" render={() => projectsElements[0]}/>
                <Route exact strict path="/project2" render={() => projectsElements[1]}/>
                <Route exact strict path="/project3" render={() => projectsElements[2]}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
