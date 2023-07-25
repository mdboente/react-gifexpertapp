import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';



export const GifExpertApp = () => {

    // const categories = ['categoria1', 'categoria2', 'categori a3'];

    const [categories, setCategories] = useState(['peliculas']);

    //const handleAdd = () =>{
    //    setCategories( cats => [...categories, 'elemento4']);
    //}
  return (
    <div>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={ setCategories } />
        <hr />


 
        <ol>
            {
            categories.map( cat => 
                 <GifGrid 
                 key={ cat }
                 category={ cat } />

                )
               
            }
        </ol>
        
        
    </div>
  )
}; 
