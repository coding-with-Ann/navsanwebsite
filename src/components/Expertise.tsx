const Expertise = () => {
  const services = [
    {
      image: '/expertise/Process%20improvement.svg',
      imageAlt: 'Process improvement',
      title: 'Business Process Improvement',
      description: 'Strategic consulting to drive digital transformation and business growth.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      image: '/expertise/businessprocessoutsourcing.svg',
      imageAlt: 'Business process outsourcing',
      title: 'Business Process Outsourcing',
      description: 'Strategic outsourcing solutions to enhance operational efficiency.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      image: '/expertise/AIandAutomation.avif',
      imageAlt: 'AI and automation',
      title: 'AI & Automation Solutions',
      description: 'Leverage cutting-edge AI, Data and cognitive automation solutions to transform your business operations.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      image: '/expertise/Captive%20setup.svg',
      imageAlt: 'Captive setup services',
      title: 'Captive Setup Services',
      description: 'Streamline your operations with our comprehensive shared services solutions.',
      color: 'from-sky-500 to-sky-600',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative Solutions for Modern Business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/10] bg-white">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
