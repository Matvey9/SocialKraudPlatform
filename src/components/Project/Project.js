import React from 'react';
import c from './Project.module.css';

function Project(props) {
    return (
        <div className={c.project_wrapper}>
            {/*<img src={props.img} align="left" width='500' height='400'/>*/}
            {/*<h2>{props.description}</h2>*/}
            <img src={props.img} align="left" width='500' height='400'/>
            <h2>{props.headline}</h2>
            <p>{props.description}</p>
            <button>Donate</button>
        </div>
);
}
export default Project;