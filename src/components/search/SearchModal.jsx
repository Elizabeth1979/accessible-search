import { useRef, useCallback } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import SearchTrigger from "./SearchTrigger";
import SearchInput from "./SearchInput";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate, Link } from "react-router-dom";

const SearchModal = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const searchButtonRef = useRef(null);
  const { searchValue, isOpen, handleSearchChange, clearSearch, handleOpenChange, setIsOpen } =
    useSearch();

  const handleModalClose = useCallback(
    (open, isNavigatingToSearch = false) => {
      handleOpenChange(open);
      if (!open && !isNavigatingToSearch) {
        const buttonToFocus = searchButtonRef.current;
        requestAnimationFrame(() => {
          buttonToFocus?.focus();
        });
      }
    },
    [handleOpenChange]
  );

  return (
    <>
      <SearchTrigger onClick={() => setIsOpen(true)} isOpen={isOpen} buttonRef={searchButtonRef} />

      <Dialog
        open={isOpen}
        onOpenChange={handleModalClose}
        aria-label="Search products and collections"
      >
        <DialogContent
          className="sm:max-w-[800px]"
          id="search-modal"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6">
            <div className="flex items-center gap-4 mb-8">
              <SearchInput
                value={searchValue}
                onChange={handleSearchChange}
                onClear={() => clearSearch(searchInputRef)}
                inputRef={searchInputRef}
                onSubmit={(isNavigatingToSearch) => handleModalClose(false, isNavigatingToSearch)}
              />
              <button
                onClick={() => handleModalClose(false)}
                className="px-4 py-2 border-2 border-gray-400 rounded-lg hover:border-gray-600 hover:bg-gray-50 transition-all duration-200 text-gray-700 font-medium"
                aria-label="Close search"
              >
                Close
              </button>
            </div>

            {/* Search Results Section */}
            <div className="space-y-8" role="region" aria-label="Search results">
              {/* Top Suggestions */}
              <div>
                <h2 className="text-lg font-semibold mb-3" id="suggestions-heading">
                  Top suggestions
                </h2>
                <ul className="space-y-2" aria-labelledby="suggestions-heading">
                  {["New Arrivals", "Best Sellers", "Summer Collection", "Sale Items"].map(
                    (suggestion) => (
                      <li key={suggestion}>
                        <a
                          href={`/search?q=${encodeURIComponent(suggestion)}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm underline"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSearchChange({ target: { value: suggestion } });
                            handleModalClose(false);
                            navigate(`/search?q=${encodeURIComponent(suggestion)}`);
                          }}
                        >
                          {suggestion}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h2 className="text-lg font-semibold mb-4" id="products-heading">
                  Products
                </h2>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                  role="list"
                  aria-labelledby="products-heading"
                >
                  {[
                    {
                      name: "Canvas Tote Bag",
                      price: "$49.99",
                      image:
                        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=280&h=320&q=80",
                      tag: "Best Seller",
                      description: "A durable canvas tote bag perfect for everyday use",
                      href: "/products/canvas-tote-bag",
                    },
                    {
                      name: "Ceramic Plant Pot",
                      price: "$29.99",
                      image:
                        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=280&h=320&q=80",
                      description: "Modern ceramic pot ideal for indoor plants",
                      href: "/products/ceramic-plant-pot",
                    },
                    {
                      name: "Essential Oil Set",
                      price: "$39.99",
                      image:
                        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=280&h=320&q=80",
                      tag: "New",
                      description: "Collection of premium essential oils for aromatherapy",
                      href: "/products/essential-oil-set",
                    },
                    {
                      name: "Wool Throw Blanket",
                      price: "$79.99",
                      image:
                        "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=280&h=320&q=80",
                      description: "Soft and warm wool throw blanket for cozy comfort",
                      href: "/products/wool-throw-blanket",
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
                      role="listitem"
                      onClick={(e) => {
                        // Only trigger if the click wasn't on the title link
                        if (!e.target.closest("a")) {
                          handleModalClose(false);
                          navigate(product.href);
                        }
                      }}
                    >
                      <div className="relative aspect-[7/8]">
                        <img
                          src={product.image}
                          alt={product.description}
                          className="w-full h-full object-cover"
                        />
                        {product.tag && (
                          <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-sm rounded-full font-medium">
                            {product.tag}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <a
                          href={product.href}
                          className="block font-medium text-gray-900 group-hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded relative z-10"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleModalClose(false);
                            navigate(product.href);
                          }}
                          aria-label={`View ${product.name} - ${product.description}`}
                        >
                          {product.name}
                        </a>
                        <p className="text-gray-600 mt-1 font-medium">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xl font-semibold mb-4" id="services-heading">
                  Services
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  role="list"
                  aria-labelledby="services-heading"
                >
                  {[
                    {
                      title: "Web Development",
                      description:
                        "Custom web solutions built with modern technologies and accessibility in mind. Our team creates responsive, user-friendly websites that deliver exceptional experiences.",
                      href: "/services/web-development",
                      image:
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=400&q=80",
                    },
                    {
                      title: "UI/UX Design",
                      description:
                        "Thoughtful design solutions that prioritize user experience and accessibility. We create intuitive interfaces that delight users while maintaining functionality.",
                      href: "/services/ui-ux-design",
                      image:
                        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=400&q=80",
                    },
                    {
                      title: "Accessibility Consulting",
                      description:
                        "Expert guidance on making your digital products accessible to all users. We provide comprehensive audits and recommendations to ensure WCAG compliance.",
                      href: "/services/accessibility-consulting",
                      image:
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=400&q=80",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
                      role="listitem"
                      onClick={(e) => {
                        // Only trigger if the click wasn't on the title link
                        if (!e.target.closest("a")) {
                          handleModalClose(false);
                          navigate(service.href);
                        }
                      }}
                    >
                      <div className="relative h-48">
                        <img
                          src={service.image}
                          alt=""
                          className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-200"
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
                      </div>
                      <div className="p-6">
                        <a
                          href={service.href}
                          className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded relative z-10"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleModalClose(false);
                            navigate(service.href);
                          }}
                        >
                          {service.title}
                        </a>
                        <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  to={`/search?q=${encodeURIComponent(searchValue)}`}
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  onClick={() => handleModalClose(false, true)}
                >
                  View all search results
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchModal;
