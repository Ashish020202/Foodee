import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals(){
    const [mealsState,loadedMealsState] = useState([]);

    useEffect(()=>{
        async function fetchMeals(){
            const response = await fetch("http://localhost:3000/meals");
            
            if(response.ok){
     
            }
     
            const mealData =await response.json();
            
            loadedMealsState(mealData);
     
         }

         fetchMeals();
        
    },[]);

   
    


    return (
        // <ul id="meals">{mealsState.map(meals=><li key={meals.id}>{meals.name}</li>)}</ul>
        <ul id="meals">{mealsState.map((meal)=>{
            <MealItem key={meal.id} meal={meal} />
        })}</ul>
    )
}