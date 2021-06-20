import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';
import place from "../../image/Placeholder.png";


const Block = styled.div`
     div {
      margin: 100px auto 0 auto;
      width: 60%;
    } 
    img{
      width: 40%;
      display: block;
      margin: 0 auto;
    }
    h2{
      text-align: left;
      margin-top: 20px;
    }
    p{
      margin-top: 20px;
      text-align: center;
    }

`

const DisplayDish = () => {

    const recipe = useSelector(state => state.toolkit.recipe)
    
    const displayRecipe = () => {
        return (
            <div>
                <img src={recipe.strMealThumb || place} alt="recipe"/>
                <h2>{recipe.strMeal}</h2>
                <p>{recipe.strInstructions}</p>
            </div>
        )
    }
    
    
    return (
        <div>
            <Block>
                {displayRecipe()}
            </Block>
        </div>

    );
};

export default DisplayDish;