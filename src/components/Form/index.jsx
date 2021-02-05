import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Footer from '../Footer';
import {
  Container,
  ContainerBox,
  Title,
  Input,
  ContainerInput,
  IconSearch,
  Button,
  ImgArticle,
  TextsBox,
  Text,
} from './styles';

const GET_ARTICLES = gql`
  query get_articles {
    articles {
      content
      title
      id
    }
  }
`;

function Form() {
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    fetchPolicy: 'cache-and-network',
    variables: {},
  });

  if (loading) return <h1>loading</h1>;

  if (error) return <h1>error</h1>;

  console.log(data);

  return (
    <Container>
      <ContainerBox>
        <Title>Bem vindo(a)!</Title>
        <br />
        <hr />
        <ContainerInput>
          <Input placeholder="Buscar artigo" />
          <Button>
            <IconSearch />
          </Button>
        </ContainerInput>
      </ContainerBox>

      <ContainerBox articleRead>
        <ImgArticle src="https://github.com/pedrootoniel/article-projetct/blob/main/src/assets/artigo1.png?raw=true" />
        <TextsBox>
          <Title titleArticle>Meu artigo</Title>
          <hr />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </TextsBox>
      </ContainerBox>

      <ContainerBox articleRead>
        <ImgArticle src="https://github.com/pedrootoniel/article-projetct/blob/main/src/assets/artigo1.png?raw=true" />
        <TextsBox>
          <Title titleArticle>Meu artigo</Title>
          <hr />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </TextsBox>
      </ContainerBox>

      <ContainerBox articleRead>
        <ImgArticle src="https://github.com/pedrootoniel/article-projetct/blob/main/src/assets/artigo1.png?raw=true" />
        <TextsBox>
          <Title titleArticle>Meu artigo</Title>
          <hr />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </TextsBox>
      </ContainerBox>

      <Footer />
    </Container>
  );
}

export default Form;
