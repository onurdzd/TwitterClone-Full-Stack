import "./App.css";
import LeftBar from "./components/LeftBar";
import MiddleBar from "./components/MiddleBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <main className="flex container mx-auto">
        <LeftBar></LeftBar>
        <div className="flex justify-end">
        <MiddleBar></MiddleBar>
        <RightBar></RightBar>
        </div>
      </main>
    </>
  );
}

export default App;
