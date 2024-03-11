import React, { useState } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const phHandler = (event) => {
    setPhNumber(event.target.value);
  };

  async function onFormSubmitHandler(event) {
    event.preventDefault();
    const movieDetails = {
      id: Math.random(),
      name: name,
      email: email,
      phNumber: phNumber,
    };
    setName("");
    setEmail("");
    setPhNumber("");

    try {
      const response = await fetch("https://ecommerce-website-4820b-default-rtdb.firebaseio.com/contactUs.json", {
        method: "POST",
        body: JSON.stringify(movieDetails),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className={classes["header-second"]}>
        <h1>The Generics</h1>
      </div>

      <form className={classes.formModule} onSubmit={onFormSubmitHandler}>
        <div className={classes.nameFrame}>
          <lable>Name</lable>
        </div>
        <div className={classes.inputName}>
          <input
            class="form-control"
            onChange={nameHandler}
            value={name}
          ></input>
        </div>
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

        <div className={classes.phFrame}>
          <label>Phone Number</label>
        </div>
        <div className={classes.inputPh}>
          <input
            type="date"
            class="form-control"
            onChange={phHandler}
            value={phNumber}
          ></input>
        </div>
        <div className={classes.btnAdd}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
