import React from 'react'
import ItemDetail from  "./ItemDetail";
import Data from "../data.json";

const ItemDetailContainer = () => {
  return <ItemDetail pc={Data} />;
}

export default ItemDetailContainer