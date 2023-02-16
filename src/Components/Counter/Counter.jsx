import {useState} from 'react';
import './style.css'

const Counter = ({stock, handleAdd}) => {
    const [quantity, setQuantity] = useState(0);

    const sumar = () =>{
        if (quantity < stock){
            setQuantity(quantity + 1);
        }
    };
     const restar = () => {
        if (quantity > 1){
            setQuantity(quantity -1);
        }
     };

     const confirm = () => {
        handleAdd(quantity)
     }
     return(
        <div className='container-counter'>
            <div  className='counter'>
                <button onClick={restar}>-</button>
                <p className='qantity'>{quantity}</p>
                <button disabled={quantity === stock} onClick={sumar}>+</button>
                <button className='add-to-cart' onClick={confirm}>Confirmar Productos</button>
                
            </div>
            
        </div>
     )
}

export default Counter;
