import TrainingSection from "./training-section"
import { trainingCards } from "./training-section";

export default function Trainings() {
  return (
    <section className="flex flex-col gap-30 px-4 md:px-16 py-4">
      {trainingCards.map((row) => (
        <TrainingSection key={row.id} row={row} />
      ))}
    </section>
  );
}
