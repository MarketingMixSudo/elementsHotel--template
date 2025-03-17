import React from 'react'
import LinkBtn from '../link-btn'
import Carousel from '../special-offers/carousel'
import { EmblaOptionsType } from 'embla-carousel'

const SpecialOffers = () => {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 6
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    
	return <section className='section'>

<div className='max-w-screen-3xl mx-auto'>
    <div className='flex justify-between items-center mx-20'>

<div>

    <h2 className='text-[43px] text-primary-600'>Oferty specjalne </h2>




</div>

    <LinkBtn variant='outline' href="#">Zobacz wszystkie</LinkBtn>

    </div>

<Carousel slides={SLIDES} options={OPTIONS}/>
</div>

    </section>
}

export default SpecialOffers
