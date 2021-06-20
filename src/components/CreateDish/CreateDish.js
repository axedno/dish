import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {allRecipe, modalState} from "../../store/contactSlice";




const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)


    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = () => {
        setDirty(true)
    }
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid

    }
}

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [inputValid, setInputValid] = useState(false)

    useEffect(()=> {
        for (const validation in validations) {
            switch (validation){
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }

    }, [value])

    useEffect(() => {
        if(isEmpty) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }

    }, [isEmpty])

    return {
        isEmpty,
        inputValid
    }
}





const CreateDish = () => {


    const modal = useSelector(state => state.toolkit.modal);
    const dispatch = useDispatch();


    const title = useInput('', {isEmpty: true });
    const text = useInput('', {isEmpty: true });


    useEffect(() => {

        if (modal === 'show') {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [modal])


    const createNewFav = (e) => {

        const create = {
            strMeal: title.value,
            strInstructions: text.value
        }
        return(
            dispatch(allRecipe(create)),
            dispatch(modalState('hidden'))
            )
    }






    return (
        <div className={`create ${modal}`}>
            <div className='create__block' >
                <div className="create__closeBtn" onClick={() => dispatch(modalState('hidden')) }>
                    &times;
                </div>
                <h2 className='create__title'>Add custom dish</h2>
                <input  onChange={e => title.onChange(e)} onBlur={e => title.onBlur(e)} className='create__input' type="text" placeholder="Dish Title" />
                {(title.isDirty && title.isEmpty) && <div style={{color: 'red', textAlign: "center"}}>Поле не может быть пустым</div>}
                <textarea  onChange={e => text.onChange(e)} onBlur={e => text.onBlur(e)} className='create__textarea' name='text' placeholder="Dish description..."/>
                {(text.isDirty && text.isEmpty) && <div style={{color: 'red', textAlign: "center"}}>Поле не может быть пустым</div>}
                <button onClick={() => createNewFav()} disabled={!title.inputValid || !text.inputValid } className='create__btn'>Add custom dish</button>
            </div>
        </div>
    );
};

export default CreateDish;