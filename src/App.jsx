import Header from "./component/Header.jsx";
import CoreConcepts from "./component/CoreConcepts.jsx";
import Examples from "./component/Example.jsx";

function App() {
  return (
    <div>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
