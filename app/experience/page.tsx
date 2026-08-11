'use client'

export default function ExperiencePage() {
  return (
    <div dir="rtl" className="overflow-hidden">

      {/* Section 1 - Hero FULLWIDTH FULLSCREEN */}
      <section
        className="relative w-screen -mx-[calc((100vw-100%)/2)] min-h-screen flex flex-col justify-between overflow-hidden mt-[-1px]"
        style={{background: '#0d1a0a', marginTop: 0}}
      >
        <img
          src="/imag/THERAPEUTIC TOUCH.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(5,15,3,0.75) 100%)'}} />

        {/* Circles decoration */}
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-500/25 pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-green-500/20 pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-green-500/10 pointer-events-none" />

        {/* Top labels — below fixed Navbar */}
        <div className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-28">
          <p className="text-xs font-bold tracking-widest uppercase" style={{color: 'rgba(150, 215, 78, 1)'}}>
              04 — 05
          </p>
          <p className="text-xs font-bold tracking-widest" style={{color: 'rgba(150, 215, 78, 1)'}}>
              THE RELAX HEAL EXPERIENCE
          </p>
        </div>

        {/* Heading - left aligned, vertically centered */}
        <div className="relative z-10 flex flex-col items-start justify-center flex-1 px-8 md:px-16">
          <h1 className="text-white font-black leading-tight text-left" style={{fontSize: 'clamp(3.5rem, 8vw, 7rem)'}}>
            من أول حديث، تبدأ
          </h1>
          <h1 className="font-black leading-tight text-left" style={{fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: 'rgba(150, 215, 78, 1)'}}>
            العناية.
          </h1>
        </div>

        {/* Bottom description - left aligned */}
        <div className="relative z-10 px-8 md:px-16 pb-12 flex justify-start">
          <p className="text-gray-400 text-sm text-left max-w-sm leading-relaxed">
            تجربة واضحة ومريحة داخل الجيم، تبدأ بفهم احتياجاتك وتكمل بالاختيار المناسب لجسمك وحركتك.
          </p>
        </div>
      </section>

      {/* Section 2 - Light bg, image right + text left */}
      <section
        className="flex flex-col md:flex-row items-start px-8 md:px-16 py-20 gap-12"
        style={{backgroundColor: 'hsla(60, 16%, 94%, 1)'}}
      >
        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 flex-shrink-0">
          <div className="rounded-lg overflow-hidden aspect-[4/3] bg-gray-800">
            <img
              src="/imag/BEFORE TRAINING.png"
              alt="التجربة"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-4 text-xs font-bold tracking-widest" style={{color: 'rgba(150, 215, 78, 1)'}}>
            CARE / 01
          </div>
        </div>

        {/* Right - Text + steps */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
            <span className="text-black text-xs font-bold">ماذا تتوقع عند زيارتنا</span>
          </div>
          <h2 className="text-black font-black leading-tight mb-2" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>
            هدوء في التفاصيل،
          </h2>
          <h2 className="font-black leading-tight mb-10" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'rgba(150, 215, 78, 1)'}}>
            وضوح في التجربة.
          </h2>

          <div className="w-full flex flex-col">
            {[
              { num: '01', text: 'استقبال احترافي وشرح مخصص عن احتياجاتك.' },
              { num: '02', text: 'تقييم لحالتك الرياضية ونوع التمرين الذي قمت به.' },
              { num: '03', text: 'اختيار نوع التدليك المناسب (قبل أو بعد التمرين).' },
              { num: '04', text: 'استخدام كريمات وزيوت عالية الجودة تساعد على الاستشفاء.' },
              { num: '05', text: 'جلسة علاجية في أجواء مريحة لتعزيز الاسترخاء.' },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`flex items-center gap-4 py-3 border-b ${i === 0 ? 'border-t' : ''}`}
                style={{borderColor: 'rgba(0,0,0,0.1)'}}
              >
                <span className="text-xs font-bold flex-shrink-0" style={{color: 'rgba(150, 215, 78, 1)'}}>{item.num}</span>
                <span className="text-black text-sm font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Dark bg, 4 steps cards */}
      <section className="bg-black px-8 md:px-16 py-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
          <span className="text-white text-xs font-bold">خطوات تجربتك معنا</span>
        </div>
        <h2 className="text-white font-black leading-tight mb-2 text-right" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>
          أربع محطات.{' '}
          <span style={{color: 'rgba(150, 215, 78, 1)'}}>مسار</span>
        </h2>
        <h2 className="text-white font-black leading-tight mb-12 text-right" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>
          واحد لك.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { num: '01', text: 'الحجز المسبق أو من خلال الجيم.' },
            { num: '02', text: 'مقابلة الأخصائي وتحديد احتياجاتك.' },
            { num: '03', text: 'بدء الجلسة العلاجية حسب اختيارك.' },
            { num: '04', text: 'نصائح ما بعد الجلسة لدعم الاستشفاء.' },
          ].map((item) => (
            <div
              key={item.num}
              className="border border-gray-700 rounded-lg p-6 flex flex-col gap-8 relative overflow-hidden transition-all duration-300 cursor-pointer"
              style={{minHeight: '180px'}}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(150, 215, 78, 0.12)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              onTouchStart={e => (e.currentTarget.style.backgroundColor = 'rgba(150, 215, 78, 0.12)')}
              onTouchEnd={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full border border-gray-600" />
                <span className="text-xs font-bold" style={{color: 'rgba(150, 215, 78, 1)'}}>{item.num}</span>
              </div>
              <div className="mt-auto">
                <div className="w-6 h-0.5 mb-3 ml-auto" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}} />
                <p className="text-white text-sm font-bold text-right">{item.text}</p>
              </div>
              {/* Large faded number */}
              <span
                className="absolute bottom-2 left-2 font-black text-6xl leading-none select-none"
                style={{color: 'rgba(150,215,78,0.06)'}}
              >
                {item.num}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t pt-6" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
          <p className=" text-xs" style={{color: 'rgba(150, 215, 78, 1)'}}>RELAX HEAL / INSIDE THE GYM</p>
          <span className="text-xs font-bold tracking-widest text-gray-400" >ابدأ بالحجز المسبق أو من خلال الجيم، ثم دع التجربة تسير حسب احتياجك.</span>
        </div>
      </section>

      {/* Section 4 - Green full bg CTA */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 px-8 overflow-hidden"
        style={{backgroundColor: 'rgba(60, 100, 20, 0.9)', background: 'linear-gradient(135deg, rgba(80,130,20,0.95) 0%, rgba(40,80,10,0.95) 100%)'}}
      >
        <img
          src="/imag/AFTER TRAINING.png"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-white font-black leading-tight" style={{fontSize: 'clamp(2.5rem, 6vw, 5rem)'}}>
            اختر المسار الذي
          </h2>
          <h2 className="text-white font-black leading-tight" style={{fontSize: 'clamp(2.5rem, 6vw, 5rem)'}}>
            يشبه يومك.
          </h2>
          <button
            className="flex items-center gap-3 rounded-full px-5 py-2 mt-4"
            style={{backgroundColor: '#111'}}
          >
            <span className="text-white text-sm font-bold">استكشف العلاجات</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Section 5 - Footer */}
      <footer className="bg-black" dir="rtl">
        <div className="border-t" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
          <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 gap-8">
            <div className="flex flex-col items-start gap-3">
              <img src="/imag/loge.png" alt="Relax Heal Logo" className="h-10 object-contain" />
              <p className="text-gray-400 text-xs text-left max-w-[180px]">
                استشفاء رياضي واسترخاء داخل الأندية الرياضية.
              </p>
            </div>
            <div className="flex gap-16 text-sm">
              <div className="flex flex-col text-right">
                <a href="/" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{borderColor: 'rgba(255,255,255,0.15)'}}>الرئيسية</a>
                <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t border-b" style={{borderColor: 'rgba(255,255,255,0.15)'}}>الباقات</a>
              </div>
              <div className="flex flex-col text-right">
                <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{borderColor: 'rgba(255,255,255,0.15)'}}>العلاجات</a>
                <a href="/experience" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{borderColor: 'rgba(255,255,255,0.15)'}}>التجربة</a>
                <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t border-b" style={{borderColor: 'rgba(255,255,255,0.15)'}}>عن ريلاكس هيل</a>
              </div>
            </div>
            <div
              className="w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center flex-shrink-0"
              style={{borderColor: 'rgba(150, 215, 78, 0.4)'}}
            >
              <span className="text-white text-[9px] font-bold tracking-widest uppercase text-center leading-tight">
                RECOVERY<br/>IN MOTION
              </span>
            </div>
          </div>
          <div
            className="flex items-center justify-between px-8 md:px-16 py-4 border-t"
            style={{borderColor: 'rgba(255,255,255,0.08)'}}
          >
            <span className="text-gray-600 text-xs uppercase tracking-widest">RELAX HEAL / 2026</span>
            <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">تصميم، استشاري ربع أفق</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
