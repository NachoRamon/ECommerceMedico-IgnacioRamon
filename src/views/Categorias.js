import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CategoryList from '../components/CategoryList';
import {getAllCategorias} from "../firebase"

const Categorias = () => {
    let params = useParams();
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");


    useEffect(()=>{
        getAllCategorias().then(snapshot=>{
            setData(snapshot.docs.map((documento)=>{
            return{
              id:documento.id,
              ...documento.data()
            }
          }))
            })
            .catch(() => setErr("No hay Categorias Cargadas"));
    }, []);

    return (
        console.log(data),
        <div>
            {err ? <span>{err}</span> : <CategoryList items={data} />}
        </div>
    )
}
export default Categorias;