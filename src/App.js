import React from 'react';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Project from "./components/Project/Project";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    let projectsElements = props.state.projectsData.map(function (project) {
        return (
            <div key={project.idProject}>
                <Route exact strict path={"/project" + project.idProject}
                       render={() => <Project idProject={project.idProject} description={project.desc} img={project.img}
                                              headline={project.headline}
                                              stateMoney={project.money} dispatch={props.dispatch}/>}/>
            </div>
        )
    });
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                {/*Исправить в боди не должна идти вся бесполезная ему дата!*/}
                <Route exact strict path="/" render={() => <Body data={props.state.projectsData}/>}/>
                {projectsElements}
            </div>
        </BrowserRouter>
    );
}

export default App;
