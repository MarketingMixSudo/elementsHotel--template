import Image from 'next/image'

import about from '@/public/assets/about.jpg'
import Link from 'next/link'

import emblem from '@/public/assets/emblem.svg'
import LinkBtn from '../link-btn'

const ListItem = ({ title }: { title: string }) => {
	return (
		<li className='flex justify-start items-center gap-4'>
			<Image src={emblem} alt='' className='size-6 md:size-7' />
			<div>
				<span className='uppercase '>{title} - </span>
				<Link href='#' className='link !uppercase !md:text-[17px] self-center'>
					sprawdź
				</Link>
			</div>
		</li>
	)
}

const About = () => {
	return (
		<section className='relative pt-14 lg:pt-36'>
			<div className='flex flex-col lg:flex-row gap-12 xl:gap-24 max-w-screen-3xl mx-auto px-5 lg:px-0'>
				<Image
					src={about}
					alt='about image'
					width={1024}
					height={740}
					quality={70}
					sizes='(max-width: 1024px) 100vw, 860px'
					className='max-h-[550px] lg:max-h-[740px] w-full lg:w-1/2 object-cover object-center order-1 lg:order-none'
				/>
				<div className='w-full lg:w-1/2 lg:max-w-[475px] flex flex-col justify-start gap-6 lg:mt-16  lg:pr-8'>
					<h2 className='text-primary-600 text-2xl md:text-[43px] font-normal leading-[1.1] after:block after:w-[35px] after:border-t afert:border-primary-600 after:border-b after:p-[2px] after:mt-6'>
						Hotel o doskonałej lokalizacji
					</h2>

					<p className='md:text-[17px] leading-[1.65] tracking-[.05176em] font-normal'>
						Zachwyć się unikatowym położeniem w uzdrowiskowej miejscowości Świeradów-Zdrój. Poznaj hotel otoczony
						klimatyczną scenerią Gór Izerskich, z doskonałą lokalizacją blisko
						<Link href='#' className='link ml-1.5'>
							atrakcji w okolicy
						</Link>
						.
						<br />
						To tu znajdziesz miejsce, w którym w pełni wypoczniesz.
					</p>

					<p className='text-[17px] leading-[1.65] tracking-[.05176em] font-normal'>
						Elements Hotel & Spa został stworzony z dbałością o szczegóły, składa się z trzech skrzydeł, które tworzą
						między sobą kąty 120 stopni, co pozwala z niemal każdego pokoju podziwiać niecodzienny górski widok.
						Elewacja nawiązuje do tradycyjnych elementów architektury w regionie, to połączenie drewna, kamieni, jasnego
						betonu i szkła. Wszystko to sprawia, że obiekt wpisuje się w pełni w wyjątkowy krajobraz malowniczej
						miejscowości w Sudetach.
					</p>

					<Link href='#' className='link !uppercase md:!text-[17px] self-center'>
						ZOBACZ MAPĘ OBIEKTU
					</Link>

					<ul className='flex flex-col gap-2.5 mt-11'>
						<ListItem title='Zajęcia fitness' />
						<ListItem title='WEEKENDOWE ANIMACJE W MARCU' />
						<ListItem title='WEEKENDOWE ANIMACJE W KWIETNIU' />
						<ListItem title='ANIMACJE WIELKANOCNE' />
						<ListItem title='WIELKANOCNE BALONOWE SHOW' />
						<ListItem title='ANIMACJE PODCZAS MAJÓWKI' />
						<ListItem title='ANIMACJE NA DZIEŃ DZIECKA' />
					</ul>

					<LinkBtn variant={'outline'} className='self-start mt-11' href='#'>
						Wiosna w górach izerskich
					</LinkBtn>
				</div>
			</div>
		</section>
	)
}

export default About
