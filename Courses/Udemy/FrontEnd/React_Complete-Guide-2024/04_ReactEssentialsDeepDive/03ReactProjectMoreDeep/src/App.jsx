import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <div className="heart-icon">
        <img src="src/assets/heart.svg" alt="" />
      </div>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
