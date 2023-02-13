import React from 'react';
import Item from '../Item/Item';
import './style.css';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((product) => {
                return <Item product={product} key={product.id} />;
            })}
        </div>
    );
};

export default ItemList;
