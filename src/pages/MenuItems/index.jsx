import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Row  ,Col ,Container} from 'react-bootstrap';
 
const MenuItem= () => {
      const [recipes , setRecipes] = useState([]);
      
      useEffect( () =>{
  axios.get('https://dummyjson.com/recipes')
  .then(response =>{
    setRecipes(response.data.recipes);

  }) 
  .catch(err =>{
    console.error(err)
  });
},[] );

return(

<Container>
    <div className="py-5">
      <h2 className="text-center fw-bolder mb-5 display-4 fw-bolder">Menu Items</h2> 
  <Row>
      { recipes.map((recipe,index) =>(
        <Col key={recipe.id} md={4} className='mb-4'>
          <div className="p-3 border h-100 shadow-sm">
            <div className='overflow-hidden'><img src={recipe.image} className="img-fluid object-fit-cover"alt="" /></div>
        <h4 className='mt-4'>{recipe.name}</h4>
        <p className='fs-4'>{recipe.cuisine}</p>
        <p className='fs-5 fw-lighter'> {recipe.caloriesPerServing}rs</p>
        </div>
        </Col>
      ))}
  </Row>
    </div>
</Container>
)

}

export default MenuItem;