import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';
import { getProductsByCategoryId } from "../firebase";

const FilterCategory = () => {
  let params = useParams();
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getProductsByCategoryId(params.id).then((category) => {
      setData(
        category.docs.map((documento) => {
          
        console.log(documento.data());
          return {
            id: documento.id,
            ...documento.data(),
          };
        })
      );
    })
      .catch(() => setErr(err));
  }, [params.id]);


  return (
    <div>{data.length ? (
        data.map((el) => <ItemDetail key={el.id} name={el.title} image={el.images} id={el.id} />)
        ) : (
            <h3>No Hay Resultados</h3>
)}
    </div>
);
}

export default FilterCategory;