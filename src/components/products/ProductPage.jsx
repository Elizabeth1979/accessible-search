import { useParams } from 'react-router-dom';

const productData = {
  'canvas-tote-bag': {
    name: "Canvas Tote Bag",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&h=800&q=80",
    description: "A durable canvas tote bag perfect for everyday use. Made from high-quality materials, this bag combines style with functionality.",
    tag: "Best Seller",
    features: [
      "100% organic cotton canvas",
      "Reinforced handles",
      "Interior pocket",
      "Water-resistant lining"
    ],
    specs: {
      dimensions: "14\" x 16\" x 4\"",
      material: "Heavy-duty canvas",
      capacity: "20L",
      weight: "1.2 lbs"
    }
  },
  'ceramic-plant-pot': {
    name: "Ceramic Plant Pot",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1600&h=800&q=80",
    description: "Modern ceramic pot ideal for indoor plants. Features a minimalist design that complements any interior decor style.",
    features: [
      "Drainage hole with plug",
      "Glazed interior",
      "Scratch-resistant finish",
      "Built-in saucer"
    ],
    specs: {
      dimensions: "6\" x 6\" x 7\"",
      material: "Ceramic",
      weight: "2.5 lbs",
      colors: "White, Gray, Terracotta"
    }
  },
  'essential-oil-set': {
    name: "Essential Oil Set",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&h=800&q=80",
    description: "Collection of premium essential oils for aromatherapy. Each oil is carefully sourced and tested for purity.",
    tag: "New",
    features: [
      "100% pure oils",
      "No synthetic additives",
      "Therapeutic grade",
      "Sustainably sourced"
    ],
    specs: {
      quantity: "6 bottles",
      volume: "10ml each",
      includes: "Lavender, Peppermint, Eucalyptus, Tea Tree, Lemon, Orange",
      packaging: "Amber glass bottles with droppers"
    }
  },
  'wool-throw-blanket': {
    name: "Wool Throw Blanket",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=1600&h=800&q=80",
    description: "Soft and warm wool throw blanket for cozy comfort. Perfect for curling up on the couch or adding warmth to your bedroom.",
    features: [
      "100% Merino wool",
      "Hypoallergenic",
      "Naturally temperature regulating",
      "Machine washable"
    ],
    specs: {
      dimensions: "50\" x 60\"",
      material: "Merino wool",
      weight: "2.8 lbs",
      care: "Machine wash cold, lay flat to dry"
    }
  }
};

const ProductPage = () => {
  const { productId } = useParams();
  const product = productData[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-96 md:h-full">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-full object-cover"
                />
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.tag}
                  </span>
                )}
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-2xl text-blue-600 font-medium">{product.price}</p>
              </div>
              
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-gray-500 capitalize">{key}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              
              <div className="mt-8 flex gap-4">
                <button
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  onClick={() => alert('Add to Cart functionality would go here')}
                >
                  Add to Cart
                </button>
                <a
                  href="/"
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
