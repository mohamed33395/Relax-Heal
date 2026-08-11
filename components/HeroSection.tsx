'use client'

import Button from './Button'

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{backgroundColor: 'hsla(60, 16%, 94%, 1)'}}>
      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col justify-between min-h-screen">
        
        {/* Top row with line */}
        <div className="flex items-center justify-start w-full pt-12 pb-4 border-b border-black">
          <h6 className="text-black text-sm ml-15 tracking-widest uppercase">THE BODY REMEMBERS</h6>
          <span style={{color: 'rgba(150, 215, 78, 1)'}}>RELAX HEAL / 01</span>
        </div>

        {/* Middle content */}
        <div className="flex flex-col md:flex-row items-center justify-start py-6 gap-8">

          <div className="w-full md:w-2/3 text-right">
            <h1 className="text-black font-black leading-none mb-6"
                style={{fontSize: 'clamp(2.5rem, 6vw, 5rem)'}}>
              أداءك لا ينتهي عند آخر<br/>
              <span style={{color: 'rgba(150, 215, 78, 1)'}}>تكرار.</span>
            </h1>
            <p className="text-black text-lg leading-relaxed max-w-2xl mt-18">
                ريلاكس هيل هو وجهتك الراقية للاستشفاء الرياضي والاسترخاء داخل الأندية الرياضية، حيث
                نؤمن أن الأداء الحقيقي لا يكتمل بالتمرين وحده، بل بالعناية الصحيحة بالجسم. نقدّم برامج
                تدليك متخصصة تدعم الاستشفاء العضلي، تعزّز المرونة، وتخفف الإجهاد، قبل التمرين أو بعده،
                باستخدام تقنيات متقدمة ومنتجات عالمية عالية الجودة لنتائج ملموسة            </p>
          </div>

            <Button
                style={{
                    backgroundColor: 'transparent',
                    border: '1px solid black',
                    marginTop: '400px',
                    color:'black'
                }}
                className="text-black"
            >
                تعرف على ريلاكس هيل
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 3.293a1 1 0 010 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </Button>
        </div>

        {/* Bottom section: Stats */}
        <div className="flex flex-col gap-4 pb-8">
          <div className="flex items-center gap-4 w-1/2 border-b border-gray-300 pb-2">
            <div className="text-sm font-black" style={{color: 'rgba(150, 215, 78, 1)'}}>04</div>
            <div className="text-black text-sm">أقسام متخصصة</div>
          </div>
          <div className="flex items-center gap-4 w-1/2 border-b border-gray-300 pb-2">
            <div className="text-sm font-black" style={{color: 'rgba(150, 215, 78, 1)'}}>16</div>
            <div className="text-black text-sm">جلسة وعناية</div>
          </div>
          <div className="flex items-center gap-4 w-1/2 border-b border-gray-300 pb-2">
            <div className="text-sm font-black" style={{color: 'rgba(150, 215, 78, 1)'}}>04</div>
            <div className="text-black text-sm">باقات متكاملة</div>
          </div>
        </div>
      </div>
    </section>
  )
}
