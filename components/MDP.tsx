import Image from 'next/image'
import FlashIcon from './icons/flash-icon'

const programs = ['Enhanced Leadership Skills','Improved Employee Engagement','Stronger Organisational Culture','Sustainable Growth']
function MDP() {
  return (
    <section className="relative w-full md:py-10 md:px-16">
        <div className="w-full flex flex-col md:flex-row gap-14 rounded-[20px] bg-quinary text-background md:p-10">
            {/* left side */}
            <div className="w-full md:w-2/5 relative overflow-hidden ">
                    <Image
                        src="/images/management-development-program.png"
                        alt="management-development-program-image"
                        fill
                        className="object-cover rounded-t-lg"
                        priority
                        sizes="100vw"
                    />
            </div>

            {/* right side */}
            <div className="flex flex-col w-full md:w-3/5 gap-8">
                    <h3 className="font-semibold text-[40px] tracking-[3%] leading-[150%]">
                    Management Development Program
                    </h3>

                    <div className="flex flex-col rounded-sm text-lg bg-primary/10 gap-5">
                        <p className="leading-[150%]">
                            Tobams Group offers a comprehensive Management
                            Development Program designed to equip corporate
                            organisations with the high
                            -performing leaders they need to
                            thrive.
                        </p>

                        <p className=" leading-[150%] ">
                            Our program includes workshops, seminars, coaching
                            sessions, online courses, and experiential learning
                            opportunities designed to improve leadership, strategic
                            thinking, communication, and other essential managerial
                            competencies for corporate organisations.
                        </p>

                        <ul className="flex flex-col  py-2 px-4 gap-6.25  ">
                            {programs.map((program) => (
                                <li
                                key={program}
                                className="flex items-center gap-2 py-1 px-2 bg-quaternary text-base rounded-lg text-background leading-[150%]"
                                >
                                <FlashIcon className="h-4.5 w-3.5 text-background" strokeColor="var(--background)"/>

                                {program}
                                </li>
                            ))}
                            </ul>

                    </div>
            </div>
        </div>
    </section>
)
}

export default MDP