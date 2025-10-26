import React from 'react';
import { Search, Briefcase, MapPin } from 'lucide-react';

export default function HeroSearch({ onSearch }) {
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">AI-Powered Fresher Job Launchpad</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Launch your first role faster with smart tools
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Search jobs tailored to 0–2 years experience and get ATS-ready guidance, cover letters, and salary insights.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl border border-slate-200 shadow-sm p-3 md:p-4">
          <div className="flex flex-col md:flex-row gap-3 md:gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job title, skills or company"
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <button
              onClick={() => onSearch?.(title, location)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Search className="w-5 h-5" />
              Search Jobs
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            Tip: Try "Software Engineer" in "Bengaluru" or "Data Analyst" in "Remote"
          </p>
        </div>
      </div>
    </section>
  );
}
