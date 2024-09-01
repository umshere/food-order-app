import MealsSummmary from "./MealsSummary";
import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummmary></MealsSummmary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
