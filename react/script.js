
function wait(ms){
    const start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}


// Define a component called Greetings
function Greetings() {
    wait(3000);
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
