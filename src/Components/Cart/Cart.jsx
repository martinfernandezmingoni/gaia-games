import React from "react"


export default function Cart (props){
    const  {cartItems} = props
    return (
        <aside>
            <h1>Carrito</h1>
            <div>{cartItems.length === 0 && <div>El Carrito esta Vacio</div>}</div>
        </aside>
    )
}