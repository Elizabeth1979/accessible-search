import { Search } from "lucide-react";
import PropTypes from "prop-types";

const SearchTrigger = ({ onClick, isOpen, buttonRef }) => {
  return (
    <div role="search" className="relative">
      <button
        ref={buttonRef}
        onClick={onClick}
        className="search-button p-3 hover:bg-gray-50 hover:shadow-md rounded-lg transition-all duration-200 flex items-center justify-center bg-white border-2 border-gray-400 hover:border-gray-600 cursor-pointer"
        aria-label="Search"
        aria-expanded={isOpen}
        aria-controls="search-modal"
        aria-haspopup="dialog"
        style={{ minWidth: "48px", minHeight: "48px" }}
      >
        <Search className="w-10 h-10 text-purple-800" strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
};

SearchTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  buttonRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default SearchTrigger;
