import React, { useEffect } from "react";
import { Meal } from "./meal";

export const MealContainer = () => {
  const meals = ['BeaverTails', 'Breakfast Potatoes', 'Canadian Butter Tarts', 'Montreal Smoked Meat', 'Nanaimo Bars']
  // const getMeals = async () => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         for(const meal of json.meals)
  //           meals.push(meal.strMeal)
  //       })
  //       .catch((error) => {
  //       console.error(error);
  //       });
  // }

  // useEffect(() => {
  //     getMeals()
  // }, [])

  return (
    <div>
      {meals.map(
        meal => <Meal name={meal} />
      )}
    </div>
  );
};