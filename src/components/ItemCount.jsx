import React, { useState } from 'react'
import {Text,ButtonGroup,IconButton,Tooltip,Center,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({stockRemaing}) => {
  const [contador, setCount] = useState(1);

  const Anadir = () =>{
    setCount(contador + 1);
  };

  const Descontar = () => {
    setCount(contador - 1);
  };

  return (
    <>
     <ButtonGroup size="sm" isAttached variant="outline">
        {contador < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={Descontar} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{contador}</Text>
        </Center>
        {contador < stockRemaing ? (
          <IconButton icon={<AddIcon />} onClick={Anadir} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  )
}

export default ItemCount