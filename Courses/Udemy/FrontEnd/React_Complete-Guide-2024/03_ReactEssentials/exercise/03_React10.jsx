// Dynamic List Content
// You're working on a "Todo List" web app and your task is to output a list of dummy todo items dynamically. For this task, a Todo component has been prepared for you, though you must still add some code to it to receive and output the todo text.

// To be more precise: In the App component, you should transform the DUMMY_TODOS array that's provided to you (which must not be changed!) to a list of JSX elements (<Todo> elements to be precise). Every Todo component item must receive and output the todo text via a prop called text.

// The final UI should look like this:

// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-06_13-03-48-88bea1a267e5172ede956ab99d3e73aa.jpg

App.js/
import React from 'react';

import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
    <ul>
    {DUMMY_TODOS.map((todoItem) => (
        <Todo text={todoItem} />
    ))}
    </ul>
    )
}


todo.js/
import React from 'react';

export default function Todo(props) {
    return (<li>{props.text}</li>);
}