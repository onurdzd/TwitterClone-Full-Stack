import "./App.css";
import LeftBar from "./components/LeftBar";
import { Messages } from "./components/Messages";
import MiddleBar from "./components/MiddleBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <main className="flex container mx-auto">
        <header>
        <LeftBar></LeftBar>
        </header>
        <main className="flex justify-end">
        <MiddleBar></MiddleBar>
        <RightBar></RightBar>
        </main>
      </main>
      <footer><Messages/></footer>
    </>
  );
}

export default App;
