'use client'

export default function FooterSection() {
  return (
    <footer className="bg-black" dir="rtl">
      {/* CTA Section */}
      <div
        className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{background: 'radial-gradient(ellipse at center, rgba(40,80,20,0.7) 0%, #0a0f05 70%)'}}
      >
        <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{color: 'rgba(150, 215, 78, 1)'}}>
          RELAX HEAL / INSIDE YOUR GYM
        </p>
        <h1 className="text-white font-black leading-tight mb-2" style={{fontSize: 'clamp(3rem, 8vw, 7rem)'}}>
          خذ التمرين إلى
        </h1>
        <h1 className="font-black leading-tight mb-6" style={{fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'rgba(150, 215, 78, 1)'}}>
          ما بعده.
        </h1>
        <p className="text-gray-400 text-sm mb-10 max-w-md">
          جلسات مخصصة قبل وبعد التمرين، ضمن تجربة احترافية داخل الأندية الرياضية.
        </p>
        <button
          className="flex items-center gap-3 rounded-full px-2 py-2"
          style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}
        >
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" style={{color: 'rgba(150, 215, 78, 1)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-black text-sm font-bold pl-4">ابدأ من العلاجات</span>
        </button>
      </div>

      {/* Footer Links */}
      <div className="border-t" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-8">

          {/* Left - Logo + tagline */}
          <div className="flex flex-col items-start gap-3">
            <img src="/imag/loge.png" alt="Relax Heal Logo" className="h-10 object-contain" />
            <p className="text-gray-400 text-xs text-left max-w-[180px]">
              استشفاء رياضي واسترخاء داخل الأندية الرياضية.
            </p>
          </div>

          {/* Center - Nav links */}
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col text-right">
              <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{borderColor: 'rgba(255,255,255,0.15)'}}>الرئيسية</a>
              <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t border-b" style={{borderColor: 'rgba(255,255,255,0.15)'}}>الباقات</a>
            </div>
            <div className="flex flex-col text-right">
              <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{borderColor: 'rgba(255,255,255,0.15)'}}>العلاجات</a>
              <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t" style={{borderColor: 'rgba(255,255,255,0.15)'}}>التجربة</a>
              <a href="#" className="text-white hover:text-green-400 transition-colors py-3 border-t border-b" style={{borderColor: 'rgba(255,255,255,0.15)'}}>عن ريلاكس هيل</a>
            </div>
          </div>

          {/* Right - Circle badge */}
          <div
            className="w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center flex-shrink-0"
            style={{borderColor: 'rgba(150, 215, 78, 0.4)'}}
          >
            <span className="text-white text-[9px] font-bold tracking-widest uppercase text-center leading-tight">
              RECOVERY<br/>IN MOTION
            </span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-4 border-t" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
          <span className="text-gray-600 text-xs uppercase tracking-widest">RELAX HEAL / 2026</span>
          <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">تصميم، استشاري ربع أفق</a>
        </div>
        </div>
      </div>
    </footer>
  )
}
