import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-10 w-full border-t border-slate-200/70 bg-white/90">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white shadow-sm">
                <span className="text-sm font-semibold">EM</span>
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">Employee Manager</p>
                <p className="text-sm text-slate-500">People operations, simplified.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Manage employees, attendance, and team insights from one calm workspace built for daily HR workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Product</p>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <a className="transition hover:text-slate-900" href="#dashboard">Dashboard</a>
                <a className="transition hover:text-slate-900" href="#add-employee">Add Employee</a>
                <a className="transition hover:text-slate-900" href="#employee-list">Employee List</a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Resources</p>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <a className="transition hover:text-slate-900" href="#add-employee">Add Employee</a>
                <a className="transition hover:text-slate-900" href="#employee-list">Employee List</a>
                <a className="transition hover:text-slate-900" href="#policies">Policies</a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Support</p>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <a className="transition hover:text-slate-900" href="#help">Help Center</a>
                <a className="transition hover:text-slate-900" href="#contact">Contact HR</a>
                <a className="transition hover:text-slate-900" href="#settings">Settings</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Employee Manager. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-slate-900" href="#privacy">Privacy</a>
            <a className="transition hover:text-slate-900" href="#terms">Terms</a>
            <a className="transition hover:text-slate-900" href="#status">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
