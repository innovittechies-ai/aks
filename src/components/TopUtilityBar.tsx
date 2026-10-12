import React from 'react';
import { Phone, Mail, Award, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';

interface TopUtilityBarProps {
  onOpenERP: () => void;
  onOpenAdmissions: () => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onOpenERP, onOpenAdmissions }) => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        {/* Left: Helplines */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Admission Helpline:</span>
            <a href="tel:+918889207776" className="font-semibold text-white hover:text-amber-400 transition-colors">
              +91 88892 07776
            </a>
            <span className="text-slate-600">/</span>
            <a href="tel:18002707776" className="text-slate-300 hover:text-white transition-colors">
              1800 270 7776 (Toll-Free)
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <a href="mailto:admissions@aksuniversity.ac.in" className="hover:text-white transition-colors">
              admissions@aksuniversity.ac.in
            </a>
          </div>
        </div>

        {/* Right: Quick Portals */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>NAAC & ICAR Accredited</span>
          </div>
          <span className="text-slate-700">|</span>
          <button
            onClick={onOpenERP}
            className="text-slate-200 hover:text-white flex items-center gap-1 transition-colors"
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>Student ERP</span>
          </button>
          <span className="text-slate-700">|</span>
          <a href="#fee-calculator" className="text-slate-200 hover:text-white transition-colors">
            Fee & Scholarship
          </a>
          <span className="text-slate-700">|</span>
          <button
            onClick={onOpenAdmissions}
            className="text-amber-300 hover:text-amber-200 font-semibold"
          >
            Admissions 2026-27
          </button>
        </div>
      </div>
    </div>
  );
};
