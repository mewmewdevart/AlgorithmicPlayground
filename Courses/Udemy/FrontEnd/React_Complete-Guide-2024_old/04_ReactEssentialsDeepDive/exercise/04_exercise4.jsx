Two-Way-Binding
Your task is to collect the values entered into the two input controls (<textarea> and <input>) via two-way binding.

In addition, you should pass the collected values via the appropriate props to the already existing Review component.

Important: In this Udemy workspace, you must use React.useState() instead of just useState()!

The final app should allow users to enter values and then see those entered values in the Review component which is output below the input components. It should look like this:
https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-08_08-51-31-9f73cfd685216d55ab58414730bdbdc0.jpg

https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-08_08-51-31-9f73cfd685216d55ab58414730bdbdc0.jpg
The "Save" button is just there for decoration purposes - you don't need to do anything with that!

App.js/
import React from 'react';
import Review from './Review'

// don't change the Component name "App"
function App() {
    const [userFeedback, setUserFeedback] = React.useState();
    const [userName, setUserName] = React.useState();
    
    function handleChangeUser(event){
        setUserName(event.target.value);
    }
    
    function handleChangeFeedback(event){
        setUserFeedback(event.target.value);
    }
    
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={userFeedback} onChange={handleChangeFeedback}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={userName} onChange={handleChangeUser}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={userFeedback} student={userName}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;

Review.js /
import React from 'react';

export default function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}
