import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';
const Detail = () => {
  let params = useParams();
  const [data, setData] = useState();
  const [err, setErr] = useState("")
  const [cart , setCart] = useState(true)

useEffect(() => {
    fetch("https://dummyjson.com/products/" + params.id)
    .then((res) => res.json())
    .then((json) => {
        setData(json);
    })
    .catch(() => setErr(err));
}, [params.id]);
  
    return (
    <div>
        {data && (
                <div> 
                    <img src={data.images} alt={data.name} />
                    <div>
                        <p>{data.title}</p>
                        <p>${data.price}</p>
                        <p>{data.brand}</p>
                        <p>{data.description}</p>
                    </div>
                </div>
            )
        }
        {cart ? (
    <ItemCount
    stock={5} initial={1} onAdd={(n) => {alert( `agragados ${n} productos`);
    setCart(false)
  }}
  />
  ) : (
    <Link to="/cart">
      Ver el carrito
    </Link>
  )}
    </div>
  )
}

export default Detail
