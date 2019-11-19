import React from 'react';
import c from './Project.module.css';
import {addDonateActionCreator} from "../../redux/projectReducer";


function Project(props) {
    let moneyRaised = props.stateMoney[0].moneyRaised.map(function (item) {
        return (
            <span className="item" key={item.id}>
                {item.name} - {item.sum}$
            </span>
        )
    });

    let newDonateName=React.createRef();
    let newDonateSum=React.createRef();
    let addDonate=() => {
        let name = newDonateName.current.value;
        let sum = newDonateSum.current.value;
        props.dispatch(addDonateActionCreator(name, sum, props.idProject));
        newDonateName.current.value="";
        newDonateSum.current.value="";
    };

    return (
        <div className={c.project_wrapper}>
            <img src={props.img} align="left" width='500' height='400'/>
            <h2>{props.headline}</h2>
            <p>{props.description}</p>
            <p>{props.stateMoney[1].moneyRaisedSum} dollars out of {props.stateMoney[2].moneyTotal} raised</p>
            <div>
                <input ref={newDonateName} placeholder={"name"}/> <input ref={newDonateSum} placeholder={"sum"}/>
                <button onClick={addDonate}>DONATE</button>
            </div>
            {moneyRaised}
        </div>

    );
}

export default Project;