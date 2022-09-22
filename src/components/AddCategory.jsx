import { useState } from 'react';

export const AddCategory = ({ setCategories, onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    // Se envia el event por la funcion referenciada en onChange
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // setCategories((categories) => [inputValue, ...categories]); // Esto es el estado de las categorias, asi podemos agregar
        onNewCategory(inputValue.trim());
        setInputValue(''); // Esto es el estado del input
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form >
    );
}
