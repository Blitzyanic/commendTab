import Clock from "./home/clock/Clock.tsx";

function App() {
  return (
    <div className="backdrop-blur w-screen h-screen flex justify-center">
      <div className="mt-10">
        <Clock />
      </div>
    </div>
  );
}

export default App;
