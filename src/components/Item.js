import React from "react";
import ItemDetail from "./ItemDetail";
const Item = ({ items }) => {
  return (
    <div>
    <div className="display-flex row">
      {items.length ? (
        items.map((el) => (
          <ItemDetail key={el.id} name={el.title} image={el.images} id={el.id}/>)
          )
      ) : (
        <h2>No Hay Resultados</h2>
      )}
    </div>
    </div>
  );
};

export default Item;