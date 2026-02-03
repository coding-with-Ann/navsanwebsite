const Testimonials = () => {
  const testimonials = [
    {
      image: '/stories/director.jpg',
      imageAlt: 'Operations director collaboration',
      author: "Enterprise Client",
      role: "Operations Director",
    },
    {
      image: '/stories/ceo.jpg',
      imageAlt: 'Tech startup leadership',
      author: "Tech Startup",
      role: "CEO",
    },
    {
      image: '/stories/marketinghead.jpg',
      imageAlt: 'Marketing strategy session',
      author: "Marketing Agency",
      role: "Marketing Head",
    },
    {
      image: '/stories/productmanager.jpg',
      imageAlt: 'Product manager presenting',
      author: "SaaS Company",
      role: "Product Manager",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Customer Stories
          </h2>
          <p className="text-xl text-gray-600">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/10]">
                <img
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold transition-colors duration-300 hover:text-blue-500"
              >
                Read more
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
