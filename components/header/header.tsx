'use client'

import { useState, useEffect } from 'react'

import HeaderInitial from '@/components/header/header-initial'
import HeaderScroll from '@/components/header/header-scroll'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header className='fixed top-0 left-0 w-full z-50'>
			<div
				className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
					isScrolled ? '-translate-y-full' : 'translate-y-0'
				}`}>
				<HeaderInitial />
			</div>
			<div
				className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
					isScrolled ? 'translate-y-0' : '-translate-y-full'
				}`}>
				<HeaderScroll />
			</div>
		</header>
	)
}

export default Header
