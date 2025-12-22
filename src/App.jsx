import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import StudentJourneyWizard from './StudentJourneyWizard'
import EmployeeJourneyWizard from './EmployeeJourneyWizard'
import UniversityListing from './UniversityListing'

import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey/student" element={<StudentJourneyWizard />} />
        <Route path="/journey/employee" element={<EmployeeJourneyWizard />} />
        <Route path="/universities" element={<UniversityListing />} />
      </Routes>
      <WhatsAppButton />
    </div>
  )
}

export default App
