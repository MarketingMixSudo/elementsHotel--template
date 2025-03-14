import Link from 'next/link'

import { Button } from '@/components/ui/button'

const LinkBtn = ({ href, children, ...props }: { href: string; children: React.ReactNode }) => {
	return (
		<Button asChild {...props}>
			<Link href={href}>
				<span className='tracking-button group-hover:text-primary-600 duration-300 z-10'>{children}</span>
			</Link>
		</Button>
	)
}

export default LinkBtn
