// Declare MyButton
function MyButton () {
    return (
        <button> This is a button</button>
    );
}

// Nest the button into another component
export default function MyApp() {
    return (
        <div>
            <h1>Have a look at my app!</h1>
            <MyButton />
        </div>
    )
}