// src/components/sections/feature-row.tsx
import Image from "next/image";
import FlashIcon from "./icons/flash-icon";
export type TrainingCardType = {
    id: string;
    heading: string;
    description: string;
    bullets: string[];
    image: {
      src: string;
      alt: string;
    };
    imageSide: "left" | "right";
  };
  
  export const trainingCards: TrainingCardType[] = [
    {
      id: "corporate-trainings",
      heading: "Corporate Trainings",
      description:
        "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
      bullets: [
        "Leadership Training",
        "Strategic Planning and Implementation",
        "Project Management",
        "Sustainability Training",
        "Customised Training",
      ],
      image: {
        src: "/images/corporate-trainings.jpg",
        alt: "Facilitator leading a corporate training session at a whiteboard",
      },
      imageSide: "right",
    },
    {
      id: "personalised-individual-training",
      heading: "Personalised Individual Training",
      description:
        "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
      bullets: [
        "Leadership Development",
        "Soft Skills Development",
        "Industry Specific Knowledge",
        "Technical Skills Enhancement",
        "Time Management and Productivity",
        "Career Development",
      ],
      image: {
        src: "/images/personalised-individual-training.jpg",
        alt: "Individual participating in a professional training session",
      },
      imageSide: "left",
    },
    {
      id: "capacity-development",
      heading: "Capacity Development",
      description:
        "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
      bullets: [
        "Tailored Training Programs",
        "Expert-Led Workshops",
        "Personalized Mentorship",
        "Technical Skills Enhancement",
        "Collaborative Learning Environment",
        "Ongoing Support and Resources",
      ],
      image: {
        src: "/images/capacity-development.jpg",
        alt: "Facilitator presenting charts to a small group in a meeting room",
      },
      imageSide: "right",
    },
  ];

export default function TrainingSection({ row }: { row: TrainingCardType }) {
  const isImageLeft = row.imageSide === "left";

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-14 ${
        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="relative w-full md:w-9/20 shrink-0 flex items-center justify-center">
        <Image
            src={row.image.src}
            alt={row.image.alt}
            width={356}
            height={356}
            className="h-auto w-full max-h-89 object-contain rounded-r-lg rounded-bl-lg rounded-tl-[40px]"
        />
        </div>

      <div className="flex w-full md:w-11/20 flex-col gap-5.25">
        <h3 className="text-[40px] text-foreground font-semibold leading-[150%] tracking-[0.03em]">
          {row.heading}
        </h3>
        <p className="text-lg text-tertiary leading-[150%]">
          {row.description}
        </p>
        <ul className="flex flex-col gap-2">
          {row.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-base text-tertiary leading-[150%]"
            >
              <FlashIcon className="h-4.5 w-3.5 text-senary" strokeColor="var(--icon-flash-stroke)" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}