import { createContext, useState } from "react"


export const context = createContext();
const {Provider} = context;

const CartProvider = ({ children }) =>{

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0 )
    const openCart = () => setIsOpen (true)
    const closeCart = () => setIsOpen(false)
    function getItemQuantity(id){
        return cartItems.find(item =>item.id === id)?.quantity || 0}
        
        function increaseQuantity(id){
            setCartItems(currItems => {
                if (currItems.find(item => item.id === id) == null){
                    return [...currItems, {id, quantity: 1}]
                }else {
                    return currItems.map(item => {
                        if (item.id === id){
                            return {...item, quantity: item.quantity + 1}
                        }else{
                            return item
                        }
                    })
                }
            })
        }
        function decreaseQuantity(id){
            setCartItems(currItems => {
                if (currItems.find(item => item.id === id)?.quantity === 1){
                    return currItems.filter(item => item.id !== id)
                }else {
                    return currItems.map(item => {
                        if (item.id === id){
                            return {...item, quantity: item.quantity - 1}
                        }else{
                            return item
                        }
                    })
                }
            })
        }
        function removeFromCart(id){
            setCartItems(currItems => {
                return currItems.filter(item => item.id !== id)
            })
        }
const contextValue = {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    openCart,
    closeCart,
    cartItems,
    cartQuantity
}

    return(
        <Provider value = {contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider