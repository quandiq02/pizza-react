import { useState, useRef } from "react";

const LoadPizzaModal = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const inputRef = useRef(null);
  const _lsPass = JSON.parse(localStorage.getItem("pass"));
  const [isClicked, setIsClicked] = useState(false);
  let isPassCorr = false;
  function LoadPizzaIngri() {
    if (inputRef.current.value === _lsPass) {
      isPassCorr = true;
      setModalActive(false);
      setIsClicked(false)

      window.location.reload(true);
    } else {
      setIsClicked(true)
      isPassCorr = false;
    }
    localStorage.setItem("check", JSON.stringify(isPassCorr));
  }
  return (
    <div className="loadpizza-modal">
      <div className="loadpizza-modal__wrapper">
        <button
          className="modal__btn-open buttons__load"
          onClick={() => {
            setModalActive(true);
          }}
        >
          Load pizza
        </button>
        <div
          className={
            modalActive
              ? "loadpizza-modal__content-active"
              : "loadpizza-modal__content"
          }
        >
          <div className="loadpizza-modal__block">
            <input
              type="text"
              className="loadpizza-input"
              placeholder="Load your Pizza"
              ref={inputRef}
            />
            <button className="loadpizza__submit-btn" onClick={LoadPizzaIngri}>
              Submit
            </button>
            {isClicked && (
              <span className="loadpizaza__error-msg">
                You entered a wrong load code
              </span>
            )}

            <div
              className="loadpizza-modal__btn-exit"
              onClick={() => setModalActive(false)}
            >
              <img
                src="https://www.svgrepo.com/show/12848/x-symbol.svg"
                width="15px"
                height="15px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadPizzaModal;
