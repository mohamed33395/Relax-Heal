'use client'

export default function PackagesSection() {
  const packages = [
    {
      number: '01',
      titleLine1: 'باقة الأداء',
      titleLine2: 'الرياضي',
      description: 'مزيج متطور بين التدليك الرياضي والتقنية الثلاثينية وكوريس اثرواد لمرونة العضلات وتحسين الأداء البدني الرياضية الحديثة',
    },
    {
      number: '02',
      titleLine1: 'باقة المرونة',
      titleLine2: 'والراحة العميقة',
      description: 'تدليك عميق متقن للأنسجة (مايوفيشيال) مع إطالات علاجية وتحرير العقد العضلية لإعادة التوازن ولشعور بأقصى أداء ثابتة',
    },
    {
      number: '03',
      titleLine1: 'باقة الانطلاق',
      titleLine2: 'والحيوية',
      description: 'جلسة تدليك مصممة بتقنية الجافا لتحفير الدورة الدموية، رفع كفاءة العضلات، وتحسين حجم الجسم لأقصى أداء',
    },
    {
      number: '04',
      titleLine1: 'باقة التجدد',
      titleLine2: 'والاستشفاء',
      description: 'جلسة متكاملة لإعادة الاستشفاء وتريح العضلات باستخدام التدليك الحراري (المريحة والهدوءة) مع منحنى التدليك لأقصى قدر من الاسترخاء',
    },
  ]

  return (
    <section className="min-h-screen relative overflow-hidden py-12" style={{backgroundColor: 'hsla(60, 16%, 94%, 1)'}}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity">

            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
          شاهد جميع الباقات
        </a>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-black">باقات مصممة لراحتك</span>
          <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-black font-black text-4xl md:text-5xl text-right mb-16">
        اختر تركيبتك، <span style={{color: 'rgba(150, 215, 78, 1)'}}>ثم تحرّك.</span>
      </h1>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.number} className="group relative bg-white hover:bg-black rounded-lg p-6 overflow-hidden transition-colors duration-300">
            <div
              className="absolute -top-10 -left-10 w-28 h-28 rounded-full border-2 opacity-30"
              style={{borderColor: 'rgba(150, 215, 78, 1)'}}
            ></div>
            <span className="text-xs text-gray-400 group-hover:text-gray-500 mb-6 block relative z-10">{pkg.number}</span>
            <h3 className="text-black group-hover:text-white text-xl font-bold mb-3 relative z-10 leading-snug transition-colors duration-300">
              {pkg.titleLine1}<br/>{pkg.titleLine2}
            </h3>
            <p className="text-gray-500 group-hover:text-gray-300 text-xs leading-relaxed relative z-10 transition-colors duration-300">
              {pkg.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
