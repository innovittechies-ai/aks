import React from 'react';
import { MapPin, Phone, Mail, Award, ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      {/* Top Banner with Statutory Recognitions */}
      <div className="bg-[#5e0911] text-amber-200 py-3 px-4 border-b border-amber-900/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">Statutory Approvals & Accreditations:</span>
            <span>UGC · NAAC · ICAR · AICTE · PCI · BCI · NCTE · DGMS</span>
          </div>
          <span className="text-amber-300 font-mono">
            M.P. Act No. 44/2011 · UGC Section 2(f)
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: University Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-[#7A0C16] font-bold text-sm shadow">
                AKS
              </div>
              <div>
                <span className="text-lg font-bold text-white font-serif block">
                  AKS UNIVERSITY SATNA
                </span>
                <span className="text-[11px] text-amber-400">
                  Gateway to Excellence · The Smart University
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Amrit Kripa Sagar University (AKS) is established under Madhya Pradesh Private University Act, empowering students with world-class education in Agriculture, Mining, Pharmacy, and Engineering.
            </p>

            <div className="space-y-2 text-slate-300 text-xs pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Panna Road, Sherganj, Satna, Madhya Pradesh - 485001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Helpline: +91 88892 07776 / Toll Free: 1800 270 7776</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>admissions@aksuniversity.ac.in · info@aksuniversity.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Key Academic Faculties */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Academic Faculties
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#faculties" className="hover:text-amber-400 transition-colors">Agriculture Science (ICAR)</a></li>
              <li><a href="#faculties" className="hover:text-amber-400 transition-colors">Mining Engineering (DGMS)</a></li>
              <li><a href="#faculties" className="hover:text-amber-400 transition-colors">Computer Science & AI</a></li>
              <li><a href="#faculties" className="hover:text-amber-400 transition-colors">Pharmaceutical Sciences (PCI)</a></li>
              <li><a href="#faculties" className="hover:text-amber-400 transition-colors">Management Studies (MBA/BBA)</a></li>
              <li><a href="#faculties" className="hover:text-amber-400 transition-colors">Biotechnology & Microbiology</a></li>
              <li><a href="#faculties" className="hover:text-amber-400 transition-colors">Law & Legal Studies (BCI)</a></li>
            </ul>
          </div>

          {/* Column 3: Portals & Admissions */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Admissions & Student
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Online Admission 2026-27</a></li>
              <li><a href="#fee-calculator" className="hover:text-amber-400 transition-colors">Fee Structure & Calculator</a></li>
              <li><a href="#fee-calculator" className="hover:text-amber-400 transition-colors">Merit Scholarship Criteria</a></li>
              <li><a href="#placements" className="hover:text-amber-400 transition-colors">Corporate Placement Cell</a></li>
              <li><a href="#campus" className="hover:text-amber-400 transition-colors">Campus Hostels & Mess</a></li>
              <li><a href="#campus" className="hover:text-amber-400 transition-colors">Central Digital Library</a></li>
            </ul>
          </div>

          {/* Column 4: Regulatory & Disclosures */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Mandatory Disclosures
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Anti-Ragging Committee</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Internal Complaints Cell (ICC)</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Internal Quality Assurance (IQAC)</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">SC / ST / OBC Cell</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Statutory Annual Audit Reports</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">University Academic Calendar</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} AKS University Satna (M.P.). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>UGC Reg. 2(f)</span>
            <span>·</span>
            <span>NAAC Accredited</span>
            <span>·</span>
            <span>ICAR Recognized</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
