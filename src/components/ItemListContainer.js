import React, { useState } from 'react';
import ItemList from './ItemList';
import products from "../products.json"
import Item from './Item';

const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([])
  new Promise((resolve, reject) => {
    if (Item) {
      resolve(setTimeout(() => { setList(false)}
        , 2000));
    } else {
      reject(console.log("error"));
    }
  })

  return (
    <div>
      {list ? (
        <h1>Loading..</h1>
      ) : (
        <>
          {greeting}
          <Item items={products} />
        </>
      )}
    </div>
  )
}

export default ItemListContainer