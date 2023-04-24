import { useReducer, useState, useRef } from "react";
import { data } from "../data";
import Modal from "../modal/modal";
import reducer from "../reducer";
import GeneratePassword from "../others/pass-gen";
import LoadPizzaModal from "../loadpizza-modal/loadpizza";
export default function Main() {
  const [ingridients, setIngridients] = useState(data);
  const [active, setActive] = useState(false);
  let [price, setPrice] = useState(3);
  const spanRef = useRef(null);
  const _lsCheck = JSON.parse(localStorage.getItem("check"));
  const _lsPizza = JSON.parse(localStorage.getItem("saved-pizza")) ?? [];
  const _lsPrice =_lsPizza.reduce((acc, obj) => acc + obj.count * obj.price, 0) ?? 3;
  const [state, dispatch] = useReducer(reducer, _lsCheck ? _lsPizza : data);
  function savetoLS() {
    localStorage.setItem("saved-pizza", JSON.stringify(state));
  }
  function GetTextValue() {
    const text = spanRef.current.innerText;
    navigator.clipboard.writeText(text);
    localStorage.setItem("pass", JSON.stringify(text));
  }

  return (
    <div className="main">
      {state == _lsPizza
        ? localStorage.setItem("check", JSON.stringify(false))
        : ""}
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
              <div className="menu__pizza-price">
                {state == _lsPizza ? price=_lsPrice : price}$
              </div>
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
                <div className="total__price-value">
                  {state == _lsPizza ? _lsPrice : price}$
                </div>
              </div>
              <div className="menu__buttons buttons">
                <button
                  className="buttons__save"
                  onClick={() => {
                    setActive(true);
                    savetoLS();
                    setTimeout(() => {
                      GetTextValue();
                    }, 0);
                  }}
                >
                  Save pizza
                </button>
                <Modal price={price} state={state} />
              </div>
              <div className="menu__buttons buttons">
                <LoadPizzaModal price={price} state={state} />
              </div>
              {active ? (
                <div className="save__info">
                  Your pizza configuration has been saved. Your number is :
                  <span ref={spanRef}>{GeneratePassword(22)}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
