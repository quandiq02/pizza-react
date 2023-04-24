export default function Ingridients() {
  const _lsPizza = JSON.parse(localStorage.getItem("pizza"));
  return (
    <div className="ingridients">
      <div className="container">
        <div className="ingridients__wrapper">
          <div className="ingridients__title">Ingridients info</div>
          <ul className="ingridients__list">
            {_lsPizza.map((elem, index) =>
              elem.id < _lsPizza.length - 1 && elem.count > 0 ? (
                <li key={index} className="ingridients__item">
                  <div className="ingridients__img">
                    <img src={elem.img} alt={elem.name} />
                  </div>
                  <div className="ingridients__name">{elem.name}</div>
                  <div className="ingridients__count">x{elem.count}</div>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
