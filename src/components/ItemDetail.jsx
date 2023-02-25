import React from 'react'
import { useParams } from 'react-router-dom';
import pcImage from "../assets/pcGamer.png";
import ItemCount from "./ItemCount";
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Divider, Center, Button } from '@chakra-ui/react';

const ItemDetail = ({pc}) => {
    const {id} = useParams();
    const pcFilter = pc.filter((pc) => pc.id == id)
  return (
    <>
      {pcFilter.map((pc) => (
        <div key={pc.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={pcImage} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{pc.nombreProduct}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Description: {pc.descripcion}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {pc.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: {pc.precioArs}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={pc.stock}
                  id={pc.id}
                  price={pc.precioArs}
                  name={pc.nombreProduct}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  )
}

export default ItemDetail