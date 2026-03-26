import React, { useMemo, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  department: '',
  salary: '',
}

const AddEmployee = () => {
  const [formData, setFormData] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const formTitle = useMemo(() => formData.name.trim(), [formData])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const payload = Object.fromEntries(
        Object.entries(formData).filter(([, value]) => value !== ''),
      )

      const response = await fetch('http://localhost:8080/api/employee/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || 'Failed to add employee.')
      }

      setSuccess(formTitle ? `${formTitle} added successfully.` : 'Employee added successfully.')
      setFormData(initialForm)
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6" id="add-employee">
      <div className="grid gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Add Employee</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Create a new employee profile</h2>
          <p className="mt-3 text-sm text-slate-600">
            Enter core details below. You can extend this form later with extra fields.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <label className="text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Department
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Salary
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
              />
            </label>

            {error && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            )}
            {success && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? 'Saving...' : 'Add Employee'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddEmployee
