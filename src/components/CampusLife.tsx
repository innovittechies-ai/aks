import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/mockData';
import { Building2, Sparkles, BookOpen, Compass, Trophy } from 'lucide-react';

export const CampusLife: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'labs' | 'students' | 'facilities'>('labs');

  return (
    <section id="campus" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7A0C16] uppercase tracking-wider mb-2">
            <span>Campus Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span>100+ Acres in Satna, MP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif mb-3">
            World-Class Learning Infrastructure
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Experience vibrant campus life designed for intellectual inquiry, hands-on scientific discovery, and comprehensive holistic student development.
          </p>
        </div>

        {/* Visual Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left Feature Card: State of the Art Labs */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src="/src/assets/images/aks_university_lab_1791789364258.jpg"
                alt="AKS University Advanced Research Laboratory"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#7A0C16] text-amber-300 font-bold text-xs px-3 py-1 rounded-full shadow">
                DGMS & ICAR Approved Labs
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">
                Cutting-Edge Experimental & Research Centers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                State-of-the-art biotechnology, precision soil testing, mining ventilation chambers, and pharmaceutical formulation pilot plants equipped with computerized analysis instruments.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                <span className="bg-slate-100 px-2.5 py-1 rounded">Rock Mechanics Lab</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Polyhouse Cultivation</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">High Performance Liquid Chromatography (HPLC)</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Cloud & AI Studio</span>
              </div>
            </div>
          </div>

          {/* Right Feature Card: Vibrant Student Community */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src="/src/assets/images/aks_students_campus_1791789376418.jpg"
                alt="AKS University Students on Campus Quad"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow">
                Student Community
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">
                Vibrant Student Life & Annual Fests
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Students from 18+ Indian states participate in active technical societies, national sports championships, NCC/NSS wings, and the flagship annual cultural extravaganza "Goonj".
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-[#7A0C16] pt-2 border-t border-slate-100">
                <span>Annual Fest: Goonj & Spandan</span>
                <span className="text-slate-500">25+ Student Clubs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAMPUS_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#7A0C16] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                  {facility.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-serif mb-2">
                  {facility.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {facility.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                {facility.specs}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
