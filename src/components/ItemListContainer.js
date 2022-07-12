import React, {useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from "../products.json"
import item from './Item';
const ItemListContainer = ({greeting}) => {
  function onAddCallback(n){
    alert(`agregados ${n} productos`);
  }
const [list, setList] = useState([])
new Promise ((resolve, reject)=>{
  if(item){
    resolve(setTimeout(setList, 2000, false));
  }else{
    reject(console.log("error"));
  }
})
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