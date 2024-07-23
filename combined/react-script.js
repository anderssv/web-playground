import {viewDelay, wait} from './common-script.js';
import React from 'https://esm.sh/react@18/?dev';
import ReactDOM from 'https://esm.sh/react-dom@18/client?dev';

// Define a component called Greetings
function Greetings() {
    wait(viewDelay);
    return <div>
        <h1>Hello readers, Thank you for reading this blog !</h1>
        <p>{new Date().toLocaleString()}</p>
    </div>;
}

ReactDOM.createRoot(document.getElementById("react-content"))
    .render(<Greetings/>);