import React, { useReducer, useState } from "react";
import ContextApi from "./ContextApi";

const defaultCartItem = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.Type === "Add") {
    console.log("ADD in Provider", action.item);
    const totalAmount = state.totalAmount + action.item.price;

    const getIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const getItems = [...state.items];
    const updateItem = state.items[getIndex];
    if (updateItem) {
      const updatedItem = {
        ...updateItem,
        qty: Number(updateItem.qty) + Number(1),
      };
      getItems[getIndex] = updatedItem;

      return {
        items: getItems,
        totalAmount: totalAmount,
      };
    } else {
      const updatedItems = state.items.concat(action.item);
      console.log("else add", updatedItems);
      return {
        items: updatedItems,
        totalAmount: totalAmount,
      };
    }
  }

  return defaultCartItem;
};
const ContextProvider = (prop) => {
  const [stateItem, dispatchStateItem] = useReducer(
    cartReducer,
    defaultCartItem
  );

  const prevToken = localStorage.getItem('token');
  const[token, setToken] = useState(prevToken);

  const removeCartItem = (id) => {
    dispatchStateItem({
      Type: "Remove",
      id: id,
    });
  };
  const addCartItem = (item) => {
    dispatchStateItem({ Type: "Add", item: item });
  };

  const isLogIn = !!token;

  const loginHandler = (token)=>{
    setToken(token);
    localStorage.setItem('token', token);
    setTimeout(() => {
      setToken('');
      localStorage.removeItem('token');
    }, 50000);
  }

  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem('token');
  }
  const ApiContext = {
    items: stateItem.items,
    totalAmount: stateItem.totalAmount,
    addItem: addCartItem,
    removeItem: removeCartItem,
    token:token,
    isLoggedIn: isLogIn,
    login:loginHandler,
    logout:logoutHandler
  };

  return (
    <ContextApi.Provider value={ApiContext}>
      {prop.children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
