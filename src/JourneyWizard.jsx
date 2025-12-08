import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const degreeOptions = [
  'Bachelors',
  'Masters Degree',
  'MBA',
  'PG Diploma',
  'M.Phil',
  'PhD',
  'UG Diploma',
  'Graduation',
  'Post Graduation',
  'MBBS',
  'MRes Program',
]

const destinationOptions = [
  { value: 'Europe Countries', label: 'Europe Countries', image: 'https://flagcdn.com/w80/eu.png' },
  { value: 'Others', label: 'Others', image: 'https://flagcdn.com/w80/un.png' },
]

const intakeOptions = [
  { value: 'Jan-2026', label: 'January 2026', tag: 'Recommended' },
  { value: 'May-2026', label: 'May 2026' },
  { value: 'Sep-2026', label: 'September 2026' },
  { value: 'Jan-2027', label: 'January 2027' },
  { value: 'Not-decided', label: "I haven't decided yet" },
]

const educationOptions = [
  'Below 10th Grade',
  '10th',
  '12th',
  'Bachelors',
  'Masters',
  'Diploma',
  'Doctorate',
  'Pursuing Graduation And Above',
]

const englishExamOptions = ['TOEFL', 'IELTS', 'PTE', 'Not Decided Yet']

const passportOptions = ['Yes', 'No', 'Applied']

const budgetOptions = [
  'Below 10 Lakhs',
  '10 – 15 Lakhs',
  '15 – 20 Lakhs',
  '20 – 30 Lakhs',
  '30 – 50 Lakhs',
  '50 Lakhs +',
]

const employmentOptions = [
  'Employed',
  'Unemployed',
  'Self-Employed',
  'Student',
  'Fresher',
]

const stateOptions = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
]

const cityOptions = [
  'Bengaluru',
  'Chennai',
  'Delhi',
  'Hyderabad',
  'Kolkata',
  'Mumbai',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Other',
]

