import React from "react";
import classes from './HomePageTour.module.css';

const HomePageTour = () => {
  const tours = [
    {
      date: "JUL 16",
      location: "DETROIT,MI",
      event: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      location: "TORONTO,ON",
      event: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      location: "BRISTOW,VA",
      event: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      location: "PHOENIX,AZ",
      event: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      location: "LAS VEGAS,NV",
      event: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      location: "CONCORD,CA",
      event: "CONCORD PAVILION",
    },
  ];

  return (
    <>
      <div className={classes.tourContent}>
        {tours.map((tour) => (
          <div className={classes.tourList}>
            <div className={classes.date}>{tour.date}</div>
            <div className={classes.location}>{tour.location}</div>
            <div className={classes.event}>{tour.event}</div>
            <button className={classes.buyBtn}>Buy Ticket</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageTour;
