'use client'

import { useState } from 'react'

const departments = [
  {
    num: '01',
    slug: 'sports',
    labelEn: 'SPORTS & PERFORMANCE MASSAGE',
    labelNumEn: '01 / TREATMENT DEPARTMENT',
    title: 'قسم التدليك الرياضي والأداء',
    subtitle: 'يركز هذا القسم على تهيئة الجسم للرياضة، تعزيز الأداء، وسرعة العودة للنشاط',
    image: '/imag/BEFORE TRAINING.png',
    treatmentsCount: '5 علاجات متخصصة',
    treatments: [
      { title: 'التدليك التنشيطي', desc: 'تهيئة العضلات وتحفيز الدورة الدموية قبل التمرين' },
      { title: 'التدليك الاستشفائي', desc: 'تسريع تعافي العضلات وتخفيف الإجهاد بعد التمرين' },
      { title: 'التدليك التأهيلي', desc: 'لاستعادة التوازن العضلي ودعم استجابة الجسم للحركة' },
      { title: 'التدليك الليمفاوي', desc: 'تصريف السوائل وتنشيط الدورة الليمفاوية' },
      { title: 'تحرير العقد العضلية', desc: 'تفكيك التكتلات العضلية الشديدة وإعادة المرونة' },
    ],
    heading1: 'حين تتغير الحاجة،',
    heading2: 'يتغير الإيقاع.',
    sectionLabel: 'اختيارات القسم',
    sectionDesc: 'الطلبات المناسبة ضمن هذا القسم',
  },
  {
    num: '02',
    slug: 'recovery',
    labelEn: 'THERAPEUTIC & RECOVERY MASSAGE',
    labelNumEn: '02 / TREATMENT DEPARTMENT',
    title: 'قسم التدليك الاستشفائي والتعافي',
    subtitle: 'مخصص لإعادة الجسم لحالته الطبيعية، تقليل الألم، ودعم الاستشفاء الكامل',
    image: '/imag/THERAPEUTIC TOUCH.png',
    treatmentsCount: '5 علاجات متخصصة',
    treatments: [
      { title: 'التدليك العميق', desc: 'استهداف الأنسجة العميقة لتحرير التوتر المزمن' },
      { title: 'تدليك الأنسجة الرابطة', desc: 'تحسين مرونة الفاشيا وتخفيف الإجهاد الهيكلي' },
      { title: 'التدليك بالحرارة', desc: 'استخدام الحرارة لتعميق الاسترخاء وتسريع الاستشفاء' },
      { title: 'التدليك بالبرودة', desc: 'تقليل الالتهاب وتخدير مناطق الألم الحاد' },
      { title: 'التدليك المتكامل', desc: 'مزيج من التقنيات لنتائج استشفائية شاملة' },
    ],
    heading1: 'جسمك يحتاج',
    heading2: 'للراحة الحقيقية.',
    sectionLabel: 'اختيارات القسم',
    sectionDesc: 'الطلبات المناسبة ضمن هذا القسم',
  },
  {
    num: '03',
    slug: 'beauty',
    labelEn: 'BODY CONTOURING & THERMO-MASSAGE',
    labelNumEn: '03 / TREATMENT DEPARTMENT',
    title: 'قسم التدليك التجميلي والعناية',
    subtitle: 'يجمع بين العناية بالبشرة والجسم لتحسين المظهر العام وتعزيز الثقة بالنفس',
    image: '/imag/AFTER TRAINING.png',
    treatmentsCount: '4 علاجات متخصصة',
    treatments: [
      { title: 'تدليك نحت الجسم', desc: 'تشكيل الجسم وتحسين مظهر البشرة' },
      { title: 'التدليك الحراري', desc: 'تحفيز حرق الدهون وتحسين الدورة الدموية' },
      { title: 'تدليك تفتيح البشرة', desc: 'ترطيب وإشراق البشرة بمكونات طبيعية' },
      { title: 'تدليك شد الجسم', desc: 'تحسين مرونة الجلد وشد الأنسجة' },
    ],
    heading1: 'العناية تبدأ',
    heading2: 'من الداخل.',
    sectionLabel: 'اختيارات القسم',
    sectionDesc: 'الطلبات المناسبة ضمن هذا القسم',
  },
  {
    num: '04',
    slug: 'relaxation',
    labelEn: 'RELAXATION & WELLNESS MASSAGE',
    labelNumEn: '04 / TREATMENT DEPARTMENT',
    title: 'قسم التدليك للاسترخاء والهدوء',
    subtitle: 'تجربة مصممة لتهدئة الجهاز العصبي، تخفيف التوتر اليومي، والشعور بالسكينة',
    image: '/imag/BEFORE TRAINING.png',
    treatmentsCount: '4 علاجات متخصصة',
    treatments: [
      { title: 'التدليك السويدي', desc: 'حركات طويلة وناعمة لإرخاء الجسم بالكامل' },
      { title: 'تدليك الرأس والكتفين', desc: 'تخفيف توتر الرأس والرقبة وإزالة الصداع' },
      { title: 'التدليك بالزيوت العطرية', desc: 'تهدئة الحواس وتحفيز الاسترخاء العميق' },
      { title: 'تدليك القدمين', desc: 'تنشيط نقاط الطاقة وإزالة إجهاد القدمين' },
    ],
    heading1: 'اهدأ.',
    heading2: 'استرح. انطلق.',
    sectionLabel: 'اختيارات القسم',
    sectionDesc: 'الطلبات المناسبة ضمن هذا القسم',
  },
]

