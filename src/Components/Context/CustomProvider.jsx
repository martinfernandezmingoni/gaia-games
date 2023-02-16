import { createContext, useState } from "react"


export const context = createContext();
const {Provider} = context;

const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [totalPay, setTotalPay] = useState(0)
    const [orderDetail, setOrderDetail] = useState()
    let cartReload = [...cart]
    let reloadQuantity
    let reloadTotalPay

    const addProduct = (product, quantityLocal) => {
        reloadQuantity = quantity + quantityLocal
        reloadTotalPay = totalPay + (product.price * quantityLocal)
    const existing = cartReload.find((p) => p.id === product.id)
    
        if (existing) {
        const index = cartReload.findIndex(e => e === existing)
        product.quantity = existing.quantity + quantityLocal
        cartReload[index] = {...product}
    }else {
        product.quantity = quantityLocal
        cartReload.push(product)
    }
        setCart(cartReload)
        setTotal(product.price)
        setQuantity(reloadQuantity)
        setTotalPay(reloadTotalPay)
    }


    const contextValue = {
        cart,
        total,
        quantity,
        addProduct,
    }
    return(
        <Provider value = {contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider