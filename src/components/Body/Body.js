import React from 'react';
import c from './Body.module.css';
import ProjectTitle from "./ProjectTitle/ProjectTitle";

function Body(props) {
    let elementsTitle = props.data.map(title => <ProjectTitle idProject={title.idProject} img={title.img} headline={title.headline}/>);
    return (
    <body className={c.body_wrapper}>
    {elementsTitle[0]}
    {elementsTitle[1]}
    </body>
    )
}

export default Body;