import React, { useState } from 'react';
import { Calculator, Award, CheckCircle2, Home, ArrowRight, BookOpen, Percent } from 'lucide-react';
import { PROGRAMS, FACULTIES } from '../data/mockData';
import { ProgramLevel, Program } from '../types';

interface FeeScholarshipCalculatorProps {
  initialFacultyId?: string;
  onApplyForProgram: (programName: string) => void;
}

export const FeeScholarshipCalculator: React.FC<FeeScholarshipCalculatorProps> = ({
  initialFacultyId,
  onApplyForProgram,
}) => {
  const [levelFilter, setLevelFilter] = useState<ProgramLevel | 'ALL'>('ALL');
  const [selectedFacultyId, setSelectedFacultyId] = useState<string>(initialFacultyId || 'all');
  const [selectedProgramId, setSelectedProgramId] = useState<string>(PROGRAMS[0].id);
  const [marksPercentage, setMarksPercentage] = useState<number>(82);
  const [hostelOption, setHostelOption] = useState<'none' | 'non-ac' | 'ac'>('none');

  // Filter programs
  const filteredPrograms = PROGRAMS.filter((p) => {
    const matchLevel = levelFilter === 'ALL' || p.level === levelFilter;
    const matchFaculty = selectedFacultyId === 'all' || p.facultyId === selectedFacultyId;
    return matchLevel && matchFaculty;
  });

  const selectedProgram: Program =
    PROGRAMS.find((p) => p.id === selectedProgramId) || filteredPrograms[0] || PROGRAMS[0];

  // Scholarship logic
  let scholarshipPercent = 0;
  if (marksPercentage >= 90) scholarshipPercent = 50;
  else if (marksPercentage >= 80) scholarshipPercent = 30;
  else if (marksPercentage >= 70) scholarshipPercent = 20;
  else if (marksPercentage >= 60) scholarshipPercent = 10;

  const baseAnnualTuition = selectedProgram.annualFee;
  const scholarshipDiscount = Math.round((baseAnnualTuition * scholarshipPercent) / 100);
  const discountedTuition = baseAnnualTuition - scholarshipDiscount;

  const hostelCost = hostelOption === 'ac' ? 75000 : hostelOption === 'non-ac' ? 55000 : 0;
  const totalAnnualPayable = discountedTuition + hostelCost;
  const netSemesterPayable = Math.round(totalAnnualPayable / 2);

  return (
    <section id="fee-calculator" className="py-20 md:py-28 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Tuition & Scholarship Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif mb-3">
            Course Fee & Scholarship Calculator
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Transparent fee structure approved by state regulatory authorities. Check your academic merit scholarship entitlement and campus boarding estimates instantly.
          </p>

          {/* Program Level Filter Tabs (Component 2) */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
            {(['ALL', 'UG', 'PG', 'Diploma', 'PhD'] as (ProgramLevel | 'ALL')[]).map((level) => (
              <button
                key={level}
                onClick={() => setLevelFilter(level)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  levelFilter === level
                    ? 'bg-[#7A0C16] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {level === 'ALL' ? 'All Degrees' : level}
              </button>
            ))}
          </div>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Program Selection & Inputs */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Faculty Filter */}
              <div className="flex-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Filter by Faculty
                </label>
                <select
                  value={selectedFacultyId}
                  onChange={(e) => setSelectedFacultyId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#7A0C16]"
                >
                  <option value="all">All Academic Faculties (180+ Programs)</option>
                  {FACULTIES.map((fac) => (
                    <option key={fac.id} value={fac.id}>
                      {fac.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Program Picker */}
              <div className="flex-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Select Degree Course
                </label>
                <select
                  value={selectedProgram.id}
                  onChange={(e) => setSelectedProgramId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#7A0C16]"
                >
                  {filteredPrograms.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.name} ({prog.duration})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Program Details Card */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#7A0C16] font-serif">
                  {selectedProgram.name}
                </span>
                <span className="bg-amber-200/80 text-amber-900 font-bold px-2 py-0.5 rounded text-[11px]">
                  {selectedProgram.approvedBy}
                </span>
              </div>
              <p><strong>Eligibility:</strong> {selectedProgram.eligibility}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedProgram.keySpecializations.map((spec, i) => (
                  <span key={i} className="bg-white border border-amber-200 px-2 py-0.5 rounded text-[10px] text-slate-600">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Marks / Merit Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-amber-600" />
                  Your 12th / Qualifying Exam Score:
                </span>
                <span className="font-mono font-bold text-sm text-[#7A0C16] bg-slate-100 px-2.5 py-1 rounded">
                  {marksPercentage}%
                </span>
              </div>
              <input
                type="range"
                min="45"
                max="99"
                value={marksPercentage}
                onChange={(e) => setMarksPercentage(Number(e.target.value))}
                className="w-full accent-[#7A0C16] bg-slate-200 cursor-pointer h-2 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                <span>45% (Min Eligibility)</span>
                <span>60% (10% Off)</span>
                <span>70% (20% Off)</span>
                <span>80% (30% Off)</span>
                <span>90%+ (50% Off)</span>
              </div>
            </div>

            {/* Residential Hostel Option */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Hostel & Fooding (Optional)
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setHostelOption('none')}
                  className={`p-2.5 rounded-xl border text-center font-medium transition-colors ${
                    hostelOption === 'none'
                      ? 'bg-slate-900 text-white border-slate-900 font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Day Scholar (₹0)
                </button>
                <button
                  type="button"
                  onClick={() => setHostelOption('non-ac')}
                  className={`p-2.5 rounded-xl border text-center font-medium transition-colors ${
                    hostelOption === 'non-ac'
                      ? 'bg-slate-900 text-white border-slate-900 font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Non-AC Hostel (₹55,000/yr)
                </button>
                <button
                  type="button"
                  onClick={() => setHostelOption('ac')}
                  className={`p-2.5 rounded-xl border text-center font-medium transition-colors ${
                    hostelOption === 'ac'
                      ? 'bg-slate-900 text-white border-slate-900 font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  AC Hostel (₹75,000/yr)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Fee Statement Slip */}
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-slate-300 p-6 sm:p-8 shadow-md text-slate-900 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Estimated Fee Statement
                </span>
                <h3 className="text-lg font-bold font-serif text-[#7A0C16]">
                  {selectedProgram.name}
                </h3>
              </div>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded font-mono font-bold">
                {selectedProgram.duration}
              </span>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Standard Annual Tuition Fee</span>
                <span className="font-mono font-semibold text-slate-900">
                  ₹{baseAnnualTuition.toLocaleString('en-IN')}
                </span>
              </div>

              {scholarshipDiscount > 0 ? (
                <div className="flex justify-between text-emerald-700 bg-emerald-50 p-2 rounded-lg font-medium">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Merit Scholarship ({scholarshipPercent}% Concession)
                  </span>
                  <span className="font-mono font-bold">
                    - ₹{scholarshipDiscount.toLocaleString('en-IN')}
                  </span>
                </div>
              ) : (
                <div className="text-[11px] text-slate-400 italic">
                  Score 60%+ to unlock merit fee waivers.
                </div>
              )}

              {hostelCost > 0 && (
                <div className="flex justify-between text-slate-600">
                  <span className="flex items-center gap-1">
                    <Home className="w-3.5 h-3.5 text-slate-400" />
                    Hostel & Mess Boarding
                  </span>
                  <span className="font-mono font-semibold text-slate-900">
                    + ₹{hostelCost.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="pt-3 border-t-2 border-dashed border-slate-200">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-sm text-slate-900">Total Net Annual Payable:</span>
                  <span className="font-mono font-extrabold text-2xl text-[#7A0C16]">
                    ₹{totalAnnualPayable.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Semester Instalment (Approx):</span>
                  <span className="font-mono font-semibold text-slate-800">
                    ₹{netSemesterPayable.toLocaleString('en-IN')} / semester
                  </span>
                </div>
              </div>
            </div>

            {/* Application Trigger */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => onApplyForProgram(selectedProgram.name)}
                className="w-full py-3 bg-[#7A0C16] hover:bg-[#600911] text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Apply for {selectedProgram.name}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
              <p className="text-[10px] text-slate-500 text-center">
                Fee includes library access, lab consumables, and internal exam fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
