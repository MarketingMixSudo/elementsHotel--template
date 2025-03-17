import Link from 'next/link'
import { Button, } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LinkBtnProps extends React.ComponentProps<typeof Button> {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'eco'
}

const LinkBtn = ({ href, children, variant = 'default', ...props }: LinkBtnProps) => {
  return (
    <Button asChild variant={variant} {...props}>
      <Link href={href}>
        <span
          className={cn(
            'flex items-center gap-1 tracking-button duration-300 z-10 ',
            variant === 'secondary' ? 'group-hover:text-white' : 'group-hover:text-primary-600'
          )}
        >
          {children}
        </span>
      </Link>
    </Button>
  )
}

export default LinkBtn
