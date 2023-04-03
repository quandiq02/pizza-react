import SelectTextFields from "./select-field/select-input";
export default function Checkout() {
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__wrapper">
          <div className="checkout__title">Checkout Info:</div>
          <div className="checkout__name">
            <div className="checkout__name-title">Name:</div>
            <input type="text" className="checkout__name-input" />
          </div>
          <div className="checkout__email">
            <div className="checkout__email-title">Email:</div>
            <input type="email" className="checkout__email-input" />
          </div>
          <div className="checkout__delivery">
            <div className="checkout__delivery-title">
              Choose delivery method:
            </div>
            <SelectTextFields />
          </div>
          <div className="checkout__textarea">
            <div className="checkout__textarea-title">Additional notes:</div>
            <textarea className="checkout__textarea-input"></textarea>
          </div>
          <div className="checkout__radio">
            <div className="checkout__radio-title">
              Are you a regular client?
            </div>
            <div className="checkout__radio-field">
              <input type="radio" name="client" id="yes" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="client" id="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="checkout__checkbox">
            <div className="checkout__checkbox-title">
              Do you have a coupon code?
            </div>
            <div className="checkout__checkbox-field">

              <input type="checkbox" name="coupon"  />
            </div>
          </div>
          <div className="checkout__coupon">
            <div className="checkout__coupon-title">Coupon Code</div>

            <input type="text" className="checkout__coupon-input" />
          </div>
          <div className="checkout__button">
            <button className="checkout__button-reset">Reset</button>
            <button className="checkout__button-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
