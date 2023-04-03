import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./content/main";
import Checkout from "./checkout/checkout";
function RouteFirst() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}
export default RouteFirst;
