/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopUtilityBar } from './components/TopUtilityBar';
import { NewsTicker } from './components/NewsTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FacultyExplorer } from './components/FacultyExplorer';
import { FeeScholarshipCalculator } from './components/FeeScholarshipCalculator';
import { PlacementSection } from './components/PlacementSection';
import { CampusLife } from './components/CampusLife';
import { OnlineAdmissionForm } from './components/OnlineAdmissionForm';
import { Footer } from './components/Footer';
import { StudentERPModal } from './components/StudentERPModal';

export default function App() {
  const [erpModalOpen, setErpModalOpen] = useState(false);
  const [selectedFacultyForCalc, setSelectedFacultyForCalc] = useState<string>('agri');
  const [prefilledProgram, setPrefilledProgram] = useState<string>('B.Sc. (Hons.) Agriculture');

  const scrollToAdmissions = () => {
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('fee-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFacultyForCalculator = (facultyId: string) => {
    setSelectedFacultyForCalc(facultyId);
    scrollToCalculator();
  };

  const handleApplyForProgram = (programName: string) => {
    setPrefilledProgram(programName);
    scrollToAdmissions();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Utility Bar with Helplines and ERP quick button */}
      <TopUtilityBar
        onOpenERP={() => setErpModalOpen(true)}
        onOpenAdmissions={scrollToAdmissions}
      />

      {/* Breaking Academic & Accreditation News Ticker */}
      <NewsTicker />

      {/* Main Sticky Header with Emblem, Menu & Mobile Drawer (Component 1) */}
      <Navbar
        onOpenERP={() => setErpModalOpen(true)}
        onOpenAdmissions={scrollToAdmissions}
      />

      <main className="flex-1">
        {/* Hero Section with Campus Photography & Accreditation Pillars */}
        <Hero
          onOpenAdmissions={scrollToAdmissions}
          onExploreFees={scrollToCalculator}
        />

        {/* Faculties & Centers of Excellence Spotlight */}
        <FacultyExplorer
          onSelectFacultyForCalculator={handleSelectFacultyForCalculator}
          onOpenAdmissions={scrollToAdmissions}
        />

        {/* Course Fee & Merit Scholarship Calculator (Component 2) */}
        <FeeScholarshipCalculator
          initialFacultyId={selectedFacultyForCalc}
          onApplyForProgram={handleApplyForProgram}
        />

        {/* Placements & Corporate Recruiter Showcase */}
        <PlacementSection />

        {/* Campus Facilities & Student Life */}
        <CampusLife />

        {/* Dynamic Online Admission Application Form (Component 3) */}
        <OnlineAdmissionForm
          prefilledProgram={prefilledProgram}
        />
      </main>

      {/* University Footer & Mandatory Disclosures */}
      <Footer />

      {/* Interactive Student ERP Portal Simulator Modal */}
      <StudentERPModal
        isOpen={erpModalOpen}
        onClose={() => setErpModalOpen(false)}
      />
    </div>
  );
}
