import React, { useEffect, useState } from "react";
import { Meal } from "./meal";
import '../App.css';

export const MealContainer = () => {
  const [meals, setMeals] = useState([]);
  const [index, setIndex] = useState(0);
  const ingredientKeys = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
    "strIngredient6",
    "strIngredient7",
    "strIngredient8",
    "strIngredient9",
    "strIngredient10",
    "strIngredient11",
    "strIngredient12",
    "strIngredient13",
    "strIngredient14",
    "strIngredient15",
    "strIngredient16",
    "strIngredient17",
    "strIngredient18",
    "strIngredient19",
    "strIngredient20",
  ];
  const measureKeys = [
    "strMeasure1",
    "strMeasure2",
    "strMeasure3",
    "strMeasure4",
    "strMeasure5",
    "strMeasure6",
    "strMeasure7",
    "strMeasure8",
    "strMeasure9",
    "strMeasure10",
    "strMeasure11",
    "strMeasure12",
    "strMeasure13",
    "strMeasure14",
    "strMeasure15",
    "strMeasure16",
    "strMeasure17",
    "strMeasure18",
    "strMeasure19",
    "strMeasure20",
  ];

  const getMeals = async () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => response.json())
      .then((json) => {
        const mealTemp = [];
        for (const meal of json.meals) mealTemp.push(meal);
        setMeals(mealTemp);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMealDetails = async (currentMeal, name) => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + name)
      .then((response) => response.json())
      .then((json) => {
        let meal = json.meals[0];
        currentMeal.strMealThumb = meal.strMealThumb;
        currentMeal.strInstructions = meal.strInstructions;
        currentMeal.ingredients = [];
        currentMeal.measures = [];
        for (let i = 0; i < 20; i++) {
          if (meal[ingredientKeys[i]] !== "") {
            currentMeal.ingredients.push(meal[ingredientKeys[i]]);
            currentMeal.measures.push(meal[measureKeys[i]]);
          }
        }
        setMeals(meals)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMeals();
  }, []);

  useEffect(() => {
    meals.map(
      (meal) =>
        meals && !meal.strInstructions && getMealDetails(meal, meal.strMeal)
    );
  })

  const getPrev = () => {
    const isFirst = index === 0
    const newIndex = isFirst ? meals.length-1 : index-1
    setIndex(newIndex)
  };

  const getNext = () => {
    const isLast = index === meals.length-1
    const newIndex = isLast ? 0 : index+1
    setIndex(newIndex)
  };

  //meals array is filled successfully, but display causes error. 
  //Uncaught TypeError: Cannot read properties of undefined (reading 'ingredients')
  //no error on save, only manual refresh

  //Uncaught Error: Too many re-renders.

  return (
    <div>
      {/* <button className='prev' onClick={getPrev()}>previous</button> */}
      {/* <Meal
        name={meals[index].strMeal}
        img={meals[index].strMealThumb}
        ingredients={meals[index].ingredients}
        measures={meals[index].measures}
        instructions={meals[index].strInstructions}
      /> */}
      {/* <button className='next' onClick={getNext()}>next</button> */}
    </div>
  );
};