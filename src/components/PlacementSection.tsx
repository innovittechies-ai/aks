import React from 'react';
import { Award, Briefcase, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { RECRUITERS } from '../data/mockData';

export const PlacementSection: React.FC = () => {
  return (
    <section id="placements" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Corporate Relations & Career Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif mb-3">
            Outstanding Placement Track Record
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Leading industrial conglomerates, IT leaders, and pharma giants recruit directly from AKS University Satna for engineering, mining, agriculture, and business operations.
          </p>
        </div>

        {/* Quantified Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-center">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#7A0C16] font-mono tabular-nums mb-1">
              12.50 LPA
            </span>
            <span className="text-xs font-semibold text-slate-600">Highest Salary Package</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums mb-1">
              85%+
            </span>
            <span className="text-xs font-semibold text-slate-600">Overall Placement Ratio</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#7A0C16] font-mono tabular-nums mb-1">
              350+
            </span>
            <span className="text-xs font-semibold text-slate-600">Annual Recruiting Partners</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums mb-1">
              1,800+
            </span>
            <span className="text-xs font-semibold text-slate-600">Job Offers Handed in 2025-26</span>
          </div>
        </div>

        {/* Recruiter Partners Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            Prominent Industry Recruiters
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {RECRUITERS.map((recruiter) => (
              <div
                key={recruiter.name}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#7A0C16] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    {recruiter.name}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    {recruiter.sector}
                  </span>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Package:</span>
                  <span className="font-mono font-bold text-emerald-700">
                    {recruiter.highestPackage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Support Box */}
        <div className="bg-[#7A0C16] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs">
              <Award className="w-3.5 h-3.5" />
              <span>Dedicated Placement Support</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-serif">
              Pre-Placement Training & Industry Internships
            </h4>
            <p className="text-xs text-amber-100 max-w-xl leading-relaxed">
              Every final year scholar undergoes 200+ hours of aptitude sessions, corporate personality coaching, mock interview panels, and on-site mining and agricultural fieldwork.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-colors whitespace-nowrap shadow"
          >
            Download Placement Brochure
          </a>
        </div>
      </div>
    </section>
  );
};
