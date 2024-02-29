import React ,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import StoreList from'./Components/Store/StoreList';
import Footer from './Components/Footer/Footer';
import CartModel from './Components/Cart/CartModel';

function App() {

   const [cartBtn, setCartBtn] = useState(false);

  const cartBtnHandler = (cartFlag) => {
  setCartBtn(cartFlag);
  }
  return (
   <>
   {cartBtn && <CartModel/>}
   <Header handleCartBtn={cartBtnHandler} />
   <StoreList></StoreList>
   <Footer></Footer>
   </>
  );
}

export default App;
