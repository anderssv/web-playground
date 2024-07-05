import {html, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

function wait(ms){
    const start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

export class MyElement extends LitElement {
    static properties = {
        version: {},
    };

    constructor() {
        super();
        this.version = 'STARTING';
    }

    render() {
        wait(3000)
        return html`
                    <p>Welcome to the Lit tutorial!</p>
                    <p>This is the ${this.version} code.</p>
                `;
    }
}

customElements.define('my-element', MyElement);
