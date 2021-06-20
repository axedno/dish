import { createSlice } from '@reduxjs/toolkit'

const all = JSON.parse(localStorage.getItem('all'))


export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        recipe: '',
        favorites: all ? all : [],
        modal: 'hidden'

    },
    reducers: {

        getRecipe: (state, action) => {
            state.recipe = action.payload
        },
        allRecipe: (state, action) => {
            state.favorites.push(action.payload)
            localStorage.setItem('all', JSON.stringify(state.favorites))
        },
        Delete:(state, action) => {
            state.favorites.splice(action.payload, 1)
            localStorage.setItem('all', JSON.stringify(state.favorites))
        },
        modalState: (state, action) => {
            state.modal = action.payload
        }
    }
})


export const { getRecipe, allRecipe, Delete, modalState } = contactSlice.actions

export default contactSlice.reducer