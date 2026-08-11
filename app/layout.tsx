import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: {
    default: 'ريلاكس هيل | استشفاء رياضي واسترخاء',
    template: '%s | ريلاكس هيل',
  },
  description: 'ريلاكس هيل وجهتك الراقية للاستشفاء الرياضي والاسترخاء داخل الأندية الرياضية. برامج تدليك متخصصة تدعم الاستشفاء العضلي وتعزز المرونة.',
  keywords: ['استشفاء رياضي', 'تدليك رياضي', 'ريلاكس هيل', 'استشفاء عضلي', 'استرخاء', 'تدليك علاجي', 'أندية رياضية'],
  openGraph: {
    title: 'ريلاكس هيل | استشفاء رياضي واسترخاء',
    description: 'وجهتك الراقية للاستشفاء الرياضي والاسترخاء داخل الأندية الرياضية.',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
