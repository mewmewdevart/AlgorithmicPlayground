// Dynamic Styling with CSS Classes
// Your task is to enhance the demo app that's given to you such that clicking the "Yes" and "No" buttons changes the styling of the h1 heading element.

// Whenever the "Yes" button is clicked, the "highlight-green" CSS class should be set on the h1 element. For the "No" button, it's the "highlight-red" class that must be applied.

// If not button was clicked yet, no CSS class should be added to the h1 element.

// Therefore, initially, if no button was clicked, the app should look like this:
// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-26_07-30-10-73c3b18162d28628068ee5cd2c4e6927.jpg

// If the "Yes" button is clicked, it should look like this:
// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-26_07-30-11-458e87cce4b1d6fc061dbba95bb13a11.jpg


// And if the "No" button is clicked, the following look should be the result:
// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-26_07-30-11-5c0e826aa957b2738ec77596303a9851.jpg
// Important: In this Udemy exercise environment, React hooks must be used directly on the imported React object (import React from 'react'). For example, useState would then be called like this: React.useState().

import React from 'react';

function App() {
    const [isClicked, setIsClicked] = React.useState("");
    
    function handleClick(color){
        setIsClicked(color);
    }
  return (
    <div id="app">
      <h1 className={isClicked === "green" ? "highlight-green" : isClicked === "" ? "" : "highlight-red"}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleClick("green")}>Yes</button>
        </li>
        <li>
           <button onClick={() => handleClick("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
