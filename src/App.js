import React,{useContext} from "react";
import AuthContext from "./Store/ContextApi";
import "./App.css";
import Header from "./Components/Header/Header";
import ContactUs from "./Components/Pages/ContactUs";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import AuthForm from "./Components/Auth/AuthForm";
import Footer from "./Components/Footer/Footer";
import StoreProductDetails from "./Components/Store/StoreProductDetails";
import Navigation from "./Components/Pages/Navigation";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Navigation>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {authContext.isLoggedIn && (
            <Route path="/store">
              <Header />
            </Route>
          )}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/products/:productId">
            <StoreProductDetails />
          </Route>
          {!authContext.isLoggedIn && (
            <Route path="/login">
              <AuthForm />
            </Route>
          )}
          <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
        </Switch>
      </Navigation>
      <Footer></Footer>
    </>
  );
}

export default App;
