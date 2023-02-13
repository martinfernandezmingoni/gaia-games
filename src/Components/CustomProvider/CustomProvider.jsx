import { createContext, useState } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const CartProvider = ({ children }) =>{

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const addProduct = (producto, cantidad) => {
        
        producto.cantidad = cantidad
        setCarrito([producto])
        setTotal(producto.precio * cantidad)
        setCantidad(cantidad)
    }
    const removeProduct = () =>{}
    const emptyCart = () => {}
    const isInCart = () => {}
    const contextValue = {
        carrito,
        total,
        cantidad,
        addProduct,
    }
    return(
        <Provider value = {contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider