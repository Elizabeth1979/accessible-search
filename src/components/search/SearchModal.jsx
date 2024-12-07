import { useRef, useCallback } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import SearchTrigger from "./SearchTrigger";
import SearchInput from "./SearchInput";
import { useSearch } from "../../hooks/useSearch";

const SearchModal = () => {
  const searchInputRef = useRef(null);
  const searchButtonRef = useRef(null);
  const { searchValue, isOpen, handleSearchChange, clearSearch, handleOpenChange, setIsOpen } =
    useSearch();

  const handleModalClose = useCallback(
    (open) => {
      handleOpenChange(open);
      if (!open) {
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
            <form
              role="search"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Search products and collections"
            >
              <div className="flex items-center gap-4 mb-8">
                <SearchInput
                  value={searchValue}
                  onChange={handleSearchChange}
                  onClear={() => clearSearch(searchInputRef)}
                  inputRef={searchInputRef}
                />
                <button
                  onClick={() => handleModalClose(false)}
                  className="px-4 py-2 border-2 border-gray-400 rounded-lg hover:border-gray-600 hover:bg-gray-50 transition-all duration-200 text-gray-700 font-medium"
                  aria-label="Close search"
                >
                  Close
                </button>
              </div>
            </form>

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
                      className="group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200"
                      role="listitem"
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
                          className="block font-medium text-gray-900 group-hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
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

              {/* Featured Collections */}
              <div>
                <h2 className="text-xl font-semibold mb-4" id="collections-heading">
                  Featured Collections
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  role="list"
                  aria-labelledby="collections-heading"
                >
                  {[
                    {
                      title: "Summer Essentials",
                      description: "Discover our curated collection for the perfect summer",
                      image:
                        "https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?auto=format&fit=crop&w=800&h=400&q=80",
                      itemCount: "32 items",
                      href: "/collections/summer-essentials",
                    },
                    {
                      title: "Sustainable Living",
                      description: "Eco-friendly products for a better tomorrow",
                      image:
                        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&h=400&q=80",
                      itemCount: "28 items",
                      href: "/collections/sustainable-living",
                    },
                  ].map((collection, index) => (
                    <div
                      key={index}
                      className="group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200"
                      role="listitem"
                    >
                      <div className="relative aspect-[2/1]">
                        <img
                          src={collection.image}
                          alt=""
                          className="w-full h-full object-cover brightness-[0.85] group-hover:brightness-[0.95] transition-all"
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                          <a
                            href={collection.href}
                            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                            aria-label={`View ${collection.title} collection - ${collection.description}`}
                          >
                            <h3 className="text-xl font-medium mb-2">{collection.title}</h3>
                          </a>
                          <p className="text-white/90 mb-3">{collection.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">{collection.itemCount}</span>
                            <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                              View Collection →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Show All Results Button */}
              <div className="text-center">
                <button className="border border-gray-300 rounded px-6 py-2 text-sm font-medium hover:bg-gray-50">
                  Show All Search Results
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchModal;
