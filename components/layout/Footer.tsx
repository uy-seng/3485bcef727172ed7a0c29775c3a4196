'use client';

import { Linkedin, Mail, Heart } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Branding */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-serif italic">H</span>
              </div>
              <span className="text-xl font-bold">Helen Ham</span>
            </div>
            <p className="text-gray-400 text-sm">Marketing Strategist & Digital Brand Builder</p>
          </div>

          {/* Center: Quick Links */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} Helen Ham. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
              Made with <Heart size={12} className="text-pink-500 fill-pink-500" /> using Next.js
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center justify-end gap-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-10 h-10 bg-white hover:bg-pink-600 flex items-center justify-center transition-colors group"
              aria-label="Email"
            >
              <Mail size={20} className="text-black group-hover:text-white" />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white hover:bg-pink-600 flex items-center justify-center transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-black group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            {CONTACT_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
