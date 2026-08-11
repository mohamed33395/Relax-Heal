'use client'

import {useState} from 'react'
import SplashScreen from '@/components/SplashScreen'
import Button from '@/components/Button'
import HeroSection from '@/components/HeroSection'
import RecoverySection from '@/components/RecoverySection'
import TreatmentSelectorSection from '@/components/TreatmentSelectorSection'
import PackagesSection from '@/components/PackagesSection'
import DetailsSection from '@/components/DetailsSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
    const [showSplash, setShowSplash] = useState(true)

    const handleSplashComplete = () => {
        setShowSplash(false)
    }

    if (showSplash) {
        return <SplashScreen onComplete={handleSplashComplete}/>
    }

    return (
        <div className="min-h-screen" style={{backgroundColor: 'hsl(60, 8%, 88%)'}} dir="rtl">
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[95vh] overflow-hidden">
                {/* Background Image */}
                <img
                    src="/imag/BEFORE TRAINING.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 15%, rgba(0,0,0,0.75) 85%, rgba(0,0,0,0.95) 100%)'}}></div>

                <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-20 flex flex-col h-full relative z-10">
                {/* Top row: left label | right label */}
                <div className="flex items-center justify-between w-full py-4 text-xs tracking-widest uppercase">
                    <div className="flex items-center mt-10 gap-2">
                         <span className="w-2 h-2 rounded-full"
                               style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}></span>
                        <span className="text-white text-xs">استشفاء مصمم للحركة</span>

                    </div>
                    <span className="text-gray-500">EXPERIENCE THE HEALING POWER OF TOUCH</span>
                </div>

                {/* Main content area */}
                <div className="flex flex-col items-start gap-2 flex-1">

                    {/* Badge */}

                    {/* Three h1 headings */}
                    <h1 className="text-white font-black leading-none text-right mb-3"
                        style={{fontSize: 'clamp(5rem, 8vw, 7rem)'}}>
                        استعد
                    </h1>
                    <h1 className="font-black leading-none text-right mb-3"
                        style={{fontSize: 'clamp(5rem, 8vw, 7rem)', color: 'rgba(150, 215, 78, 1)'}}>
                        استشف
                    </h1>
                    <h1 className="text-white font-black leading-none text-right mb-2"
                        style={{fontSize: 'clamp(5rem, 8vw, 7rem)'}}>
                        وانطلق.
                    </h1>

                    <p className="text-gray-400 w-100  text-sm leading-relaxed text-right">
                        ريلاكس هيل هو وجهتك الراقية للاستشفاء الرياضي والاسترخاء داخل الأندية الرياضية،
                        حيث نؤمن أن الأداء الحقيقي لا يكتمل بالتمرين وحده، بل بالعناية الصحيحة بالجسم.
                        نقدّم برامج تدليك متخصصة تدعم الاستشفاء العضلي، تعزّز المرونة، وتخفف الإجهاد،
                        قبل التمرين أو بعده، باستخدام تقنيات متقدمة ومنتجات عالمية عالية الجودة لنتائج
                        ملموسة
                    </p>


                </div>

                {/* Bottom section: Button and scroll hint */}
                <div className="flex flex-row items-end gap-2 pb-6 justify-end">
                    {/* Button */}
                    <Button
                        className="text-black"
                        style={{
                            backgroundColor: 'rgba(150, 215, 78, 1)',
                            border: 'none',
                            marginBottom: "50px"
                        }}>
                        استكشف العلاجات
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M9.707 3.293a1 1 0 010 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                    </Button>

                    <Button
                        style={{
                            marginBottom: "50px"
                        }}>
                        كيف تبدأ تجربتك؟
                        <div className="flex items-center justify-center w-8 h-8 rounded-full"
                             style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M9.707 3.293a1 1 0 010 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                    </Button>

                </div>
                </div>

            </section>

            {/* Scrolling Marquee Banner */}
            <div className="w-full overflow-hidden py-3" style={{backgroundColor: 'rgba(150, 215, 78, 1)'}}>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="flex animate-marquee whitespace-nowrap w-max">
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">DEEP REST</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">THERAPEUTIC TOUCH</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">SPORTS RECOVERY</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">DEEP REST</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">THERAPEUTIC TOUCH</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">SPORTS RECOVERY</span>
                    {/* Duplicate for seamless loop */}
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">DEEP REST</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">THERAPEUTIC TOUCH</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">SPORTS RECOVERY</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">DEEP REST</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">THERAPEUTIC TOUCH</span>
                    <span className="mx-8 text-white text-sm uppercase font-bold tracking-wider">SPORTS RECOVERY</span>
                    </div>
                </div>
            </div>

            <HeroSection/>
            <RecoverySection/>
            <TreatmentSelectorSection/>
            <PackagesSection/>
            <DetailsSection/>
            <FooterSection/>
        </div>
        </div>
    )
}
