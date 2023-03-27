import coldcutsImg from "../../images/coldcuts.jpg";
import pepperoniImg from "../../images/pepperoni.jpg";
import fetaImg from "../../images/feta.jpg";
import deskImg from "../../images/desk.jpg";
import mozzarellaImg from "../../images/mozzarella.jpg";
import swisscheeseImg from "../../images/swisscheese.jpg";
import spicesImg from "../../images/spices.jpg";
import vegetablesImg from "../../images/vegetables.jpg";
import { useReducer, useState } from "react";

const data = [
  {
    id: 0,
    name: "Cold cuts",
    img: coldcutsImg,
    isAdded: false,
    count: 0,
    price: 3,
  },
  {
    id: 1,
    name: "Pepperoni",
    img: pepperoniImg,
    isAdded: false,
    count: 0,
    price: 2.5,
  },
  { id: 2, name: "Feta", img: fetaImg, isAdded: false, count: 0, price: 1.5 },
  {
    id: 3,
    name: "Mozzarella",
    img: mozzarellaImg,
    isAdded: false,
    count: 0,
    price: 1,
  },
  {
    id: 4,
    name: "Swiss cheese",
    img: swisscheeseImg,
    isAdded: false,
    count: 0,
    price: 2,
  },
  {
    id: 5,
    name: "Spices",
    img: spicesImg,
    isAdded: false,
    count: 0,
    price: 0.25,
  },
  {
    id: 6,
    name: "Vegetables",
    img: vegetablesImg,
    isAdded: false,
    count: 0,
    price: 0.75,
  },
  { id: 7, name: "desk", img: deskImg, isAdded: true, count: 1, price: 0 },
];

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state.map((elem) =>
        elem.id === action.index
          ? { ...elem, count: elem.count + 1, isAdded: true }
          : elem
      );
    case "decrement":
      return state.map((elem) =>
        elem.id === action.index && elem.count > 0
          ? elem.count === 1
            ? { ...elem, isAdded: false, count: elem.count - 1 }
            : { ...elem, count: elem.count - 1 }
          : elem
      );
    case "reset-all":
      return state.map((elem) =>
        elem.id < data.length - 1 ? { ...elem, count: 0, isAdded: false } : elem
      );
    default:
      throw new Error();
  }
}

export default function Main() {
  const [ingridients, setIngridients] = useState(data);
  const [state, dispatch] = useReducer(reducer, data);
  const [price, setPrice] = useState(3);
  return (
    <div className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="ingridients">
            <div className="ingridients__title">Your Pizza</div>
            <ul className="ingridients__list-images">
              {state.map((elem, index) =>
                elem.isAdded ? (
                  <li>
                    <img src={elem.img} alt="" key={index} />
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="menu">
            <div className="menu__wrapper">
              <div className="menu__title">Your pizza</div>
              <div className="menu__pizza-price">{price}$</div>
              <button
                className="menu__reset-btn"
                onClick={() => {
                  dispatch({ type: "reset-all" });
                  setPrice(3);
                }}
              >
                Reset pizza
              </button>
              <ul className="menu__ingridients">
                {state.map((elem, index) =>
                  elem.id < ingridients.length - 1 ? (
                    <li className="menu__ingridients-item">
                      <div className="item__info">
                        <div className="item__name">{elem.name}</div>
                        <div className="item__price">{elem.price}$</div>
                      </div>
                      <div className="item__btn">
                        <button
                          className="item__btn-minus"
                          key={index}
                          onClick={() => {
                            dispatch({ type: "decrement", index });
                            elem.count > 0
                              ? setPrice(price - elem.price)
                              : setPrice(price);
                          }}
                        >
                          -
                        </button>
                        <div className="item__btn-value">{elem.count}</div>
                        <button
                          className="item__btn-plus"
                          key={index}
                          onClick={() => {
                            dispatch({ type: "increment", index });
                            setPrice(price + elem.price);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
