import React from 'react';
import {Link} from "react-router-dom";
import {favorites, title} from "../../const/const";
import styled from "styled-components";
import {Button} from "react-bootstrap";
import CreateDish from "../CreateDish/CreateDish";
import {modalState} from "../../store/contactSlice";
import {useDispatch} from "react-redux";


const Wrapper = styled.div`
     background-color: lightblue;
     display: flex;
     justify-content: flex-end;
     position: relative;
`

const NavStyle = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding-top:20px;
    width: 95%;
    div{
        display: flex;
        justify-content: space-between;
        width: 25%;
        margin: 0 auto;
    }
    button{
      height: 40px;
    }
   

`



const Nav = () => {

    const dispatch = useDispatch();




    return (
        <div>
            <Wrapper>
                <NavStyle>
                    <div>
                        <Link to={`/${title}`}>
                            <Button>Random dish</Button>
                        </Link>
                        <Link to={`/${favorites}`}>
                            <Button>Favourites</Button>
                        </Link>
                    </div>
                    <Button onClick={() => dispatch(modalState('show'))} variant="success">Add new dish</Button>
                </NavStyle>
            </Wrapper>
            <CreateDish/>
        </div>
    );
};

export default Nav;