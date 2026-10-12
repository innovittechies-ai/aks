import React, { useState } from 'react';
import { BookOpen, Award, ArrowRight, Check, ChevronRight, GraduationCap } from 'lucide-react';
import { FACULTIES, PROGRAMS } from '../data/mockData';
import { Faculty } from '../types';

interface FacultyExplorerProps {
  onSelectFacultyForCalculator: (facultyId: string) => void;
  onOpenAdmissions: () => void;
}

export const FacultyExplorer: React.FC<FacultyExplorerProps> = ({
  onSelectFacultyForCalculator,
  onOpenAdmissions,
}) => {
  const [activeFacultyId, setActiveFacultyId] = useState<string>(FACULTIES[0].id);

  const activeFaculty = FACULTIES.find((f) => f.id === activeFacultyId) || FACULTIES[0];
  const activePrograms = PROGRAMS.filter((p) => p.facultyId === activeFacultyId);

  return (
    <section id="faculties" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7A0C16] uppercase tracking-wider mb-2">
            <span>Academic Faculties</span>
            <span aria-hidden="true">·</span>
            <span>UGC & Statutory Councils Approved</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif mb-4">
            Centers of Excellence & Multidisciplinary Studies
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            With 180+ programs, AKS University bridges scholarly rigor with experiential industry training across specialized engineering, agriculture, pharmacy, and management disciplines.
          </p>
        </div>

        {/* Faculties Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 mb-8">
          {FACULTIES.map((faculty) => {
            const isSelected = faculty.id === activeFacultyId;
            return (
              <button
                key={faculty.id}
                onClick={() => setActiveFacultyId(faculty.id)}
                className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#7A0C16] text-white border-[#7A0C16] shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                    {faculty.shortCode}
                  </span>
                  <span className="text-xs font-bold line-clamp-2 mt-0.5 leading-snug">
                    {faculty.name.replace('Faculty of ', '')}
                  </span>
                </div>
                <span className={`text-[10px] font-medium ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                  {faculty.programsCount} Programs
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Faculty Spotlight Panel */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Faculty Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{activeFaculty.accreditation}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                {activeFaculty.name}
              </h3>

              <p className="text-amber-800 font-semibold text-sm">
                {activeFaculty.tagline}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeFaculty.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <button
                  onClick={() => onSelectFacultyForCalculator(activeFaculty.id)}
                  className="px-4 py-2.5 bg-[#7A0C16] hover:bg-[#600911] text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-300" />
                  <span>View Fee & Calculator for this Faculty</span>
                </button>

                <button
                  onClick={onOpenAdmissions}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors"
                >
                  Apply for Admission
                </button>
              </div>
            </div>

            {/* Featured Programs in this Faculty */}
            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Featured Degrees
                </span>
                <span className="text-xs text-amber-700 font-bold font-mono">
                  Session 2026-27
                </span>
              </div>

              <div className="space-y-2.5">
                {activePrograms.slice(0, 4).map((prog) => (
                  <div
                    key={prog.id}
                    className="p-3 rounded-lg border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900">{prog.name}</h4>
                      <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold font-mono">
                        {prog.level}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-3">
                      <span>Duration: {prog.duration}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-semibold font-mono">
                        ₹{prog.annualFee.toLocaleString('en-IN')}/year
                      </span>
                    </div>
                  </div>
                ))}

                {activePrograms.length === 0 && (
                  <p className="text-xs text-slate-500 py-3">
                    Additional doctoral and diploma curricula available in full prospectus.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
