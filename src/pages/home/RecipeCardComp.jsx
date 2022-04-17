import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyles';

const RecipeCardComp = ({recipe}) => {

    const navigate = useNavigate();

    const clickMore = () => {
        navigate('/details', {state:{recipe}})
    };

  return (
    <RecipeCard>
        <RecipeHeader>
            {recipe.label}
        </RecipeHeader>
        <RecipeImage src={recipe.image}/>
        <Button onClick={clickMore}>Viev More</Button>
    
    </RecipeCard>
  )
}

export default RecipeCardComp