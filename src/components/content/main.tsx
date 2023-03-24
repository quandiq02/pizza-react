import coldcutsImg from "../../images/coldcuts.jpg";
import pepperoniImg from "../../images/pepperoni.jpg";
import fetaImg from "../../images/feta.jpg";
import deskImg from "../../images/desk.jpg";
import mozzarellaImg from "../../images/mozzarella.jpg";
import swisscheeseImg from "../../images/swisscheese.jpg";
import spicesImg from "../../images/spices.jpg";
import vegetablesImg from "../../images/vegetables.jpg";
import { link } from "fs";
import { useState } from "react";

export default function Main() {
  const data: object[] = [];
  interface IIngridient {
    id: number;
    name: string;
    img: string;
    isAdded: boolean;
    count: number;
    price: number;
  }
  const initialIngrients: IIngridient[] = [
    {
      id: 0,
      name: "coldcuts",
      img: coldcutsImg,
      isAdded: false,
      count: 0,
      price: 3,
    },
    {
      id: 1,
      name: "pepperoni",
      img: pepperoniImg,
      isAdded: false,
      count: 0,
      price: 2.5,
    },
    { id: 2, name: "feta", img: fetaImg, isAdded: false, count: 0, price: 1.5 },
    {
      id: 3,
      name: "mozzarella",
      img: mozzarellaImg,
      isAdded: false,
      count: 0,
      price: 1,
    },
    {
      id: 4,
      name: "swisscheese",
      img: swisscheeseImg,
      isAdded: false,
      count: 0,
      price: 2,
    },
    {
      id: 5,
      name: "spices",
      img: spicesImg,
      isAdded: false,
      count: 0,
      price: 0.25,
    },
    {
      id: 6,
      name: "vegetables",
      img: vegetablesImg,
      isAdded: false,
      count: 0,
      price: 0.75,
    },
    { id: 7, name: "desk", img: deskImg, isAdded: true, count: 1, price: 0 },
  ];
  const [ingridients, setIngridients] = useState(initialIngrients);
  return (
    <div className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="ingridients">
            <div className="ingridients__title">Your Pizza</div>
            <ul className="ingridients__list-images">
              <li>
                <img src={deskImg} alt="" />
              </li>
              {ingridients.map((elem, index) =>
                elem.isAdded ? (
                  ""
                ) : (
                  <li>
                    <img src={elem.img} alt="" key={index} />
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="menu">
            <div className="menu__wrapper">
              <div className="menu__title">Your pizza</div>
              <div className="menu__pizza-price">13.00$</div>
              <button className="menu__reset-btn">Reset pizza</button>
              <ul className="menu__ingridients">
                <li className="menu__ingridients-item">
                  <div className="item__info">
                    <div className="item__name">Cold Cuts</div>
                    <div className="item__price">3$</div>
                  </div>
                  <div className="item__btn">
                    <button className="item__btn-minus">+</button>
                    <div className="item__btn-value">0</div>
                    <button className="item__btn-plus">-</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
    </div>
  );
}
