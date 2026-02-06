import { PROJECTS } from '@/lib/constants';
import { TrendingUp, Zap } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-white grain-overlay overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-20 right-0 w-1/3 h-96 bg-pink-100 opacity-30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-bold uppercase tracking-wider mb-6">
            <Zap size={16} />
            <span>Campaign Showcase</span>
          </div>
          <h2 className="headline-lg text-black mb-6">
            Featured <span className="italic-accent">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl">
            Marketing campaigns that drove real, measurable impact across digital and traditional channels
          </p>
        </div>

        {/* Projects Grid - Asymmetric Layout */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`group relative animate-fade-in-up delay-${index * 100}`}
              >
                <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Project Number & Visual Block */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-8'}`}>
                    <div className="relative">
                      {/* Large Project Number */}
                      <div className="absolute -top-8 -left-4 text-9xl font-serif italic text-pink-100 leading-none select-none">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>

                      {/* Visual Card */}
                      <div className="relative z-10 bg-gradient-to-br from-pink-50 to-pink-100 p-8 border-4 border-black group-hover:border-pink-600 transition-all duration-300 shadow-layered-hover">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="text-pink-600" size={24} />
                          <span className="text-sm font-bold uppercase tracking-wider text-gray-900">Key Results</span>
                        </div>

                        {project.metrics && (
                          <div className="space-y-3">
                            {project.metrics.map((metric, mIndex) => (
                              <div
                                key={mIndex}
                                className="flex items-start gap-3 text-gray-900"
                              >
                                <div className="w-2 h-2 bg-pink-600 mt-2 flex-shrink-0" />
                                <span className="font-semibold">{metric}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="space-y-6">
                      <h3 className="headline-md text-black group-hover:text-pink-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="badge-bold text-pink-600 bg-white hover:bg-pink-600 hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < PROJECTS.length - 1 && (
                  <div className="mt-12 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-black text-white">
            <p className="text-lg font-bold mb-2">Want to see more case studies?</p>
            <button className="text-pink-300 underline-thick hover:text-pink-200 font-bold">
              Let's talk about your next campaign
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
