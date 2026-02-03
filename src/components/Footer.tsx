import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const links = {
    About: ['Company', 'Team', 'Mission'],
    Services: ['Consulting', 'Outsourcing', 'AI Solutions', 'Captive Setup'],
    Resources: ['Careers', 'Blogs', 'Case Studies'],
    Contact: ['Contact Us', 'Customer Stories'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <img
              src="/navsanlogo.png"
              alt="Navsan"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Innovative solutions for your business needs. Transforming businesses through strategic consulting and cutting-edge technology.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@navsan.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@navsan.com</span>
              </a>
              <a href="tel:+12108680174" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (210) 868-0174</span>
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2026 Navsan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
