 import React, { useState } from 'react';

const products = [
    { title: 'Dresses', id: 1 },
    { title: 'Shoes', id: 2},
    { title: 'Handbag', id: 3},
    { title: 'Hair Accessories', id: 4},
];

function ProductButton() {
    // state variable to track if the button is clicked
    const [clicked, setClicked] = useState(false);

    //Function toggle the visibilty of the products array

    const toggleProducts = () => {
        setClicked(!clicked);
    };

    return(
        <div className='background1'>
            {/* Button with onClick event to toggle the visibility of the products array */}
            <button onClick={toggleProducts}>Click to view products</button>
            {/* Conditional rendering of products array based on the state of clicked */}

            {
                clicked && (
                    <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                    </ul>

                     )}
                     </div>
                );

            }
 export default ProductButton
         