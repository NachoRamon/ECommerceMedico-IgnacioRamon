import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categorias from './views/Categorias';
import Contacto from './views/Contacto';
import ItemListContainer from './components/ItemListContainer';
import Detail from './views/Detail';
import FilterCategory from './views/FilterCategory';
import Cart from './views/cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ItemListContainer />}/>
        <Route path="products/:id" element={<Detail />}></Route>
        <Route path="products/categories/:id" element={<FilterCategory />}></Route>
        <Route path="Categorias" element={<Categorias />} />
        <Route path="Contacto" element={<Contacto />}/>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>
);