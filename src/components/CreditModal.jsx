import React from 'react';

export default function CreditModal({ open, onClose, remaining }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-900">Upgrade to Pro</h3>
          <p className="mt-2 text-slate-600 text-sm">
            You have used your daily credits. Free plan includes 3 credits/day and resets every 24 hours.
          </p>
        </div>
        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm text-blue-900"><span className="font-medium">Pro</span> — 50 credits/day, priority processing, and advanced analytics exports.</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-white border border-slate-200">
              <p className="font-medium text-slate-900">Monthly</p>
              <p className="text-slate-600">₹399 / $6</p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-200">
              <p className="font-medium text-slate-900">Yearly</p>
              <p className="text-slate-600">₹3,999 / $59</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-slate-500">Remaining today: {remaining} credits</p>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">Not now</button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
