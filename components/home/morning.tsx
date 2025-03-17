import Image from 'next/image'

import morning from '@/public/assets/morning.webp'
import Link from 'next/link'

const Morning = () => {
	return (
		<section className='section'>
			<div className=''>
				<h2 className='text-6xl md:text-[120px] font-light tracking-[-0.3333] leading-[.8] uppercase text-primary-600 ml-5 lg:ml-20'>
					Poranek z <br /> widokiem
				</h2>
				<div className='relative h-[80vh] md:h-[90vh] 2xl:h-dvh z-20'>
					<Image src={morning} alt='morning image' fill className='w-full h-full object-cover object-center ' />
					<div className='absolute inset-0 w-full h-full bg-background-dark/30 z-10'></div>

					<div className=' flex flex-col items-start justify-center text-left text-white px-6 ml-5 lg:ml-20 h-full max-w-[435px]'>
						<h3 className=' z-20 text-[32px]  md:text-[38px] lg:text-[43px] leading-tight'>Komfortowe zakwaterowanie w górach</h3>
						<p className='mt-2 max-w-lg z-20 text'>
							W Elements Hotel & SPA oferujemy komfortowe zakwaterowanie w przestronnych, elegancko urządzonych pokojach
							i apartamentach. Każdy detal został starannie zaprojektowany, aby zapewnić naszym Gościom maksymalny
							komfort i relaks. Z niesamowitymi widokami na okoliczne góry i nowoczesnymi udogodnieniami, nasze pokoje
							stanowią idealne schronienie po dniu pełnym przygód na świeżym powietrzu.
						</p>

						<Link href='#' className='link !uppercase !md:text-[17px] mt-10 !text-white after:!bg-white z-20'>
							sprawdź nasze pokoje
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Morning
