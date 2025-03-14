import Link from 'next/link'
import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'

const Hero = () => {
	return (
		<section className='w-screen h-screen relative overflow-hidden flex justify-center items-center'>
			<video
				className='absolute inset-0 w-full h-full object-cover'
				autoPlay
				muted
				loop
				playsInline
				poster='/assets/hero-poster.jpg'>
				<source src='/assets/hero.mp4' type='video/mp4' />
			</video>
			<div className='bg-background-dark/20 absolute inset-0 w-full h-full z-10'></div>

			<div className='z-20 flex flex-col justify-center items-center gap-12'>
				<h1 className='flex flex-col justify-center items-center  font-extralight text-center px-5 md:px-0'>
					<span className='text-6xl md:text-9xl 2xl:text-[140px] md:leading-36 font-thin tracking-[-.05em]'>
						ELEMENTS
					</span>
					<span className='text-xs md:text-lg tracking-[0.5em] uppercase'>RODZINNY HOTEL Z BASENEM W GÓRACH</span>
				</h1>

				<div className=' flex md:hidden flex-col justify-center items-center gap-4'>
					<Button asChild size={'sm'} className='min-w-[240px]'>
						<Link href='/#hotel'>
							<span className='z-10 group-hover:text-primary-600 duration-300 tracking-button'>Zarezerwuj</span>
						</Link>
					</Button>
					<Button asChild size={'sm'} className='min-w-[240px]'>
						<Link href='/#hotel'>
							<span className='z-10 group-hover:text-primary-600 duration-300 tracking-button'>Kup na prezent</span>
						</Link>
					</Button>
					<Button asChild size={'sm'} variant={'eco'} className='min-w-[240px]'>
						<Link href='/#hotel'>
							<span className='z-10 group-hover:text-primary-600 duration-300 tracking-button'>Bike friendly</span>
						</Link>
					</Button>
				</div>
			</div>

			<Link href='/#hotel' className='absolute left-7 bottom-8 z-20 flex justify-center items-center gap-1 group'>
				<span className='text-sm font-semibold uppercase group-hover:text-primary-400 duration-300'>zobacz więcej</span>
				<ChevronDown className='size-4 group-hover:text-primary-400 duration-300 ' />
			</Link>
		</section>
	)
}

export default Hero
