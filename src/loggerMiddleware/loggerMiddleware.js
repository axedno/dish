


export const loggerMiddleware = store => next => action => {
    if(action.type === "contacts/getRecipe"){
        localStorage.setItem('recipe', JSON.stringify(action.payload));
    }
    return next(action);
}