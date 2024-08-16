import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <>
      <div className="goSearchBox">
        <FiSearch className="fiSearch " />
        {/* <input type="text" placeholder="quick finding..." /> */}
        <input
          type="search"
          className="form-control form-control-dark p-0"
          placeholder="quick finding..."
          aria-label="quick finding..."
        />
      </div>
    </>
  );
};

export default SearchBox;
