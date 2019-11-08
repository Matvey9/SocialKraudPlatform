import React from 'react';
import c from './Project.module.css';

function Project(props) {
    return (
        <div className={c.project_wrapper}>
            {/*<img src={props.img} align="left" width='500' height='400'/>*/}
            {/*<h2>{props.description}</h2>*/}
            <img src="http://dorinfo.ru/upload/iblock/84c/otremontirovana_doroga_k_selu_dvortsovskoe_ot_trassy_r_217_na_stavropole_dorogi_rossii.jpg" align="left" width='500' height='400'/>
            <h2>Description</h2>
            <button>Donate</button>
        </div>
);
}
export default Project;