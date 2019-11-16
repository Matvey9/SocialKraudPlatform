import React from 'react';
import c from './ProjectTitle.module.css';

function ProjectTitle(props) {
    return (
        <div><a href={"project" + props.idProject}><img width="400" height='300' src={props.img}/></a>{props.headline}</div>
    )
}

export default ProjectTitle;