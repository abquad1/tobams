
function Booking() {
  return (
    <section className='relative w-full  px-6 md:px-30'>
        <div className="flex flex-col px-6 md:px-16 py-8 gap-8 w-full justify-center items-center bg-primary rounded-lg">
            <h3 className="hidden md:block text-background text-xl font-semibold leading-[150% tracking-[3% ]] whitespace-pre-line text-center">
            Want to accelerate professional growth and development at your organisation? <br/>   See how we can help.
            </h3>

            <h3 className="block md:hidden text-background text-xl font-semibold leading-[150% tracking-[3% ]] whitespace-pre-line text-center">
            Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
            </h3>

            <button className="flex items-center justify-center bg-background text-primary py-3 px-6 w-fit rounded-sm text-lg font-semibold leading-[120%] ">
                Book a Consultation
            </button>
        </div>
    </section>
  )
}

export default Booking