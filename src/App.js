import React from 'react';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Project from "./components/Project/Project";
import {BrowserRouter, Route} from "react-router-dom";


function App() {

    let projectsData = [
        {
            img: "http://dorinfo.ru/upload/iblock/84c/otremontirovana_doroga_k_selu_dvortsovskoe_ot_trassy_r_217_na_stavropole_dorogi_rossii.jpg",
            desc: "Description", headline: "Repair road"
        },
        {
            img: "https://avatars.mds.yandex.net/get-altay/1077949/2a00000168a0a4d091e7c69ff1f38c379546/XXL",
            desc: "Description", headline: "Build hospital"
        }
    ];

    let projectsElements = projectsData.map(project => <Project description={project.desc} img={project.img} headline={project.headline}/>);


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Route path="/main" render={() => <Body data={projectsData}/>}/>
                <Route path="/project1" render={() =>projectsElements[0] }/>
                <Route path="/project2" render={() =>projectsElements[1]}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
