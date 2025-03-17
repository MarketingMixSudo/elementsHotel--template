import Image from 'next/image'
import Link from 'next/link'

import emblem from '@/public/assets/emblem.svg'

export const List = ({ children }: { children: React.ReactNode }) => {
	return <ul className='flex flex-col gap-2.5 mt-11'>{children}</ul>
}

export const ListItem = ({
	href,
	title,
	description,
	variant = 'default',
}: {
	title: string
	description?: string
	href: string
	variant?: 'default' | 'secondary'
}) => {
	return (
		<li className='flex justify-start items-center gap-4'>
			<Image src={emblem} alt='' className='size-6 md:size-7' />
			<div>
				{variant === 'secondary' ? (
					<>
						<Link href={href} className='link !uppercase !md:text-[17px] self-center'>
							{title}
						</Link>
						{description && <span> - {description}</span>}
					</>
				) : (
					<>
						<span className='uppercase'>{title} - </span>
						<Link href={href} className='link !uppercase !md:text-[17px] self-center'>
							sprawdź
						</Link>
					</>
				)}
			</div>
		</li>
	)
}
