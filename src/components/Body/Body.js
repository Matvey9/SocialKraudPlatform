import React from 'react';
import c from './Body.module.css';
import ProjectTitle from "./ProjectTitle/ProjectTitle";

function Body(props) {
    return (
    <body className={c.body_wrapper}>
    <ProjectTitle img={props.data[0].img} headline={props.data[0].headline}/>
    <ProjectTitle img={props.data[1].img}  headline={props.data[1].headline}/>
    </body>
    )
}

export default Body;