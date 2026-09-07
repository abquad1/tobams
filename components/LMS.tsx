import Image from 'next/image'
import ArrowUpRightIcon from './icons/arrow-up-icon'

const courses = ['Business Analysis','Design Thinking','Effective Communication','Entrepreneurship','Career Development','Business Model']
function LMS() {
  return (
    <section className="relative w-full py-10">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-14 bg-primary/10 py-6 md:py-12 px-6 md:px-16">

            <h3 className=" md:hidden font-semibold text-xl tracking-[0.03em] leading-[150%]">
            Learning Management System
            </h3>
            {/* left side */}
            <div className="w-full md:w-11/20 mx-auto relative aspect-square">
                <Image
                    src="/images/learning-management-system.jpg"
                    alt="learning-management-system-image"
                    fill
                    className="object-cover rounded-full"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* right side */}
            <div className="flex flex-col w-full md:w-9/20 gap-3">
                <h3 className="hidden md:block font-semibold text-[30px] tracking-[3%] leading-[150%]">
                Learning Management System
                </h3>

                <div className="flex flex-col rounded-sm text-sm md:text-lg text-foreground bg-primary/10 p-6 gap-5">
                    <p className=" leading-[150%]">
                        TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
                    </p>

                    <h6 className="text-primary leading-[150%] text-lg font-bold" >
                        Some of our courses include:
                    </h6>

                    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {courses.map((course) => (
                            <li
                            key={course}
                            className="flex items-start gap-2 text-base text-foreground leading-[150%]"
                            >
                            <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            />
                            {course}
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="w-fit flex items-center gap-2 justify-center primary-button py-[10.5px] px-4 rounded-sm text-sm font-semibold text-background leading-relaxed ">
                    <span className="text-lg font-semibold leading-relaxed ">Learn more</span>
                    <ArrowUpRightIcon className='text-primary-foreground'/>
                </button>
            </div>
        </div>
    </section>
)
}

export default LMS