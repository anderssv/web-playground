import {html, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import {wait, viewDelay} from './common-script.js';

export class MyElement extends LitElement {
    static properties = {
        version: {},
        time: {}
    };

    constructor() {
        super();
        this.time = new Date().toLocaleString();
    }

    render() {
        wait(viewDelay)
        return html`
                    <h1>Hello readers, Thank you for reading this blog !</h1>
                    <p>${this.time}</p>
                `;
    }
}

customElements.define('my-element', MyElement);
