import SearchModal from "./components/search/SearchModal";
import ServicePage from "./components/services/ServicePage";
import ProductPage from "./components/products/ProductPage";
import { ExternalLink } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./components/search/SearchResultsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 text-blue-600 z-50"
        >
          Skip to main content
        </a>
        <header className="py-4 bg-white shadow-md" role="banner">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-xl font-bold hover:text-gray-900">
                SEARCH
              </a>
              <nav className="hidden md:flex space-x-4" aria-label="Main">
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://accessibility.wixanswers.com/kb/en/guild-and-company-a11y-processes/fed"
                      className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="A11y for FEDs (opens in new window)"
                    >
                      A11y for FEDs
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/search.html"
                      className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Search landmark (opens in new window)"
                    >
                      Search landmark
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://or6793.wixstudio.com/new-demo-site"
                      className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Demo site (opens in new window)"
                    >
                      Demo site
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="-my-1.5">
                    <a
                      href="https://github.com/Elizabeth1979/accessible-search"
                      className="bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 inline-flex items-center gap-1.5 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository (opens in new window)"
                    >
                      GitHub
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <SearchModal />
          </div>
        </header>
        <Routes>
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route
            path="/"
            element={
              <main className="flex-1" id="main-content" tabIndex="-1">
                <h1 className="text-4xl font-bold text-purple-800 max-w-7xl mx-auto px-4 py-8">
                  Search modal
                </h1>
                <div className="max-w-7xl mx-auto px-4 mb-8">
                  <div className="relative group">
                    <img
                      src="/search-figma.jpg"
                      alt="Search modal design mockup showing a clean layout with a prominent search bar at the top, followed by sections for top suggestions, featured products displayed in a grid, and collections showcasing lifestyle images below"
                      className="w-full rounded-lg shadow-xl border-2 border-gray-200 aspect-[16/9] object-cover hover:shadow-2xl transition-shadow duration-300"
                    />
                    <a
                      href="https://www.figma.com/design/1fYrfAkUPaMl6BUjxzPIPY/Search-New-concept"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 hover:opacity-100 focus:opacity-100 flex items-center gap-2 hover:bg-blue-700 transition-all duration-200 z-10"
                    >
                      View in Figma
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <div className="absolute inset-0 bg-purple-800/0 group-hover:bg-purple-800/5 transition-colors duration-200 rounded-lg" />
                  </div>
                </div>
              </main>
            }
          />
        </Routes>
        <footer className="py-4 bg-gray-100 border-t border-gray-200 mt-auto" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-3">
              <p className="text-gray-600 text-[1.2em] align-middle m-0">Made by e11i</p>
              <img
                src="/a11y-icon.png"
                alt=""
                className="w-6 h-6 align-middle"
                aria-hidden="true"
              />
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
