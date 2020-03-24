import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './css/font/font.css';
import { ApolloProvider } from 'react-apollo';
import client from './lib/graphql/client';
import { Helmet } from 'react-helmet';
import { Header } from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import ApplicationPage from './pages/ApplicationPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'InkFree';
    overflow-x: hidden;
  }
`;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Helmet>
        <title>srr-admin</title>
      </Helmet>
      <Header>
        <h1>SSR-ADMIN</h1>
      </Header>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Mainpage} exact />
          <Route path="/:pk" component={ApplicationPage} exact />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
