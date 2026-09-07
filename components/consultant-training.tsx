import ArrowUpRightIcon from "./icons/arrow-up-icon";

type trainingAimType = {
    heading: string;
    subheading: string;
}

const trainingAims:trainingAimType[] = [
    {
        heading: 'Expert-Led Learning',
        subheading: 'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.'
    },
    {
        heading: 'Comprehensive Curriculum',
        subheading: 'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.'
    },
    {
        heading: 'Interactive Workshops',
        subheading: 'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.'
    },
    {
        heading: 'Global Recognition',
        subheading: 'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.'
    },
]

function ConsultantTraining() {
  return (
    <section className="relative w-full py-10">
        <div className="w-full bg-primary/10 flex flex-col gap-5 py-12 px-6 md:px-16">
            <div className="flex flex-col gap-3">
                <h2 className="text-primary font-semibold text-2xl md:text-[40px] leading-[130%]">
                Training The Consultant
                </h2>

                <p className="text-base md:text-lg text-primary font-semibold leading-[150%] ">
                Maximise Your Potential as a Certified Trainer:
                </p>
            </div>

            <p className="text-sm md:text-lg text-foreground leading-[150%] ">
                With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
            </p>

            <div className="bg-primary flex flex-col md:flex-row gap-5 rounded-lg p-6 text-background">
                <div className="flex flex-col gap-5">
                    {trainingAims.slice(0,2).map((aim)=>(
                        <div className="flex flex-col gap-3" key={aim.heading}>
                            <p className="text-base md:text-lg font-bold leading-[150%]">{aim.heading}</p>
                            <p className="text-sm md:text-lg leading-[150%]">{aim.subheading}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                {trainingAims.slice(2,4).map((aim)=>(
                        <div className="flex flex-col gap-3" key={aim.heading}>
                            <p className="text-lg font-bold leading-[150%]">{aim.heading}</p>
                            <p className="text-lg leading-[150%]">{aim.subheading}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="w-fit flex items-center gap-2 justify-center primary-button py-[10.5px] px-4 rounded-sm text-sm font-semibold text-background leading-relaxed ">
                <span className="text-lg font-semibold leading-relaxed ">Learn more</span>
                <ArrowUpRightIcon className='text-primary-foreground'/>
            </button>
        </div>
    </section>
)
}

export default ConsultantTraining