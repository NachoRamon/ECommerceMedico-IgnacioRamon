import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({items}) => {
  return (
    <div>{items.length ? (
        items.map((item) =>  (
           <div>
               <Link to={"../products/categories/" + item}>{item}</Link>
           </div>
        )

        )
    ) : (
        <h3>No Hay Resultados</h3>
    )}
    </div>
);
};

export default CategoryList;