import React from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import ToolsShowcase from './components/ToolsShowcase';
import CreditModal from './components/CreditModal';
import { Shield, BarChart3, FileText, Mail, DollarSign, Building2, User } from 'lucide-react';

function useDailyCredits(initial = 3) {
  const [credits, setCredits] = React.useState(initial);

  React.useEffect(() => {
    // SEO-friendly title
    document.title = 'FreshLaunch.ai — AI-Powered Fresher Job Launchpad';

    const today = new Date().toDateString();
    const saved = localStorage.getItem('fl_credits');
    const last = localStorage.getItem('fl_lastReset');
    if (!saved || !last || last !== today) {
      localStorage.setItem('fl_credits', String(initial));
      localStorage.setItem('fl_lastReset', today);
      setCredits(initial);
    } else {
      setCredits(Number(saved));
    }
  }, [initial]);

  const consume = React.useCallback((n = 1) => {
    const saved = Number(localStorage.getItem('fl_credits') || '0');
    const next = Math.max(0, saved - n);
    localStorage.setItem('fl_credits', String(next));
    setCredits(next);
    return next;
  }, []);

  return { credits, consume };
}

export default function App() {
  const { credits, consume } = useDailyCredits(3);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedTool, setSelectedTool] = React.useState(null);

  const handleUseCredits = (tool) => {
    setSelectedTool(tool);
    if (credits <= 0) {
      setShowModal(true);
      return;
    }
    const left = consume(1);
    if (left <= 0) setShowModal(true);
    // Simulate success toast
    // eslint-disable-next-line no-alert
    alert(`Running ${tool} with Gemini 2.5 demo. Remaining credits today: ${left}`);
  };

  const handleSearch = (title, location) => {
    // eslint-disable-next-line no-alert
    alert(`Searching jobs for: ${title || 'Any'} in ${location || 'Anywhere'}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header onToolSelect={(t) => handleUseCredits(t)} />
      <HeroSearch onSearch={handleSearch} />
      <ToolsShowcase onUseCredits={handleUseCredits} />

      <section className="py-12 md:py-16 bg-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">For Candidates</h3>
            </div>
            <p className="text-slate-600">3 credits/day free. Access ATS Analyzer, Resume Builder, Cover Letters, and Salary Guide.</p>
            <ul className="mt-4 grid gap-2 text-sm list-disc list-inside text-slate-700">
              <li>Gemini 2.5 powered analytics with visual dashboards</li>
              <li>Fresh, modern blue theme matched to shadcn UI</li>
              <li>Guided onboarding with tips and examples</li>
            </ul>
            <div className="mt-4 text-sm text-slate-500">Credits left today: <span className="font-medium text-blue-700">{credits}</span></div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">For Companies</h3>
            </div>
            <p className="text-slate-600">Post jobs free (CSV import or manual). Advanced AI screening and sourcing on custom pricing.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-2"><BarChart3 className="w-4 h-4 text-blue-600" />AI Resume Screening</div>
              <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-600" />JD Generator</div>
              <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-2"><Shield className="w-4 h-4 text-blue-600" />CSV Import</div>
              <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-2"><Mail className="w-4 h-4 text-blue-600" />Contact Finder</div>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Contact Sales</button>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-r from-blue-50 to-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold">Why FreshLaunch.ai?</h4>
                <p className="text-slate-600 text-sm mt-1">Purpose-built for 0–2 years experience. Clean UI, fast load, and decision-ready dashboards.</p>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">ATS & Resume</span>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Cover Letters</span>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Salary Insights</span>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Company Tools</span>
              </div>
            </div>
          </div>
          <footer className="mt-8 py-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} FreshLaunch.ai — AI-Powered Fresher Job Launchpad
          </footer>
        </div>
      </section>

      <CreditModal open={showModal} onClose={() => setShowModal(false)} remaining={credits} />
    </div>
  );
}
