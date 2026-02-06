'use client';

import { HERO_CONTENT } from '@/lib/constants';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pink-mesh grain-overlay overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-pink-300 rounded-full opacity-20 animate-float-in delay-700" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-float-in delay-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Name and Title */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold uppercase tracking-wider animate-fade-in-up">
              <Sparkles size={16} />
              <span>Marketing Maverick</span>
            </div>

            <h1 className="headline-xl text-black animate-fade-in-up delay-100">
              Helen
              <br />
              <span className="italic-accent">Ham</span>
            </h1>

            <div className="space-y-4 animate-fade-in-up delay-200">
              <p className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                {HERO_CONTENT.tagline}
              </p>
              <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                {HERO_CONTENT.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-black text-white font-bold text-lg hover:bg-pink-600 transition-all duration-300 shadow-layered-hover flex items-center gap-2"
              >
                {HERO_CONTENT.cta.primary}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-black font-bold text-lg border-4 border-black hover:bg-pink-50 hover:border-pink-600 transition-all duration-300"
              >
                {HERO_CONTENT.cta.secondary}
              </button>
            </div>
          </div>

          {/* Right: Impact Stats */}
          <div className="lg:pl-12 space-y-6 animate-scale-in delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-500 rotate-accent blur-2xl opacity-20" />
              <div className="relative bg-white border-4 border-black p-8 space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-wide">Impact by Numbers</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-pink-500 pl-6">
                    <div className="number-callout">40%</div>
                    <p className="text-gray-700 font-semibold mt-1">Rise in Student Inquiries</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6">
                    <div className="number-callout">25%</div>
                    <p className="text-gray-700 font-semibold mt-1">Enrollment Improvement</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6">
                    <div className="number-callout">100%</div>
                    <p className="text-gray-700 font-semibold mt-1">Beta Participation</p>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-200">
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-600">
                    Proven track record in growth marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm font-bold uppercase tracking-wider">Discover More</span>
            <div className="w-0.5 h-12 bg-pink-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
