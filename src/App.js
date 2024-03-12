import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ContactUs from "./Components/Pages/ContactUs";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Footer from "./Components/Footer/Footer";
import ContextProvider from "./Store/ContextProvider";
import StoreProductDetails from "./Components/Store/StoreProductDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./Components/Pages/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Header /> },
      { path: "/about", element: <About /> },
      {path: "/contactUs", element:<ContactUs/>},
      {path: "/products/:productId", element:<StoreProductDetails/>}
    ],
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </ContextProvider>
  );
}

export default App;
