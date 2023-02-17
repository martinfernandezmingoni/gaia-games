import './style.css';
import { useContext, useState } from 'react';
import { context } from '../Context/CustomProvider';
import { Offcanvas} from 'react-bootstrap';
import Cart from "../Cart/Cart"





export default function CartWidget (){
    const icono = 'https://res.cloudinary.com/dmthbi3ny/image/upload/v1675636151/proyecto%20Reactjs/carrito_gfykkr.png' ;
    const {cartQuantity, getItemQuantity} = useContext (context);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)
    const [cartItems, setCartItems] = useState([])
   


    return (
        <>
        
            <div onClick={handleShow} className='trolley'>
                <img className='icon' src={icono} alt="Carrito" />
                <span className="number">{cartQuantity}</span>
            </div>
        
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Cart cartItems = {cartItems} />
            </Offcanvas.Body>
        </Offcanvas>
        
        </>
    );
}