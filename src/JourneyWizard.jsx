import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const totalSteps = 8

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
  { value: 'UK', label: 'UK', flag: '🇬🇧' },
  { value: 'Ireland', label: 'Ireland', flag: '🇮🇪' },
  { value: 'Dubai', label: 'Dubai', flag: '🇦🇪' },
  { value: 'Germany', label: 'Germany', flag: '🇩🇪' },
  { value: 'Italy', label: 'Italy', flag: '🇮🇹' },
  { value: 'France', label: 'France', flag: '🇫🇷' },
  { value: 'US', label: 'US', flag: '🇺🇸' },
  { value: 'Canada', label: 'Canada', flag: '🇨🇦' },
  { value: 'Australia', label: 'Australia', flag: '🇦🇺' },
  { value: 'New Zealand', label: 'New Zealand', flag: '🇳🇿' },
  { value: 'Malaysia', label: 'Malaysia', flag: '🇲🇾' },
  { value: 'Singapore', label: 'Singapore', flag: '🇸🇬' },
  { value: 'Other', label: 'Other', flag: '🌍' },
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
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    degree: null,
    destination: null,
    intake: null,
    educationLevel: null,
    englishExam: null,
    passportStatus: null,
    budgetRange: null,
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

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      {/* Top header with logo and progress bar */}
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-3 py-3 sm:px-4 sm:py-4 md:px-6">
          <div className="flex items-center justify-center">
            {/* Logo image */}
            <div className="flex items-center">
              <img
                src="/Supreme%20Overseas%20-%20Logo%20(1).png"
                alt="Supreme Overseas Logo"
                className="h-10 w-auto sm:h-12"
                onError={(e) => {
                  console.error('Error loading logo:', e.target.src)
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>

          <p className="mt-3 text-center text-xs font-medium text-slate-800 sm:mt-4 sm:text-sm md:text-base">
            Take the First Step to Study Abroad
          </p>

          <div className="mt-3 h-0.5 w-full bg-[#f7f2ed] sm:mt-4">
            <div
              className="h-full bg-[#C44E28] transition-all"
              style={{ width: `${progress}%` }}
            />
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

        {step === 1 && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              Which degree do you wish to pursue?
            </h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
              {degreeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('degree', option)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D9531E] hover:text-[#D9531E] hover:shadow-md sm:px-4 sm:py-3 sm:text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              Which destination do you wish to pursue your education in?
            </h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
              {destinationOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect('destination', opt.value)}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D9531E] hover:text-[#D9531E] hover:shadow-md sm:px-4 sm:py-4 sm:text-sm"
                >
                  <span className="mb-1.5 text-xl sm:mb-2 sm:text-2xl">{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              What's your preferred intake?
            </h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
              {intakeOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect('intake', opt.value)}
                  className="relative rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D9531E] hover:text-[#D9531E] hover:shadow-md sm:px-4 sm:py-3 sm:text-sm"
                >
                  {opt.tag && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-[#38662B] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white sm:px-2 sm:text-[10px]">
                      {opt.tag}
                    </span>
                  )}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              What is your highest education level?
            </h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
              {educationOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('educationLevel', option)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2E6C2E] hover:text-[#2E6C2E] hover:shadow-md sm:px-4 sm:py-3 sm:text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              What is your English language exam status?
            </h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
              {englishExamOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('englishExam', option)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2E6C2E] hover:text-[#2E6C2E] hover:shadow-md sm:px-4 sm:py-3 sm:text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              Do you have a valid Passport?
            </h2>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              {passportOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('passportStatus', option)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D9531E] hover:text-[#D9531E] hover:shadow-md sm:w-auto sm:px-8 sm:py-3 sm:text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              What is your estimated total budget for studying abroad?
            </h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
              {budgetOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect('budgetRange', option)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2E6C2E] hover:text-[#2E6C2E] hover:shadow-md sm:px-4 sm:py-3 sm:text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="mx-auto max-w-md">
            <h2 className="text-center text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
              Personal Details
            </h2>
            <form onSubmit={handleSubmitDetails} className="mt-6 space-y-3.5 text-left sm:mt-8 sm:space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Name*</label>
                <input
                  type="text"
                  required
                  value={answers.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter Full Name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-[#C44E28] focus:border-[#C44E28] focus:ring-1"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Enter Email Address*</label>
                <input
                  type="email"
                  required
                  value={answers.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-[#2E6C2E] focus:border-[#2E6C2E] focus:ring-1"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Mobile number*</label>
                <div className="flex rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus-within:border-[#C44E28] focus-within:ring-1 focus-within:ring-[#C44E28]">
                  <span className="flex items-center gap-1 border-r border-slate-200 px-2.5 text-xs text-slate-500 sm:px-3">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={answers.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 bg-transparent px-2.5 py-2 outline-none sm:px-3"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Current State</label>
                <select
                  value={answers.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-[#2E6C2E] focus:border-[#2E6C2E] focus:ring-1"
                >
                  <option value="">Select State</option>
                  {stateOptions.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Current City</label>
                <select
                  value={answers.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-[#2E6C2E] focus:border-[#2E6C2E] focus:ring-1"
                >
                  <option value="">Select City</option>
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-[#C44E28] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#D9531E] sm:mt-6 sm:py-3"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  )
}

export default JourneyWizard
