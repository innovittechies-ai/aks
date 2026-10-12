import React, { useState } from 'react';
import { Menu, X, GraduationCap, ChevronDown, Phone, ArrowRight, BookOpen, Building, Award, UserCheck } from 'lucide-react';
import { FACULTIES } from '../data/mockData';

interface NavbarProps {
  onOpenERP: () => void;
  onOpenAdmissions: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenERP, onOpenAdmissions }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setAcademicsDropdown(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#7A0C16] text-white shadow-md border-b border-[#5e0911]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          {/* Brand Emblem & University Title */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* AKS University Emblem Crest */}
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center border-2 border-white/90 shadow-md shrink-0">
              <svg className="w-8 h-8 text-[#7A0C16]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" opacity="0.8" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-serif">
                  AKS UNIVERSITY
                </span>
                <span className="text-amber-400 font-bold text-xs tracking-wider uppercase hidden sm:inline">
                  SATNA (M.P.)
                </span>
              </div>
              <span className="text-[11px] text-amber-200 tracking-wide font-medium">
                The Smart University · UGC, NAAC & ICAR Approved
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-100">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-amber-300 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}
              className="hover:text-amber-300 transition-colors"
            >
              About University
            </a>

            {/* Academics Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setAcademicsDropdown(true)}
              onMouseLeave={() => setAcademicsDropdown(false)}
            >
              <button
                onClick={() => handleScrollTo('faculties')}
                className="flex items-center gap-1 hover:text-amber-300 transition-colors py-2 focus:outline-none"
              >
                <span>Faculties</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {academicsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Faculty Departments
                  </div>
                  {FACULTIES.map((faculty) => (
                    <button
                      key={faculty.id}
                      onClick={() => handleScrollTo('faculties')}
                      className="w-full text-left px-4 py-2.5 hover:bg-amber-50 text-xs flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-semibold text-slate-900 group-hover:text-[#7A0C16] block">
                          {faculty.name}
                        </span>
                        <span className="text-[11px] text-slate-500">{faculty.accreditation}</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-400 group-hover:text-[#7A0C16]" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#fee-calculator"
              onClick={(e) => { e.preventDefault(); handleScrollTo('fee-calculator'); }}
              className="hover:text-amber-300 transition-colors"
            >
              Programs & Fees
            </a>

            <a
              href="#placements"
              onClick={(e) => { e.preventDefault(); handleScrollTo('placements'); }}
              className="hover:text-amber-300 transition-colors"
            >
              Placements
            </a>

            <a
              href="#campus"
              onClick={(e) => { e.preventDefault(); handleScrollTo('campus'); }}
              className="hover:text-amber-300 transition-colors"
            >
              Campus Life
            </a>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
              className="hover:text-amber-300 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenERP}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-900/80 hover:bg-slate-900 text-white rounded-lg border border-slate-700 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Student ERP</span>
            </button>

            <button
              onClick={onOpenAdmissions}
              className="px-4 py-2 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg shadow transition-all active:scale-95 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Apply Online 2026-27</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer (Component 1) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-md flex flex-col p-6 animate-in fade-in duration-200 text-white overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center text-[#7A0C16] font-bold">
                AKS
              </div>
              <div>
                <span className="font-bold text-base block font-serif">AKS UNIVERSITY</span>
                <span className="text-[10px] text-amber-300">Satna (M.P.) · NAAC & ICAR</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Helplines Box */}
          <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 mb-6 space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Phone className="w-3.5 h-3.5" /> Helpline: +91 88892 07776
            </div>
            <p className="text-[11px] text-slate-400">Toll Free: 1800 270 7776 (9 AM - 6 PM)</p>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <button
              onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left py-2 border-b border-slate-900 hover:text-amber-400 flex justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="text-left py-2 border-b border-slate-900 hover:text-amber-400 flex justify-between"
            >
              <span>About AKS University</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => handleScrollTo('faculties')}
              className="text-left py-2 border-b border-slate-900 hover:text-amber-400 flex justify-between"
            >
              <span>Faculties & Programs</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => handleScrollTo('fee-calculator')}
              className="text-left py-2 border-b border-slate-900 hover:text-amber-400 flex justify-between"
            >
              <span>Course & Fee Calculator</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => handleScrollTo('placements')}
              className="text-left py-2 border-b border-slate-900 hover:text-amber-400 flex justify-between"
            >
              <span>Training & Placements</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => handleScrollTo('campus')}
              className="text-left py-2 border-b border-slate-900 hover:text-amber-400 flex justify-between"
            >
              <span>Campus Facilities</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="text-left py-2 border-b border-slate-900 hover:text-amber-400 flex justify-between"
            >
              <span>Contact & Campus Location</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
          </nav>

          <div className="mt-auto pt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissions();
              }}
              className="w-full py-3 bg-amber-400 text-slate-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2"
            >
              Apply Online 2026-27 <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenERP();
              }}
              className="w-full py-2.5 bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-700"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              Student ERP Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};
