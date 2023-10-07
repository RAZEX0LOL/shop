import React from "react";
import { GiAbstract052 } from 'react-icons/gi';

export default function Order(props) {
    return (
        <div className={'item'}>
            <img src={"./images/" + props.item.img} alt={"Error"} />
            <h2>{props.item.title}</h2>
            <b>{props.item.price}₽</b>
            <GiAbstract052 className={'delete-icon'} onClick={() => props.onDelete(props.item.id)} />
        </div>
    );
}


