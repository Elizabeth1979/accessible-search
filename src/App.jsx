import SearchModal from "./components/search/SearchModal";
import { ExternalLink } from "lucide-react";

function App() {
  return (
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
            <span className="text-xl font-bold">SEARCH</span>
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
                    href="https://www.figma.com/design/1fYrfAkUPaMl6BUjxzPIPY/Search-New-concept?node-id=1828-47596&node-type=canvas&m=dev"
                    className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Figma definitions (opens in new window)"
                  >
                    Figma definitions
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
              </ul>
            </nav>
          </div>
          <SearchModal />
        </div>
      </header>
      <main className="flex-1" id="main-content" tabIndex="-1">
        <h1 className="text-4xl font-bold text-purple-800 max-w-7xl mx-auto px-4 py-8">
          Accessible search modal
        </h1>
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="relative group">
            <img
              src="/search-figma.jpg"
              alt="Search modal design mockup showing a clean layout with a prominent search bar at the top, followed by sections for top suggestions, featured products displayed in a grid, and collections showcasing lifestyle images below"
              className="w-full rounded-lg shadow-xl border-2 border-gray-200"
            />
            <div className="absolute inset-0 bg-purple-800/0 group-hover:bg-purple-800/5 transition-colors duration-200 rounded-lg" />
            <button
              onClick={() => window.open('https://www.figma.com/design/1fYrfAkUPaMl6BUjxzPIPY/Search-New-concept?m=dev', '_blank')}
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 flex items-center gap-2 hover:bg-blue-700"
              aria-label="Open Figma design in new window"
            >
              View in Figma
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-white shadow-md mt-auto" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <p className="text-gray-600 text-[1.2em]">Made by e11i</p>
          <img src="/a11y-icon.png" alt="" className="w-6 h-6" aria-hidden="true" />
        </div>
      </footer>
    </div>
  );
}

export default App;
