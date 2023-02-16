import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { productsCollection } from '../../firebaseConfig';
import { toast } from 'react-toastify';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const [load, setLoad] = useState(true)

    const {idNumb} = useParams()

    useEffect(()=>{
        const getProduct = () => {
            const docReference = doc(productsCollection, idNumb )
            const ask = getDoc(docReference)
            ask
            .then((result) => {
                const product = result.data()
                setItem(product)
                setLoad(false)
            })
            .catch((error) => {
                toast.error("Error al cargar la web")
            })
        }

        getProduct()
    }, [idNumb])
    
    return (
        <div className="container1 container-page1">
            <>{!load ? <ItemDetail item={item} /> : <p style={{fontWeight:"bold", fontSize:"25px", color:"red"}}>Cargando...</p>}</>
        </div>
    );
};

export default ItemDetailContainer;


