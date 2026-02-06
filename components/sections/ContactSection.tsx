import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-pink-50 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-bold uppercase tracking-wider mb-6">
            <Send size={16} />
            <span>Let's Connect</span>
          </div>
          <h2 className="headline-lg text-black mb-6">
            Get in <span className="italic-accent">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl">
            Ready to discuss your next marketing campaign or collaboration opportunity?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-white border-4 border-black p-8 shadow-layered">
              <h3 className="text-2xl font-serif font-bold text-black mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            {/* Contact Details */}
            <div className="bg-white border-4 border-black p-8">
              <h3 className="text-2xl font-serif font-bold text-black mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group flex items-start gap-4 hover:bg-pink-50 p-4 -m-4 transition-colors"
                >
                  <div className="w-12 h-12 bg-black group-hover:bg-pink-600 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-1">Email</div>
                    <div className="font-semibold text-black">{CONTACT_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 hover:bg-pink-50 p-4 -m-4 transition-colors"
                >
                  <div className="w-12 h-12 bg-black group-hover:bg-pink-600 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-1">LinkedIn</div>
                    <div className="font-semibold text-black">Connect with me</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 -m-4">
                  <div className="w-12 h-12 bg-pink-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-1">Location</div>
                    <div className="font-semibold text-black">{CONTACT_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Block */}
            <div className="bg-black text-white p-8">
              <h4 className="text-xl font-serif font-bold mb-3">Let's Collaborate!</h4>
              <p className="text-gray-300 leading-relaxed">
                Whether you need a marketing strategist, bilingual campaign expertise, or data-driven growth strategies, I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Quick Stats Reminder */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border-2 border-pink-300 p-4 text-center">
                <div className="text-2xl font-serif italic text-pink-600 font-bold">40%</div>
                <div className="text-xs font-bold uppercase text-gray-600 mt-1">Growth</div>
              </div>
              <div className="bg-white border-2 border-pink-300 p-4 text-center">
                <div className="text-2xl font-serif italic text-pink-600 font-bold">25%</div>
                <div className="text-xs font-bold uppercase text-gray-600 mt-1">Boost</div>
              </div>
              <div className="bg-white border-2 border-pink-300 p-4 text-center">
                <div className="text-2xl font-serif italic text-pink-600 font-bold">100%</div>
                <div className="text-xs font-bold uppercase text-gray-600 mt-1">Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
