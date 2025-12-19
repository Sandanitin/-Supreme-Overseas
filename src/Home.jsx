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
  BuildingLibraryIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const Home = () => {
  const [activeCountry, setActiveCountry] = useState('uk')
  const [currentStory, setCurrentStory] = useState(0)
  const [expandedStory, setExpandedStory] = useState(null)
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false)
  const [showJourneyModal, setShowJourneyModal] = useState(false)

  const successStories = [
    {
      name: 'Arigela Bala Pawan',
      initials: 'AB',
      from: 'Andhra Pradesh',
      to: 'UK',
      quote:
        'My UK student visa journey was smooth and stress-free thanks to Supreme Overseas. Chairman Sravan Kumar sir supported me at every step—he provided complete loan assistance, helped me secure my ₹40 lakhs education loan, and guided me throughout the entire process. He also arranged food, accommodation near my university, and airport pickup in the UK. I am truly grateful for his constant support and dedicated mentorship throughout my journey to Ravensbourne University London.',
      shortQuote:
        'My UK student visa journey was smooth and stress-free thanks to Supreme Overseas.',
      field: 'MSc Computer Science',
      university: 'Ravensbourne University London',
      loan: '₹40 Lakhs',
      image: '/students/Arigela Bala Pawan.png'
    },
    {
      name: 'Bellamkonda Vamsi Krishna',
      initials: 'BV',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'My USA student visa journey was smooth and successful thanks to Supreme Overseas. I completed my B.Tech at VVIT, Guntur, and with the guidance of Chairman Sravan Kumar sir, every step toward my MS admission at Bradley University became easier. He supported me throughout—from helping me secure my ₹45 lakhs education loan to arranging food, accommodation, and airport pickup in the USA. I’m truly grateful for his constant support and mentorship.',
      shortQuote:
        'My USA student visa journey was smooth and successful thanks to Supreme Overseas.',
      field: 'MS in Civil Engineering',
      university: 'Bradley University',
      loan: '₹45 Lakhs',
      image: '/students/Bellamkonda Vamsi Krishna.png'
    },
    {
      name: 'Karicheti Lavanya',
      initials: 'KL',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'My name is Karicheti Lavanya, and securing my USA student visa has been one of the most significant milestones in my academic journey. While I was in the final semester of my Bachelor of Technology in Electronics and Communication Engineering at Malineni Lakshmaiah Women’s Engineering College, Guntur, Andhra Pradesh. I began my study abroad journey with Supreme Overseas, recommended by my friend Vamsi Krishna Reddy. This became the turning point that shaped my path to studying in the United States. Under the guidance of Chairman Sravan Kumar Sir, I received personalized TOEFL training, precise visa documentation support, and professional preparation for my visa interview. His mentorship, dedication, and encouragement helped me confidently secure admission and my MS in Electrical and Computer Engineering at Wichita State University. I am deeply grateful to Supreme Overseas and Sravan Kumar Sir for their unwavering support in making my dream of studying in the United States a reality.',
      shortQuote:
        'Securing my USA student visa has been one of the most significant milestones in my academic journey.',
      field: 'MS in Electrical and Computer Engineering',
      university: 'Wichita State University',
      loan: '',
      image: '/students/Karicheti Lavanya.png'
    },
    {
      name: 'Peruboina Navya',
      initials: 'PN',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'My name is Peruboina Navya, and I am from the United States. I am currently pursuing my Master of Science in Public Health at the University of New Haven. I completed my Bachelor of Pharmacy (B. Pharmacy) at Vignan Pharmacy College, Guntur. My journey toward securing a U.S. student visa was not easy. During my first attempt, my visa was unfortunately rejected due to incorrect documentation prepared by a fraudulent study-abroad consultancy in Guntur, Andhra Pradesh. This was an extremely challenging phase for me, as the mistake was beyond my control. At that crucial time, my friend Praneeth recommended Supreme Overseas and introduced me to Chairman Sravan Kumar Sir for my second visa attempt. This recommendation changed everything for me. Under Sravan Kumar Sir’s guidance, I received exceptional support and professional training. He personally prepared my visa documentation with utmost accuracy, ensured that I was fully confident for my visa interview, and guided me through every step of the process. His dedication and expertise helped me secure my USA student visa approval on my second attempt. What truly stood out was the level of care and support beyond consultancy services. He arranged food and accommodation for me, ensured airport pickup and drop in the USA, and helped me settle into my new flat comfortably. This kind of personal support is something I had never experienced from any consultancy before. I am deeply grateful to Supreme Overseas and Sravan Kumar Sir for playing a crucial role in making my dream of studying in the United States a reality.',
      shortQuote:
        'My journey toward securing a U.S. student visa was not easy, but Supreme Overseas changed everything for me.',
      field: 'MS in Public Health',
      university: 'University of New Haven',
      loan: '',
      image: '/students/Navya Peruboina.png'
    },
    {
      name: 'Muthineni Giridhar Babu',
      initials: 'MG',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'My name is Muthineni Giridhar Babu, and pursuing my MS in Cyber Security at Sacred Heart University has been a long-standing dream. After completing my Bachelor of Technoloy in 2013, I worked as a software engineer in Bengaluru, and my goal has always been to advance my career while settling in the USA with my family. At the age of 33, being married with a son, I initially thought that obtaining a U.S. student visa would be extremely challenging. I carefully searched for the best study abroad consultancy to guide me through this process. My cousin Venkatesh Chowdary recommended Supreme Overseas and introduced me to Chairman Sravan Kumar. From the very beginning, Sravan Kumar Sir took personal care of my application, guiding me at every step. He and his brother Prasanth (USA) conducted multiple mock interviews to ensure I was fully prepared for the visa process. Their professional guidance, encouragement, and attention to detail made a significant difference. Thanks to their unwavering support, my dream has become a reality—my USA student visa was successfully approved, and I am now ready to begin my Master’s in Cyber Security at Sacred Heart University.',
      shortQuote:
        'Pursuing my MS in Cyber Security at Sacred Heart University has been a long-standing dream.',
      field: 'MS in Cyber Security',
      university: 'Sacred Heart University',
      loan: '',
      image: '/students/Muthineni Giridhar Babu.png'
    },
    {
      name: 'M Tulasi Ram',
      initials: 'MT',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'I’m thrilled to share that I have successfully secured my USA Student Visa and will soon begin my Master’s journey at Western New England University. This achievement was made possible with the constant support of Supreme Overseas and especially Chairman Sravan Kumar sir. From helping me secure my ₹44 Lakhs education loan, guiding me through the visa process, to arranging food and accommodation near my university, and even airport pickup and drop in the USA, Sravan Kumar sir supported me at every step. I am extremely grateful for his mentorship and Supreme Overseas’ dedication in shaping my study abroad journey. Excited to start this new chapter!',
      shortQuote:
        'I have successfully secured my USA Student Visa and will soon begin my Master’s journey at Western New England University.',
      field: 'MS in Cyber Security',
      university: 'Western New England University',
      loan: '₹44 Lakhs',
      image: '/students/M Tulasi Ram.png'
    },
    {
      name: 'Singamsetty Naveen',
      initials: 'SN',
      from: 'Andhra Pradesh',
      to: 'UK',
      quote:
        'I am Singamsetty Naveen from Andhra Pradesh, India. I have successfully secured my student visa to pursue MSc in Computer Science at Coventry University, UK. For this journey, I availed an education loan of 42 Lakhs, which has made my dream of studying abroad possible. I would like to extend my heartfelt gratitude to Mr. Sravan Kumar, Chairman of Supreme Overseas, who supported me at every step of my study abroad journey. From guiding me through the visa application process to assisting with the education loan, Mr. Kumar ensured a smooth and hassle-free experience. Moreover, he arranged my accommodation very close to the university and provided airport pick-up and drop-off services, making my transition to the UK seamless and comfortable. His guidance and support were invaluable in helping me achieve this milestone. I am excited to embark on this new academic journey and look forward to gaining enriching experiences at Coventry University.',
      shortQuote:
        'I have successfully secured my student visa to pursue MSc in Computer Science at Coventry University, UK.',
      field: 'MSc in Computer Science',
      university: 'Coventry University',
      loan: '₹42 Lakhs',
      image: '/students/Singamsetty Naveen.png'
    },
    {
      name: 'Devabhatuni Phanindra',
      initials: 'DP',
      from: 'Andhra Pradesh',
      to: 'USA',
      quote:
        'I am grateful to Supreme Overseas for their professional guidance and dedicated support. Their mock interview sessions and attention to detail played a key role in securing my U.S. student visa for my MS in Computer Science at the University of Massachusetts Lowell.',
      shortQuote:
        'I am grateful to Supreme Overseas for their professional guidance and dedicated support.',
      field: 'MS in Computer Science',
      university: 'University of Massachusetts Lowell',
      loan: '',
      image: '/images/phanindra.png'
    },
  ]

  const whyItems = [
    {
      icon: UserGroupIcon,
      label: '2000+ Students',
      value: '2K+',
      color: 'text-green-600',
    },
    {
      icon: BuildingLibraryIcon,
      label: '1000+ university partnerships',
      value: '1000+',
      color: 'text-green-600',
    },
    {
      icon: CurrencyDollarIcon,
      label: 'Upto ₹10 Lakhs Scholarships',
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

  const footerDestinations = [
    { label: 'United Kingdom', emoji: '🇬🇧', image: 'https://flagcdn.com/w40/gb.png' },
    { label: 'USA', emoji: '🇺🇸', image: 'https://flagcdn.com/w40/us.png' },
    { label: 'Germany', emoji: '🇩🇪', image: 'https://flagcdn.com/w40/de.png' },
    { label: 'Canada', emoji: '🇨🇦', image: 'https://flagcdn.com/w40/ca.png' },
    { label: 'Dubai', emoji: '🇦🇪', image: 'https://flagcdn.com/w40/ae.png' },
    { label: 'Ireland', emoji: '🇮🇪', image: 'https://flagcdn.com/w40/ie.png' },
  ]

  const universityTabs = [
    { id: 'uk', name: 'United Kingdom' },
    { id: 'usa', name: 'USA' },
    { id: 'germany', name: 'Germany' },
    { id: 'canada', name: 'Canada' },
    { id: 'dubai', name: 'Dubai' },
    { id: 'ireland', name: 'Ireland' },
  ]

  const universitiesByCountry = {
    uk: [
      {
        name: 'University of Birmingham',
        location: 'Birmingham, UK',
        courses: '95+ Courses',
        short: 'UoB',
        logo: '/universities/university-of-birmingham.png',
      },
      {
        name: 'Queen Mary University of London',
        location: 'London, UK',
        courses: '78+ Courses',
        short: 'QMUL',
        logo: '/universities/queen-mary-london-new.png',
      },
      {
        name: 'University of Leeds',
        location: 'Leeds, UK',
        courses: '64+ Courses',
        short: 'UoL',
        logo: '/universities/university-of-leeds.png',
      },
      {
        name: 'University of Southampton',
        location: 'Southampton, UK',
        courses: '52+ Courses',
        short: 'UoS',
        logo: '/universities/university-of-southampton.png',
      },
      {
        name: 'University of Strathclyde',
        location: 'Glasgow, UK',
        courses: '48+ Courses',
        short: 'UoS',
        logo: '/universities/university-of-strathclyde.png',
      },
      {
        name: 'Coventry University',
        location: 'Coventry, UK',
        courses: '36+ Courses',
        short: 'CU',
        logo: '/universities/coventry-university.png',
      },
    ],
    usa: [
      {
        name: 'University of Illinois',
        location: 'Urbana-Champaign, USA',
        courses: '89+ Courses',
        short: 'UIUC',
        logo: '/universities/university-of-illinois.png',
      },
      {
        name: 'Central Michigan University',
        location: 'Mount Pleasant, USA',
        courses: '42+ Courses',
        short: 'CMU',
        logo: '/universities/central-michigan.png',
      },
      {
        name: 'University of New Haven',
        location: 'West Haven, USA',
        courses: '38+ Courses',
        short: 'UNH',
        logo: '/universities/university-of-new-haven.png',
      },
      {
        name: 'Wichita State University',
        location: 'Wichita, USA',
        courses: '29+ Courses',
        short: 'WSU',
        logo: '/universities/wichita-state.png',
      },
      {
        name: 'Bradley University',
        location: 'Peoria, USA',
        courses: '22+ Courses',
        short: 'BU',
        logo: '/universities/bradley-university.png',
      },
      {
        name: 'Sacred Heart University',
        location: 'Fairfield, USA',
        courses: '18+ Courses',
        short: 'SHU',
        logo: '/universities/sacred-heart.png',
      },
      {
        name: 'Rivier University',
        location: 'Nashua, USA',
        courses: '35+ Courses',
        short: 'Rivier',
        logo: '/universities/rivier-university.png',
      },
    ],
    germany: [
      {
        name: 'Berlin School of Business and Innovation',
        location: 'Berlin, Germany',
        courses: '12+ Courses',
        short: 'BSBI',
        logo: '/universities/bsbi-berlin.png',
      },
      {
        name: 'GISMA University of Applied Sciences',
        location: 'Berlin, Germany',
        courses: '25+ Courses',
        short: 'GISMA',
        logo: '/universities/gisma-university.jpg',
      },
      {
        name: 'EU Business School',
        location: 'Munich, Germany',
        courses: '15+ Courses',
        short: 'EUBS',
        logo: '/universities/eu-business.png',
      },
      {
        name: 'SRH Berlin University',
        location: 'Berlin, Germany',
        courses: '9+ Courses',
        short: 'SRH',
        logo: '/universities/srh-berlin.png',
      },
      {
        name: 'Munich Business School',
        location: 'Munich, Germany',
        courses: '7+ Courses',
        short: 'MBS',
        logo: '/universities/munich-business.png',
      },
      {
        name: 'EBS Universität',
        location: 'Wiesbaden, Germany',
        courses: '11+ Courses',
        short: 'EBS',
        logo: '/universities/ebs-universitat.png',
      },
    ],
    canada: [
      {
        name: 'University of Niagara Falls',
        location: 'Niagara Falls, Canada',
        courses: '22+ Courses',
        short: 'UNF',
        logo: '/universities/niagara-falls.png',
      },
      {
        name: 'Lakeshore College',
        location: 'Lakeshore, Canada',
        courses: '167+ Courses',
        short: 'LC',
        logo: '/universities/lakeshore-college.png',
      },
      {
        name: 'Humber College',
        location: 'Toronto, Canada',
        courses: '98+ Courses',
        short: 'Humber',
        logo: '/universities/humber-college.png',
      },
      {
        name: 'Centennial College',
        location: 'Toronto, Canada',
        courses: '76+ Courses',
        short: 'Centennial',
        logo: '/universities/centennial-college-new.png',
      },
      {
        name: 'George Brown College',
        location: 'Toronto, Canada',
        courses: '65+ Courses',
        short: 'GBC',
        logo: '/universities/george-brown.png',
      },
      {
        name: 'Seneca College',
        location: 'Toronto, Canada',
        courses: '54+ Courses',
        short: 'Seneca',
        logo: '/universities/seneca-college-new.png',
      },
    ],
    dubai: [
      {
        name: 'University of Birmingham',
        location: 'Dubai',
        courses: '95+ Courses',
        short: 'UoB Dubai',
        logo: '/universities/university-of-birmingham.png',
      },
      {
        name: 'Middlesex University',
        location: 'Dubai',
        courses: '64+ Courses',
        short: 'MU',
        logo: '/universities/middlesex-university.png',
      },
      {
        name: 'Heriot-Watt University',
        location: 'Dubai',
        courses: '56+ Courses',
        short: 'HWU',
        logo: '/universities/heriot-watt.png',
      },
      {
        name: 'Manipal University',
        location: 'Dubai',
        courses: '42+ Courses',
        short: 'Manipal',
        logo: '/universities/manipal-university.png',
      },
      {
        name: 'De Montfort University',
        location: 'Dubai',
        courses: '22+ Courses',
        short: 'DMU',
        logo: '/universities/de-montfort.png',
      },
      {
        name: 'Amity University',
        location: 'Dubai',
        courses: '11+ Courses',
        short: 'Amity',
        logo: '/universities/amity-university.png',
      },
    ],
    ireland: [
      {
        name: 'Dublin Business School',
        location: 'Dublin, Ireland',
        courses: '45+ Courses',
        short: 'DBS',
        logo: '/universities/dublin-business-school.png',
      },
      {
        name: 'National College of Ireland',
        location: 'Dublin, Ireland',
        courses: '38+ Courses',
        short: 'NCI',
        logo: '/universities/national-college-of-ireland.png',
      },
      {
        name: 'Dublin City University',
        location: 'Dublin, Ireland',
        courses: '120+ Courses',
        short: 'DCU',
        logo: '/universities/dublin-city-university.png',
      },
      {
        name: 'University of Limerick',
        location: 'Limerick, Ireland',
        courses: '95+ Courses',
        short: 'UL',
        logo: '/universities/university-of-limerick.png',
      },
      {
        name: 'Technological University Dublin',
        location: 'Dublin, Ireland',
        courses: '110+ Courses',
        short: 'TU Dublin',
        logo: '/universities/technological-university-dublin.png',
      },
      {
        name: 'University College Dublin',
        location: 'Dublin, Ireland',
        courses: '150+ Courses',
        short: 'UCD',
        logo: '/universities/university-college-dublin.png',
      },
    ],
  }

  const navigate = useNavigate()

  // Auto-slide carousel for success stories
  useEffect(() => {
    // Don't auto-slide if user is hovering over the carousel
    if (isHoveringCarousel) return

    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [successStories.length, isHoveringCarousel])

  // Removed auto-toggle - using modal for user selection

  // Handle manual dot click
  const handleDotClick = (index) => {
    setCurrentStory(index)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50">
      {/* FIXED NAVBAR - Same size as original header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/LOGO%20NAVABAR%20FOOTER/SO%20-%20Replace%202%20(1).png"
              alt="Supreme Overseas Logo"
              className="h- w-auto sm:h-9"
              onError={(e) => {
                console.error('Error loading logo:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Call button */}
          <a
            href="tel:9988245789"
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
            <span className="font-semibold sm:font-bold">9988245789</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION - with padding top to account for fixed navbar */}
      <section className="relative overflow-hidden bg-white pt-20 sm:pt-32 md:pt-40">
        {/* Hero content */}
        <div className="relative z-20">
          {/* Text content - Mobile optimized */}
          <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-4 sm:py-8 md:px-6 md:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold leading-tight text-[#2E6C2E] sm:text-3xl md:text-4xl lg:text-5xl">
                Take the First Step{' '}
                <span className="mt-2 block text-5xl text-[#C44E28] sm:mt-0 sm:inline sm:text-3xl md:text-4xl lg:text-5xl">Go to ABROAD</span>
              </h1>

              {/* Benefits - Mobile: vertical list, Desktop: horizontal */}
              <div className="mt-8 space-y-4 sm:mt-6 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:space-y-0 md:gap-8">
                <div className="flex items-start gap-3.5 text-lg font-medium text-[#38662B] sm:items-center sm:gap-2 sm:text-sm md:text-base">
                  {React.createElement(CheckCircleIcon, { className: 'mt-1 h-7 w-7 flex-shrink-0 text-[#2E6C2E] sm:mt-0 sm:h-5 sm:w-5', strokeWidth: 2 })}
                  <span className="leading-snug sm:leading-normal">Courses starting from ₹8 Lakhs*</span>
                </div>
                <div className="flex items-start gap-3.5 text-lg font-medium text-[#38662B] sm:items-center sm:gap-2 sm:text-sm md:text-base">
                  {React.createElement(CheckCircleIcon, { className: 'mt-1 h-7 w-7 flex-shrink-0 text-[#2E6C2E] sm:mt-0 sm:h-5 sm:w-5', strokeWidth: 2 })}
                  <span className="leading-snug sm:leading-normal">Scholarship worth ₹10,00,000*</span>
                </div>
                <div className="flex items-start gap-3.5 text-lg font-medium text-[#38662B] sm:items-center sm:gap-2 sm:text-sm md:text-base">
                  {React.createElement(CheckCircleIcon, { className: 'mt-1 h-7 w-7 flex-shrink-0 text-[#2E6C2E] sm:mt-0 sm:h-5 sm:w-5', strokeWidth: 2 })}
                  <span className="leading-snug sm:leading-normal">Offer letter in less than 48 hours*</span>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-10 sm:mt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    type="button"
                    onClick={() => setShowJourneyModal(true)}
                    className="relative w-full sm:w-auto rounded-2xl px-6 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-lg sm:px-8 sm:py-4 sm:text-base sm:font-semibold animate-float bg-gradient-to-r from-[#2E6C2E] to-[#C44E28] shadow-[#2E6C2E]/30 hover:from-[#38662B] hover:to-[#D9531E]"
                  >
                    <span className="relative z-10">
                      Start Your Journey
                    </span>
                  </button>
                </div>
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
      <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-[#2E6C2E]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-96 w-96 rounded-full bg-[#C44E28]/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Choose <span className="text-[#C44E28]">Supreme Overseas?</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We are committed to your success with a proven track record of excellence.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {whyItems.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color.replace('text-', 'from-')}/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100`}></div>

                <div className="relative flex flex-col items-center justify-center">
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(item.icon, { className: `h-8 w-8 ${item.color}`, strokeWidth: 1.5 })}
                  </div>

                  <div className="space-y-1">
                    <p className={`text-3xl font-bold ${item.color} sm:text-4xl`}>
                      {item.value}
                    </p>
                    <p className="text-sm font-medium text-slate-600 sm:text-base">
                      {item.label.replace(item.value, '').trim() || item.label}
                    </p>
                  </div>
                </div>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* University Shortlisting */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                    {React.createElement(BuildingLibraryIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">University Shortlisting</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">✓</span>
                    <span>1000+ university partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">✓</span>
                    <span>Personalized recommendations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Course Shortlisting */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30">
                    {React.createElement(BookOpenIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">Course Shortlisting</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">✓</span>
                    <span>Expert course guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">✓</span>
                    <span>Career-aligned selection</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SOP Proofreading */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30">
                    {React.createElement(DocumentTextIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">SOP Proofreading</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-600">✓</span>
                    <span>Professional review & editing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-600">✓</span>
                    <span>Grammar & structure optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Scholarship Assistance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30">
                    {React.createElement(AcademicCapIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">Scholarship Assistance</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-600">✓</span>
                    <span>Scholarship search & application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-600">✓</span>
                    <span>Up to ₹10L scholarships</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Loan Assistance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30">
                    {React.createElement(CurrencyDollarIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">Education Loan Assistance</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600">✓</span>
                    <span>Best loan rates & connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600">✓</span>
                    <span>Collateral & non-collateral options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Students Visa Training */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30">
                    {React.createElement(ChatBubbleLeftRightIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">Students Visa Training</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">✓</span>
                    <span>Mock interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">✓</span>
                    <span>Documentation & filing support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Airport Pickup & Drop Guidance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/30">
                    {React.createElement(GlobeAltIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">Airport Pickup & Drop Guidance</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-xs font-bold text-pink-600">✓</span>
                    <span>Arrival & departure coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-xs font-bold text-pink-600">✓</span>
                    <span>Safe transport arrangements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Accommodation Guidance */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/30">
                    {React.createElement(UserGroupIcon, { className: 'h-6 w-6 text-white', strokeWidth: 1.5 })}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">Accommodation Guidance</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-600">✓</span>
                    <span>Housing search assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-600">✓</span>
                    <span>Near university placements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="universities" className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Top Universities to <span className="text-[#C44E28]">Study Abroad</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Explore world-class institutions across the globe
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200 sm:gap-3">
              {universityTabs.map((tab) => {
                const active = tab.id === activeCountry
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCountry(tab.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:px-6 sm:py-3 sm:text-base ${active
                      ? 'bg-[#C44E28] text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                  >
                    <span className="text-lg sm:text-xl">{tab.flag}</span>
                    <span>{tab.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* University cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universitiesByCountry[activeCountry].map((uni) => (
              <div
                key={uni.name}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300"
              >
                {/* Card Header with Logo and Badge */}
                <div className="flex items-start justify-between p-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    {/* University Logo - Larger and Square */}
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 group-hover:ring-[#C44E28]/40 transition-all">
                      <img
                        src={uni.logo}
                        alt={`${uni.name} logo`}
                        className="h-full w-full object-contain p-2"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = document.createElement('span');
                          fallback.textContent = uni.short;
                          fallback.className = 'text-sm font-bold uppercase tracking-wide text-slate-700';
                          e.target.parentElement?.appendChild(fallback);
                        }}
                      />
                    </div>
                    {/* University Short Name */}
                    <div>
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        {uni.short}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                          Top Ranked
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 pt-4">
                  {/* University Name */}
                  <h3 className="text-base font-bold leading-snug text-slate-900 group-hover:text-[#C44E28] transition-colors mb-2.5">
                    {uni.name}
                  </h3>

                  {/* Location */}
                  <p className="flex items-center text-sm text-slate-600 mb-4">
                    <svg className="mr-1.5 h-4 w-4 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {uni.location}
                  </p>

                  {/* Course Count Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-2 ring-1 ring-amber-200/50">
                      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                      <span className="text-sm font-bold text-amber-900">{uni.courses}</span>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <button
                    onClick={() => navigate('/journey')}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C44E28] hover:text-[#D9531E] transition-all group-hover:gap-2.5"
                  >
                    <span>View Details</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
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
              <span className="bg-gradient-to-r from-[#C44E28] via-[#D9531E] to-[#C44E28] bg-clip-text text-transparent">2,000+</span>
              {' '}Dreamers to Achievers
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base max-w-2xl mx-auto">
              Real stories from students who transformed their dreams into reality
            </p>
          </div>

          {/* Mobile: Auto-sliding carousel, Desktop: Grid */}
          <div className="mt-8 sm:mt-12">
            {/* Mobile Carousel */}
            <div
              className="relative block sm:hidden"
              onMouseEnter={() => setIsHoveringCarousel(true)}
              onMouseLeave={() => setIsHoveringCarousel(false)}
              onTouchStart={() => setIsHoveringCarousel(true)}
              onTouchEnd={() => setIsHoveringCarousel(false)}
              onTouchCancel={() => setIsHoveringCarousel(false)}
            >
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
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#C44E28] to-[#D9531E] text-base font-bold text-white shadow-lg shadow-[#C44E28]/30 overflow-hidden">
                                  {story.image ? (
                                    <img
                                      src={story.image}
                                      alt={story.name}
                                      className="h-full w-full object-cover"
                                    />
                                  ) : (
                                    story.initials
                                  )}
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
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#C44E28] to-[#D9531E] text-lg font-bold text-white shadow-lg shadow-[#C44E28]/30 overflow-hidden">
                            {story.image ? (
                              <img
                                src={story.image}
                                alt={story.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              story.initials
                            )}
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

            {/* View More Button - Smaller, Left Aligned */}
            <div className="mt-10 text-left sm:mt-12">
              <a
                href="https://www.instagram.com/supreme_overseas_guntur/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#C44E28] to-[#D9531E] px-4 py-2 text-xs font-medium text-white shadow-sm shadow-[#C44E28]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#C44E28]/40"
              >
                <span>View More Success Stories</span>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* CTA Button - Single animated button */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setShowJourneyModal(true)}
                className="relative w-full sm:w-auto rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-10 sm:py-5 sm:text-lg animate-float bg-gradient-to-r from-[#2E6C2E] to-[#C44E28] shadow-[#2E6C2E]/30 hover:from-[#38662B] hover:to-[#D9531E]"
              >
                <span className="relative z-10">
                  Start Your Journey
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STUDY INFO SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#2E6C2E]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#C44E28]/5 to-transparent blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[#C44E28] ring-1 ring-inset ring-orange-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>
                Market Insights
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The Rising Wave of <br />
                <span className="text-[#2E6C2E]">Global Education</span>
              </h2>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  The landscape of international education is evolving rapidly. As per government estimates, over <span className="font-bold text-slate-900">9,00,000 Indians</span> were studying abroad in 2022. This number surged to <span className="font-bold text-slate-900">1.33 million</span> in 2024, reflecting the growing aspirations of Indian students.
                </p>
                <p>
                  Projections indicate that by 2025, around <span className="font-bold text-[#C44E28]">1.5 to 2 million</span> Indians will be pursuing education overseas. India now holds the distinction of having the second-largest number of students studying abroad, surpassed only by China.
                </p>
                <p>
                  The economic impact is equally significant. In 2019, Indian students spent USD 37 billion on higher education overseas. By 2025, this spending is expected to cross a staggering <span className="font-bold text-[#2E6C2E]">USD 70 billion</span>.
                </p>
              </div>
            </div>

            {/* Stats Visuals */}
            <div className="relative">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Stat Card 1 */}
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#2E6C2E]/10 to-transparent blur-xl"></div>
                  <dt className="text-sm font-medium text-slate-500">Students Abroad (2024)</dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight text-[#2E6C2E]">1.33 M+</dd>
                  <div className="mt-4 flex items-center text-xs font-medium text-green-600">
                    <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    Rapid Growth
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl sm:translate-y-8">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#C44E28]/10 to-transparent blur-xl"></div>
                  <dt className="text-sm font-medium text-slate-500">Projected Spending (2025)</dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight text-[#C44E28]">$70 B+</dd>
                  <div className="mt-4 flex items-center text-xs font-medium text-orange-600">
                    <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Economic Impact
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-xl"></div>
                  <dt className="text-sm font-medium text-slate-500">Global Rank</dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight text-slate-900">#2</dd>
                  <div className="mt-4 flex items-center text-xs font-medium text-blue-600">
                    <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    After China
                  </div>
                </div>
              </div>
            </div>
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
                  src="/LOGO%20NAVABAR%20FOOTER/SO%20-%20Replace%202%20(1).png"
                  alt="Supreme Overseas Logo"
                  className="h-12 w-auto sm:h-14"
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
                <a href="tel:9988245789" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-[#C44E28]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-[#C44E28]">📞</span>
                  9988245789
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
              <ul className="space-y-4 text-sm text-slate-400">
                {footerDestinations.map((destination) => (
                  <li key={destination.label}>
                    <span className="flex items-center gap-3 cursor-pointer hover:text-[#C44E28] transition-colors">
                      <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800 text-xs font-semibold text-white/70">
                        <img
                          src={destination.image}
                          alt={`${destination.label} flag`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                          data-emoji={destination.emoji}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            if (e.currentTarget.parentElement) {
                              e.currentTarget.parentElement.textContent = e.currentTarget.dataset.emoji || ''
                              e.currentTarget.parentElement.classList.add('text-lg')
                            }
                          }}
                        />
                      </span>
                      <span>{destination.label}</span>
                    </span>
                  </li>
                ))}
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

      {/* Journey Type Selection Modal */}
      {showJourneyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8 md:p-10">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowJourneyModal(false)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Choose Your Journey
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Select the path that best describes you
              </p>
            </div>

            {/* Journey Options */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Student Journey */}
              <button
                type="button"
                onClick={() => {
                  setShowJourneyModal(false)
                  navigate('/journey/student')
                }}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#C44E28] hover:shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C44E28]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C44E28] to-[#D9531E] shadow-lg shadow-[#C44E28]/30">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    Start Your Journey - Student
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Explore international education opportunities and pursue your dream degree abroad
                  </p>

                  <div className="mt-4 flex items-center text-[#C44E28] font-semibold">
                    <span className="text-sm">Begin your academic journey</span>
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Employee Journey */}
              <button
                type="button"
                onClick={() => {
                  setShowJourneyModal(false)
                  navigate('/journey/employee')
                }}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#2E6C2E] hover:shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E6C2E]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E6C2E] to-[#38662B] shadow-lg shadow-[#2E6C2E]/30">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    Start Your Journey - Employee
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Discover career opportunities and professional growth paths in international markets
                  </p>

                  <div className="mt-4 flex items-center text-[#2E6C2E] font-semibold">
                    <span className="text-sm">Begin your career journey</span>
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
