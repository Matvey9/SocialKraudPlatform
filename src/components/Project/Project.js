import React from 'react';
import c from './Project.module.css';

function Project(props) {
    let moneyRaised = props.stateMoney[0].moneyRaised.map(function (item) {
        return(
            <div key={item.id}>
                <p>{item.name} - {item.sum}$</p>
            </div>
        )
    });

    return (
        <div className={c.project_wrapper}>
            <img src={props.img} align="left" width='500' height='400'/>
            <h2>{props.headline}</h2>
            <p>{props.description}</p>
            <p>{props.stateMoney[1].moneyRaisedSum} dollars out of {props.stateMoney[2].moneyTotal} raised</p>
            <input placeholder={"name"}/> <input placeholder={"sum"}/>
            <button>DONATE</button>
            {moneyRaised}
        </div>

    );
}

export default Project;