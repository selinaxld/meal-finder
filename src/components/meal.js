import React, { useEffect, useState } from 'react'
import { Ingredients } from "./ingredients";
import { Instructions } from "./instructions";

export const Meal = ({
    name
}) => {
    const [mealImg, setImg] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [measures, setMeasures] = useState([])
    const [instructions, setInstructions] = useState('')
    const ingredientKeys = ["strIngredient1",
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
                            "strIngredient20"]
    const measureKeys = ["strMeasure1",
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
                          "strMeasure20"]
    const getMeal = async () => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+name)
            .then((response) => response.json())
            .then((json) => {
                let meal = json.meals[0]
                setImg(meal.strMealThumb)
                setInstructions(meal.strInstructions)
                for(let i=0; i<20; i++){
                  if(meal[ingredientKeys[i]] !== ''){
                    ingredients.push(meal[ingredientKeys[i]])
                    measures.push(meal[measureKeys[i]])
                  }
                }
            })
            .catch((error) => {
            console.error(error);
            });
    }

    useEffect(() => {
        getMeal()
    }, [])

    return(
        <div>
            <h1>{name}</h1>
            <img src={mealImg}/>
            <Ingredients ingredients={ingredients} measures={measures}/>
            <Instructions instructions={instructions} />
        </div>
    )
}