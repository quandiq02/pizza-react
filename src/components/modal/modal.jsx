import { useState } from "react";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <button
          className="modal__btn-open buttons__checkout"
          onClick={() => setModalActive(true)}
        >
          Checkout
        </button>
        <div
          className={modalActive ? "modal__content-active" : "modal__content"}
        >
          <div className="modal__block">
            <div className="modal__title">Your Order</div>
            <div className="modal__subtitle">
              The pizza has following ingridients
            </div>
            <ul className="ingridients__list">
              {props.state.map((elem) =>
                elem.id < props.state.length - 1 && elem.count > 0 ? (
                  <li>
                    {elem.name} : {elem.count}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
            <div className="modal__total-price">
              Total price :{props.price}$
            </div>
            Continue to checkout?
            <div className="modal__btns">
              <button
                className="modal__btn-exit"
                onClick={() => setModalActive(false)}
              >
                Cancel
              </button>
              <Link to="/checkout">
                <button className="modal__btn-continue">Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
