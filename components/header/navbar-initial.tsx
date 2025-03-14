'use client'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import ROUTES from '@/lib/routes'

import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Hamburger from '@/components/header/hamburger'
import { CONFIG } from '@/lib/config'

export const NAV_ITEMS = [
	{
		name: 'Pory roku',
		href: ROUTES.SEASONS,
	},
	{
		name: 'Pokoje i apartamenty',
		href: ROUTES.ROOMS.LIST,
	},
	{
		name: 'Oferty',
		href: ROUTES.OFFERS.LIST,
	},
	{
		name: 'Dzieci',
		href: ROUTES.CHILDREN,
	},
	{
		name: 'Dorośli',
		href: ROUTES.ADULTS,
	},
	{
		name: 'Gastronomia',
		href: ROUTES.GASTRONOMY,
	},
	{
		name: 'Atrakcje',
		href: ROUTES.ATTRACTIONS,
	},
	{
		name: 'Galeria',
		href: ROUTES.GALLERY,
	},
	{
		name: 'Kontakt',
		href: ROUTES.CONTACT,
	},
]

const NavbarInitial = () => {
	const pathname = usePathname()

	const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-orange-500', 'text-purple-500']

	return (
		<nav className='flex justify-between items-center xl:items-start  md:px-11 pt-4 lg:mt-8 max-w-screen-max mx-auto'>
			<Link href={ROUTES.HOME}>
				<Image src={logo} alt={CONFIG.siteName} width={144} height={125} className='w-[115px] md:w-[120px]' />
			</Link>

			<ul className='hidden xl:flex justify-center items-center gap-6 pt-2 '>
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

			<div className='xl:hidden'>
				<Sheet>
					<SheetTrigger aria-label='Otwórz menu' className='bg-secondary-400 rounded-md p-2'>
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
											className={` nav-link !text-xl !font-normal ${pathname === item.href ? 'text-primary-600' : ''}`}>
											{item.name}
										</Link>
									</SheetClose>
								</li>
							))}
						</ul>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}

export default NavbarInitial
