import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {allRecipe, getRecipe} from "../../store/contactSlice";
import styled from 'styled-components';
import DisplayDish from "../DisplayDish/DisplayDish";
import {Button} from "react-bootstrap";



const Btn = styled.div`
      display: flex;
      justify-content: space-between;
      margin: 30px auto;
      width: 10%;
`

const GetDish = () => {

     const dispatch = useDispatch();
     const recipe = useSelector(state => state.toolkit.recipe);




     const getDish = async function () {
         try {
             const responce = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
             await dispatch(getRecipe(responce.data.meals[0]))
         } catch (err) {
             throw Error(err)
         }
     }

     useEffect(() => {
         getDish()
     },[])


    const Favorites = () =>{
         return(
             dispatch(allRecipe(recipe))
         )
    }


    return (
        <div>
           <DisplayDish/>
            <Btn>
                <Button onClick={() =>  getDish()} variant="success">Skip</Button>
                <Button onClick={() => {Favorites(); getDish()}}  variant="warning">Like</Button>
            </Btn>
        </div>
    );
};

export default GetDish;