const JourneyWizard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const userType = urlParams.get('userType') || 'student' // default to student if not specified
  const isEmployee = userType === 'employee'

  const totalSteps = isEmployee ? 3 : 9

  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    degree: null,
    destination: null,
    intake: null,
    educationLevel: null,
    englishExam: null,
    passportStatus: null,
    budgetRange: null,
    employmentStatus: null,
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  })

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    } else {
      navigate('/')
    }
  }

  const handleSelect = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
    if (step < totalSteps) {
      setStep((prev) => prev + 1)
    }
  }

  const handleInputChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitDetails = (e) => {
    e.preventDefault()
    // TODO: integrate with API / backend. For now just go back to home.
    navigate('/')
  }

  const progress = (step / totalSteps) * 100

  // Conditional rendering logic
  const showDegree = !isEmployee && step === 1
  const showDestination = (isEmployee && step === 2) || (!isEmployee && step === 2)
  const showIntake = !isEmployee && step === 3
  const showEducation = !isEmployee && step === 4
  const showEnglish = !isEmployee && step === 5
  const showPassport = !isEmployee && step === 6
  const showBudget = !isEmployee && step === 7
  const showEmployment = (isEmployee && step === 1) || (!isEmployee && step === 8)
  const showPersonal = (isEmployee && step === 3) || (!isEmployee && step === 9)

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      {/* Top header with logo and progress bar */}
      <header className="border-b border-slate-200 bg-gradient-to-r from-white to-orange-50">
        <div className="mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-5 md:px-6">
          <div className="flex items-center justify-center">
            {/* Logo image */}
            <div className="flex items-center">
              <img
                src="/LOGO%20NAVABAR%20FOOTER/SO%20-%20Replace%202%20(1).png"
                alt="Supreme Overseas Logo"
                className="h-12 w-auto sm:h-14 md:h-16"
                onError={(e) => {
                  console.error('Error loading logo:', e.target.src)
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>

          <h1 className="mt-3 text-center text-xl font-extrabold text-slate-900 sm:mt-4 sm:text-2xl md:text-3xl">
            {isEmployee ? 'Start Your Journey - Employee' : 'Take the First Step to Study Abroad'}
          </h1>

          <p className="mt-2 text-center text-sm font-medium text-slate-700 sm:mt-3 sm:text-base">
            Your journey to international education starts here
          </p>

          <div className="mt-4 h-1.5 w-full bg-[#f7f2ed] sm:mt-5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2E6C2E] to-[#C44E28] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center text-xs font-bold text-[#C44E28] sm:text-sm">
            Step {step} of {totalSteps}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-3 pb-16 pt-8 sm:px-4 sm:pb-20 sm:pt-10 md:px-6">
        <button
          type="button"
          onClick={handleBack}
          className="mb-6 inline-flex items-center gap-1 text-xs font-medium text-[#2E6C2E] hover:text-[#38662B] sm:mb-8 sm:text-sm"
        >
          <span className="text-base sm:text-lg">‹</span>
          <span>Back</span>
        </button>

        {showDegree && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              Which degree do you wish to pursue?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Select the academic program that aligns with your career goals
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
              {degreeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('degree', option)}
                  className="relative rounded-2xl border-2 border-slate-100 bg-white px-4 py-5 text-sm font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:px-5 sm:py-6 sm:text-base"
                >
                  <div className="flex items-center justify-center">
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showDestination && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              Which destination do you wish to pursue your education in?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Choose your preferred country for international education
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
              {destinationOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect('destination', opt.value)}
                  className="relative rounded-2xl border-2 border-slate-100 bg-white px-4 py-6 text-base font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:px-5 sm:py-7"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-slate-50 shadow-sm">
                      <img
                        src={opt.image}
                        alt={`${opt.label} flag`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                    <span className="text-xs uppercase tracking-wide text-slate-500">{opt.flag}</span>
                    <span>{opt.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showIntake && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              What's your preferred intake?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Select the semester you'd like to begin your studies
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
              {intakeOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect('intake', opt.value)}
                  className="relative rounded-2xl border-2 border-slate-100 bg-white px-4 py-5 text-base font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:px-5 sm:py-6"
                >
                  {opt.tag && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C44E28] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {opt.tag}
                    </span>
                  )}
                  <div className="flex items-center justify-center">
                    <span>{opt.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showEducation && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              What is your highest education level?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Select your current or most recent academic qualification
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
              {educationOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('educationLevel', option)}
                  className="relative rounded-2xl border-2 border-slate-100 bg-white px-4 py-5 text-base font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:px-5 sm:py-6"
                >
                  <div className="flex items-center justify-center">
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showEnglish && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              What is your English language exam status?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Select your English proficiency test status
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-4">
              {englishExamOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('englishExam', option)}
                  className="relative rounded-2xl border-2 border-slate-100 bg-white px-4 py-5 text-base font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:px-5 sm:py-6"
                >
                  <div className="flex items-center justify-center">
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showPassport && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              Do you have a valid Passport?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Select your current passport status
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
              {passportOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('passportStatus', option)}
                  className="relative w-full rounded-2xl border-2 border-slate-100 bg-white px-6 py-5 text-base font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:w-auto sm:px-8 sm:py-6"
                >
                  <div className="flex items-center justify-center">
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showBudget && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              What is your estimated total budget for studying abroad?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Select your approximate budget range for international education
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
              {budgetOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('budgetRange', option)}
                  className="relative rounded-2xl border-2 border-slate-100 bg-white px-4 py-5 text-base font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:px-5 sm:py-6"
                >
                  <div className="flex items-center justify-center">
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showEmployment && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              What is your current employment status?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Select your current employment situation
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
              {employmentOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('employmentStatus', option)}
                  className="relative rounded-2xl border-2 border-slate-100 bg-white px-4 py-5 text-base font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C44E28] hover:shadow-xl sm:px-5 sm:py-6"
                >
                  <div className="flex items-center justify-center">
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {showPersonal && (
          <div className="mx-auto max-w-md">
            <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              Personal Details
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600 sm:text-base">
              Share your information to help us assist you better
            </p>
            <form onSubmit={handleSubmitDetails} className="mt-8 space-y-5 text-left sm:mt-10 sm:space-y-6">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 sm:text-base">Full Name*</label>
                <input
                  type="text"
                  required
                  value={answers.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-base text-slate-800 outline-none ring-[#C44E28] transition duration-300 focus:border-[#C44E28] focus:ring-2 sm:px-5 sm:py-4 sm:text-lg"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 sm:text-base">Email Address*</label>
                <input
                  type="email"
                  required
                  value={answers.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-base text-slate-800 outline-none ring-[#2E6C2E] transition duration-300 focus:border-[#2E6C2E] focus:ring-2 sm:px-5 sm:py-4 sm:text-lg"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 sm:text-base">Mobile Number*</label>
                <div className="flex rounded-2xl border-2 border-slate-200 bg-white text-base text-slate-800 transition duration-300 focus-within:border-[#C44E28] focus-within:ring-2 focus-within:ring-[#C44E28] sm:text-lg">
                  <span className="flex items-center gap-2 border-r-2 border-slate-200 px-4 py-3.5 font-bold text-slate-700 sm:px-5 sm:py-4">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={answers.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3.5 outline-none sm:px-5 sm:py-4"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 sm:text-base">Current State</label>
                <select
                  value={answers.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-base text-slate-800 outline-none ring-[#38662B] transition duration-300 focus:border-[#38662B] focus:ring-2 sm:px-5 sm:py-4 sm:text-lg"
                >
                  <option value="">Select your state</option>
                  {stateOptions.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 sm:text-base">Current City</label>
                <select
                  value={answers.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-base text-slate-800 outline-none ring-[#38662B] transition duration-300 focus:border-[#38662B] focus:ring-2 sm:px-5 sm:py-4 sm:text-lg"
                >
                  <option value="">Select your city</option>
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-[#C44E28] to-[#D9531E] px-6 py-4 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:from-[#D9531E] hover:to-[#C44E28] hover:shadow-xl sm:px-8 sm:py-5 sm:text-lg"
                >
                  Submit & Get Started
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  )
}

export default JourneyWizard
