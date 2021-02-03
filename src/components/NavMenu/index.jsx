import React from 'react';

import { Container, Wrapper, Button, IconHome, IconArticle } from './styles';

function NavMenu() {
  return (
    <Container>
      <Wrapper>
        <Button>
          <IconHome />
          Início
        </Button>
        <Button>
          <IconArticle />
          Escrever
        </Button>
      </Wrapper>
    </Container>
  );
}

export default NavMenu;
