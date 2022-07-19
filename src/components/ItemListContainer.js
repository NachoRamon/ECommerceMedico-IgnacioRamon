import React, { useEffect, useState } from 'react';
import Item from './Item';
const ItemListContainer = () => {
  const [listLoading, setlistLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");
  
  useEffect(() => {
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

  }
  return (
    <div className="display-flex row">
      {err ? <span>{err}</span> : <Item items={results} />}
    </div>
  );
};
export default ItemListContainer;