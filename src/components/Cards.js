import React from "react";
import Card from "./Card";
import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <Card image={iphonex} name="iphone X" price="500 $" />
      <Card image={iphone11} name="iphone 11" price="600 $" />
      <Card image={iphone12} name="iphone 12" price="800 $" />
      <Card image={s21} name="S 21" price="780 $" />
    </div>
  );
};

export default Cards;
