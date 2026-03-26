import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddEmployee from './pages/AddEmployee'
import EmployeeList from './pages/EmployeeList'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Dashboard />
        <AddEmployee />
        <EmployeeList />
      </main>
      <Footer />
    </div>
  )
}

export default App
