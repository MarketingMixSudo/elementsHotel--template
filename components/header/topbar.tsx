import ROUTES from '@/lib/routes'
import { SOCIALS } from '@/lib/socials'
import React from 'react'

const TopBar = () => {
	return (
		<div className='flex justify-end items-center  px-11 py-2 bg-background-dark'>
			<div className='flex justify-center items-center gap-4'>
				<a href='tel:123456789' className='link'>
					+48 123 456 789
				</a>

				<a href={ROUTES.ECO} className='link !text-accent-400'>
					Eko
				</a>
				<a href={ROUTES.BLOG.LIST} className='link'>
					Blog
				</a>
				<a href={ROUTES.WALK} className='link'>
					Spacer 360°
				</a>

				<ul className='flex justify-center items-center gap-3'>
					{SOCIALS.map(({ name, link, icon: Icon }) => (
						<li key={name}>
							<a href={link} target='_blank' rel='noopener noreferrer nofollow'>
								<Icon className='size-4 hover:text-primary-400 duration-300 transition-colors' />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default TopBar
