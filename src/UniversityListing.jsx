import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const universities = {
    'United Kingdom': [
        {
            id: 1,
            name: 'University of Birmingham',
            location: 'Birmingham, UK',
            courses: '95+'
        },
        {
            id: 2,
            name: 'Queen Mary University of London',
            location: 'London, UK',
            courses: '78+'
        },
        {
            id: 3,
            name: 'University of Essex',
            location: 'Colchester, United Kingdom',
            courses: '450+'
        },
        {
            id: 4,
            name: 'Coventry University',
            location: 'Coventry, United Kingdom',
            courses: '505+'
        },
        {
            id: 5,
            name: 'Nottingham Trent University',
            location: 'Nottingham, United Kingdom',
            courses: '335+'
        },
        {
            id: 6,
            name: 'University of East London',
            location: 'London, United Kingdom',
            courses: '373+'
        }
    ],
    'USA': [
        {
            id: 7,
            name: 'Harvard University',
            location: 'Cambridge, USA',
            courses: '450+'
        },
        {
            id: 8,
            name: 'Stanford University',
            location: 'Stanford, USA',
            courses: '380+'
        }
    ],
    'Germany': [
        {
            id: 9,
            name: 'Technical University of Munich',
            location: 'Munich, Germany',
            courses: '320+'
        }
    ],
    'Canada': [
        {
            id: 10,
            name: 'University of Toronto',
            location: 'Toronto, Canada',
            courses: '520+'
        }
    ]
}

const countryFlags = {
    'United Kingdom': '🇬🇧',
    'USA': '🇺🇸',
    'Germany': '🇩🇪',
    'Canada': '🇨🇦'
}

const UniversityListing = () => {
    const navigate = useNavigate()
    const [selectedCountry, setSelectedCountry] = useState('United Kingdom')
    const countries = Object.keys(universities)

    return (
        <main className="relative min-h-screen bg-[#f8f9fa]">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
                    <div className="flex items-center justify-between">
                        <img
                            src="/LOGO%20NAVABAR%20FOOTER/SO%20-%20Replace%202%20(1).png"
                            alt="Supreme Overseas Logo"
                            className="h-10 w-auto sm:h-12"
                            onError={(e) => {
                                console.error('Error loading logo:', e.target.src)
                                e.target.style.display = 'none'
                            }}
                        />
                        <button className="flex items-center gap-2 rounded-full border-2 border-slate-800 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-50">
                            Call us <span className="text-base">📞</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                {/* Title */}
                <div className="mb-10">
                    <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Top Universities to{' '}
                        <span className="text-[#4A90E2]">Study Abroad</span>
                    </h1>
                </div>

                {/* Country Tabs */}
                <div className="mb-8 flex flex-wrap items-center gap-3 border-b-2 border-slate-200 pb-4">
                    {countries.map((country) => (
                        <button
                            key={country}
                            onClick={() => setSelectedCountry(country)}
                            className={`relative flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${selectedCountry === country
                                ? 'bg-[#C44E28] text-white shadow-md'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <span className="text-base">{countryFlags[country]}</span>
                            <span>{country}</span>
                        </button>
                    ))}
                </div>

                {/* University Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {universities[selectedCountry].map((university) => (
                        <div
                            key={university.id}
                            className="flex items-center gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
                        >
                            {/* University Logo - Left */}
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 text-lg font-bold text-slate-400">
                                    {university.name.charAt(0)}
                                </div>
                            </div>

                            {/* University Info - Center */}
                            <div className="flex-1 min-w-0">
                                {/* University Name */}
                                <h3 className="mb-1 text-sm font-bold text-slate-900 truncate">
                                    {university.name}
                                </h3>

                                {/* Location */}
                                <p className="text-xs text-slate-600 truncate">
                                    {university.location}
                                </p>
                            </div>

                            {/* Course Count Badge - Right */}
                            <div className="flex-shrink-0">
                                <span className="inline-block rounded-md bg-yellow-100 px-2.5 py-1 text-xs font-bold text-yellow-800">
                                    {university.courses} Courses
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate('/journey/student')}
                        className="w-full rounded-xl bg-[#4A90E2] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#3A7BC8] sm:w-auto"
                    >
                        Start Your Journey
                    </button>
                </div>
            </section>
        </main>
    )
}

export default UniversityListing
