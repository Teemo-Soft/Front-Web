import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  headers:{
    Application: '123'
  }
});


const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
