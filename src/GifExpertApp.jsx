import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => { // El newCategory viene de AddCategory.jsx

        if (categories.includes(newCategory)) return; // En el caso se repita el input no lo insertes

        setCategories([newCategory, ...categories]); // Para agregar cambios debemos de restaurar los valores del estado inicial
        // setCategories(cat => [...cat, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            {/* Input - Componente independiente */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />

            {/* Lista de Gif 
                    { Gif Item }*/}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    );
}
