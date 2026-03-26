import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchId, setSearchId] = useState('')
  const [searching, setSearching] = useState(false)

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

  const handleSearch = async (event) => {
    event.preventDefault()
    const trimmedId = searchId.trim()
    if (!trimmedId) {
      return
    }

    setSearching(true)
    setError('')

    try {
      const response = await fetch(`http://localhost:8080/api/employee/${trimmedId}`)
      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || 'Employee not found.')
      }
      const data = await response.json()
      setEmployees(data ? [data] : [])
    } catch (err) {
      setEmployees([])
      setError(err?.message || 'Something went wrong. Please try again.')
    } finally {
      setSearching(false)
    }
  }

  const handleClearSearch = () => {
    setSearchId('')
    setError('')
    setLoading(true)
    fetch('http://localhost:8080/api/employee/all')
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            throw new Error(message || 'Failed to load employees.')
          })
        }
        return response.json()
      })
      .then((data) => {
        setEmployees(Array.isArray(data) ? data : [])
      })
      .catch((err) => {
        setError(err?.message || 'Something went wrong. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6" id="employee-list">
      <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Employees</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">All Employees</h2>
            <p className="mt-2 text-sm text-slate-600">Fetched from /api/employee/all</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  inputMode="numeric"
                  placeholder="Search ID"
                  value={searchId}
                  onChange={(event) => setSearchId(event.target.value)}
                  className="w-32 rounded-full border border-slate-200 bg-white py-2 pl-4 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
                />
              </div>
              <button
                type="submit"
                disabled={searching}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {searching ? 'Searching...' : 'Search'}
              </button>
            </form>
            <button
              type="button"
              onClick={handleClearSearch}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
            >
              Reset
            </button>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              Total: <span className="font-semibold text-slate-900">{employees.length}</span>
            </div>
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
