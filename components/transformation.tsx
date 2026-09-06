import ArrowUpRightIcon from './icons/arrow-up-icon'
import FlashIcon from './icons/flash-icon'
import Image from 'next/image'

const programs = ['Strategic Career Guidance','Leadership Development','CV Development','Sustainability Leadership','Communication Skills','Business Model']

function Transformation() {
  return (
    <section className="relative w-full md:py-10 md:px-16">
        <div className="w-full flex flex-col rounded-2xl gap-6 bg-secondary/20 text-primary md:p-10">
            
        <div className="flex flex-col gap-2">
            <p className="italic text-xl font-semibold leading-[130%] text-septenary">
            Learning With Our CEO:
            </p>   
            <h3 className="text-primary text-[32px] italic leading-[150%] font-semibold">
            Transformation Hub With Jite Newton
            </h3>
        </div>
        <p className="text-lg text-forground leading-[150%]">
        Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-8 rounded-2xl text-primary">

            {/* left side */}
            <div className="w-full md:w-2/5 relative overflow-hidden ">
                    <Image
                        src="/images/transformation.jpg"
                        alt="transformation-image"
                        fill
                        className="object-cover rounded-lg"
                        priority
                        sizes="100vw"
                    />
            </div>

            {/* right side */}
            <div className="flex flex-col w-full md:w-3/5 gap-8 rounded-sm text-lg bg-background/30 py-8 px-5">

                        <ul className="grid grid-cols-2 gap-6 ">
                            {programs.map((program) => (
                                <li
                                key={program}
                                className="flex items-center gap-2.25 p-4 bg-background text-lg rounded-xl text-primary leading-[150%]"
                                >
                                <FlashIcon className="h-4.5 w-3.5 text-background" strokeColor="var(--primary)"/>

                                {program}
                                </li>
                            ))}
                    </ul>

                    <button className="w-fit flex items-center gap-2 justify-center primary-button py-[10.5px] px-4 rounded-sm text-sm font-semibold text-background leading-relaxed ">
                        <span className="text-lg font-semibold leading-relaxed ">Learn more</span>
                        <ArrowUpRightIcon className='text-primary-foreground'/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Transformation