export default function TreatmentsPage() {
  const [activeDept, setActiveDept] = useState(0)
  const dept = departments[activeDept]

  return (
    <div dir="rtl" className="overflow-hidden">

      {/* Section 1 - Hero fullscreen */}
      <section
        className="relative w-screen -mx-[calc((100vw-100%)/2)] min-h-screen flex flex-col justify-between overflow-hidden"
        style={{ background: '#0d1a0a' }}
      >
        <img
          src={dept.image}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(5,15,3,0.8) 100%)' }} />

        {/* Circles decoration */}
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-500/25 pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-green-500/20 pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-green-500/10 pointer-events-none" />

        {/* Top labels */}
        <div className="relative z-10 flex flex-col items-end px-8 md:px-16 pt-28 gap-2">
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(150, 215, 78, 1)' }}>
            {dept.labelEn}
          </p>
          <p className="text-xs font-bold tracking-widest" style={{ color: 'rgba(150, 215, 78, 1)' }}>
            {dept.labelNumEn}
          </p>
        </div>

        {/* Heading */}
        <div className="relative z-10 flex flex-col items-start justify-center flex-1 px-8 md:px-16">
          <div className="w-full flex justify-start mb-6">
            <a
              href="/treatments"
              className="flex items-center gap-1 text-xs font-bold"
              style={{ color: 'rgba(150, 215, 78, 1)' }}
            >
              جميع العلاجات
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
          <h1 className="text-white font-black leading-tight text-left" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
            {dept.title.split(' ').slice(0, 3).join(' ')}
          </h1>
          <h1 className="text-white font-black leading-tight text-left" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
            {dept.title.split(' ').slice(3).join(' ')}
          </h1>
        </div>

        {/* Bottom row: treatments count + description */}
        <div className="relative z-10 px-8 md:px-16 pb-12 flex items-end justify-between">
          <button
            className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
            style={{ backgroundColor: 'rgba(150, 215, 78, 0.15)', border: '1px solid rgba(150, 215, 78, 0.4)', color: 'rgba(150, 215, 78, 1)' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
            {dept.treatmentsCount}
          </button>
          <p className="text-gray-400 text-sm text-right max-w-sm leading-relaxed">
            {dept.subtitle}
          </p>
        </div>
      </section>

      {/* Section 2 - Light bg: heading + treatments list + sidebar */}
      <section style={{ backgroundColor: 'hsla(60, 16%, 94%, 1)' }} className="px-8 md:px-16 py-20">
        <div className="flex flex-col md:flex-row gap-16">

          {/* Left sidebar - dept number + description + CTA */}
          <div className="flex flex-col items-start md:w-64 flex-shrink-0 pt-4">
            <p className="font-black leading-none mb-4" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', color: 'rgba(150, 215, 78, 1)' }}>
              {dept.num}
            </p>
            <p className="text-gray-500 text-xs mb-6 text-left leading-relaxed">
              {dept.sectionDesc}
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-bold"
              style={{ color: 'rgba(150, 215, 78, 1)' }}
            >
              <span className="w-4 h-4 rounded-full border flex items-center justify-center text-xs" style={{ borderColor: 'rgba(150, 215, 78, 1)' }}>✓</span>
              تعرّف على تجربتك
            </a>
          </div>

          {/* Right - Heading + treatments list */}
          <div className="flex-1">
            {/* Label - above heading on the right */}
            <div className="flex items-center gap-2 mb-6 justify-start">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
              <span className="text-black text-xs font-bold">اختيارات القسم</span>
            </div>

            {/* Heading */}
            <h2 className="text-black font-black leading-tight mb-1 text-right" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {dept.heading1}
            </h2>
            <h2 className="font-black leading-tight mb-6 text-right" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(150, 215, 78, 1)' }}>
              {dept.heading2}
            </h2>

            {/* Description text - below heading */}
            <p className="text-gray-500 text-sm text-right leading-relaxed mb-10 max-w-lg ml-auto">
              {dept.subtitle}
            </p>

            {/* Treatments list */}
            <div className="flex flex-col">
              {dept.treatments.map((t, i) => (
                <div key={i} className="py-5 relative flex items-center">
                  {/* Border only on the right 50% */}
                  <div className="absolute bottom-0 right-0 w-1/2 border-b" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                  {/* Checkmark vertically centered with text, at the right-1/2 position */}
                  <span className="absolute right-1/2 text-xs font-bold" style={{ color: 'rgba(150, 215, 78, 1)' }}>✓</span>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-black font-black text-xl md:text-2xl">{t.title}</span>
                    <span className="text-gray-500 text-xs mt-1">{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Dark: "اكتشف إيقاعاً آخر" - other 3 departments */}
      <section className="px-8 md:px-16 py-20" style={{ backgroundColor: 'hsla(60, 16%, 94%, 1)' }}>
        {/* Label */}
        <div className="flex items-center gap-2 mb-6 justify-start">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
          <span className="text-black text-xs font-bold">مسارات أخرى</span>
        </div>

        {/* Heading */}
        <h2 className="text-black font-black leading-tight mb-12 text-right" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          اكتشف إيقاعاً{' '}
          <span style={{ color: 'rgba(150, 215, 78, 1)' }}>آخر.</span>
        </h2>

        {/* Other 3 departments cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {departments
            .filter((_, i) => i !== activeDept)
            .map((d) => (
              <button
                key={d.num}
                onClick={() => {
                  setActiveDept(departments.findIndex(x => x.num === d.num))
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="relative rounded-xl overflow-hidden flex flex-col justify-between p-6 text-right group transition-all duration-300 border"
                style={{ minHeight: '220px', backgroundColor: 'rgba(0,0,0,0.6)', borderColor: 'rgba(255,255,255,0.02)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(150, 215, 78, 0.4)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                onTouchStart={e => (e.currentTarget.style.borderColor = 'rgba(150, 215, 78, 0.4)')}
                onTouchEnd={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                <img
                  src={d.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-bold tracking-widest" style={{ fontSize: '0.4rem', color: 'rgba(150, 215, 78, 1)' }}>{d.labelEn}</span>
                  <span className="text-xs font-bold" style={{ color: 'rgba(150, 215, 78, 1)' }}>{d.num}</span>
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="text-white font-black leading-tight text-right" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
                    {d.title}
                  </h3>
                  <div className="mt-4 flex justify-end">
                    <span className="text-xs font-bold" style={{ color: 'rgba(150, 215, 78, 1)' }}>✓</span>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black" dir="rtl">
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 gap-8">
            <div className="flex flex-col items-start gap-3">
              <img src="/imag/loge.png" alt="Relax Heal Logo" className="h-10 object-contain" />
              <p className="text-gray-400 text-xs text-left max-w-[180px]">
                استشفاء رياضي واسترخاء داخل الأندية الرياضية.
              </p>
            </div>
            <div className="flex gap-16 text-sm">
              <div className="flex flex-col text-right">
                <a href="/" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>الرئيسية</a>
                <a href="/packages" className="text-white hover:text-green-400 transition-colors py-3 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>الباقات</a>
              </div>
              <div className="flex flex-col text-right">
                <a href="/treatments" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>العلاجات</a>
                <a href="/experience" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>التجربة</a>
                <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>عن ريلاكس هيل</a>
              </div>
            </div>
            <div
              className="w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center flex-shrink-0"
              style={{ borderColor: 'rgba(150, 215, 78, 0.4)' }}
            >
              <span className="text-white text-[9px] font-bold tracking-widest uppercase text-center leading-tight">
                RECOVERY<br />IN MOTION
              </span>
            </div>
          </div>
          <div
            className="flex items-center justify-between px-8 md:px-16 py-4 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <span className="text-gray-600 text-xs uppercase tracking-widest">RELAX HEAL / 2026</span>
            <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">تصميم، استشاري ربع أفق</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
