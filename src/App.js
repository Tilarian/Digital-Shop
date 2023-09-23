import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}> </Route>
          <Route path='/cart' element={<Cart />}> </Route>
          <Route path='/category/:id' element={<ItemListContainer />}> </Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}> </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
