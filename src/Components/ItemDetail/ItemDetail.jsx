import React, {useState, useContext} from 'react';
import './style.css';
import Counter from '../Counter/Counter';
import { context } from '../Context/CustomProvider'; 

const ItemDetail = ({item}) => {
    const discount = item.price - (item.price * item.off) / 100;

    const [confirm, setConfirm] = useState(false)
    const {addProduct} = useContext(context)
    const [quantityLocal, setQuantityLocal] = useState('')

    const handleAdd = (quantity) => {
        setQuantityLocal(quantity)
        setConfirm(true)
    }

    const getProduct = () => {
        addProduct(item, quantityLocal)
    }

    const cuotas = discount / 12;
    return (
        <div className="container-page1 container-detail1">
            <img className='imgDetail'
                src={item.img}
                alt="detail"
            />
            <article>
                <h1>{item.title}</h1>
                <h4>{item.off}% OFF</h4>
                <section>
                    <h3>$ {discount}.-</h3>
                    <h5>$ {item.price}.-</h5>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                    <p className='desc'>{item.desc}</p>
                <hr />
                <h3 className="cuotas">
                    Hasta <strong>12</strong> cuotas sin interes de
                    <strong> $ {cuotas.toFixed(2)}</strong>
                </h3>
                {/* <button className="metodos-pagos">
                    Conocé todos los métodos de pagos
                </button> */}
                <hr />
                <Counter stock={item.stock}/>
              
            </article>
        </div>
    );
};

export default ItemDetail;
