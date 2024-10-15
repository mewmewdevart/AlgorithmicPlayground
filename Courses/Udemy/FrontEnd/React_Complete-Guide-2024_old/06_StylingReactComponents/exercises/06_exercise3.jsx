// Exercise: Dynamic Styles
// Your task is to dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.

// The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.

// Make sure that the button toggles between these two styles (color: white <=> color: red).

// Here's how the finished app should look like BEFORE the button was clicked:
// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-03-23-02fdb3ce682409032876037dd28b863f.png

// Here's how it should look like AFTER the button was clicked:
// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-03-24-7c8e4ce80ee28148c63cfe980f251d9d.png

// And here's how it should look like when the button was clicked again:
// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-03-24-eb267922d64394c0023ce989aa377ec2.png

// Important: Use React.useState() instead of just useState() as the latter can cause problems in this Udemy code environment.


import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isClicked, setIsClicked] = React.useState(false);

    function handleClick(color){
        setIsClicked(prevState => !prevState);
    }

    return (
        <div>
            <p style={{color: isClicked ? 'red' : 'white'}}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
