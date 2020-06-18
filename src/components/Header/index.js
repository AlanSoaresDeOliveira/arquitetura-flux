import React from 'react';
import {Link} from 'react-router-dom';
import {MdShoppingBasket} from 'react-icons/md';
import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <Link to="/">
       <img src={Logo} alt="Rocketshoes"/>
      </Link>

      <Cart>
        <div>
          <strong>Meu carrinho</strong>
          <span>3 Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
    
  );
}

export default Header;