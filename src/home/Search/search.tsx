import "./search.css";
import {data} from "./shortcuts.ts";

const sendTo = (url: string) => { window.location.replace(url) };

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



function commend(args: string) {
  switch (args.charAt(0)) {
    case "!":
      shortcuts(args);
      break;

    case ":":
      localhostPort(args);
      break;

    default:
      sendTo("https://search.brave.com/search?q="+args);
      break;
  }
}

function shortcuts(args: string) {
  if (args in data) {
    const url = data[args];
    sendTo(url);
  }
}

function localhostPort(args: string) {
  sendTo("http://localhost:"+args.substring(1));
}

export default Search;