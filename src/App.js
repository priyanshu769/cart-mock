import { useState } from 'react';
import './App.css';
import { ProductsPage, Cart } from './Pages'
import { BsCart4 } from 'react-icons/bs'
import { Toaster } from 'react-hot-toast'

function App() {
  const [cart, setCart] = useState([])
  const [savedForLater, setSavedForLater] = useState([])
  const [showComponent, setshowComponent] = useState('products')
  console.log(savedForLater);
  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <nav className='navbar'>
        <button className='noBgBtn' onClick={() => setshowComponent('products')} >Cart Mock</button>
        <button className='noBgBtn' onClick={() => setshowComponent('cart')}><BsCart4 size={30} /></button>
      </nav>
      {showComponent === 'products' && <ProductsPage
        cart={cart}
        setCart={setCart}
      />}
      {showComponent === 'cart' && <Cart
        savedForLater={savedForLater}
        setSavedForLater={setSavedForLater}
        cart={cart}
        setCart={setCart}
      />}
    </div>
  );
}

export default App;
