import { Search, Lightbulb, Code, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery and Planning',
      description: 'We analyse your needs and create a tailored roadmap',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Lightbulb,
      title: 'Solution Design',
      description: 'Our experts architect the perfect solution',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Code,
      title: 'Implementation',
      description: 'We bring your solution to life',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: CheckCircle,
      title: 'Testing',
      description: 'Rigorous testing for performance',
      color: 'from-sky-500 to-sky-600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600">
            Our Service Process
          </p>
          <p className="text-lg text-gray-500 mt-2">
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-sky-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                    <div className="flex flex-col items-center text-center">
                      <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-gray-700 border-2 border-gray-100">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
