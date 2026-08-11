import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'عن ريلاكس هيل',
  description: 'تعرف على ريلاكس هيل — رؤيتنا، رسالتنا، وقيمنا في تقديم تجربة استشفاء رياضي راقية داخل الأندية الرياضية.',
  keywords: ['عن ريلاكس هيل', 'من نحن', 'رؤية ريلاكس هيل', 'استشفاء رياضي'],
  openGraph: {
    title: 'عن ريلاكس هيل',
    description: 'رؤيتنا ورسالتنا في تقديم تجربة استشفاء رياضي راقية داخل الأندية الرياضية.',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
