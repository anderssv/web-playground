import {html, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import {Task} from 'https://cdn.jsdelivr.net/npm/@lit/task@1.0.1/+esm';
import {getTodoList, viewDelay, wait} from './common-script.js';

export class MyElement extends LitElement {
    static properties = {
        version: {},
        time: {},
    };

    constructor() {
        super();
        this.time = new Date().toLocaleString();
    }

    _productList = new Task(this, {
        task: async () => {
            return await getTodoList();
        },
        args: () => [this.time]
    })

    render() {
        wait(viewDelay)
        return this._productList.render({
            pending: () => html`<p>Loading...</p>`,
            complete: (todoList) => html`
                <h1>Todo List</h1>
                <ul>
                    ${todoList.map(item => html`
                        <li>${item.title}</li>`)}
                </ul>
                <p>It is now ${this.time}</p>
            `,
            error: (error) => html`<p>Error: ${error}</p>`
        });
    }
}

customElements.define('my-element', MyElement);
