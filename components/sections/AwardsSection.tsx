import { AWARDS } from '@/lib/constants';
import { Award, Trophy, Globe, Users, Star } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Pinnacle Award': Trophy,
  'Beta Gamma Sigma Honors': Award,
  'Global Scholars Program': Globe,
  'Model UN Delegate': Users
};

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 lg:py-32 bg-black text-white grain-overlay relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-bold uppercase tracking-wider mb-6">
            <Star size={16} />
            <span>Recognition</span>
          </div>
          <h2 className="headline-lg text-white mb-4">
            Awards & <span className="text-pink-400 italic">Honors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recognized for excellence in marketing, leadership, and academic achievement
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {AWARDS.map((award, index) => {
            const IconComponent = iconMap[award.title] || Award;

            return (
              <div
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-pink-600 group-hover:rotate-1 transition-transform duration-300 opacity-20" />
                <div className="relative bg-white text-black border-4 border-white group-hover:border-pink-400 p-8 shadow-layered-hover transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-pink-600 flex items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-black mb-1">
                        {award.title}
                      </h3>
                      <p className="text-pink-600 font-bold">{award.organization}</p>
                    </div>
                    <span className="px-3 py-1 bg-black text-white text-sm font-bold">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
