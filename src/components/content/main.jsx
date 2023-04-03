import { useReducer, useState } from "react";
import { data } from "../data";
import Modal from "../modal/modal";
import reducer from "../reducer";
import Header from "../header/header";

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
              <div className="total__price">
                <div className="total__price-text">Total</div>
                <div className="total__price-value">{price}$</div>
              </div>
              <div className="menu__buttons buttons">
                <button className="buttons__save">Save pizza</button>
                <Modal price={price} state={state} />
              </div>
              <div className="menu__buttons buttons">
                <button className="buttons__load">Load pizza</button>
              </div>
              <div className="save__info"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
}
