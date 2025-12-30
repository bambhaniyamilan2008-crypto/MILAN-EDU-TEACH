import { type NavLink } from './types';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  DollarSign,
  BarChart3,
  Settings,
  Bell,
  MessageSquare,
  ClipboardCheck,
  GraduationCap,
  Home,
  BookCopy,
  FileText,
  Contact,
  ShieldCheck,
} from 'lucide-react';

export const adminNavLinks: NavLink[] = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/students', label: 'Students', icon: Users },
  { href: '/admin/teachers', label: 'Teachers', icon: Contact },
  { href: '/admin/classes', label: 'Classes', icon: BookOpen },
  { href: '/admin/subjects', label: 'Subjects', icon: BookCopy },
  { href: '/admin/timetable', label: 'Timetable', icon: Calendar },
  { href: '/admin/fees', label: 'Fees', icon: DollarSign },
  { href: '/admin/exams', label: 'Exams & Results', icon: FileText },
  { href: '/admin/reports', label: 'Reports', icon: BarChart3 },
  { href: '/admin/notices', label: 'Notice Board', icon: Bell },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export const teacherNavLinks: NavLink[] = [
  { href: '/teacher/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/teacher/attendance', label: 'Attendance', icon: ShieldCheck },
  { href: '/teacher/notes', label: 'Notes & Materials', icon: BookOpen },
  { href: '/teacher/assignments', label: 'Assignments', icon: ClipboardCheck },
  { href: '/teacher/quizzes', label: 'Quizzes', icon: FileText },
  { href: '/teacher/performance', label: 'Student Performance', icon: BarChart3 },
  { href: '/teacher/communication', label: 'Communication', icon: MessageSquare },
];

export const studentNavLinks: NavLink[] = [
  { href: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/student/timetable', label: 'Timetable', icon: Calendar },
  { href: '/student/attendance', label: 'Attendance', icon: ShieldCheck },
  { href: '/student/homework', label: 'Homework', icon: ClipboardCheck },
  { href: '/student/materials', label: 'Study Materials', icon: BookOpen },
  { href: '/student/results', label: 'Results', icon: GraduationCap },
  { href: '/student/tutor', label: 'AI Tutor', icon: MessageSquare },
  { href: '/student/practice', label: 'Practice Tests', icon: FileText },
];

export const parentNavLinks: NavLink[] = [
  { href: '/parent/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/parent/attendance', label: 'Attendance', icon: ShieldCheck },
  { href: '/parent/fees', label: 'Fee Status', icon: DollarSign },
  { href: '/parent/progress', label: 'Academic Progress', icon: BarChart3 },
  { href: '/parent/communication', label: 'Teacher Communication', icon: MessageSquare },
  { href: '/parent/notifications', label: 'Notifications', icon: Bell },
];
