import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Employees', href: '#employees' },
    { label: 'Departments', href: '#departments' },
    { label: 'Attendance', href: '#attendance' },
    { label: 'Reports', href: '#reports' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white shadow-sm">
            <span className="text-sm font-semibold">EM</span>
          </div>
          <h1 className="text-base font-semibold text-slate-900">Employee Manager</h1>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              aria-label="Search employees"
              placeholder="Search employees"
              className="w-52 rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
            />
          </div>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
            Add
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200/70 bg-white px-4 pb-4 lg:hidden">
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl border border-slate-100 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-slate-200 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                aria-label="Search employees"
                placeholder="Search employees"
                className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
              />
            </div>
            <button className="w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
              Add Employee
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
