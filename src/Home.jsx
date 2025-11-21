import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GraduationCap,
  Star,
  Award,
  TrendingUp,
  Search,
  User,
  FileText,
  Landmark,
  CreditCard,
  Home as HomeIcon,
} from 'lucide-react'

const Home = () => {
  const whyItems = [
    {
      label: 'University Partners',
      description: 'Global universities you can trust',
      icon: GraduationCap,
      color: 'text-[#2E6C2E]',
    },
    {
      label: 'Success Stories',
      description: 'Students placed across top destinations',
      icon: Star,
      color: 'text-[#D9531E]',
    },
    {
      label: 'Scholarship',
      description: 'Merit-based & need-based scholarships',
      icon: Award,
      color: 'text-[#2E6C2E]',
    },
    {
      label: 'Course Pricing',
      description: 'Transparent and competitive pricing',
      icon: TrendingUp,
      color: 'text-[#D9531E]',
    },
  ]

  const advantageTopRow = [
    {
      label: "Finding the Program That's Right for You",
      icon: Search,
      color: 'text-[#2E6C2E]',
    },
    {
      label: 'Curated Expert-led Application Assistance',
      icon: User,
      color: 'text-[#38662B]',
    },
    {
      label: 'English Assessment Test Prep On-the-go',
      icon: FileText,
      color: 'text-[#D9531E]',
    },
  ]

  const advantageBottomRow = [
    {
      label: 'VISA Interview Assistance',
      icon: Landmark,
      color: 'text-[#2E6C2E]',
    },
    {
      label: 'Loan Assistance',
      icon: CreditCard,
      color: 'text-[#D9531E]',
    },
    {
      label: 'Making Sure You Stay Right, And Stay Well',
      icon: HomeIcon,
      color: 'text-[#38662B]',
    },
  ]

  const universityTabs = [
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'usa', name: 'USA', flag: '🇺🇸' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦' },
    { id: 'dubai', name: 'Dubai', flag: '🇦🇪' },
  ]

  const universitiesByCountry = {
    uk: [
      {
        name: 'University of Birmingham',
        location: 'Birmingham, United Kingdom',
        courses: '497+ Courses',
        short: 'UoB',
      },
      {
        name: 'Queen Mary University of London',
        location: 'London, United Kingdom',
        courses: '519+ Courses',
        short: 'QMUL',
      },
      {
        name: 'University of Essex',
        location: 'Colchester, United Kingdom',
        courses: '450+ Courses',
        short: 'UE',
      },
      {
        name: 'Coventry University',
        location: 'Coventry, United Kingdom',
        courses: '503+ Courses',
        short: 'CU',
      },
      {
        name: 'Nottingham Trent University',
        location: 'Nottingham, United Kingdom',
        courses: '335+ Courses',
        short: 'NTU',
      },
      {
        name: 'University of East London',
        location: 'London, United Kingdom',
        courses: '373+ Courses',
        short: 'UEL',
      },
    ],
    usa: [
      {
        name: 'Adelphi University',
        location: 'Garden City, United States',
        courses: '214+ Courses',
        short: 'AU',
      },
      {
        name: 'Western New England University',
        location: 'Springfield, United States',
        courses: '64+ Courses',
        short: 'WNE',
      },
      {
        name: 'University of the Pacific',
        location: 'Stockton, United States',
        courses: '194+ Courses',
        short: 'UoP',
      },
      {
        name: 'Cleveland State University',
        location: 'Cleveland, United States',
        courses: '230+ Courses',
        short: 'CSU',
      },
      {
        name: 'University of Dayton',
        location: 'Dayton, United States',
        courses: '359+ Courses',
        short: 'UD',
      },
      {
        name: 'Johns Hopkins University',
        location: 'Baltimore, United States',
        courses: '43+ Courses',
        short: 'JHU',
      },
    ],
    germany: [
      {
        name: 'International University of Applied Sciences',
        location: 'Bad Honnef, Germany',
        courses: '25+ Courses',
        short: 'IU',
      },
      {
        name: 'SRH - Hochschulen Heidelberg',
        location: 'Heidelberg, Germany',
        courses: '9+ Courses',
        short: 'SRH',
      },
      {
        name: 'SRH - Berlin University of Applied Science',
        location: 'Berlin, Germany',
        courses: '55+ Courses',
        short: 'SRH Berlin',
      },
      {
        name: 'Technical University of Munich',
        location: 'Munich, Germany',
        courses: '14+ Courses',
        short: 'TUM',
      },
      {
        name: 'Berlin School of Business and Innovation (BSBI)',
        location: 'Berlin, Germany',
        courses: '36+ Courses',
        short: 'BSBI',
      },
      {
        name: 'University of Europe for Applied Sciences',
        location: 'Berlin, Germany',
        courses: '14+ Courses',
        short: 'UE',
      },
    ],
    canada: [
      {
        name: 'University Canada West',
        location: 'Vancouver, Canada',
        courses: '5+ Courses',
        short: 'UCW',
      },
      {
        name: 'Conestoga College',
        location: 'Kitchener, Canada',
        courses: '242+ Courses',
        short: 'Conestoga',
      },
      {
        name: 'Seneca College',
        location: 'Toronto, Canada',
        courses: '151+ Courses',
        short: 'Seneca',
      },
      {
        name: 'George Brown College',
        location: 'Toronto, Canada',
        courses: '140+ Courses',
        short: 'George Brown',
      },
      {
        name: 'Humber College',
        location: 'Lakeshore, Canada',
        courses: '167+ Courses',
        short: 'Humber',
      },
      {
        name: 'University of Niagara Falls Canada',
        location: 'Niagara Falls, Canada',
        courses: '5+ Courses',
        short: 'UNF',
      },
    ],
    dubai: [
      {
        name: 'University of Birmingham',
        location: 'Dubai',
        courses: '95+ Courses',
        short: 'UoB Dubai',
      },
      {
        name: 'Middlesex University',
        location: 'Dubai',
        courses: '64+ Courses',
        short: 'MU',
      },
      {
        name: 'Heriot-Watt University',
        location: 'Dubai',
        courses: '56+ Courses',
        short: 'HWU',
      },
      {
        name: 'Manipal University',
        location: 'Dubai',
        courses: '42+ Courses',
        short: 'Manipal',
      },
      {
        name: 'De Montfort University',
        location: 'Dubai',
        courses: '22+ Courses',
        short: 'DMU',
      },
      {
        name: 'Amity University',
        location: 'Dubai',
        courses: '11+ Courses',
        short: 'Amity',
      },
    ],
  }

  const [activeCountry, setActiveCountry] = useState('uk')

  const successStories = [
    {
      name: 'Kshitij',
      initials: 'KS',
      from: 'Delhi',
      to: 'United Kingdom',
      quote:
        'My mentor made shortlisting, applications, and visas a breeze. I had support at every step of the way.',
      field: 'Data Science',
      university: 'University of Birmingham',
    },
    {
      name: 'Samad',
      initials: 'SA',
      from: 'Gujarat',
      to: 'United Kingdom',
      quote:
        'Extremely satisfied with my college application process. Clear guidance and a truly student-first approach.',
      field: 'Data Science',
      university: 'Queen Mary University of London',
    },
    {
      name: 'Shubham',
      initials: 'SH',
      from: 'Telangana',
      to: 'United States',
      quote:
        'Smooth process, supportive loan team, and constant check-ins. I felt confident about every decision.',
      field: 'Sciences',
      university: 'University of Illinois',
    },
    {
      name: 'Naveenkumar',
      initials: 'NK',
      from: 'Karnataka',
      to: 'United States',
      quote:
        'I received multiple admits with complete support on applications and documentation. They handled the complexity.',
      field: 'Data Science',
      university: 'Central Michigan University',
    },
    {
      name: 'Shreya',
      initials: 'SR',
      from: 'Noida',
      to: 'Germany',
      quote:
        'Proactive, detail‑oriented mentoring made my Germany dream come true. The team showcased my profile brilliantly.',
      field: 'Management',
      university: 'BSBI',
    },
    {
      name: 'Hanna',
      initials: 'HA',
      from: 'Maharashtra',
      to: 'Canada',
      quote:
        'End‑to‑end support from exam prep to accommodation. The process felt convenient and stress‑free.',
      field: 'Data Science',
      university: 'Humber College',
    },
  ]

  const navigate = useNavigate()

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Top bar */}
        <header className="relative z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/Supreme%20Overseas%20-%20Logo%20(1).png"
                alt="Supreme Overseas Logo"
                className="h-14 w-auto sm:h-20 md:h-24"
                onError={(e) => {
                  console.error('Error loading logo:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Call button */}
            <a
              href="tel:8069361480"
              className="inline-flex items-center gap-2 rounded-full bg-[#C44E28] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#C44E28]/30 transition hover:-translate-y-0.5 hover:bg-[#D9531E] hover:shadow-xl sm:px-5 sm:py-2.5 sm:text-base"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 sm:h-5 sm:w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call us</span>
              <span className="font-bold">8069361480</span>
            </a>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-20">
          {/* Text content - Centered at top with container */}
          <div className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold leading-tight text-[#2E6C2E] sm:text-3xl md:text-4xl lg:text-5xl">
                Take the First Step to{' '}
                <span className="text-[#C44E28]">STUDY ABROAD</span>
              </h1>

              {/* Benefits row - Horizontal on larger screens */}
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-6 md:gap-8">
                <div className="flex items-center gap-2 text-xs text-[#38662B] sm:text-sm md:text-base">
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#38662B]/10 text-[10px] font-bold text-[#2E6C2E] sm:h-5 sm:w-5 sm:text-[11px]">
                    ✓
                  </span>
                  <span>Courses starting from ₹8 Lakhs*</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#38662B] sm:text-sm md:text-base">
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#38662B]/10 text-[10px] font-bold text-[#2E6C2E] sm:h-5 sm:w-5 sm:text-[11px]">
                    ✓
                  </span>
                  <span>Scholarship worth ₹10,00,000*</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#38662B] sm:text-sm md:text-base">
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#38662B]/10 text-[10px] font-bold text-[#2E6C2E] sm:h-5 sm:w-5 sm:text-[11px]">
                    ✓
                  </span>
                  <span>Offer letter in less than 48 hours*</span>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-6 sm:mt-8">
                <button
                  type="button"
                  onClick={() => navigate('/journey')}
                  className="rounded-lg bg-[#C44E28] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C44E28]/30 transition hover:-translate-y-0.5 hover:bg-[#D9531E] hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>

          {/* Image content - Full viewport width */}
          <div className="relative h-64 w-full overflow-hidden bg-gray-100 sm:h-80 md:h-96 lg:h-[500px]">
            <img
              src="/hero1.jpg"
              alt="Students studying abroad"
              className="h-full w-full object-cover"
              onError={(e) => {
                console.error('Error loading image:', e.target.src);
                e.target.style.display = 'none';
                e.target.parentElement.style.background = '#f3f4f6';
              }}
            />
            {/* White shadow overlay at top */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent sm:h-32 md:h-40"></div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section id="about" className="bg-[#f8f9fa] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <h2 className="text-center text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
            Why Choose <span className="text-[#C44E28]">Supreme Overseas?</span>
          </h2>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-white px-4 py-6 text-center shadow-sm ring-1 ring-slate-100/80 transition hover:-translate-y-1 hover:shadow-md sm:gap-3 sm:px-6 sm:py-8"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.color}/10 sm:h-12 sm:w-12`}>
                  {React.createElement(item.icon, { className: `h-5 w-5 ${item.color} sm:h-6 sm:w-6`, strokeWidth: 1.5 })}
                </div>
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">{item.label}</p>
                <p className="text-[11px] text-slate-500 sm:text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE SECTION */}
      <section id="services" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <h2 className="text-center text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
            Supreme Overseas <span className="text-[#C44E28]">Advantage</span>
          </h2>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-sky-50/40 shadow-sm sm:mt-10">
            {/* Top row */}
            <div className="grid divide-y divide-slate-100 bg-white/60 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {advantageTopRow.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-2.5 px-4 py-6 text-center sm:gap-3 sm:px-6 sm:py-8 md:px-10"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-2xl ${item.color}/10 sm:h-11 sm:w-11`}>
                    {React.createElement(item.icon, { className: `h-5 w-5 ${item.color} sm:h-6 sm:w-6`, strokeWidth: 1.5 })}
                  </div>
                  <p className="text-xs font-medium text-slate-900 sm:text-sm md:text-[0.95rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="grid divide-y divide-slate-100 bg-white/60 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {advantageBottomRow.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-2.5 px-4 py-6 text-center sm:gap-3 sm:px-6 sm:py-8 md:px-10"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-2xl ${item.color}/10 sm:h-11 sm:w-11`}>
                    {React.createElement(item.icon, { className: `h-5 w-5 ${item.color} sm:h-6 sm:w-6` })}
                  </div>
                  <p className="text-xs font-medium text-slate-900 sm:text-sm md:text-[0.95rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOP UNIVERSITIES SECTION */}
      <section id="universities" className="bg-[#f5f9ff] pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
            Top Universities to <span className="text-[#C44E28]">Study Abroad</span>
          </h2>

          {/* Tabs */}
          <div className="mt-6 -mx-3 sm:mx-0">
            <div className="overflow-x-auto px-3 sm:px-0">
              <div className="flex min-w-max items-center gap-4 border-b border-slate-200 pb-2 text-sm sm:min-w-0 sm:flex-wrap sm:gap-6 sm:text-base">
                {universityTabs.map((tab) => {
                  const active = tab.id === activeCountry
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveCountry(tab.id)}
                      className={`inline-flex flex-shrink-0 items-center gap-1.5 border-b-2 pb-2 transition sm:gap-2 ${active
                        ? 'border-[#C44E28] text-[#C44E28]'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      <span className="text-base sm:text-lg">{tab.flag}</span>
                      <span className="whitespace-nowrap font-medium">{tab.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* University cards */}
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {universitiesByCountry[activeCountry].map((uni) => (
              <div
                key={uni.name}
                className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md sm:gap-4 sm:px-5 sm:py-4"
              >
                {/* Logo placeholder */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[10px] font-semibold uppercase tracking-tight text-slate-700 sm:h-14 sm:w-14 sm:text-[11px]">
                  {uni.short}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-slate-900 sm:text-sm md:text-[0.95rem]">
                    {uni.name}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-slate-500 sm:mt-1 sm:text-xs">{uni.location}</p>
                </div>

                {/* Courses badge */}
                <span className="flex-shrink-0 whitespace-nowrap rounded-full border border-[#2E6C2E]/30 bg-[#2E6C2E]/10 px-2 py-0.5 text-[10px] font-semibold text-[#2E6C2E] sm:px-3 sm:py-1 sm:text-[11px]">
                  {uni.courses}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section id="success-stories" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                45,000+ <span className="text-[#C44E28]">Success Stories</span>
              </h2>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">From Dreamers to Achievers</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {successStories.map((story) => (
              <article
                key={`${story.name}-${story.to}`}
                className="flex h-full flex-col justify-between rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-5"
              >
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 sm:h-10 sm:w-10 sm:text-sm">
                      {story.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-900 sm:text-sm">{story.name}</p>
                      <p className="truncate text-[11px] text-slate-500 sm:text-xs">
                        {story.from}
                        <span className="mx-1 text-slate-400">→</span>
                        {story.to}
                      </p>
                    </div>
                  </div>

                  <p className="mt-2.5 text-[11px] leading-relaxed text-[#2E6C2E] sm:mt-3 sm:text-xs md:text-[0.8rem]">
                    {story.quote}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4">
                  <span className="flex-shrink-0 rounded-full bg-[#38662B]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#2E6C2E] sm:px-3 sm:py-1 sm:text-[11px]">
                    {story.field}
                  </span>
                  <span className="truncate text-[11px] font-semibold text-[#C44E28] sm:text-xs">
                    {story.university}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <button
              type="button"
              onClick={() => navigate('/journey')}
              className="w-full rounded-lg bg-[#C44E28] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#C44E28]/30 transition hover:-translate-y-0.5 hover:bg-[#D9531E] hover:shadow-xl sm:w-auto sm:px-8 sm:py-3"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* STUDY ABROAD INFO SECTION */}
      <section className="bg-[#f7f2ed] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
            Study Abroad with <span className="text-[#C44E28]">Supreme Overseas</span>
          </h2>

          <div className="mt-4 max-w-4xl space-y-3 text-xs leading-relaxed text-slate-600 sm:mt-5 sm:space-y-4 sm:text-sm md:text-[0.95rem]">
            <p>
              As per government estimates, a little over 9,00,000 Indians were studying abroad in 2022. This grew to
              1.31 million in 2023 and 1.33 million in 2024. As per some estimates, around 1.5 to 2 million Indians will
              be studying abroad in 2025.
            </p>
            <p>
              India has the second-largest number of students studying overseas, surpassed only by China. In 2019,
              Indians spent USD 37 billion on higher education overseas and in 2025, the spending is expected to cross
              USD 70 billion.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="contact" className="bg-[#2E6C2E] py-10 text-white sm:py-12">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="mb-3 flex items-center sm:mb-4">
                <img
                  src="/Supreme%20Overseas%20-%20Logo%20(1).png"
                  alt="Supreme Overseas Logo"
                  className="h-10 w-auto sm:h-12"
                  onError={(e) => {
                    console.error('Error loading footer logo:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <p className="mb-3 text-xs leading-relaxed text-green-100 sm:mb-4 sm:text-sm">
                Your trusted partner for studying abroad. We help students achieve their dreams of international education with personalized guidance and comprehensive support.
              </p>
              <div className="flex gap-4">
                <a href="tel:8069361480" className="text-xs text-green-100 transition hover:text-white sm:text-sm">
                  📞 8069361480
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">Quick Links</h3>
              <ul className="space-y-1.5 text-xs text-green-100 sm:space-y-2 sm:text-sm">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#universities" className="hover:text-white transition">Universities</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#success-stories" className="hover:text-white transition">Success Stories</a></li>
               
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">Study Destinations</h3>
              <ul className="space-y-1.5 text-xs text-green-100 sm:space-y-2 sm:text-sm">
                <li><span className="cursor-pointer transition hover:text-white">🇬🇧 United Kingdom</span></li>
                <li><span className="cursor-pointer transition hover:text-white">🇺🇸 USA</span></li>
                <li><span className="cursor-pointer transition hover:text-white">🇩🇪 Germany</span></li>
                <li><span className="cursor-pointer transition hover:text-white">🇨🇦 Canada</span></li>
                <li><span className="cursor-pointer transition hover:text-white">🇦🇪 Dubai</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-6 text-center sm:mt-8">
            <div className="mx-auto max-w-xs border-t border-green-700/30 pt-6 sm:max-w-sm"></div>
            <p className="text-xs text-green-100 sm:text-sm">
              © 2024 Supreme Overseas. All rights reserved. | Designed and Developed by <a href="https://www.vikrin.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-green-200 transition">Vikrin</a> | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Home
