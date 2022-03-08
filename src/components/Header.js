import React, { useState } from 'react'
import styled from "styled-components"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt=""/>  
        </a>
        <Menu>
          {cars && cars.map((car, index) => (
            <a key={index} href="#">{car}</a>
          ))}

        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={()=>setburgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setburgerStatus(false)}/>
          </CloseWrapper>
          {cars && cars.map((car, index) => (
            <li key={index}><a href="#">{car}</a></li>
          ))}
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Use Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

`

const Menu = styled.div`
  display: flex;
  align-item: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }

`

const RightMenu = styled.div`
  display: flex;
  align-item: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  
`

const CustomMenu = styled(MenuRoundedIcon)`
  cursor: pointer;
  

`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }

  }
`

const CustomClose = styled(CloseRoundedIcon)`
  cursor: poitner;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`