import React from 'react';
import c from './Body.module.css';

function Body() {
    return (
    <body className={c.body_wrapper}>
    <div><a href="project1"><img width='400' height='300' src='http://dorinfo.ru/upload/iblock/84c/otremontirovana_doroga_k_selu_dvortsovskoe_ot_trassy_r_217_na_stavropole_dorogi_rossii.jpg'/></a></div>
    <div><a href="project2"><img width='400' height='300' src='https://avatars.mds.yandex.net/get-altay/1077949/2a00000168a0a4d091e7c69ff1f38c379546/XXL'/></a></div>
    <div></div>
    <div></div>
    </body>
    )
}

export default Body;