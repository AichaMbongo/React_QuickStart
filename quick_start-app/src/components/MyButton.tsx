

// Declare MyButton
function MyButton () {

    function handleClick(){
        alert( 'You clicked me!')
    }

    return (
        <button onClick={handleClick}> 
        Click me</button>
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
        </div>
    )
}