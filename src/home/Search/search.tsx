import "./search.css";

function Search() {

  window.addEventListener("keyup", function (event: KeyboardEvent) {
    if (event.key === "Enter") {
      let inp = document.getElementById("search-input") as HTMLInputElement;
      searchBrave(inp.value);
    }
  })

  return (
    <div className="mt-52 flex justify-center">
      <input type="text"
             id="search-input"
             className="search absolute rounded-md p-1 w-80 h-10"
             autoFocus={true}
      />
    </div>
  );
}

function searchBrave(question: string) {
  window.location.replace("https://search.brave.com/search?q="+question);
}

export default Search;