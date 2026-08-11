import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'العلاجات',
  description: 'اكتشف برامج التدليك المتخصصة في ريلاكس هيل — تدليك رياضي، علاجي، استشفائي وتحسيسي. جلسات مصممة لتعزيز الأداء والاستشفاء العضلي.',
  keywords: ['علاجات تدليك', 'تدليك رياضي', 'تدليك علاجي', 'استشفاء عضلي', 'تدليك استرخاء'],
  openGraph: {
    title: 'العلاجات | ريلاكس هيل',
    description: 'برامج تدليك متخصصة لتعزيز الأداء والاستشفاء العضلي داخل الأندية الرياضية.',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
