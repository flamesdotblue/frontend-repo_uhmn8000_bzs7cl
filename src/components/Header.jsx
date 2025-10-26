import React, { useState } from 'react';
import { User, Building2, ChevronDown, Rocket } from 'lucide-react';

const NavLink = ({ label, active }) => (
  <a
    href="#"
    className={`text-sm md:text-base font-medium transition-colors px-3 py-2 rounded-md hover:text-blue-600 hover:bg-blue-50 ${
      active ? 'text-blue-700' : 'text-slate-600'
    }`}
  >
    {label}
  </a>
);

const Dropdown = ({ trigger, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        {trigger}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg p-2 z-50">
          {items.map((it) => (
            <button
              key={it.label}
              onClick={() => {
                setOpen(false);
                it.onClick?.();
              }}
              className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 text-slate-700"
            >
              {it.icon}
              <span className="text-sm">{it.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header({ onToolSelect }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-1/3" />
          <div className="flex items-center gap-2 select-none">
            <Rocket className="w-5 h-5 text-blue-600" />
            <h1 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">FreshLaunch.ai</h1>
          </div>
          <div className="w-1/3 flex items-center justify-end gap-3">
            <Dropdown
              trigger={
                <span className="inline-flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Candidate Login</span>
                  <span className="sm:hidden">Candidate</span>
                </span>
              }
              items={[
                {
                  label: 'ATS Analyzer',
                  icon: <Rocket className="w-4 h-4 text-blue-600" />,
                  onClick: () => onToolSelect?.('ats'),
                },
                {
                  label: 'Resume Builder',
                  icon: <User className="w-4 h-4 text-blue-600" />,
                  onClick: () => onToolSelect?.('resume'),
                },
              ]}
            />
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors">
              <Building2 className="w-4 h-4" />
              Employer Login
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-4 pb-3">
          <NavLink label="Home" active />
          <NavLink label="Jobs" />
          <NavLink label="For Candidates" />
          <NavLink label="For Companies" />
        </div>
      </div>
    </header>
  );
}
