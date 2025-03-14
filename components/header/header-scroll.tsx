'use client'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Hamburger from '@/components/header/hamburger'
import { CONFIG } from '@/lib/config'

import ROUTES from '@/lib/routes'

import icon from '@/public/assets/logo-icon.svg'
import logo from '@/public/assets/logo.png'

import { NAV_ITEMS } from '@/components/header/navbar-initial'
import { Button } from '../ui/button'

const HeaderScroll = () => {
	const pathname = usePathname()

	const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-orange-500', 'text-purple-500']

	return (
		<nav className='flex justify-between items-center xl:items-start  md:px-6 py-3  max-w-screen-max mx-auto bg-background-dark'>
			<Link href={ROUTES.HOME}>
				<Image src={icon} alt={CONFIG.siteName} width={40} height={40} />
			</Link>

			<div className='flex justify-center items-center gap-6'>
				<ul className='hidden xl:flex justify-center items-center gap-6  '>
					{NAV_ITEMS.map(({ name, href }) => (
						<li key={name}>
							<Link href={href} className='nav-link '>
								{name === 'Dzieci'
									? name.split('').map((letter, index) => (
											<span key={index} className={`${colors[index % colors.length]} mx-[1px]`}>
												{letter}
											</span>
									  ))
									: name}
							</Link>
						</li>
					))}
				</ul>

				<Button asChild>
					<Link href='/login'>
						<span className='z-10 group-hover:text-primary-600 duration-300 tracking-button'>Rezerwuj</span>
					</Link>
				</Button>

				<div className='xl:hidden'>
					<Sheet>
						<SheetTrigger
							aria-label='Otwórz menu'
							className='bg-secondary-400 rounded-md flex justify-center items-center'>
							<Hamburger />
						</SheetTrigger>
						<SheetContent className='bg-background-dark pl-12 border-background-dark'>
							<SheetHeader className='px-0'>
								<SheetTitle>
									<SheetClose asChild>
										<Link href={ROUTES.HOME}>
											<Image src={logo} alt={CONFIG.siteName} width={120} height={100} className='w-[120px] ' />
										</Link>
									</SheetClose>
								</SheetTitle>
							</SheetHeader>

							<ul className='flex flex-col gap-6  '>
								<li>
									<SheetClose asChild>
										<Link
											href={ROUTES.HOME}
											className={`${pathname === '/' ? 'nav-link--active' : 'nav-link  '} !text-xl !font-normal`}>
											Strona Główna
										</Link>
									</SheetClose>
								</li>
								{NAV_ITEMS.map(item => (
									<li key={item.name}>
										<SheetClose asChild>
											<Link
												href={item.href}
												className={` nav-link !text-xl !font-normal ${
													pathname === item.href ? 'text-primary-600' : ''
												}`}>
												{item.name}
											</Link>
										</SheetClose>
									</li>
								))}
							</ul>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}

export default HeaderScroll
