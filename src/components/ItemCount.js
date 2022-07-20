import {useState} from 'react';


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
        const incrementar = () => {
          setCount( count + 1 );  
        };
        const decrementar = () =>{
          if(count > 0)  
          setCount( count - 1 );  
        };
const [showCart, setShowCart] = useState(false)
const showListCart = (evento) => {
  setShowCart(true)
}
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={incrementar}>Suma</button>
        <button onClick={decrementar}>Resta</button>
        {showListCart && (
        <button onClick={ () => {
            if (count <= stock){
                onAdd(count);
            } else{
                alert("No hay suficientes productos en stock")
            }
            
        }}>Agregar al carrito</button>)}
    </div>
  );
};

export default ItemCount;