import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__title">Build your pizza</div>
          <div className="header__ingridients">Ingridients</div>
        </div>
      </div>
    </header>
  );
}
