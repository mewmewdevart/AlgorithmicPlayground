// Working with Props
// Your task is to make the CourseGoal component reusable / configurable. It should accept a "title" and a "description" input and output the received data between the <h2> (title) and <p> (description) tags.

// The App component should then render at least two instances of the CourseGoal component.

// One of those CourseGoal components must receive a title of "Learn React" and a description of "In-depth". The other titles and descriptions are entirely up to you.

// The finished app could look like this:

// https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-01_16-38-57-78ee0ca041fdb0c97f79d47b85c922c0.jpg]

export function CourseGoal({title, description}) {
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
  
  function App() {
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        <ul>
        <CourseGoal title="Learn React" description="In-depth"/>
        <CourseGoal title="Larissa" description="Legal"/>
  
        </ul>
      </div>
    );
  }
  
  export default App;