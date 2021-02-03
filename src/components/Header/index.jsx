import React from 'react';
import Logo from '../../assets/logo.png';
import { Container, Wrapper, ImgLogo, Title } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <ImgLogo src={Logo} />
        <Title>
          <h2>Home</h2>
          <span>Encontre todos os artigos em um único lugar</span>
        </Title>
      </Wrapper>
    </Container>
  );
}

export default Header;
