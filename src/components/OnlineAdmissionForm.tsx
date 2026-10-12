import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RotateCw, Printer, ArrowRight, UserCheck, Award, FileText } from 'lucide-react';
import { PROGRAMS } from '../data/mockData';
import { ProgramLevel } from '../types';

interface FormFields {
  fullName: string;
  fatherName: string;
  email: string;
  mobile: string;
  state: string;
  city: string;
  level: ProgramLevel;
  programName: string;
  marksPercent: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  fatherName?: string;
  email?: string;
  mobile?: string;
  state?: string;
  city?: string;
  marksPercent?: string;
}

interface OnlineAdmissionFormProps {
  prefilledProgram?: string;
}

export const OnlineAdmissionForm: React.FC<OnlineAdmissionFormProps> = ({ prefilledProgram }) => {
  const [formData, setFormData] = useState<FormFields>({
    fullName: '',
    fatherName: '',
    email: '',
    mobile: '',
    state: 'Madhya Pradesh',
    city: '',
    level: 'UG',
    programName: prefilledProgram || 'B.Sc. (Hons.) Agriculture',
    marksPercent: '78',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acknowledgment, setAcknowledgment] = useState<{
    appNumber: string;
    submittedAt: string;
    data: FormFields;
  } | null>(null);

  // Sync if prefilledProgram changes
  React.useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, programName: prefilledProgram }));
    }
  }, [prefilledProgram]);

  const validate = (data: FormFields): FormErrors => {
    const errs: FormErrors = {};

    if (!data.fullName.trim()) {
      errs.fullName = 'Full Name is required as per 10th marksheet.';
    } else if (data.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!data.fatherName.trim()) {
      errs.fatherName = "Father's or Guardian's name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = 'Email address is required for communication.';
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    const mobileDigits = data.mobile.replace(/\D/g, '');
    if (!data.mobile.trim()) {
      errs.mobile = '10-digit mobile number is required.';
    } else if (mobileDigits.length !== 10) {
      errs.mobile = 'Mobile number must be exactly 10 digits.';
    }

    if (!data.city.trim()) {
      errs.city = 'City / District is required.';
    }

    const marksNum = Number(data.marksPercent);
    if (!data.marksPercent.trim() || isNaN(marksNum) || marksNum < 0 || marksNum > 100) {
      errs.marksPercent = 'Please provide valid qualifying marks (0 - 100%).';
    } else if (marksNum < 45) {
      errs.marksPercent = 'Minimum 45% required for university admission consideration.';
    }

    return errs;
  };

  const handleBlur = (field: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleChange = (field: keyof FormFields, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const randId = Math.floor(1000 + Math.random() * 9000);
        setAcknowledgment({
          appNumber: `AKSU-2026-${randId}`,
          submittedAt: new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          data: formData,
        });
      }, 800);
    }
  };

  const handleReset = () => {
    setAcknowledgment(null);
    setFormData({
      fullName: '',
      fatherName: '',
      email: '',
      mobile: '',
      state: 'Madhya Pradesh',
      city: '',
      level: 'UG',
      programName: 'B.Sc. (Hons.) Agriculture',
      marksPercent: '78',
      message: '',
    });
    setTouched({});
    setErrors({});
  };

  return (
    <section id="admissions" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Admission Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#7A0C16] text-xs font-bold uppercase tracking-wider">
              <span>Online Application Portal</span>
              <span>·</span>
              <span>Session 2026-27</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif leading-tight">
              Begin Your Academic Journey at AKS University
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Fill out the centralized application form to register for direct counseling or the AKS Entrance Examination (AKS-ET). Our dedicated admissions office reviews forms on a rolling basis.
            </p>

            {/* Steps Timeline */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#7A0C16] text-amber-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Online Form Submission</h4>
                  <p className="text-[11px] text-slate-500">Submit student details, academic qualifications, and preferred course specialization.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#7A0C16] text-amber-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Merit Verification & Counseling</h4>
                  <p className="text-[11px] text-slate-500">Document scrutiny by faculty admission committee and scholarship evaluation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#7A0C16] text-amber-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Provisional Seat Confirmation</h4>
                  <p className="text-[11px] text-slate-500">Enrollment number issuance and student ERP activation.</p>
                </div>
              </div>
            </div>

            {/* Helpline Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-[#7A0C16] block">Need Assistance During Registration?</span>
              <p className="text-[11px] text-slate-500">Call Admission Cell: +91 88892 07776 or Toll-Free 1800 270 7776</p>
            </div>
          </div>

          {/* Right Column: Dynamic Form or Acknowledgment Slip (Component 3) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm">
            {acknowledgment ? (
              /* Acknowledgment Slip Card */
              <div className="space-y-6 text-slate-900 animate-in fade-in duration-200">
                <div className="text-center pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-700 mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Registration Successfully Recorded
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#7A0C16]">
                    AKS University Provisional Application Slip
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Application ID: <strong>{acknowledgment.appNumber}</strong>
                  </p>
                </div>

                {/* Candidate Summary */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 text-xs space-y-2.5 font-medium">
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Candidate Name:</span>
                    <span className="text-slate-900 font-bold">{acknowledgment.data.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Father's Name:</span>
                    <span className="text-slate-900">{acknowledgment.data.fatherName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Selected Program:</span>
                    <span className="text-[#7A0C16] font-bold">{acknowledgment.data.programName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Contact Number:</span>
                    <span className="font-mono">{acknowledgment.data.mobile}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Registered Email:</span>
                    <span className="font-mono">{acknowledgment.data.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Location:</span>
                    <span>{acknowledgment.data.city}, {acknowledgment.data.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Qualifying Marks:</span>
                    <span className="font-mono font-bold text-emerald-700">{acknowledgment.data.marksPercent}% (Eligible)</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Award className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    Your application has been routed to the counseling desk. An admission officer will reach out on your mobile for document verification.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" /> Print Acknowledgment Slip
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2.5 bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold hover:bg-slate-300 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-2">
                  <h3 className="text-base font-bold font-serif text-[#7A0C16]">
                    Online Admission Form 2026-27
                  </h3>
                  <span className="text-[11px] text-slate-500">Step 1 of 2 · No Application Fee</span>
                </div>

                {/* Candidate Full Name & Father Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Candidate Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="e.g. Rahul Singh"
                      className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${
                        touched.fullName && errors.fullName
                          ? 'border-red-500'
                          : 'border-slate-300 focus:border-[#7A0C16]'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Father's / Guardian's Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fatherName}
                      onChange={(e) => handleChange('fatherName', e.target.value)}
                      onBlur={() => handleBlur('fatherName')}
                      placeholder="e.g. Shri Virendra Singh"
                      className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${
                        touched.fatherName && errors.fatherName
                          ? 'border-red-500'
                          : 'border-slate-300 focus:border-[#7A0C16]'
                      }`}
                    />
                    {touched.fatherName && errors.fatherName && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fatherName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mobile & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs font-mono">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={(e) => handleChange('mobile', e.target.value)}
                        onBlur={() => handleBlur('mobile')}
                        placeholder="9876543210"
                        className={`w-full px-3 py-2 bg-white border rounded-r-xl text-xs text-slate-900 focus:outline-none transition-colors ${
                          touched.mobile && errors.mobile
                            ? 'border-red-500'
                            : 'border-slate-300 focus:border-[#7A0C16]'
                        }`}
                      />
                    </div>
                    {touched.mobile && errors.mobile && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="student@example.com"
                      className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? 'border-red-500'
                          : 'border-slate-300 focus:border-[#7A0C16]'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* State & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleChange('state', e.target.value)}
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#7A0C16]"
                    >
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Other">Other State</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      onBlur={() => handleBlur('city')}
                      placeholder="e.g. Satna / Rewa / Jabalpur"
                      className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${
                        touched.city && errors.city
                          ? 'border-red-500'
                          : 'border-slate-300 focus:border-[#7A0C16]'
                      }`}
                    />
                    {touched.city && errors.city && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                {/* Program Level & Course Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Program Level
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => handleChange('level', e.target.value as ProgramLevel)}
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#7A0C16]"
                    >
                      <option value="UG">Undergraduate (UG)</option>
                      <option value="PG">Postgraduate (PG)</option>
                      <option value="Diploma">Diploma / Polytechnic</option>
                      <option value="PhD">Ph.D. Doctoral</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Selected Course *
                    </label>
                    <select
                      value={formData.programName}
                      onChange={(e) => handleChange('programName', e.target.value)}
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#7A0C16]"
                    >
                      {PROGRAMS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Qualifying Marks */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Qualifying Exam Aggregate Percentage (10+2 / Graduation) *
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={formData.marksPercent}
                      onChange={(e) => handleChange('marksPercent', e.target.value)}
                      onBlur={() => handleBlur('marksPercent')}
                      placeholder="e.g. 78"
                      className={`w-32 px-3.5 py-2 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${
                        touched.marksPercent && errors.marksPercent
                          ? 'border-red-500'
                          : 'border-slate-300 focus:border-[#7A0C16]'
                      }`}
                    />
                    <span className="text-xs text-slate-500">
                      {Number(formData.marksPercent) >= 80 ? (
                        <span className="text-emerald-700 font-bold">★ Eligible for up to 30%-50% Merit Scholarship!</span>
                      ) : Number(formData.marksPercent) >= 50 ? (
                        <span className="text-emerald-600 font-medium">✓ Eligible for Direct Admission Counseling</span>
                      ) : (
                        <span className="text-slate-500">Subject to minimum regulatory norms</span>
                      )}
                    </span>
                  </div>
                  {touched.marksPercent && errors.marksPercent && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.marksPercent}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-[#7A0C16] hover:bg-[#600911] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <RotateCw className="w-4 h-4 animate-spin" />
                        <span>Generating Provisional Registration Slip...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-300" />
                        <span>Submit Online Application & Generate Slip</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2">
                    By submitting, you agree to receive official academic alerts from AKS University Satna.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
