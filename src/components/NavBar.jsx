import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Menu } from '@chakra-ui/react';
const NavBar = () => {
  return (
    <>
      <div className='NavBarContainer'>
            <Link to={"/"}>IT - SHOP</Link>

            <Box>
              <Menu>
                <Link to={"/catalogo"}>
                  <button className='BtnNavBar'>Catalogo</button>
                </Link>
              </Menu>
            </Box>

            <Link to={"/cart"}>
              <p className='fa-solid fa-cart-shopping'> 3</p>
            </Link>
      </div>
    </>
  )
}

export default NavBar