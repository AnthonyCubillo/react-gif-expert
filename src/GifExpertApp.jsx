import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

  }


  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory

        //Propiedad
        onNewCategory={(event) => onAddCategory(event)}

      />

      <ol>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>

    </>
  )
}



//api
//RJWeSgJJktIudr1LaB1AagBHYJlx1XMU
 