import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الباقات',
  description: 'استعرض باقات ريلاكس هيل المصممة لراحتك — من باقات الاستشفاء السريع إلى الجلسات المتكاملة للاسترخاء وتجديد الطاقة.',
  keywords: ['باقات تدليك', 'باقات استشفاء', 'ريلاكس هيل', 'باقات رياضية', 'جلسات استرخاء'],
  openGraph: {
    title: 'الباقات | ريلاكس هيل',
    description: 'باقات مصممة لراحتك — استشفاء عضلي وجلسات متكاملة داخل الأندية الرياضية.',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
