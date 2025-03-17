'use client'

import easter from '@/public/assets/easter.jpg'

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      emblaApi.scrollNext() 
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className='embla'>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <Link href="#" className="embla__slide border border-white relative h-[640] flex justify-start items-end py-20 px-10" key={index}>
                <Image src={easter} alt="" fill className='w-full h-full object-cover object-center -z-10'/>
                <div className='absolute inset-0 w-full h-full bg-background-dark/30 '></div>
                <h3 className='z-10 text-white'>Aktywna WIOSNA</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
