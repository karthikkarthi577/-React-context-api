import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProviderFun from './Provider';
ReactDOM.render(
  // passing app as child to the provider component so that any component can access the data from the  App component the content in the provider function will also render content
  <ProviderFun>
    <App />
  </ProviderFun>,
  document.getElementById("root")
);