import React from "react";

const ContextApi = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  token:'',
  isLoggedIn:false,
  login: (token, emailId)=> {},
  logout: ()=> {},
  email:''
});

export default ContextApi;
