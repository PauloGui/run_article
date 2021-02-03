import React from 'react';
import Form from '../../components/Form';
import Header from '../../components/Header';
import NavMenu from '../../components/NavMenu';
import { Container, Wrapper, SideMenu, Content } from './styles';

function Main() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <SideMenu>
          <NavMenu />
        </SideMenu>
        <Content>
          <Form />
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Main;
