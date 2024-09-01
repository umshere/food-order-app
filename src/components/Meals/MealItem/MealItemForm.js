import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useContext, useRef, useState } from "react";

const MealItemForm = (props, ref) => {
  const [isAmountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitEventHandler = (event) => {
    event.preventDefault();
    // event.target
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitEventHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid &&<p>Please enetered valid number (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
