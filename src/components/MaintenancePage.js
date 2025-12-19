import React from "react";
import content from "../data/content.json";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Maintenance</p>
        <h1 className="text-4xl font-bold text-white mt-3">Site upgrade in progress</h1>
        <p className="text-lg text-blue-100 mt-4 leading-relaxed">
          I&apos;m refreshing this portfolio with new capabilities and content. Please check back soon while the upgrade
          finishes.
        </p>
        <div className="mt-6 space-y-2 text-sm text-gray-300">
          <p>Need to reach me in the meantime?</p>
          <a
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            href={`mailto:${content.email}`}
          >
            Email {content.name}
          </a>
        </div>
        <div className="text-xs text-gray-400 mt-6 space-y-1">
          <p>Public pages are temporarily offline while the upgrade completes.</p>
          <p>Admins can still access the console at /admin to manage content during maintenance.</p>
        </div>
      </div>
    </div>
  );
}
