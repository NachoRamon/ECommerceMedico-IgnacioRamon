import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';

const FilterCategory = () => {
  let params = useParams();
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);

        console.log(json.products)
      })
      .catch(() => setErr(err));
  }, [params.id]);


  return (
    <div>{data.length ? (
        data.map((el) => <ItemDetail key={el.id} name={el.title} image={el.images[0]} id={el.id} />)
        ) : (
            <h3>No Hay Resultados</h3>
)}
    </div>
);
}

export default FilterCategory;