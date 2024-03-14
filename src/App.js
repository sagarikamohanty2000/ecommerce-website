import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ContactUs from "./Components/Pages/ContactUs";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import AuthForm from "./Components/Auth/AuthForm";
import Footer from "./Components/Footer/Footer";
import StoreProductDetails from "./Components/Store/StoreProductDetails";
import Navigation from "./Components/Pages/Navigation";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/store">
            <Header />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/products/:productId">
            <StoreProductDetails />
          </Route>
          <Route path="/login">
            <AuthForm />
          </Route>
        </Switch>
      </Navigation>
      <Footer></Footer>
    </>
  );
}

export default App;
