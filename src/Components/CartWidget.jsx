import './style.css';
import { useContext, useState } from 'react';
import { contexto } from './CustomProvider';
import { Offcanvas} from 'react-bootstrap';





export default function CartWidget (){
    const icono = 'https://res.cloudinary.com/dmthbi3ny/image/upload/v1675636151/proyecto%20Reactjs/carrito_gfykkr.png' ;
    const {cantidad} = useContext (contexto);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)

    return (
        <>
        
            <div onClick={handleShow} className='trolley'>
                <img className='icon' src={icono} alt="Carrito" />
                <span className="number">{cantidad}</span>
            </div>
        
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Hola</p>
            </Offcanvas.Body>
        </Offcanvas>
        
        </>
    );
}