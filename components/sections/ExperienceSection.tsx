import { EXPERIENCES } from '@/lib/constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-pink-50 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="headline-lg text-black mb-4">
            Work <span className="italic-accent">Experience</span>
          </h2>
          <p className="text-xl text-gray-700">Building brands and driving growth across industries</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Company & Role */}
                <div className="lg:col-span-1">
                  <div className="sticky top-32">
                    <div className="inline-block bg-black text-white px-4 py-2 text-sm font-bold mb-4">
                      <Briefcase size={16} className="inline mr-2" />
                      {exp.period}
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-black mb-2">{exp.role}</h3>
                    <p className="text-xl text-pink-600 font-bold mb-4">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                      <MapPin size={16} />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.slice(0, 3).map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className="px-3 py-1 bg-white border-2 border-black text-xs font-bold uppercase"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Achievements */}
                <div className="lg:col-span-2">
                  <div className="bg-white border-4 border-black p-8 shadow-layered">
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
                      Key Achievements
                    </h4>
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, aIndex) => (
                        <li
                          key={aIndex}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-8 h-8 bg-pink-500 flex items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                            <span className="text-white font-bold text-sm">{aIndex + 1}</span>
                          </div>
                          <p className="text-gray-800 leading-relaxed pt-1">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < EXPERIENCES.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="w-1 h-12 bg-pink-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
