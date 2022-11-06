import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" bg-[#f1f7fc]">
      <Navbar check={false} />
      <Body />
    </div>
  );
}

export default App;
