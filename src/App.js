import "./App.css";
import Cube from "./components/Cube";

function App() {
  return (
    <div className="containerApp">
      <Cube
        name="ItemA"
        color="blue"
        rounded={false}
        width="150px"
        height="150px"
      />
      <Cube
        name="ItemB"
        color="red"
        rounded={true}
        width="150px"
        height="150px"
      />
      <Cube
        name="ItemC"
        color="green"
        rounded={false}
        width="100px"
        height="100px"
      />
      <Cube
        name="ItemD"
        color="yellow"
        rounded={true}
        width="200px"
        height="200px"
      />
    </div>
  );
}

export default App;
