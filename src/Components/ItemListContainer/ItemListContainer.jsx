import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './style.css';
import { useParams } from 'react-router-dom';
import { productsCollection } from '../../firebaseConfig';
import { getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({ saludo }) => { 
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(true)

    const {categoryName} = useParams();

    useEffect(() => {
        const getProducts = () => {
            let filter 
            if (categoryName){
                filter = query(productsCollection, where("category", "==", categoryName))
            }else { 
                filter = productsCollection
            }
            const askCategory = getDocs(filter)
            askCategory
            .then((result) => {
                const productsList  = result.docs.map((doc) =>{
                    return {id: doc.id, ...doc.data()}
                })
                setItems(productsList)
                setLoad(false)
            })
            .catch((error) =>{
                console.log(error)
            })
        };
        getProducts()
    }, [categoryName])

    return (
        <div className="container1 container-page1">
            <h2>{saludo}</h2>
            <>{!load ? <ItemList items={items} /> : <p style={{fontWeight:"bold", fontSize:"25px", color:"red"}}>Cargando...</p>}</>
        </div>
    );
};

export default ItemListContainer;
