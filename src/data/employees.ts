export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: 'Active' | 'In Training' | 'Completed';
  joinDate: string;
}

export const initialEmployees: Employee[] = [
  {
    id: 101,
    name: 'Rahul Sharma',
    role: 'Frontend Trainee',
    department: 'Web Development',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    status: 'In Training',
    joinDate: '2026-01-15',
  },
  {
    id: 102,
    name: 'Priya Patel',
    role: 'React Developer Trainee',
    department: 'Frontend Engineering',
    email: 'priya.patel@example.com',
    phone: '+91 98765 43211',
    status: 'Active',
    joinDate: '2026-02-01',
  },
  {
    id: 103,
    name: 'Amit Kumar',
    role: 'Backend Trainee',
    department: 'Node.js Team',
    email: 'amit.kumar@example.com',
    phone: '+91 98765 43212',
    status: 'In Training',
    joinDate: '2026-02-10',
  },
  {
    id: 104,
    name: 'Sneha Reddy',
    role: 'QA Testing Trainee',
    department: 'Quality Assurance',
    email: 'sneha.reddy@example.com',
    phone: '+91 98765 43213',
    status: 'Active',
    joinDate: '2026-01-20',
  },
  {
    id: 105,
    name: 'Karthik Raja',
    role: 'Full Stack Trainee',
    department: 'Engineering',
    email: 'karthik.raja@example.com',
    phone: '+91 98765 43214',
    status: 'Completed',
    joinDate: '2025-11-01',
  },
];

