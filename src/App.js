import React ,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import StoreList from'./Components/Store/StoreList';
import Footer from './Components/Footer/Footer';
import CartModel from './Components/Cart/CartModel';
import ContextProvider from './Store/ContextProvider';

function App() {

   const [cartBtn, setCartBtn] = useState(false);

  const cartBtnHandler = (cartFlag) => {
  setCartBtn(cartFlag);
  }
  return (
   <ContextProvider>
   {cartBtn && <CartModel handleCartBtn={cartBtnHandler}/>}
   <Header handleCartBtn={cartBtnHandler} />
   <StoreList></StoreList>
   <Footer></Footer>
   </ContextProvider>
  );
}

export default App;
