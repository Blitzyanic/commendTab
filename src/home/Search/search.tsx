import "./search.css";
import { commend } from "../../commend/commend.ts";

function Search() {
  window.addEventListener("keyup", function (event: KeyboardEvent) {
    if (event.key === "Enter") {
      const inp = document.getElementById("search-input") as HTMLInputElement;

      commend(inp.value);      
    }
  })

  return (
    <div className="mt-52 flex justify-center">
      <input type="text"
             autoComplete="off"
             id="search-input"
             className="search text-lg absolute rounded-md p-1 w-80 h-10 selection:bg-violet-700/40 selection:text-fuchsia-200"
             autoFocus={true}
      />
    </div>
  )
}

export default Search;