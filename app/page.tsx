import Booking from "@/components/booking";
import ConsultantTraining from "@/components/consultant-training";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LMS from "@/components/LMS";
import MDP from "@/components/MDP";
import Testimonial from "@/components/testimonial";
import Trainings from "@/components/trainings";
import Transformation from "@/components/transformation";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full ">
        <Hero/>
        <LMS/>
        <Trainings/>
        <MDP/>
        <Transformation/>
        <ConsultantTraining/>
        <Booking/>
        <Testimonial/>
        <Footer/>
    </main>
  );
}
