import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from "../products.json"
const ItemListContainer = ({greeting}) => {
  function onAddCallback(n){
    alert(`agregados ${n} productos`);
  }

const [list, setList] = useState([])
useEffect(()=>{
  setTimeout(setList, 3000, false);
}, []);
  return (
    <div>
      {list ?(
        <h1>Loading..</h1>
      ) : (
       <>
      {greeting}
      <ItemCount stock={5} initial={1} onAdd={(onAddCallback)} />
      <ItemList items={products}/>
      </> 
      )}
    </div>
  )
}

export default ItemListContainer