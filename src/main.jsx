import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
;
import ProductProvider from './contexts/ProductContext.jsx';
import SideBarProvider from './contexts/SideBarContext.jsx';
import CartProvider from './contexts/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SideBarProvider>
    <CartProvider>
    <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SideBarProvider>
)
