import React, { useEffect, useState } from "react";
import { Meal } from "./meal";
import { Ingredients } from "./ingredients";
import { Instructions } from "./instructions";

export const MealContainer = () => {
    const [mealName, setName] = useState('')
    const [mealImg, setImg] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [measures, setMeasures] = useState([])
    const [instructions, setInstructions] = useState('')

    const getMeal = async () => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Fettuccine")
            .then((response) => response.json())
            .then((json) => {
                let meal = json.meals[0]
                setName(meal.strMeal)
                setImg(meal.strMealThumb)
                setInstructions(meal.strInstructions)
                let values = Object.values(meal)
                for(let i=9; i<29; i++){
                    if(values[i] === ''){
                        break
                    }
                    ingredients.push(values[i])
                    measures.push(values[i+20])
                }
            })
            .catch((error) => {
            console.error(error);
            });
    }

    useEffect(() => {
        getMeal()
    }, [])

  return (
    <div>
      <Meal name={mealName} img={mealImg} />
      <Ingredients ingredients={ingredients} measures={measures}/>
      <Instructions instructions={instructions} />
    </div>
  );
};