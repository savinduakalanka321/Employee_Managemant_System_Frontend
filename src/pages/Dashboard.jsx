import React from 'react'

const Dashboard = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6" id="dashboard">
      <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">Dashboard</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Employee Management Hub
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Track people operations, manage records, and keep teams aligned in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
              Export Report
            </button>
            <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
              Add Employee
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Headcount</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">24</p>
            <p className="mt-1 text-xs text-slate-500">Active employees</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Departments</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">6</p>
            <p className="mt-1 text-xs text-slate-500">Across the company</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Payroll</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">LKR 2.4M</p>
            <p className="mt-1 text-xs text-slate-500">Estimated monthly</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
