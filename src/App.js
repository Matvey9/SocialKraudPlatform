import React from 'react';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Project from "./components/Project/Project";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Route path="/main" component={Body}/>
            <Route path="/project1" component={Project }/>
                {/*<Project description='Description' img="http://dorinfo.ru/upload/iblock/84c/otremontirovana_doroga_k_selu_dvortsovskoe_ot_trassy_r_217_na_stavropole_dorogi_rossii.jpg"/>*/}
                {/*<Project description='Description' img="https://avatars.mds.yandex.net/get-altay/1077949/2a00000168a0a4d091e7c69ff1f38c379546/XXL"/>*/}

        </div>
        </BrowserRouter>
    );
}

export default App;
