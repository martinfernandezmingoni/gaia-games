import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="item">
            <img src={product.img} width="200px" alt={product.title}/>
            <article>
                <h2>{product.title}</h2>
                <div className="info-price">
                    <h5>${product.price}</h5>
                </div>
            </article>
            <Link to={`/detail/${product.id}`}><p>Detalle</p></Link>
        </div>
    )
}

export default Item