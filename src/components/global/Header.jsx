import React, {useState} from "react";
import {GiArena} from "react-icons/gi";
import Order from "./Order";


const showOrders=(props)=>{
    let sum=0;
    props.orders.forEach(el=>sum+=Number.parseFloat(el.price))
    return(
        <div>
            {props.orders.map(el=>(
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className={'sum'}>Итого: {new Intl.NumberFormat().format(sum)}₽</p>
            <div className={'buy-button'}>Перейти к оплате</div>
        </div>
    )
}

const showNothing = () =>{
    return (<div className={'empty'}>
        <h2>Корзина пуста</h2>
    </div>)
}

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className={'logo'}>Kapibara Game Shop</span>
                <ul className={'nav'}>
                    <li>Личный кабинет</li>
                </ul>
                <GiArena onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
                {cartOpen && (
                    <div className={'shop-cart'}>
                        {props.orders.length>0?
                            showOrders(props) :showNothing()}
                    </div>
                )}
            </div>
            <div className={'presentation'}></div>
        </header>
    )
}

