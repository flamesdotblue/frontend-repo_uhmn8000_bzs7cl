import React from 'react';
import { BarChart3, FileText, Mail, DollarSign, Sparkles } from 'lucide-react';

function Card({ icon, title, children, actionLabel, onAction, subtitle }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 flex flex-col">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-600 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-4 text-sm text-slate-700 flex-1">
        {children}
      </div>
      <div className="mt-4">
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
      <div className="p-3 rounded-lg border border-slate-200">
        <p className="text-xs text-slate-500">ATS Match</p>
        <p className="text-2xl font-semibold text-blue-700">82%</p>
        <div className="mt-2 h-2 w-full bg-slate-100 rounded-full">
          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '82%' }} />
        </div>
      </div>
      <div className="p-3 rounded-lg border border-slate-200">
        <p className="text-xs text-slate-500">Keywords Found</p>
        <p className="text-2xl font-semibold text-slate-900">37</p>
      </div>
      <div className="p-3 rounded-lg border border-slate-200 col-span-2 md:col-span-1">
        <p className="text-xs text-slate-500">Experience Fit</p>
        <p className="text-2xl font-semibold text-slate-900">High</p>
      </div>
      <div className="p-3 rounded-lg border border-slate-200 col-span-2">
        <p className="text-xs text-slate-500">Top Gaps</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {['SQL', 'System Design', 'Unit Tests'].map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ToolsShowcase({ onUseCredits }) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">All your AI tools, in one place</h2>
          <p className="mt-2 text-slate-600">Built for freshers and early-career talent. Visual, interactive, and easy to use.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card
            icon={<BarChart3 className="w-5 h-5" />}
            title="ATS Analyzer"
            subtitle="Upload resume + JD for Gemini 2.5 insights"
            actionLabel="Run ATS Analysis"
            onAction={() => onUseCredits?.('ats')}
          >
            <p>Dashboard-grade insights with pie charts, match scores, and keyword coverage. Get targeted fixes and an optimized version.</p>
            <MiniDashboard />
          </Card>

          <Card
            icon={<FileText className="w-5 h-5" />}
            title="Resume Builder"
            subtitle="Regenerate resume for a specific JD"
            actionLabel="Build My Resume"
            onAction={() => onUseCredits?.('resume')}
          >
            <p>Transform your resume to align with the job. Tailored sections, crisp bullet points, and clean formatting.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 border border-slate-200 rounded-lg text-xs">
                <p className="font-medium">Before</p>
                <ul className="list-disc list-inside text-slate-600">
                  <li>Managed college project</li>
                  <li>Used Python</li>
                </ul>
              </div>
              <div className="p-3 border border-slate-200 rounded-lg text-xs bg-blue-50/60">
                <p className="font-medium text-blue-700">After</p>
                <ul className="list-disc list-inside text-slate-700">
                  <li>Engineered data pipeline with Pandas, +34% throughput</li>
                  <li>Automated QA with PyTest, 120+ cases</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card
            icon={<Mail className="w-5 h-5" />}
            title="Cover & Cold Emails"
            subtitle="One-click professional outreach"
            actionLabel="Generate Letters"
            onAction={() => onUseCredits?.('letters')}
          >
            <p>Choose cover letter, cold email, or both. Gemini 2.5 creates multiple tone options that align with your resume and the JD.</p>
            <div className="mt-4 space-y-2 text-xs">
              <div className="p-3 rounded-lg border border-slate-200">
                <p className="font-medium">Cover Letter – Confident</p>
                <p className="text-slate-600">Highlights academic projects and measurable impact, tailored to JD requirements.</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200">
                <p className="font-medium">Cold Email – Warm</p>
                <p className="text-slate-600">Short, clear value pitch with portfolio and availability.</p>
              </div>
            </div>
          </Card>

          <Card
            icon={<DollarSign className="w-5 h-5" />}
            title="Salary Guide"
            subtitle="Market insights by role, city, and skill"
            actionLabel="Get Salary Report"
            onAction={() => onUseCredits?.('salary')}
          >
            <p>Answer a few quick questions and get a detailed salary range, demand trend, and city-wise comparison.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-200">
                <p className="text-slate-500">Median</p>
                <p className="text-lg font-semibold text-blue-700">₹6.2L</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200">
                <p className="text-slate-500">Top 10%</p>
                <p className="text-lg font-semibold text-slate-900">₹10.8L</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200">
                <p className="text-slate-500">Trend</p>
                <p className="text-lg font-semibold text-green-600">▲ 7%</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
