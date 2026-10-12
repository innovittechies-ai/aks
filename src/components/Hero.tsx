import React from 'react';
import { ArrowRight, Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen, GraduationCap, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenAdmissions: () => void;
  onExploreFees: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onExploreFees }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background Campus Image with measured contrast gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/aks_campus_building_1791789350765.jpg"
          alt="AKS University Satna Campus Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-semibold backdrop-blur-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <span>NAAC Accredited · UGC Recognized · ICAR Accredited</span>
            </div>

            {/* University Tagline Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-serif text-balance">
              Empowering Minds, <br />
              <span className="text-amber-400 italic">Transforming Futures.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Step into <strong>AKS University Satna</strong>, central India's premier smart university. Pioneer in ICAR accredited Agriculture Science, DGMS approved Mining Engineering, and industry-aligned higher education across 180+ disciplines.
            </p>

            {/* Statutory Approvals Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ICAR Approved Agriculture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>DGMS Approved Mining</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>PCI Approved Pharmacy</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AICTE & BCI Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100+ Acre Wi-Fi Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>12.5 LPA Highest Package</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Apply for Admission 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreFees}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Explore Programs & Fees</span>
              </button>
            </div>
          </div>

          {/* Quick Admission Notice Card */}
          <div className="lg:col-span-4 bg-[#7A0C16]/95 border border-amber-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md text-white">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
                  Admissions Open
                </span>
                <h3 className="text-xl font-bold font-serif">Academic Year 2026-27</h3>
              </div>
              <div className="w-10 h-10 bg-amber-400 text-slate-950 rounded-full flex items-center justify-center font-bold text-xs shadow">
                NEW
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-200 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>B.Sc (Hons) Agriculture</strong>: Limited ICAR approved quota seats.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>B.Tech Mining Engineering</strong>: DGMS certified placement track.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>B.Pharm & D.Pharm</strong>: PCI recognized modern formulation labs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Merit Scholarships</strong>: Up to 50% tuition fee waiver for eligible students.</span>
              </li>
            </ul>

            <button
              onClick={onOpenAdmissions}
              className="w-full py-3 bg-white hover:bg-slate-100 text-[#7A0C16] font-bold text-xs rounded-xl transition-all shadow flex items-center justify-center gap-2"
            >
              <span>Instant Registration Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quantified Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              180+
            </span>
            <span className="text-xs text-slate-300">Degree & Diploma Programs</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              100+ Acres
            </span>
            <span className="text-xs text-slate-300">Lush Green Wi-Fi Campus</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              12.5 LPA
            </span>
            <span className="text-xs text-slate-300">Highest Salary Package</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              25,000+
            </span>
            <span className="text-xs text-slate-300">Global Alumni Network</span>
          </div>
        </div>
      </div>
    </section>
  );
};
