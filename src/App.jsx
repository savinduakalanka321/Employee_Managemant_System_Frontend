import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Your Pages</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Add your pages here</h2>
            <p className="mt-3 text-sm text-slate-600">
              When you create pages, we can connect them with routes and navigation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
