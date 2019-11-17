import React from 'react';
import c from './Body.module.css';
import ProjectTitle from "./ProjectTitle/ProjectTitle";
import Project from "../Project/Project";

function Body(props) {
    let elementsTitle = props.data.map(function (item) {
        return(
            <div key={item.idProject}>
                <ProjectTitle idProject={item.idProject} img={item.img} headline={item.headline}/>
            </div>
        )
    });
    return (
    <body className={c.body_wrapper}>
    {elementsTitle}
    </body>
    )
}

export default Body;