import "./search.css";
import data from "./shortcuts.json";

let sendTo = (url: string) => { window.location.replace(url) };

function Search() {
  window.addEventListener("keyup", function (event: KeyboardEvent) {
    if (event.key === "Enter") {
      let inp = document.getElementById("search-input") as HTMLInputElement;

      commend(inp.value);      
    }
  })

  return (
    <div className="mt-52 flex justify-center">
      <input type="text"
             autoComplete="false"
             id="search-input"
             className="search absolute rounded-md p-1 w-80 h-10 selection:bg-violet-700/40 selection:text-fuchsia-200"
             autoFocus={true}
      />
    </div>
  )
}


function commend(args: string) {
  switch (args.charAt(0)) {
    case "!":
      shortcuts(args);
      break;

    default:
      sendTo("https://search.brave.com/search?q="+args);
      break;
  }
}

function shortcuts(prefix: string) {
  if (prefix in data) {
    // @ts-ignore
    const url = data[prefix];
    sendTo(url);
  }
}

export default Search;