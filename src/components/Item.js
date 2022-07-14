import React, { useState } from "react";
import ItemDetail from "./ItemDetail";

const Item = ({ items }) => {
  const [listDetails, setlistDetails] = useState(true);
  setTimeout(() => {
    setlistDetails(false);
  }, 2000);
  return (
    <div className="display-flex row">
      {items.length ? (
        items.map((el) => (
          <div className="p-3 m-1 h3 card w-25 align-item-center" key={el.id}>
            {el.title}
            <hr></hr>
            {listDetails ? (
              <h3>CARGANDO Detalles...</h3>
            ) : (
              <ItemDetail
                imagen={el.image}
                descr={el.description}
                price={el.price}
              />
            )}
          </div>
        ))
      ) : (
        <h2>No Hay Resultados</h2>
      )}
    </div>
  );
};

export default Item;