'use client'
import Image from 'next/image'

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full z-10 flex flex-col overflow-hidden py-10 md:py-28 px-6 md:px-16">

        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-background.jpg"
            alt="hero-background-image"
            fill
            className="object-cover "
            priority
            sizes="100vw"
          />
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-secondary-foreground/70 w-full shrink-0 z-10"></div>

        <div className="relative w-full text-background flex flex-col z-10 items-center justify-center gap-3 max-w-full md:max-w-270 mx-auto">
            <span className="bg-background/10 leading-1.5 font-semibold text-sm flex items-center justify-center px-8 md:px-12 py-2.5 md:py-3 rounded-full">
                WHAT WE DO
            </span>

            <h1 className="text-2xl md:text-[56px] font-bold leading-[130%]">
                 Training and Development
            </h1>

            <p className="text-center sm:text-sm md:text-md md:text-lg font-semibold leading-[150%]">
                Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
            </p>

            <button className="flex cursor-pointer items-center justify-center primary-button py-[10.5px] px-4 rounded-sm text-sm font-semibold text-background leading-relaxed ">
                Book a Consultation
            </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
