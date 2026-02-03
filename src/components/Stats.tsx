import { Users, TrendingUp, Clock, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Award, value: '4+', label: 'Clients Served', color: 'text-blue-600' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate', color: 'text-teal-600' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'text-cyan-600' },
    { icon: Users, value: '170+', label: 'Team Size', color: 'text-sky-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
