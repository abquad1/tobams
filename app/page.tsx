import Hero from "@/components/hero";
import LMS from "@/components/LMS";
import MDP from "@/components/MDP";
import Trainings from "@/components/trainings";
import Transformation from "@/components/transformation";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full pt-25 md:pt-49">
        <Hero/>
        <LMS/>
        <Trainings/>
        <MDP/>
        <Transformation/>
    </main>
  );
}
