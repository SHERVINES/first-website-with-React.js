import React, { Component } from "react";
import Card from "./Card";
import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";
import styles from "./Cards.module.css";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { id: 1, image: iphonex, name: "iphone X", price: "500 $" },
        { id: 2, image: iphone11, name: "iphone 11", price: "600 $" },
        { id: 3, image: iphone12, name: "iphone 12", price: "800 $" },
        { id: 4, image: s21, name: "S 21", price: "780 $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map((phone) => (
          <Card
            key={phone.id}
            image={phone.image}
            name={phone.name}
            price={phone.price}
          />
        ))}
      </div>
    );
  }
}
export default Cards;
