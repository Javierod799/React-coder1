import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* ------ Mock async Service ------  */
import productsDatabase from "../../data/products";

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemRequested = productsDatabase.find((item) => {
        return item.id === parseInt(idURL);
      });
      resolve(itemRequested);
    }, 1000);
  });

  return promesa;
}
/* ------------------------------------------------- */

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);


  let { productid } = useParams();
  console.log(productid);

  useEffect(() => {
    getSingleItem(productid).then((respuesta) => {
      console.log("promesa cumplida", respuesta);

      setProduct(respuesta);
    });
  }, []);


  return (
    <div>
      <img src={product.img}></img>
      <h1>{product.title}</h1>
      <h3>{product.category}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ItemDetailContainer;