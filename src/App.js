import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}> </Route>
          <Route path='/category/:id' element={<ItemListContainer />}> </Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}> </Route>
        </Routes>
        <ItemDetailContainer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
