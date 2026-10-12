import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, AlertCircle, FileText, Download, User, BookOpen, Award, ArrowRight } from 'lucide-react';
import { MOCK_STUDENT_PROFILE } from '../data/mockData';

interface StudentERPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentERPModal: React.FC<StudentERPModalProps> = ({ isOpen, onClose }) => {
  const [enrollmentInput, setEnrollmentInput] = useState('AKSU/2024/MIN042');
  const [passwordInput, setPasswordInput] = useState('••••••••');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [admitCardDownloaded, setAdmitCardDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (enrollmentInput.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleSimulateDownload = () => {
    setAdmitCardDownloaded(true);
    setTimeout(() => setAdmitCardDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#7A0C16] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-[#7A0C16] font-bold text-xs">
              ERP
            </div>
            <div>
              <span className="font-bold text-sm block font-serif">AKS University Student ERP Portal</span>
              <span className="text-[10px] text-amber-200">Academic & Examination Management Information System</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {!isLoggedIn ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4 py-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold font-serif text-slate-900">Student & Faculty Sign-In</h3>
                <p className="text-xs text-slate-500">Access your attendance, grades, admit cards & fee receipts.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  University Enrollment Number
                </label>
                <input
                  type="text"
                  value={enrollmentInput}
                  onChange={(e) => setEnrollmentInput(e.target.value)}
                  placeholder="e.g. AKSU/2024/MIN042"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:outline-none focus:border-[#7A0C16]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Portal Password
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:outline-none focus:border-[#7A0C16]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#7A0C16] hover:bg-[#600911] text-white font-bold text-xs rounded-xl shadow transition-colors"
              >
                Sign In to ERP Dashboard
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setEnrollmentInput('AKSU/2024/MIN042');
                    setIsLoggedIn(true);
                  }}
                  className="text-xs text-[#7A0C16] hover:underline font-semibold"
                >
                  Quick Demo: Auto-login as Aman Deep Sharma (Mining Engg)
                </button>
              </div>
            </form>
          ) : (
            /* Student Dashboard View */
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#7A0C16] text-amber-300 font-bold flex items-center justify-center text-sm shadow">
                    AS
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-serif">
                      {MOCK_STUDENT_PROFILE.studentName}
                    </h4>
                    <span className="text-xs text-slate-500 font-mono block">
                      Enrollment: {MOCK_STUDENT_PROFILE.enrollmentNo}
                    </span>
                    <span className="text-xs font-medium text-[#7A0C16]">
                      {MOCK_STUDENT_PROFILE.program}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs">
                  <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                    Regular Student
                  </span>
                  <span className="text-slate-500 text-[11px]">Academic Year 2026</span>
                </div>
              </div>

              {/* Key Academics Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="text-[11px] text-amber-800 font-bold uppercase block">Cumulative CGPA</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#7A0C16] font-mono tabular-nums">
                    {MOCK_STUDENT_PROFILE.cgpa}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[11px] text-emerald-800 font-bold uppercase block">Attendance Ratio</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-700 font-mono tabular-nums">
                    {MOCK_STUDENT_PROFILE.attendancePercent}%
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <span className="text-[11px] text-blue-800 font-bold uppercase block">Fee Clearance</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-blue-700 font-mono">
                    No Dues
                  </span>
                </div>
              </div>

              {/* Current Semester Courses & Grades */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Semester IV Performance & Enrolled Modules
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Credits: 16</span>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Course Code</th>
                        <th className="py-2.5 px-3">Course Title</th>
                        <th className="py-2.5 px-3 text-center">Credits</th>
                        <th className="py-2.5 px-3 text-right">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {MOCK_STUDENT_PROFILE.subjects.map((sub) => (
                        <tr key={sub.code} className="hover:bg-slate-50">
                          <td className="py-2 px-3 font-mono text-slate-500">{sub.code}</td>
                          <td className="py-2 px-3 font-medium text-slate-800">{sub.name}</td>
                          <td className="py-2 px-3 text-center font-mono">{sub.credits}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-emerald-700">
                            {sub.grade}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSimulateDownload}
                  className="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>
                    {admitCardDownloaded ? 'Admit Card Generated (PDF)!' : 'Download Dec 2026 Admit Card'}
                  </span>
                </button>

                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="py-2.5 px-4 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
