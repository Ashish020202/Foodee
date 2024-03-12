import { useEffect, useState } from "react";

export default function Meals(){
    const [mealsState,loadedMealsState] = useState([]);

    useEffect(()=>{
        async function fetchMeals(){
            const response = await fetch("https://localhost:3000/meals");
            
            if(response.ok){
     
            }
     
            const mealData =await response.json();
            
            loadedMealsState(mealData);
     
         }

         fetchMeals();
        
    },[]);

   
    


    return (
        <ul id="meals">{mealsState.map(meals=><li key={meals.id}>{meals.name}</li>)}</ul>
    )
}