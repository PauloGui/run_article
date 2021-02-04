import React from 'react';
import Footer from '../Footer';
import {
  Container,
  ContainerSearch,
  Title,
  Input,
  ContainerInput,
  IconSearch,
  Button,
} from './styles';

function Form() {
  return (
    <Container>
      <ContainerSearch>
        <Title>Bem vindo(a)!</Title>
        <br />
        <hr />
        <ContainerInput>
          <Input placeholder="Buscar artigo" />
          <Button>
            <IconSearch />
          </Button>
        </ContainerInput>
      </ContainerSearch>

      <Footer />
    </Container>
  );
}

export default Form;
