import React from "react";
import HomePageTour from "./HomePageTour";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      {" "}
      <div className={classes["header-second"]}>
        <h1>The Generics</h1>

        <button className={classes.albumBtn}> Get out latest Album</button>
        <button className={classes.playBtn}>▶</button>
      </div>
      <HomePageTour />
    </>
  );
};

export default Home;
