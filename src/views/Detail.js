import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../components/CartContext';
import {getProductById} from "../firebase";

const Detail = () => {
  let params = useParams();
  const [data, setData] = useState();
  const [err, setErr] = useState("")
  const [cart, setCart] = useState(true)
  const { addItem } = useCartContext();

  useEffect(() => {
    getProductById(params.id).then((product) => {
      setData({id:params.id,...product})
    })
      .catch(() => setErr(err));
  }, [params.id]);

  const onAdd = (c) => {
    alert(`agregados ${c} productos`)
    addItem({
      id: data.id,
      title: data.title,
      price: data.price,
      quantity: c,
    });
    setCart(false)
  }

  return (
    <div>
      {data && (
        <div>
          <img src={data.images[0]} alt={data.name} />
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
          stock={5} initial={1} onAdd={(c) => onAdd(c)}
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
