import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BookOpenIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'

const Home = () => {
  const [activeCountry, setActiveCountry] = useState('uk')
  const [currentStory, setCurrentStory] = useState(0)
  const [expandedStory, setExpandedStory] = useState(null)

  const successStories = [
    {
      name: 'Arigela Bala Pawan',
      initials: 'AB',
      from: 'Andhra Pradesh',
      to: 'UK',
      quote:
        'My mentor made shortlisting, applications, and visas a breeze. I had support at every step of the way.',
      field: 'MSc Computer Science',
      university: 'Ravensbourne University London',
      loan: '₹40 Lakhs'
    },
    {
      name: 'Bellamkonda Vamsi Krishna',
      initials: 'BV',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'Extremely satisfied with my college application process. Clear guidance and a truly student-first approach.',
      field: 'MS in Civil Engineering',
      university: 'Bradley University',
      loan: '₹45 Lakhs'
    },
    {
      name: 'Karicheti Lavanya',
      initials: 'KL',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'My name is Karicheti Lavanya, and securing my USA student visa has been one of the most significant milestones in my academic journey. While I was in the final semester of my Bachelor of Technology in Electronics and Communication Engineering at Malineni Lakshmaiah Women\'s Engineering College, Guntur, Andhra Pradesh. I began my study abroad journey with Supreme Overseas, recommended by my friend Vamsi Krishna Reddy. This became the turning point that shaped my path to studying in the United States. Under the guidance of Chairman Sravan Kumar Sir, I received personalized TOEFL training, precise visa documentation support, and professional preparation for my visa interview. His mentorship, dedication, and encouragement helped me confidently secure admission and my MS in Electrical and Computer Engineering at Wichita State University. I am deeply grateful to Supreme Overseas and Sravan Kumar Sir for their unwavering support in making my dream of studying in the United States a reality.',
      shortQuote:
        'Secured USA student visa and MS in Electrical and Computer Engineering at Wichita State University with personalized TOEFL training and visa documentation support.',
      field: 'MS in Electrical and Computer Engineering',
      university: 'Wichita State University',
      loan: ''
    },
    {
      name: 'Peruboina Navya',
      initials: 'PN',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'My journey toward securing a U.S. student visa was not easy. During my first attempt, my visa was unfortunately rejected due to incorrect documentation prepared by a fraudulent study-abroad consultancy in Guntur, Andhra Pradesh. This was an extremely challenging phase for me, as the mistake was beyond my control. At that crucial time, my friend Praneeth recommended Supreme Overseas and introduced me to Chairman Sravan Kumar Sir for my second visa attempt. This recommendation changed everything for me. Under Sravan Kumar Sir\'s guidance, I received exceptional support and professional training. He personally prepared my visa documentation with utmost accuracy, ensured that I was fully confident for my visa interview, and guided me through every step of the process. His dedication and expertise helped me secure my USA student visa approval on my second attempt. What truly stood out was the level of care and support beyond consultancy services. He arranged food and accommodation for me, ensured airport pickup and drop in the USA, and helped me settle into my new flat comfortably. This kind of personal support is something I had never experienced from any consultancy before. I am deeply grateful to Supreme Overseas and Sravan Kumar Sir for playing a crucial role in making my dream of studying in the United States a reality.',
      shortQuote:
        'Overcame visa rejection and secured USA student visa approval on second attempt with exceptional support and professional training.',
      field: 'MS in Public Health',
      university: 'University of New Haven',
      loan: ''
    },
    {
      name: 'Muthineni Giridhar Babu',
      initials: 'MG',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'My name is Muthineni Giridhar Babu, and pursuing my MS in Cyber Security at Sacred Heart University has been a long-standing dream. After completing my Bachelor of Technoloy in 2013, I worked as a software engineer in Bengaluru, and my goal has always been to advance my career while settling in the USA with my family. At the age of 33, being married with a son, I initially thought that obtaining a U.S. student visa would be extremely challenging. I carefully searched for the best study abroad consultancy to guide me through this process. My cousin Venkatesh Chowdary recommended Supreme Overseas and introduced me to Chairman Sravan Kumar. From the very beginning, Sravan Kumar Sir took personal care of my application, guiding me at every step. He and his brother Prasanth (USA) conducted multiple mock interviews to ensure I was fully prepared for the visa process. Their professional guidance, encouragement, and attention to detail made a significant difference. Thanks to their unwavering support, my dream has become a reality—my USA student visa was successfully approved, and I am now ready to begin my Master\'s in Cyber Security at Sacred Heart University.',
      shortQuote:
        'At age 33, successfully obtained USA student visa for MS in Cyber Security at Sacred Heart University with personal care and mock interviews.',
      field: 'MS in Cyber Security',
      university: 'Sacred Heart University',
      loan: ''
    },
  ]

  const whyItems = [
    {
      icon: BookOpenIcon,
      label: '1000+ Courses',
      value: '1000+',
      color: 'text-blue-600',
    },
    {
      icon: UserGroupIcon,
      label: '45000+ Students',
      value: '45K+',
      color: 'text-green-600',
    },
    {
      icon: CurrencyDollarIcon,
      label: '₹10 Lakhs Scholarships',
      value: '₹10L',
      color: 'text-amber-600',
    },
    {
      icon: AcademicCapIcon,
      label: '98% Visa Success',
      value: '98%',
      color: 'text-purple-600',
    },
  ]

  const advantageTopRow = [
    {
      icon: DocumentTextIcon,
      label: 'Application Assistance',
      color: 'text-blue-600',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      label: 'Visa Guidance',
      color: 'text-green-600',
    },
    {
      icon: CurrencyDollarIcon,
      label: 'Education Loan',
      color: 'text-amber-600',
    },
  ]

  const advantageBottomRow = [
    {
      icon: BuildingLibraryIcon,
      label: 'University Selection',
      color: 'text-purple-600',
    },
    {
      icon: GlobeAltIcon,
      label: 'Pre-Departure Briefing',
      color: 'text-red-600',
    },
    {
      icon: UserGroupIcon,
      label: 'Career Counseling',
      color: 'text-indigo-600',
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
        location: 'Birmingham, UK',
        courses: '95+ Courses',
        short: 'UoB',
      },
      {
        name: 'Queen Mary University of London',
        location: 'London, UK',
        courses: '78+ Courses',
        short: 'QMUL',
      },
      {
        name: 'University of Leeds',
        location: 'Leeds, UK',
        courses: '64+ Courses',
        short: 'UoL',
      },
      {
        name: 'University of Southampton',
        location: 'Southampton, UK',
        courses: '52+ Courses',
        short: 'UoS',
      },
      {
        name: 'University of Strathclyde',
        location: 'Glasgow, UK',
        courses: '48+ Courses',
        short: 'UoS',
      },
      {
        name: 'Coventry University',
        location: 'Coventry, UK',
        courses: '36+ Courses',
        short: 'CU',
      },
    ],
    usa: [
      {
        name: 'University of Illinois',
        location: 'Urbana-Champaign, USA',
        courses: '89+ Courses',
        short: 'UIUC',
      },
      {
        name: 'Central Michigan University',
        location: 'Mount Pleasant, USA',
        courses: '42+ Courses',
        short: 'CMU',
      },
      {
        name: 'University of New Haven',
        location: 'West Haven, USA',
        courses: '38+ Courses',
        short: 'UNH',
      },
      {
        name: 'Wichita State University',
        location: 'Wichita, USA',
        courses: '29+ Courses',
        short: 'WSU',
      },
      {
        name: 'Bradley University',
        location: 'Peoria, USA',
        courses: '22+ Courses',
        short: 'BU',
      },
      {
        name: 'Sacred Heart University',
        location: 'Fairfield, USA',
        courses: '18+ Courses',
        short: 'SHU',
      },
    ],
    germany: [
      {
        name: 'Berlin School of Business and Innovation',
        location: 'Berlin, Germany',
        courses: '12+ Courses',
        short: 'BSBI',
      },
      {
        name: 'GISMA Business School',
        location: 'Hannover, Germany',
        courses: '8+ Courses',
        short: 'GISMA',
      },
      {
        name: 'EU Business School',
        location: 'Munich, Germany',
        courses: '15+ Courses',
        short: 'EUBS',
      },
      {
        name: 'SRH Berlin University',
        location: 'Berlin, Germany',
        courses: '9+ Courses',
        short: 'SRH',
      },
      {
        name: 'Munich Business School',
        location: 'Munich, Germany',
        courses: '7+ Courses',
        short: 'MBS',
      },
      {
        name: 'EBS Universität',
        location: 'Wiesbaden, Germany',
        courses: '11+ Courses',
        short: 'EBS',
      },
    ],
    canada: [
      {
        name: 'University of Niagara Falls',
        location: 'Niagara Falls, Canada',
        courses: '22+ Courses',
        short: 'UNF',
      },
      {
        name: 'Lakeshore College',
        location: 'Lakeshore, Canada',
        courses: '167+ Courses',
        short: 'LC',
      },
      {
        name: 'Humber College',
        location: 'Toronto, Canada',
        courses: '98+ Courses',
        short: 'Humber',
      },
      {
        name: 'Centennial College',
        location: 'Toronto, Canada',
        courses: '76+ Courses',
        short: 'Centennial',
      },
      {
        name: 'George Brown College',
        location: 'Toronto, Canada',
        courses: '65+ Courses',
        short: 'GBC',
      },
      {
        name: 'Seneca College',
        location: 'Toronto, Canada',
        courses: '54+ Courses',
        short: 'Seneca',
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

  const navigate = useNavigate()

  // Auto-slide carousel for success stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [successStories.length])

  // Handle manual dot click
  const handleDotClick = (index) => {
    setCurrentStory(index)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Top bar */}
        <header className="relative z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/Supreme%20Overseas%20-%20Logo%20(1).png"
                alt="Supreme Overseas Logo"
                className="h-14 w-auto sm:h-24 md:h-32"
                onError={(e) => {
                  console.error('Error loading logo:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Call button */}
            <a
              href="tel:8069361480"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-base sm:rounded-full sm:border-[#C44E28] sm:bg-[#C44E28] sm:text-white sm:shadow-lg sm:shadow-[#C44E28]/30 sm:hover:bg-[#D9531E]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden sm:inline">Call us</span>
              <span className="font-semibold sm:font-bold">8069361480</span>
            </a>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-20">
          {/* Text content - Mobile optimized */}
          <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-4 sm:py-8 md:px-6 md:py-12">
            <div className="text-left sm:text-center">
              <h1 className="text-4xl font-extrabold leading-tight text-[#2E6C2E] sm:text-3xl md:text-4xl lg:text-5xl">
                Take the First Step to{' '}
                <span className="mt-2 block text-5xl text-[#C44E28] sm:mt-0 sm:inline sm:text-3xl md:text-4xl lg:text-5xl">STUDY ABROAD</span>
              </h1>

              {/* Benefits - Mobile: vertical list, Desktop: horizontal */}
              <div className="mt-8 space-y-4 sm:mt-6 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:space-y-0 md:gap-8">
                <div className="flex items-start gap-3.5 text-lg font-medium text-[#38662B] sm:items-center sm:gap-2 sm:text-sm md:text-base">
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#38662B]/10 text-base font-bold text-[#2E6C2E] sm:mt-0 sm:h-5 sm:w-5 sm:text-[11px]">
                    ✓
                  </span>
                  <span className="leading-snug sm:leading-normal">Courses starting from ₹8 Lakhs*</span>
                </div>
                <div className="flex items-start gap-3.5 text-lg font-medium text-[#38662B] sm:items-center sm:gap-2 sm:text-sm md:text-base">
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#38662B]/10 text-base font-bold text-[#2E6C2E] sm:mt-0 sm:h-5 sm:w-5 sm:text-[11px]">
                    ✓
                  </span>
                  <span className="leading-snug sm:leading-normal">Scholarship worth ₹10,00,000*</span>
                </div>
                <div className="flex items-start gap-3.5 text-lg font-medium text-[#38662B] sm:items-center sm:gap-2 sm:text-sm md:text-base">
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#38662B]/10 text-base font-bold text-[#2E6C2E] sm:mt-0 sm:h-5 sm:w-5 sm:text-[11px]">
                    ✓
                  </span>
                  <span className="leading-snug sm:leading-normal">Offer letter in less than 48 hours*</span>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-10 sm:mt-8">
                <button
                  type="button"
                  onClick={() => navigate('/journey')}
                  className="w-full rounded-2xl bg-[#C44E28] px-6 py-5 text-xl font-bold text-white shadow-xl shadow-[#C44E28]/30 transition hover:-translate-y-1 hover:bg-[#D9531E] hover:shadow-2xl sm:w-auto sm:rounded-lg sm:px-8 sm:py-4 sm:text-base sm:font-semibold"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>

          {/* Image content - Full viewport width */}
          <div className="relative h-[420px] w-full overflow-hidden bg-gray-100 sm:h-80 md:h-96 lg:h-[500px]">
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
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/60 to-transparent sm:h-32 md:h-40"></div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section id="about" className="bg-white py-8 sm:bg-[#f8f9fa] sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-4 md:px-6">
          <h2 className="text-left text-lg font-bold text-slate-900 sm:text-center sm:text-2xl md:text-3xl">
            Why Choose <span className="text-[#C44E28]">Supreme Overseas?</span>
          </h2>

          {/* Mobile: 2x2 grid, Desktop: 4 columns */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-8"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}/10 sm:h-12 sm:w-12 sm:rounded-2xl`}>
                  {React.createElement(item.icon, { className: `h-6 w-6 ${item.color} sm:h-6 sm:w-6`, strokeWidth: 1.5 })}
                </div>
                <p className="text-base font-bold text-slate-900 sm:text-lg sm:font-semibold">{item.value}</p>
                <p className="text-[11px] text-slate-600 sm:text-xs sm:font-semibold sm:text-slate-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section id="services" className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-4 md:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Our <span className="bg-gradient-to-r from-[#C44E28] to-[#D9531E] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">Comprehensive support for your study abroad journey</p>
          </div>

          {/* Services Grid with Rich Content */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Application Assistance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                    {React.createElement(DocumentTextIcon, { className: 'h-7 w-7 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Application Assistance</h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  Complete support throughout your application journey
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">✓</span>
                    <span>Document preparation & review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">✓</span>
                    <span>SOP & LOR writing assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">✓</span>
                    <span>Application tracking & follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">✓</span>
                    <span>Offer letter within 48 hours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visa Guidance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30">
                    {React.createElement(ChatBubbleLeftRightIcon, { className: 'h-7 w-7 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Visa Guidance</h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  Expert visa assistance with 98% success rate
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">✓</span>
                    <span>Complete documentation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">✓</span>
                    <span>Mock interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">✓</span>
                    <span>Visa filing & appointment booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">✓</span>
                    <span>Post-visa rejection assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Loan */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30">
                    {React.createElement(CurrencyDollarIcon, { className: 'h-7 w-7 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Education Loan</h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  Financial support to make your dreams affordable
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-600">✓</span>
                    <span>Best bank & NBFC connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-600">✓</span>
                    <span>Competitive interest rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-600">✓</span>
                    <span>Loan sanction assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-600">✓</span>
                    <span>Collateral & non-collateral options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* University Selection */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30">
                    {React.createElement(BuildingLibraryIcon, { className: 'h-7 w-7 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">University Selection</h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  Find your perfect academic match globally
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-600">✓</span>
                    <span>1000+ partner universities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-600">✓</span>
                    <span>Course & specialization guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-600">✓</span>
                    <span>Budget-based recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-600">✓</span>
                    <span>Career outcome analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pre-Departure Briefing */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30">
                    {React.createElement(GlobeAltIcon, { className: 'h-7 w-7 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Pre-Departure Briefing</h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  Prepare for a smooth transition to your new life
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600">✓</span>
                    <span>Accommodation arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600">✓</span>
                    <span>Airport pickup & drop support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600">✓</span>
                    <span>Cultural orientation sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600">✓</span>
                    <span>Banking & SIM card assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Counseling */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30">
                    {React.createElement(UserGroupIcon, { className: 'h-7 w-7 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Career Counseling</h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  Strategic planning for your future success
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">✓</span>
                    <span>Personalized career roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">✓</span>
                    <span>Industry-specific guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">✓</span>
                    <span>Resume & LinkedIn optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">✓</span>
                    <span>Job placement assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="universities" className="bg-white py-8 sm:bg-[#f5f9ff] sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-4 md:px-6">
          <h2 className="text-left text-lg font-bold text-slate-900 sm:text-xl sm:font-semibold md:text-3xl">
            Top Universities to <span className="text-[#C44E28]">Study Abroad</span>
          </h2>

          {/* Tabs */}
          <div className="mt-5 -mx-4 sm:mx-0 sm:mt-6">
            <div className="overflow-x-auto px-4 sm:px-0">
              <div className="flex min-w-max items-center gap-3 sm:gap-4 border-b border-slate-200 pb-2 text-sm sm:min-w-0 sm:flex-wrap sm:gap-6 sm:text-base">
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
                      <span className="whitespace-nowrap text-[13px] font-medium sm:text-base">{tab.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* University cards */}
          <div className="mt-5 space-y-3 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 xl:grid-cols-3">
            {universitiesByCountry[activeCountry].map((uni) => (
              <div
                key={uni.name}
                className="flex items-center gap-3 rounded-xl bg-white px-3 py-3.5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4 sm:hover:-translate-y-0.5"
              >
                {/* Logo placeholder */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[9px] font-bold uppercase tracking-tight text-slate-700 sm:h-14 sm:w-14 sm:rounded-xl sm:text-[11px]">
                  {uni.short}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-slate-900 sm:text-sm md:text-[0.95rem]">
                    {uni.name}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-slate-500 sm:mt-1 sm:text-xs">{uni.location}</p>
                </div>

                {/* Courses badge */}
                <span className="flex-shrink-0 whitespace-nowrap rounded-md bg-yellow-50 px-2 py-1 text-[10px] font-bold text-yellow-700 sm:rounded-full sm:border sm:border-[#2E6C2E]/30 sm:bg-[#2E6C2E]/10 sm:px-3 sm:py-1 sm:text-[11px] sm:font-semibold sm:text-[#2E6C2E]">
                  {uni.courses}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section id="success-stories" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-12 sm:py-16 md:py-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#C44E28]/5 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#2E6C2E]/5 to-transparent blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C44E28]/10 to-[#2E6C2E]/10 px-3 py-1.5 mb-3">
              <svg className="h-4 w-4 text-[#C44E28]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-semibold text-slate-700">Our Success Stories</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              <span className="bg-gradient-to-r from-[#C44E28] via-[#D9531E] to-[#C44E28] bg-clip-text text-transparent">45,000+</span>
              {' '}Dreamers to Achievers
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base max-w-2xl mx-auto">
              Real stories from students who transformed their dreams into reality
            </p>
          </div>

          {/* Mobile: Auto-sliding carousel, Desktop: Grid */}
          <div className="mt-8 sm:mt-12">
            {/* Mobile Carousel */}
            <div className="relative block sm:hidden">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentStory * 100}%)` }}
                >
                  {successStories.map((story) => (
                    <article
                      key={`${story.name}-${story.to}`}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50/50 p-[2px] shadow-xl">
                        {/* Gradient border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C44E28] via-[#D9531E] to-[#2E6C2E] opacity-50 blur-sm"></div>

                        <div className="relative flex h-full flex-col justify-between rounded-2xl bg-white px-5 py-6 backdrop-blur-sm">
                          {/* Header */}
                          <div>
                            <div className="flex items-start gap-3">
                              <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                {/* Animated gradient ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C44E28] to-[#D9531E] opacity-20 blur-md animate-pulse"></div>
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#C44E28] to-[#D9531E] text-base font-bold text-white shadow-lg shadow-[#C44E28]/30">
                                  {story.initials}
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="text-base font-bold text-slate-900 leading-tight">{story.name}</h3>
                                <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-slate-100 to-blue-50 px-2.5 py-1">
                                  <span className="text-xs font-medium text-slate-700">{story.from}</span>
                                  <svg className="h-3.5 w-3.5 text-[#C44E28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                  <span className="text-xs font-semibold text-[#C44E28]">{story.to}</span>
                                </div>
                              </div>
                            </div>

                            {/* Quote */}
                            <div className="mt-4 relative">
                              <div className="absolute -left-1.5 -top-1.5 text-4xl font-serif text-[#C44E28]/10 leading-none">"</div>
                              <p className="relative pl-5 text-xs leading-relaxed text-slate-700 italic">
                                {expandedStory === `${story.name}-${story.to}` ? story.quote : (story.shortQuote || story.quote)}
                              </p>
                            </div>
                            {story.shortQuote && story.quote !== story.shortQuote && (
                              <button
                                onClick={() => setExpandedStory(expandedStory === `${story.name}-${story.to}` ? null : `${story.name}-${story.to}`)}
                                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#C44E28] hover:gap-2 transition-all"
                              >
                                {expandedStory === `${story.name}-${story.to}` ? 'Show Less' : 'Read More'}
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            )}
                          </div>

                          {/* Footer */}
                          <div className="mt-5 space-y-2">
                            <div className="rounded-lg bg-gradient-to-r from-[#2E6C2E]/10 to-[#38662B]/10 px-3 py-2 border border-[#2E6C2E]/20">
                              <p className="text-[10px] font-medium text-slate-600">Program</p>
                              <p className="text-xs font-bold text-[#2E6C2E] mt-0.5">{story.field}</p>
                            </div>
                            <div className="rounded-lg bg-gradient-to-r from-[#C44E28]/5 to-[#D9531E]/5 px-3 py-2 border border-[#C44E28]/20">
                              <p className="text-[10px] font-medium text-slate-600">University</p>
                              <p className="text-xs font-bold text-[#C44E28] mt-0.5">{story.university}</p>
                            </div>
                            {story.loan && (
                              <div className="rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-2 border border-amber-200">
                                <p className="text-[10px] font-medium text-amber-700">Education Loan</p>
                                <p className="text-xs font-bold text-amber-900 mt-0.5">{story.loan}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Modern dot indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 rounded-full transition-all ${index === currentStory
                      ? 'w-8 bg-gradient-to-r from-[#C44E28] to-[#D9531E]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden grid-cols-1 gap-6 sm:grid lg:grid-cols-2">
              {successStories.map((story) => (
                <article
                  key={`${story.name}-${story.to}`}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50/50 p-[2px] transition-all hover:scale-[1.01] hover:shadow-xl"
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C44E28] via-[#D9531E] to-[#2E6C2E] opacity-0 group-hover:opacity-75 transition-opacity blur-sm"></div>

                  <div className="relative flex h-full flex-col justify-between rounded-2xl bg-white p-6 backdrop-blur-sm shadow-lg">
                    {/* Header */}
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center">
                          {/* Animated gradient ring */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C44E28] to-[#D9531E] opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#C44E28] to-[#D9531E] text-lg font-bold text-white shadow-lg shadow-[#C44E28]/30">
                            {story.initials}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-bold text-slate-900 leading-tight">{story.name}</h3>
                          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-blue-50 px-3 py-1.5">
                            <span className="text-sm font-medium text-slate-700">{story.from}</span>
                            <svg className="h-4 w-4 text-[#C44E28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <span className="text-sm font-semibold text-[#C44E28]">{story.to}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mt-5 relative">
                        <div className="absolute -left-2 -top-2 text-5xl font-serif text-[#C44E28]/10 leading-none">"</div>
                        <p className="relative pl-8 text-sm leading-relaxed text-slate-700 italic">
                          {expandedStory === `${story.name}-${story.to}` ? story.quote : (story.shortQuote || story.quote)}
                        </p>
                      </div>
                      {story.shortQuote && story.quote !== story.shortQuote && (
                        <button
                          onClick={() => setExpandedStory(expandedStory === `${story.name}-${story.to}` ? null : `${story.name}-${story.to}`)}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#C44E28] hover:gap-2 transition-all"
                        >
                          {expandedStory === `${story.name}-${story.to}` ? 'Show Less' : 'Read More'}
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 space-y-2.5">
                      <div className="grid grid-cols-1 gap-2.5">
                        <div className="rounded-lg bg-gradient-to-r from-[#2E6C2E]/10 to-[#38662B]/10 px-4 py-2.5 border border-[#2E6C2E]/20">
                          <p className="text-[10px] font-medium text-slate-600 uppercase tracking-wide">Program</p>
                          <p className="text-sm font-bold text-[#2E6C2E] mt-0.5">{story.field}</p>
                        </div>
                        <div className="rounded-lg bg-gradient-to-r from-[#C44E28]/5 to-[#D9531E]/5 px-4 py-2.5 border border-[#C44E28]/20">
                          <p className="text-[10px] font-medium text-slate-600 uppercase tracking-wide">University</p>
                          <p className="text-sm font-bold text-[#C44E28] mt-0.5">{story.university}</p>
                        </div>
                        {story.loan && (
                          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2.5 border border-amber-200">
                            <p className="text-[10px] font-medium text-amber-700 uppercase tracking-wide">Education Loan</p>
                            <p className="text-sm font-bold text-amber-900 mt-0.5">{story.loan}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => navigate('/journey')}
              className="rounded-xl bg-[#C44E28] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#C44E28]/30 transition-all hover:-translate-y-1 hover:bg-[#D9531E] hover:shadow-xl sm:px-10 sm:py-5 sm:text-lg"
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
      <footer id="contact" className="bg-slate-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="mb-6 flex items-center">
                <img
                  src="/Supreme%20Overseas%20-%20Logo%20(1).png"
                  alt="Supreme Overseas Logo"
                  className="h-12 w-auto brightness-0 invert opacity-90 sm:h-14"
                  onError={(e) => {
                    console.error('Error loading footer logo:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-400">
                Your trusted partner for studying abroad. We help students achieve their dreams of international education with personalized guidance and comprehensive support.
              </p>
              <div className="flex gap-4">
                <a href="tel:8069361480" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-[#C44E28]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-[#C44E28]">📞</span>
                  8069361480
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-200">Quick Links</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-[#C44E28] transition-colors">About Us</a></li>
                <li><a href="#universities" className="hover:text-[#C44E28] transition-colors">Universities</a></li>
                <li><a href="#services" className="hover:text-[#C44E28] transition-colors">Services</a></li>
                <li><a href="#success-stories" className="hover:text-[#C44E28] transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-200">Study Destinations</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><span className="cursor-pointer hover:text-[#C44E28] transition-colors flex items-center gap-2">🇬🇧 United Kingdom</span></li>
                <li><span className="cursor-pointer hover:text-[#C44E28] transition-colors flex items-center gap-2">🇺🇸 USA</span></li>
                <li><span className="cursor-pointer hover:text-[#C44E28] transition-colors flex items-center gap-2">🇩🇪 Germany</span></li>
                <li><span className="cursor-pointer hover:text-[#C44E28] transition-colors flex items-center gap-2">🇨🇦 Canada</span></li>
                <li><span className="cursor-pointer hover:text-[#C44E28] transition-colors flex items-center gap-2">🇦🇪 Dubai</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 border-t border-slate-800 pt-8 text-center">
            <p className="text-xs text-slate-500 sm:text-sm">
              © 2024 Supreme Overseas. All rights reserved. | Designed and Developed by <a href="https://www.vikrin.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-[#C44E28] transition-colors">Vikrin</a> | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </main >
  )
}

export default Home
