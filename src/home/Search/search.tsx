import "./search.css";

let sendTo = (url: string) => { window.location.replace(url) };

function Search() {
  window.addEventListener("keyup", function (event: KeyboardEvent) {
    if (event.key === "Enter") {
      let inp = document.getElementById("search-input") as HTMLInputElement;

      if (inp.value.charAt(0) === "!") {
        commend(inp.value.substring(1));
      } else {
        searchBrave(inp.value);
      }
    }
  })

  return (
    <div className="mt-52 flex justify-center">
      <input type="text"
             id="search-input"
             className="search absolute rounded-md p-1 w-80 h-10 selection:bg-violet-700/40 selection:text-fuchsia-200"
             autoFocus={true}
      />
    </div>
  )
}

function searchBrave(question: string) {
  sendTo("https://search.brave.com/search?q="+question);
}

function commend(args: string) {
  if (args === "yt") {
    sendTo("https://www.youtube.com");
  }
}

export default Search;