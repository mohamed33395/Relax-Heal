'use client'

export default function RecoverySection() {
  return (
    <section className="min-h-screen relative overflow-hidden px-4 md:px-8 lg:px-16 py-12" style={{backgroundColor: 'hsla(60, 16%, 94%, 1)'}}>
      {/* Header */}
      <div className="mb-12 flex items-start justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
            <span className="text-sm font-bold" style={{color: 'rgba(150, 215, 78, 1)'}}>أربعة مسارات لجسمك</span>
          </div>
          <h1 className="text-black font-black text-5xl md:text-6xl lg:text-7xl text-right">
            لغة مختلفة لكل<br/>
<span style={{color: 'rgba(150, 215, 78, 1)'}}>حالة حركة.</span>
          </h1>
        </div>
        <p className="text-gray-600 text-xs max-w-sm text-left mt-30">
          تختار القسم الذي ينسجم مع لحظتك: قبل التدريب، بعده، أو حين تحتاج إلى استعادة هدوءك.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 - Large */}
        <div className="relative rounded-lg overflow-hidden shadow-lg h-96 md:col-span-2">
          <img 
            src="/imag/BEFORE TRAINING.png" 
            alt="Sports Massage" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 text-sm font-black" style={{color: 'rgba(150, 215, 78, 1)'}}>
            01
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-start mb-4">
              <p className="text-white text-sm ">قسم التدليك الرياضي والأداء</p>
              <span className="text-[4px] font-bold tracking-wider" style={{color: 'rgba(150, 215, 78, 1)'}}>
                SPORTS & PERFORMANCE MASSAGE
              </span>
            </div>
            <a href="#" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-sm ">
              استكشف القسم
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 - Small */}
        <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
          <img 
            src="/imag/THERAPEUTIC TOUCH.png" 
            alt="Therapeutic Massage" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 text-sm font-black" style={{color: 'rgba(150, 215, 78, 1)'}}>
            02
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-start mb-4">
              <p className="text-white text-sm">قسم التدليك الاستشفائي والتعافي</p>
              <span className="text-[4px] font-bold tracking-wider" style={{color: 'rgba(150, 215, 78, 1)'}}>
                THERAPEUTIC & RECOVERY MASSAGE
              </span>
            </div>
            <a href="#" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-bold">
              استكشف القسم
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 3 - Small */}
        <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
          <img 
            src="/imag/AFTER TRAINING.png" 
            alt="Body Contouring" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 text-sm font-black" style={{color: 'rgba(150, 215, 78, 1)'}}>
            03
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white text-sm">قسم التدليك التجميلي والعناية</h3>
              <span className="text-[4px] font-bold tracking-wider" style={{color: 'rgba(150, 215, 78, 1)'}}>
                BODY CONTOURING & THERMO-MASSAGE
              </span>
            </div>
            <a href="#" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-bold">
              استكشف القسم
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 4 - Large */}
        <div className="relative rounded-lg overflow-hidden shadow-lg h-96 md:col-span-2">
          <img 
            src="/imag/BEFORE TRAINING.png" 
            alt="Relaxation Massage" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 text-sm font-black" style={{color: 'rgba(150, 215, 78, 1)'}}>
            04
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white text-sm">قسم التدليك للاسترخاء والهدوء</h3>
              <span className="text-[4px] font-bold tracking-wider" style={{color: 'rgba(150, 215, 78, 1)'}}>
                RELAXATION & WELLNESS MASSAGE
              </span>
            </div>
            <a href="#" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-bold">
              استكشف القسم
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
