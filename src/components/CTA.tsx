import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Join Our Growing List of Satisfied Clients
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Start Your Journey
        </p>
        <button className="group px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
          Get Started Today
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
