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

      {data.articles.map((art) => (
        <ContainerBox articleRead key={art.id}>
          <ImgArticle src="https://github.com/pedrootoniel/article-projetct/blob/main/src/assets/artigo1.png?raw=true" />
          <TextsBox>
            <Title titleArticle>{art.title}</Title>
            <hr />
            <Text>{art.content}</Text>
          </TextsBox>
        </ContainerBox>
      ))}

      <Footer />
    </Container>
  );
}

export default Form;
