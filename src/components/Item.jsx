import React from "react";



function Item(props) {
    return (
        <div className={'item'}>
            <img src={"./images/" + props.item.img} alt={"Error"} onClick={() => props.onShowItem(props.item)} />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}₽</b>
            <div className={'add-to-card'} onClick={() => props.onAdd(props.item)}>+</div>
        </div>
    );
}
export { Item };


