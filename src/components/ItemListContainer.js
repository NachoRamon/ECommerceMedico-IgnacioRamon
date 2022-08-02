import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase';
import Item from './Item';
const ItemListContainer = () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() =>{
    getProducts().then((snapshot) =>{
     setResults(snapshot.docs.map((doc) => {
        return {
          id:doc.id, ...doc.data(),
        }
      }));
    }).catch(() => setErr("Ocurrio un error"));
  }, []);
  
  /* useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setResults(json.products);
        setTimeout(() => {
          setlistLoading(false);
        }, 2000);
      })
      .catch(() => setErr("Ocurrio un error"));
  }, []);
  if (listLoading) {
    return <span>Loading...</span>; 

  } */
  return (
    <div className="display-flex row">
      {err ? <span>{err}</span> : <Item items={results} />}
    </div>
  );
};
export default ItemListContainer;