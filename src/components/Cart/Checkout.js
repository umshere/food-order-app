import classes from "./Checkout.module.css";
import Modal from "../UI/Modal";

const Checkout = () => {
  return (
      <form>
        <div className={classes.control}>
          <label htmlFor="name">your name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street name</label>
          <input type="text" id="street" />
        </div>
        <div className={classes.control}>
          <label htmlFor="postalcode">Street name</label>
          <input type="text" id="postalcode" />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">Street name</label>
          <input type="text" id="city" />
        </div>
        <button>Cancel</button>
        <button>Confirm</button>
      </form>
  );
};

export default Checkout;
