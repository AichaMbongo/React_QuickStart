
import { useState } from "react";
// Declare MyButton
function MyButton () {
 const [count, setCount] = useState(0)
    function handleClick(){
        alert( 'You clicked me!')
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}> 
        You have Clicked me {count} times</button>

        
    );
}

// Nest the button into another component
export default function MyApp() {
    return (

        // JSX is stricter than HTML. You have to close tags like 
        // <br />. Your component also can’t return multiple JSX tags. 
        // You have to wrap them into a shared parent, like a <div>...</div> 
        // or an empty <>...</> wrapper:
        <div className="background1">
            <h1>Have a look at my app!</h1>
            <p>For more details click the button below</p>
            <MyButton />
            <MyButton />
        </div>
    )
}