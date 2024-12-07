import { useParams } from 'react-router-dom';

const serviceData = {
  'web-development': {
    title: 'Web Development',
    description: 'Custom web solutions built with modern technologies and accessibility in mind. Our team creates responsive, user-friendly websites that deliver exceptional experiences.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&h=800&q=80',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'Accessibility Compliance',
      'Modern Framework Integration'
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Thoughtful design solutions that prioritize user experience and accessibility. We create intuitive interfaces that delight users while maintaining functionality.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&h=800&q=80',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing'
    ]
  },
  'accessibility-consulting': {
    title: 'Accessibility Consulting',
    description: 'Expert guidance on making your digital products accessible to all users. We provide comprehensive audits and recommendations to ensure WCAG compliance.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=800&q=80',
    features: [
      'WCAG Compliance Audits',
      'Accessibility Training',
      'Remediation Support',
      'Ongoing Monitoring'
    ]
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
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
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img
          src={service.image}
          alt=""
          className="w-full h-full object-cover brightness-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{service.title}</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-600 mb-12">{service.description}</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm"
            >
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
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
        
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
