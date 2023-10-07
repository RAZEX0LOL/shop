import React from "react";

export default function ShowFullItem(props) {
    return (
        <div className={'full-item'}>
            <div>
                <img src={"./images/" + props.item.img} alt={"Error"} onClick={() => props.onShowItem(props.item)} />
                <h2>{props.item.title}</h2>
                <p>{props.item.desc}</p>
                <b>{props.item.price}₽</b>
                <div className={'add-to-card'} onClick={() => props.onAdd(props.item)}>+</div>
            </div>
        </div>
    );
}
