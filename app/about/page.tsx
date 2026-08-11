'use client'

export default function AboutPage() {
  return (
    <div dir="rtl" className="overflow-hidden">

      {/* Section 1 - Hero */}
      <section
        className="relative w-screen -mx-[calc((100vw-100%)/2)] min-h-[80vh] flex flex-col justify-between overflow-hidden"
        style={{ background: '#0d1a0a' }}
      >
        <img
          src="/imag/THERAPEUTIC TOUCH.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(5,15,3,0.85) 100%)' }} />

        {/* Circles */}
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-500/25 pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-green-500/20 pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-green-500/10 pointer-events-none" />

        {/* Top labels */}
        <div className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-28">
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(150, 215, 78, 1)' }}>
            05 — 01
          </p>
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(150, 215, 78, 1)' }}>
            ABOUT RELAX HEAL / INSIDE THE GYM
          </p>
        </div>

        {/* Heading */}
        <div className="relative z-10 flex flex-col items-start justify-center flex-1 px-8 md:px-16">
          <h1 className="text-white font-black leading-tight text-right w-full" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            نحن نؤمن أن العناية
          </h1>
          <h1 className="font-black leading-tight text-right w-full" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: 'rgba(150, 215, 78, 1)' }}>
            تُكمل الأداء.
          </h1>
        </div>

        {/* Bottom description */}
        <div className="relative z-10 px-8 md:px-16 pb-12 flex justify-start">
          <p className="text-gray-400 text-sm text-right max-w-sm leading-relaxed">
            ريلاكس هيل وجهة راقية للاستشفاء الرياضي والاسترخاء داخل الأندية الرياضية.
          </p>
        </div>
      </section>

      {/* Section 2 - Light bg: image right + text left */}
      <section
        className="flex flex-col md:flex-row items-center px-8 md:px-16 py-20 gap-12"
        style={{ backgroundColor: 'hsla(60, 16%, 94%, 1)' }}
      >
        {/* Left - Image + badge */}
        <div className="relative w-full md:w-2/5 flex-shrink-0">
          <div className="rounded-lg overflow-hidden bg-gray-800" style={{ aspectRatio: '4/3', maxHeight: '320px' }}>
            <img
              src="/imag/BEFORE TRAINING.png"
              alt="عن ريلاكس هيل"
              className="w-full h-full object-cover"
            />
          </div>
          {/* RELAX HEAL badge */}
          <div
            className="absolute bottom-4 left-4 w-16 h-16 rounded-full flex flex-col items-center justify-center"
            style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }}
          >
            <span className="text-black text-[8px] font-black tracking-wider uppercase text-center leading-tight">
              RELAX<br />HEAL
            </span>
          </div>
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-3/5 flex flex-col items-start text-right">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
            <span className="text-black text-xs font-bold">من نحن</span>
          </div>
          <h2 className="text-black font-black leading-tight mb-1 w-full" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            عناية ذكية، داخل
          </h2>
          <h2 className="font-black leading-tight mb-8 w-full" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(150, 215, 78, 1)' }}>
            مساحة الحركة.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed text-right">
            ريلاكس هيل هو وجهتك الراقية للاستشفاء الرياضي والاسترخاء داخل الأندية الرياضية، حيث نؤمن أن
            الأداء الحقيقي لا يكتمل بالتمرين وحده، بل بالعناية الصحيحة بالجسم. نُقدّم برامج تدليك متخصصة
            تدعم الاستشفاء العضلي، تعزز المرونة، وتخفف الإجهاد قبل التمرين أو بعده، باستخدام تقنيات متقدمة
            ومنتجات عالمية عالية الجودة لنتائج ملموسة.
          </p>
        </div>
      </section>

      {/* Section 3 - Dark split: two panels */}
      <section className="bg-black flex flex-col md:flex-row">
        {/* Left panel - رسالتنا */}
        <div className="flex-1 px-8 md:px-16 py-20 border-b md:border-b-0 md:border-l" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs font-bold tracking-widest mb-10" style={{ color: 'rgba(150, 215, 78, 1)' }}>
            01 / رسالتنا
          </p>
          <h2 className="text-white font-black leading-tight mb-2 text-right" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            نُعيد تعريف
          </h2>
          <h2 className="font-black leading-tight mb-8 text-right" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'rgba(150, 215, 78, 1)' }}>
            الاستشفاء.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed text-right max-w-sm">
              أن نكون الاسم الرائد والخيار الأول في مجال الاستشفاء الرياضي والاسترخاء داخل الأندية الرياضية،
              والشريك الموثوق لكل من يسعى إلى أعلى مستويات الأداء البدني من خلال التوازن المثالي بين
              التدريب، الاحتراق، والعناية الذكية بالجسم.
          </p>
        </div>

        {/* Right panel - رؤيتنا */}
        <div className="flex-1 px-8 md:px-16 py-20">
          <p className="text-xs font-bold tracking-widest mb-10" style={{ color: 'rgba(150, 215, 78, 1)' }}>
            02 / رؤيتنا
          </p>
          <h2 className="text-white font-black leading-tight mb-2 text-right" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            الاسم الرائد في
          </h2>
          <h2 className="font-black leading-tight mb-8 text-right" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'rgba(150, 215, 78, 1)' }}>
            التوازن.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed text-right max-w-sm">
              نُقدّم تجربة متخصصة للاستشفاء الرياضي والاسترخاء بنفقة، من خلال عناية احترافية تجمع بين
              التشخيص، الدقة، والنتائج الملموسة. نُمكّن الرياضيين من استعادة طاقتهم بسرعة وتعزيز أدائهم
              بثقة.
          </p>
        </div>
      </section>

      {/* Section 4 - Light bg: 4 principles */}
      <section style={{ backgroundColor: 'hsla(60, 16%, 94%, 1)' }} className="px-8 md:px-16 py-20">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
          <span className="text-black text-xs font-bold">قيمنا</span>
        </div>
        <h2 className="text-black font-black leading-tight mb-1 text-right" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          أربعة مبادئ،{' '}
          <span style={{ color: 'rgba(150, 215, 78, 1)' }}>تفصيل</span>
        </h2>
        <h2 className="text-black font-black leading-tight mb-12 text-right" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(150, 215, 78, 1)'  }}>
          واحد واضح.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '01', title: 'الاحترافية', desc: 'عناية دقيقة تنبثق من مراكز الجسم في كل تجربة.' },
            { num: '02', title: 'الابتكار', desc: 'تقنيات متقدمة تواكب لغة الحركة والاستشفاء.' },
            { num: '03', title: 'العناية الشخصية', desc: 'تفاصيل مخصصة لإيقاعك، تمرينك، وهدفك.' },
            { num: '04', title: 'التكامل', desc: 'توازع بين التدريب الاحتراق والعناية الذكية بالجسم.' },
          ].map((item) => (
            <div
              key={item.num}
              className="border rounded-lg p-6 flex flex-col gap-8 relative overflow-hidden transition-all duration-300 cursor-pointer group"
              style={{ minHeight: '200px', borderColor: 'rgba(0,0,0,0.12)', backgroundColor: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.querySelectorAll('.card-title').forEach(el => (el as HTMLElement).style.color = '#fff'); e.currentTarget.querySelectorAll('.card-desc').forEach(el => (el as HTMLElement).style.color = 'rgba(255,255,255,0.6)'); }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.querySelectorAll('.card-title').forEach(el => (el as HTMLElement).style.color = '#000'); e.currentTarget.querySelectorAll('.card-desc').forEach(el => (el as HTMLElement).style.color = 'rgb(107,114,128)'); }}
              onTouchStart={e => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.querySelectorAll('.card-title').forEach(el => (el as HTMLElement).style.color = '#fff'); e.currentTarget.querySelectorAll('.card-desc').forEach(el => (el as HTMLElement).style.color = 'rgba(255,255,255,0.6)'); }}
              onTouchEnd={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.querySelectorAll('.card-title').forEach(el => (el as HTMLElement).style.color = '#000'); e.currentTarget.querySelectorAll('.card-desc').forEach(el => (el as HTMLElement).style.color = 'rgb(107,114,128)'); }}
            >
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full border" style={{ borderColor: 'rgba(0,0,0,0.2)' }} />
                <span className="text-xs font-bold" style={{ color: 'rgba(150, 215, 78, 1)' }}>{item.num}</span>
              </div>
              <div className="mt-auto text-right">
                <p className="card-title text-black font-black text-lg mb-1 transition-colors duration-300">{item.title}</p>
                <p className="card-desc text-gray-500 text-xs leading-relaxed transition-colors duration-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Dark: "معك في كل إيقاع" */}
      <section className="bg-black px-8 md:px-16 py-20">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Right - heading */}
          <div className="md:w-1/2 flex flex-col items-start text-right">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
              <span className="text-white text-xs font-bold">لماذا تختار ريلاكس هيل؟</span>
            </div>
            <h2 className="text-white font-black leading-tight mb-1 w-full" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
              معك في كل
            </h2>
            <h2 className="font-black leading-tight w-full" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'rgba(150, 215, 78, 1)' }}>
              إيقاع.
            </h2>
          </div>

          {/* Left - list */}
          <div className="md:w-1/2 flex flex-col justify-center pt-4 md:pt-20">
            {[
              { num: '01', text: 'خبرة عملية في التعامل مع الرياضيين' },
              { num: '02', text: 'موقع داخل الجيمات لسهولة الوصول' },
              { num: '03', text: 'جلسات مخصصة قبل وبعد التمرين' },
              { num: '04', text: 'اعتماد منتجات عالية الجودة' },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`flex items-center gap-4 py-4 border-b ${i === 0 ? 'border-t' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <span className="text-xs font-bold flex-shrink-0" style={{ color: 'rgba(150, 215, 78, 1)' }}>{item.num}</span>
                <span className="text-white text-sm font-bold text-right flex-1">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Light bg: "النتيجة تبدأ من البيئة" */}
      <section
        className="flex flex-col md:flex-row items-start px-8 md:px-16 py-20 gap-12"
        style={{ backgroundColor: 'hsla(60, 16%, 94%, 1)' }}
      >
        {/* Right - Text + list */}
        <div className="w-full md:w-3/5 flex flex-col items-start text-right pt-4">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
            <span className="text-black text-xs font-bold">مميزات ريلاكس هيل</span>
          </div>
          <h2 className="text-black font-black leading-tight mb-1 w-full" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            النتيجة تبدأ من
          </h2>
          <h2 className="font-black leading-tight mb-12 w-full" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(150, 215, 78, 1)' }}>
            البيئة.
          </h2>
          <div className="w-full flex flex-col">
            {[
              { num: '01', text: 'فريق متخصص في الاستشفاء الرياضي والاسترخاء.' },
              { num: '02', text: 'خبرة عملية مع الرياضيين داخل الجيمات.' },
              { num: '03', text: 'أحدث الكريمات والزيوت الطبية.' },
              { num: '04', text: 'جلسات موجهة للاستشفاء السريع والوقاية من الإصابات.' },
              { num: '05', text: 'بيئة مريحة تدعم الأداء البدني والنفسي.' },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`flex items-center gap-4 py-4 border-b ${i === 0 ? 'border-t' : ''}`}
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <span className="text-xs font-bold flex-shrink-0" style={{ color: 'rgba(150, 215, 78, 1)' }}>{item.num}</span>
                <span className="text-black text-sm font-bold text-right flex-1">{item.text}</span>
                <span className="text-xs font-bold flex-shrink-0" style={{ color: 'rgba(150, 215, 78, 1)' }}>+</span>
              </div>
            ))}
          </div>
        </div>

        {/* Left - Image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="rounded-lg overflow-hidden bg-gray-800" style={{ aspectRatio: '3/4', maxHeight: '480px' }}>
            <img
              src="/imag/AFTER TRAINING.png"
              alt="البيئة"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 7 - Dark: "لمن يختار أن يتحرك بذكاء" */}
      <section className="px-8 md:px-16 py-20" style={{ background: 'radial-gradient(ellipse at center bottom, rgba(30,60,10,0.6) 0%, #000 70%)' }}>
        <div className="flex flex-col md:flex-row gap-16 items-start mb-20">
          {/* Right - heading */}
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-10 justify-start">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }} />
              <span className="text-white text-xs font-bold">عملاؤنا المستهدفون</span>
            </div>
            <h2 className="text-white font-black leading-tight mb-1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              لمن يختار أن
            </h2>
            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(150, 215, 78, 1)' }}>
              يتحرك بذكاء.
            </h2>
          </div>

          {/* Left - list */}
          <div className="md:w-1/2 flex flex-col justify-start pt-4 md:pt-16">
            {[
              { num: '01', text: 'الرياضيون المحترفون والهواة.' },
              { num: '02', text: 'مشتركو الجيمات والنوادي الرياضية.' },
              { num: '03', text: 'أي شخص يبحث عن استشفاء عضلي بعد مجهود بدني.' },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`flex items-center gap-4 py-4 border-b ${i === 0 ? 'border-t' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <span className="text-xs font-bold flex-shrink-0" style={{ color: 'rgba(150, 215, 78, 1)' }}>{item.num}</span>
                <span className="text-white text-sm font-bold text-right flex-1">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Thank you + CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t pt-16" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <h2 className="text-sm text-right" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' , color: 'rgba(150, 215, 78, 1)'}}>
              شكراً
          </h2>
          <a
            href="/treatments"
            className="flex items-center gap-3 rounded-full px-6 py-3 transition-all duration-300"
            style={{ border: '1px solid rgba(150,215,78,0.5)', color: 'rgba(150, 215, 78, 1)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(150,215,78,0.1)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
            onTouchStart={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(150,215,78,0.1)')}
            onTouchEnd={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
          >
            <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm font-bold">ابدأ من العلاجات</span>
          </a>
          <p className="font-black  text-white" >
              على ثقتكم في مركز ريلاكس هيل
          </p>
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
                <a href="/about" className="text-white hover:text-green-400 transition-colors py-3 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>عن ريلاكس هيل</a>
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
