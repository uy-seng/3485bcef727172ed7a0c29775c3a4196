import { ABOUT_CONTENT } from '@/lib/constants';
import { Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="diagonal-split py-24 lg:py-32 grain-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="headline-lg text-black mb-6">
                About <span className="text-outline-pink">Me</span>
              </h2>
              <div className="relative">
                <Quote className="absolute -top-6 -left-6 text-pink-200" size={48} />
                <p className="text-lg text-gray-800 leading-relaxed relative z-10 pl-8">
                  {ABOUT_CONTENT.bio}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-pink-500" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-600">Marketing Coordinator</span>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in delay-300">
            {ABOUT_CONTENT.stats.map((stat, index) => (
              <div
                key={index}
                className={`relative group ${index === 0 ? 'col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-pink-500 group-hover:rotate-2 transition-transform duration-300 opacity-10" />
                <div className="relative bg-white border-4 border-black p-8 text-center group-hover:border-pink-600 transition-all duration-300">
                  <div className="number-callout mb-2">{stat.value}</div>
                  <p className="text-sm font-bold uppercase tracking-wide text-gray-700">{stat.label}</p>
                </div>
              </div>
            ))}

            {/* Tagline Block */}
            <div className="col-span-2 bg-black text-white p-8 text-center">
              <p className="text-xl font-serif italic">
                "Data-driven campaigns with creative storytelling"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
