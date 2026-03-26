import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddEmployee from './pages/AddEmployee'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AddEmployee />
      </main>
      <Footer />
    </div>
  )
}

export default App
