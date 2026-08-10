'use client'

import { useState } from 'react'

export default function TreatmentSelectorSection() {
  const routes = [
    { number: '01', title: 'قسم التدليك الرياضي والأداء', image: '/imag/BEFORE TRAINING.png' },
    { number: '02', title: 'قسم التدليك الاستشفائي والتعافي', image: '/imag/THERAPEUTIC TOUCH.png' },
    { number: '03', title: 'قسم التدليك التجميلي والعناية', image: '/imag/AFTER TRAINING.png' },
    { number: '04', title: 'قسم التدليك للاسترخاء والهدوء', image: '/imag/BEFORE TRAINING.png' },
  ]

  const steps = [
    {
      number: '01',
      title: 'التدليك التنشيطي',
      label: 'قسم التدليك الرياضي والأداء',
      headingLine1: 'التدليك',
      headingLine2: 'التنشيطي',
      description: 'تهيئة العضلات وتحفيز الدورة الدموية قبل التمرين',
      image: '/imag/BEFORE TRAINING.png',
    },
    {
      number: '02',
      title: 'التدليك الاستشفائي',
      label: 'قسم التدليك الاستشفائي والتعافي',
      headingLine1: 'التدليك',
      headingLine2: 'الاستشفائي',
      description: 'استعادة العضلات وتقليل التوتر بعد المجهود',
      image: '/imag/THERAPEUTIC TOUCH.png',
    },
    {
      number: '03',
      title: 'التدليك التأهيلي',
      label: 'قسم التدليك التجميلي والعناية',
      headingLine1: 'التدليك',
      headingLine2: 'التأهيلي',
      description: 'دعم إعادة التأهيل وتحسين مدى الحركة',
      image: '/imag/AFTER TRAINING.png',
    },
    {
      number: '04',
      title: 'التدليك اللمفاوي',
      label: 'قسم التدليك للاسترخاء والهدوء',
      headingLine1: 'التدليك',
      headingLine2: 'اللمفاوي',
      description: 'تحفيز الجهاز اللمفاوي وتقليل الاحتباس',
      image: '/imag/BEFORE TRAINING.png',
    },
    {
      number: '05',
      title: 'تحرير العقد العضلية',
      label: 'قسم العناية العميقة بالأنسجة',
      headingLine1: 'تحرير',
      headingLine2: 'العقد العضلية',
      description: 'استهداف نقاط التوتر لتحرير العضلات العميقة',
      image: '/imag/THERAPEUTIC TOUCH.png',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeRouteIndex, setActiveRouteIndex] = useState(0)
  const [hoverSource, setHoverSource] = useState<'steps' | 'routes'>('steps')
  const active = steps[activeIndex]
  const activeRoute = routes[activeRouteIndex]
  const displayImage = hoverSource === 'steps' ? active.image : activeRoute.image
  const displayTitle = hoverSource === 'steps' ? active.title : activeRoute.title

  return (
    <section className="min-h-screen bg-black relative overflow-hidden px-4 md:px-8 lg:px-16 py-12">
      {/* Background watermark text */}
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <h1
          className="font-black leading-none"
          style={{fontSize: 'clamp(5rem, 14vw, 11rem)', color: 'transparent', WebkitTextStroke: '2px rgba(150, 215, 78, 0.15)'}}
        >
          TREAT
        </h1>
      </div>

      {/* Header */}
      <div className="mb-12 flex items-start justify-between relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
            <span className="text-sm font-bold text-white">استشفاء راحة بلمسة</span>
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl text-right">
            اكتشف العناية<br/>
            <span style={{color: 'rgba(150, 215, 78, 1)'}}>المناسبة الآن.</span>
          </h1>
        </div>
        <p className="text-gray-400 text-xs max-w-xs text-right mt-30 leading-relaxed">
          حاول المؤثر أو استخدم لوحة المفاتيح للتنقل بين الأقسام والعلامات.
          <br/>
          كل اختيار يفتح طبقة جديدة من التجربة.
        </p>
      </div>

      {/* Three column selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 border" style={{borderColor: 'rgba(150, 215, 78, 0.25)'}}>

        {/* Left panel - Steps list */}
        <div className="p-8 border-t md:border-t-0 md:border-l order-2 md:order-3" style={{borderColor: 'rgba(150, 215, 78, 0.25)'}}>
          <div className="flex justify-between text-[10px] text-gray-500 tracking-wider mb-8">
            <span>01 / كارد سيلكتور</span>
            <span>05 MOOD</span>
          </div>
          <p className="text-[10px] font-bold tracking-wider mb-3" style={{color: 'rgba(150, 215, 78, 1)'}}>
            {active.label}
          </p>
          <h2 className="text-white text-4xl font-black leading-tight mb-4">
            {active.headingLine1}<br/>{active.headingLine2}
          </h2>
          <p className="text-gray-500 text-xs mb-2">{active.number} / SELECTED</p>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            {active.description}
          </p>

          <ul className="space-y-3 mb-10">
            {steps.map((step, index) => {
              const isActive = index === activeIndex
              return (
                <li
                  key={step.number}
                  onMouseEnter={() => { setActiveIndex(index); setHoverSource('steps') }}
                  className="flex items-center justify-between py-2 border-b cursor-pointer"
                  style={{borderColor: 'rgba(255,255,255,0.08)'}}
                >
                  <span className={isActive ? 'text-white text-sm font-bold' : 'text-gray-500 text-sm'}>
                    {step.title}
                  </span>
                  <span className={isActive ? 'text-sm font-bold' : 'text-gray-500 text-sm'} style={isActive ? {color: 'rgba(150, 215, 78, 1)'} : {}}>
                    {isActive ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : step.number}
                  </span>
                </li>
              )
            })}
          </ul>

          <a href="#" className="text-sm font-bold flex items-center gap-2" style={{color: 'rgba(150, 215, 78, 1)'}}>
            اكتشف القسم بالكامل
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Middle - Image */}
        <div className="relative min-h-[320px] md:min-h-0 order-1 md:order-2 border-r-4" style={{borderColor: 'rgba(150, 215, 78, 1)'}}>
          <img
            src={displayImage}
            alt={displayTitle}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Right panel - Route selector */}
        <div className="p-8 order-3 md:order-1" style={{backgroundColor: '#0a0d09'}}>
          <div className="flex justify-between text-[10px] text-gray-500 tracking-wider mb-8">
            <span>01 - 04</span>
            <span>CHOOSE YOUR ROUTE</span>
          </div>

          <ul className="space-y-4">
            {routes.map((route, index) => {
              const isRouteActive = hoverSource === 'routes' && index === activeRouteIndex
              return (
                <li
                  key={route.number}
                  onMouseEnter={() => { setActiveRouteIndex(index); setHoverSource('routes') }}
                  className="flex items-center justify-between py-4 px-4 rounded cursor-pointer"
                  style={isRouteActive ? {backgroundColor: 'rgba(150, 215, 78, 0.1)', border: '1px solid rgba(150, 215, 78, 0.4)'} : {}}
                >
                  <span className={isRouteActive ? 'text-white text-sm font-bold' : 'text-gray-400 text-sm'}>
                    {route.title}
                  </span>
                  <span className="flex items-center gap-3">
                    {isRouteActive && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" style={{color: 'rgba(150, 215, 78, 1)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <span className="text-xs font-bold" style={{color: 'rgba(150, 215, 78, 1)'}}>
                      {route.number}
                    </span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
