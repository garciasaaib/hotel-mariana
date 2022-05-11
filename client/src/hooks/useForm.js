import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }


    const change = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const validate = () => {
    }

    return [values, change, reset, validate];

}