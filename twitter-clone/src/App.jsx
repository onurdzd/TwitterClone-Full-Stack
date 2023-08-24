import "./App.css";
import LeftBar from "./components/LeftBar";
import MiddleBar from "./components/MiddleBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <main className="flex min-h-[100%] container">
        <LeftBar></LeftBar>
        <MiddleBar></MiddleBar>
        <RightBar></RightBar>
      </main>
    </>
  );
}

export default App;
