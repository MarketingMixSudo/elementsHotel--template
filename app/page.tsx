import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Children from '@/components/home/children'
import SpecialOffers from '@/components/home/special-offers'
import Morning from '@/components/home/morning'
import Faq from '@/components/home/faq'

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Children />
			<SpecialOffers />
			<Morning />
			<Faq />
		</>
	)
}
