import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/employee/all')
        if (!response.ok) {
          const message = await response.text()
          throw new Error(message || 'Failed to load employees.')
        }
        const data = await response.json()
        if (isMounted) {
          setEmployees(Array.isArray(data) ? data : [])
        }
      } catch (err) {
        if (isMounted) {
          setError(err?.message || 'Something went wrong. Please try again.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchEmployees()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6" id="employee-list">
      <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Employees</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">All Employees</h2>
            <p className="mt-2 text-sm text-slate-600">Fetched from /api/employee/all</p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
            Total: <span className="font-semibold text-slate-900">{employees.length}</span>
          </div>
        </div>

        {loading && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Loading employees...
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        )}

        {!loading && !error && employees.length === 0 && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            No employees found yet.
          </div>
        )}

        {!loading && !error && employees.length > 0 && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3 text-right">Salary</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{employee.name}</td>
                    <td className="px-4 py-3 text-slate-600">{employee.email}</td>
                    <td className="px-4 py-3 text-slate-600">{employee.department}</td>
                    <td className="px-4 py-3 text-right text-slate-600">
                      {employee.salary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default EmployeeList
