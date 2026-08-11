import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'التجربة',
  description: 'اكتشف تجربة ريلاكس هيل الفريدة — جلسات احترافية داخل الأندية الرياضية تجمع بين الاسترخاء والاستشفاء بأعلى مستوى من العناية.',
  keywords: ['تجربة ريلاكس هيل', 'جلسات احترافية', 'استشفاء رياضي', 'تجربة تدليك'],
  openGraph: {
    title: 'التجربة | ريلاكس هيل',
    description: 'جلسات احترافية داخل الأندية الرياضية تجمع بين الاسترخاء والاستشفاء.',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
