import "./search.css";

function Search() {
  return (
    <div className="flex justify-center mt-52">
      <input type="text"
             className="search absolute rounded-md p-1"
             autoFocus={true}
      />
    </div>
  );
}

export default Search;