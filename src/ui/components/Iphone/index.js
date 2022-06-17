import React from 'react';

import { getAll } from "../../services/iphone.service";

const Iphone = () => {

    const { data } = getAll();

    const iphoneList = data.map((iphone) => (
        <li>{ iphone.name }</li>
    ));

    return(
        <div>
            <h1>Iphone List Wink Wink.</h1>
            { iphoneList }
        </div>
    )
};

export default Iphone;
