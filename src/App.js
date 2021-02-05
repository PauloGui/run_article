import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Global from './global';
import Main from './pages/Main';

const client = new ApolloClient({
  uri: 'https://runarticle.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Global />
      <Main />
    </ApolloProvider>
  );
}

export default App;
