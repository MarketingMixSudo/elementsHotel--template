import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Children from '@/components/home/children'
import SpecialOffers from '@/components/home/special-offers'
import Morning from '@/components/home/morning'
import Restaurant from '@/components/home/restaurant'
import AttractionsArea from '@/components/home/attractions-area'
import AttractionsHotel from '@/components/home/attractions-hotel'
import Faq from '@/components/home/faq'
import Vouchers from '@/components/home/vouchers'

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Children />
			<SpecialOffers />
			<Morning />
			<Restaurant/>
			<AttractionsArea/>
			<AttractionsHotel/>
			<Faq />
			<Vouchers/>
		</>
	)
}
