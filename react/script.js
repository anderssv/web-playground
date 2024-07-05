
// Define a component called Greetings
function Greetings() {
    return <div>
        <h1>Hello readers, Thank you for reading this blog !</h1>
        <p>{new Date().toLocaleString()}</p>
    </div>;
}

// Render the component to the DOM
ReactDOM.render(
    <Greetings/>,
    document.getElementById("react-content")
);
