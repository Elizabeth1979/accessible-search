import { useLayoutEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { products, services } from "../../data/mockData";

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    headingRef.current?.focus();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
  );

  const allResults = [...filteredProducts, ...filteredServices];

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 py-8" id="main-content">
      <h1 ref={headingRef} tabIndex={-1} className="text-3xl font-bold mb-6">
        Search Results for &ldquo;{query}&rdquo;
      </h1>

      {allResults.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-gray-500 mt-2">
            Try adjusting your search terms or browse our categories
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allResults.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
                {item.tag && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-sm rounded-full font-medium">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name || item.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                {item.price && <p className="text-gray-800 font-medium mt-2">{item.price}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default SearchResultsPage;
