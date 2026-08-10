'use client'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
  style?: React.CSSProperties
}

export default function Button({ children, onClick, className = '', variant = 'primary', icon, style }: ButtonProps) {
  const baseStyles = 'px-8 py-3 font-bold rounded-full transition-all duration-300 flex items-center gap-2'

  const variantStyles = {
    primary: 'bg-black text-white border border-gray-700 hover:bg-gray-900 hover:scale-105',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
