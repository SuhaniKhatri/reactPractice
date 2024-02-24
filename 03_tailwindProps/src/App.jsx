import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    username: "hitesh",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card username="chai aur code" btnText="Click Me" />
      <Card username="chai aur react" btnText="Visit Me" />
    </>
  );
}

export default App;
