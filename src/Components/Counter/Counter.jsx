import { useContext } from 'react';
import './style.css'
import {context} from "../Context/CustomProvider"
import { Button } from 'react-bootstrap';

function Counter ({id, stock}) {
    const {getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart} = useContext(context) 
    const quantity = getItemQuantity
    

     return(
        <div className='container-counter'>
            <div  className='counter'>
                <Button onClick={decreaseQuantity}>-</Button>
                <span className='fs-3'>{quantity}</span>
                <Button disabled={quantity === stock} onClick={increaseQuantity}>+</Button>
                <Button variant='danger' size='sm' onClick={removeFromCart}>Confirmar Productos</Button>
            </div>
            
        </div>
     )
}

export default Counter;
