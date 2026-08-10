'use client'

export default function DetailsSection() {
  const items = [
    { number: '01', title: 'خبرة عملية في التعامل مع الرياضيين' },
    { number: '02', title: 'موقع داخل الجيمات لسهولة الوصول' },
    { number: '03', title: 'جلسات مخصصة قبل وبعد التمرين' },
    { number: '04', title: 'اعتماد منتجات عالية الجودة' },
  ]

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex flex-col md:flex-row">
      {/* Left - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-16">
        <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
          <span className="text-white text-xs font-bold">لماذا ريلاكس هيل؟</span>

        </div>
        <h1 className="text-white font-black text-6xl md:text-7xl text-center leading-tight">
          تفاصيلك<br/>
          <span style={{color: 'rgba(150, 215, 78, 1)'}}>محلّ اهتمام.</span>
        </h1>
      </div>

      {/* Right - Image with checklist */}
      <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-screen">
        <img
          src="/imag/THERAPEUTIC TOUCH.png"
          alt="Details"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-8 md:px-12 space-y-0">
          {items.map((item, index) => (
            <div
              key={item.number}
              className={`flex items-center justify-between py-4 border-b ${index === 0 ? 'border-t' : ''}`}
              style={{borderColor: 'rgba(255,255,255,0.15)'}}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold" style={{color: 'rgba(150, 215, 78, 1)'}}>{item.number}</span>
                <span className="text-white text-sm font-bold">{item.title}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" style={{color: 'rgba(150, 215, 78, 1)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ))}
          <div className="flex justify-start pt-6">
            <button className="flex items-center gap-3 rounded-full pr-2 pl-6 py-2" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-black text-sm font-bold">تعرف على ما نتوقعه</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
