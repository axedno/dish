import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Delete} from "../../store/contactSlice";
import place from "../../image/Placeholder.png";
import ReactPaginate from 'react-paginate';

const usersPerPage = 5;



const DisplayFavorites = () => {

    const favorites = useSelector(state => state.toolkit.favorites);
    const dispatch = useDispatch();



    const [pageNumber, setPageNumber] = useState(0);

    const pagesVisited = pageNumber * usersPerPage;

    const printRecipeAll = () => {
        return (
            favorites.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index)=>{
                return (
                    <div className='display__block' key={index}>
                        <img className='display__img' src={item.strMealThumb || place} alt="recipe"/>
                        <h2 className='display__title'>{item.strMeal}</h2>
                        <p className='display__text'>{item.strInstructions}</p>
                        <button onClick={() => dispatch(Delete(index))} className='display__btn'>Delete</button>
                    </div>
                )
            })
        )
    }


    const pageCount = Math.ceil(favorites.length / usersPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className='display'>
                {printRecipeAll()}
            </div>
            <div className='pagination'>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>

    );
};

export default DisplayFavorites;