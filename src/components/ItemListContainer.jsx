import React from 'react'
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from 'react-router-dom';
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const {catalogo} = useParams();
  /*
  const getDatos = () => {
    return new Promise ((resolve, reject) => {
      if(Data.lenght === 0) {
        reject (new Error("No se encuentran datos registrados"));
      }
      setTimeout(()=>{
        resolve(Data), 2000
      });
    });
  };

  async function BuscandoData() {
    try {
      const datosEncontrados = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  BuscandoData();
  */
  const pcFilter = Data.filter((pc) => pc.catalogo === catalogo);
  return (
    <>
      <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Catalogo 
        </Heading>
      </Center>
      {catalogo ? <ItemList pc={pcFilter}/> : <ItemList pc={Data}/>}
    </div>
      
    </>
  );
};

export default ItemListContainer