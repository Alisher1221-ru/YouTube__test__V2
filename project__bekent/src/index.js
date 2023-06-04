import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Header from './header/header';
import Main from './main/main';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./rounter"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      {/* <Header/> */}
      {/* <Main/> */}
      <Home/>
    </ChakraProvider>
  </BrowserRouter>
)