import React, {useContext,useState} from "react";
import {useHistory} from 'react-router-dom';
import ContextApi from "../../Store/ContextApi";

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPswd] = useState("");

  const authContext = useContext(ContextApi);
  const history = useHistory();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const pswdHandler = (event) => {
    setPswd(event.target.value);
  };

  async function onFormSubmitHandler(event) {
    event.preventDefault();

    setEmail("");
    setPswd("");

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRV_pMlgg9YkB23h8BAghdxFtTTaHpd1M",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Authentication Faild");
      } else {
        authContext.login(data.idToken);
        history.replace('/store')
        console.log(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <div className={classes["header-second"]}>
        <h1>The Generics</h1>
      </div>

      <form className={classes.formModule} onSubmit={onFormSubmitHandler}>
        <div className={classes.nameFrame}></div>
        <div className={classes.emailFrame}>
          <label>Email</label>
        </div>
        <div className={classes.inputEmail}>
          <input
            type="email"
            class="form-control"
            onChange={emailHandler}
            value={email}
          ></input>
        </div>

        <div className={classes.pswdFrame}>
          <label>Password</label>
        </div>
        <div className={classes.inputPswd}>
          <input
            type="password"
            class="form-control"
            onChange={pswdHandler}
            value={password}
          ></input>
        </div>
        <div className={classes.btnAdd}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
