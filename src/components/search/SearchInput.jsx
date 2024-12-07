import { Search, X } from "lucide-react";
import PropTypes from "prop-types";

const SearchInput = ({ value, onChange, onClear, inputRef }) => {
  return (
    <div className="relative flex-1">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-600"
        style={{ width: "32px", height: "32px" }}
        strokeWidth={2.5}
        aria-hidden="true"
      />
      <input
        id="search-input"
        ref={inputRef}
        type="search"
        className="w-full pl-14 pr-10 py-3 border-2 rounded-lg text-gray-800 placeholder:text-gray-500 text-lg [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        autoFocus
        aria-label="Search..."
        aria-expanded={value ? "true" : "false"}
        aria-controls="search-results"
        aria-describedby="search-description"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100"
          aria-label="Clear search text"
        >
          <X className="w-5 h-5 text-gray-600" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default SearchInput;
