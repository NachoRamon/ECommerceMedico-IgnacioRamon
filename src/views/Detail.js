import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
const Detail = () => {
  let params = useParams();
  const [data, setData] = useState();
  const [err, setErr] = useState("")

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
        <ItemCount stock={5} initial={1} onAdd={(n) => alert( `agragados ${n} productos`)}/>
    </div>
  )
}

export default Detail