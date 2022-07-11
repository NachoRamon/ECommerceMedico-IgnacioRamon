import React from 'react'

const item = ({ id, title, description, price, PictureUrl}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <img src={PictureUrl} alt={title}></img>
        <a href={"/" + id}>Ver detalle</a>
    </div>
  )
}

export default item