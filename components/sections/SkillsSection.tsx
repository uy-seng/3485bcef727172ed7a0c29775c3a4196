import { SKILL_CATEGORIES } from '@/lib/constants';
import { Sparkles } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-bold uppercase tracking-wider mb-6">
            <Sparkles size={16} />
            <span>Skillset</span>
          </div>
          <h2 className="headline-lg text-black">
            Skills & <span className="italic-accent">Expertise</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-pink-100 group-hover:rotate-2 transition-transform duration-300 opacity-50" />
              <div className="relative bg-white border-4 border-black p-6 group-hover:border-pink-600 transition-all duration-300">
                <h3 className="text-xl font-serif font-bold text-black mb-4 pb-2 border-b-2 border-pink-300">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 bg-pink-50 text-pink-700 text-sm font-bold border border-pink-200 hover:bg-pink-600 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
