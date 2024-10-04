import Clock from "./home/Clock/clock.tsx";
import Search from "./home/Search/search.tsx";

function App() {
  return (
    <div className="backdrop-blur w-screen h-screen flex justify-center">
      <div className="mt-10">
        <Clock />
        <Search />
      </div>
    </div>
  );
}

export default App;
