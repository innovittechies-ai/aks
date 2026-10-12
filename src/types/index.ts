export type ProgramLevel = 'UG' | 'PG' | 'Diploma' | 'PhD';

export interface Faculty {
  id: string;
  name: string;
  shortCode: string;
  tagline: string;
  description: string;
  accreditation: string;
  programsCount: number;
  featuredDegree: string;
  color: string;
}

export interface Program {
  id: string;
  name: string;
  facultyId: string;
  level: ProgramLevel;
  duration: string;
  annualFee: number;
  semesterFee: number;
  eligibility: string;
  approvedBy: string;
  intakeSeats: number;
  keySpecializations: string[];
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Examination' | 'Accreditation' | 'Event';
  isNew?: boolean;
}

export interface Recruiter {
  name: string;
  sector: string;
  highestPackage: string;
  annualHires: number;
}

export interface StudentERPProfile {
  enrollmentNo: string;
  studentName: string;
  program: string;
  faculty: string;
  currentSemester: number;
  cgpa: number;
  attendancePercent: number;
  feeStatus: 'Paid' | 'Partial' | 'Pending';
  pendingAmount: number;
  admitCardReady: boolean;
  subjects: { code: string; name: string; credits: number; grade: string }[];
}

export interface CampusFacility {
  id: string;
  title: string;
  description: string;
  category: 'Labs' | 'Infrastructure' | 'Campus Life' | 'Hostel';
  specs: string;
}
