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
            wait(viewDelay)
            return await getTodoList();
        },
        args: () => [this.time]
    })

    render() {
        wait(viewDelay)
        return html`
            <h1>Todo List</h1>
            <ul>
                ${this._productList.render({
                    pending: () => html`<p>Loading...</p>`,
                    complete: (todoList) => todoList.map(item => html`
                        <li>${item.title}</li>`)
                    ,
                    error: (error) => html`<p>Error: ${error}</p>`
                })}
            </ul>
            <p>It is now ${this.time}</p>
        `
    }
}

customElements.define('my-element', MyElement);