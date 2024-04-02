

// Declare MyButton
function MyButton () {
    return (
        <button> This is a button</button>
    );
}

// Nest the button into another component
export default function MyApp() {
    return (

        // JSX is stricter than HTML. You have to close tags like 
        // <br />. Your component also can’t return multiple JSX tags. 
        // You have to wrap them into a shared parent, like a <div>...</div> 
        // or an empty <>...</> wrapper:
        <div className="background">
            <h1>Have a look at my app!</h1>
            <p>For more details click the button below</p>
            <MyButton />
        </div>
    )
}