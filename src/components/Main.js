import React from 'react';

import  {Switch, Route } from 'react-router-dom';
import {favorites, title} from "../const/const";
import GetDish from "./GetDish/GetDish";
import DisplayFavorites from "./DisplayFavorites/DisplayFavorites";




const Main = () => {
    return (
        <div className='main'>
            <Switch>
                <Route path={`/${favorites}`} exact component={DisplayFavorites}/>
                <Route path={['/',`/${title}`]} exact component={GetDish}/>
            </Switch>
        </div>
    );
};

export default Main;