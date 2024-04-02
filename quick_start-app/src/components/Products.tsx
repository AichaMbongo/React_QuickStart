 import React, { useState } from 'react';

const products = [
    { title: 'Dresses', inStock: true, id: 1 },
    { title: 'Shoes', inStock: false, id: 2},
    { title: 'Handbag', inStock: true, id: 3},
    { title: 'Hair Accessories', inStock: true, id: 4},
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
                        <li key={product.id} 
                        style={{
                            color: product.inStock ? 'green' : 'red'
                        }}
                        >{product.title}</li>
                        
                    ))}
                    </ul>

                     )}
                     </div>
                );

            }
 export default ProductButton
         