import React, { useState } from "react";
import { Link } from "react-router-dom"
const ItemDetail = ({ id, name, images }) => {
  return (
    <div>
      <img src={images} alt={name}/>
      
      <div>
        <Link to={"../products/" + id} > {name}</Link>
      </div>
    </div>
    
    
  );
};

export default ItemDetail;