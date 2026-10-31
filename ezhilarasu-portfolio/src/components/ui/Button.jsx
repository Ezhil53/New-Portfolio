const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200'

const variants = {
  primary: 'bg-accent text-bg hover:bg-white',
  secondary: 'border border-line text-fg hover:border-accent hover:text-accent',
}

export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
