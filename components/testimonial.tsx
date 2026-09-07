'use client'
import Image from 'next/image';
import { useState } from 'react';
import ChevronIcon from './icons/arrow-icon';

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: {
    src: string;
    alt: string;
  };
};

export const testimonials: Testimonial[] = [
  {
    id: "aisha-yusuf",
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: {
      src: "/images/aisha-yusuf.png",
      alt: "Aisha Yusuf, Founder of CraftHub NG",
    },
  },
  {
    id: "john-davies",
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: {
      src: "/images/john-davies.png",
      alt: "John Davies, Marketing Manager at E-Commerce Emporium",
    },
  },
  {
    id: "chinonso-nwankwo",
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: {
      src: "/images/chinonso-nwankwo.png",
      alt: "Chinonso Nwankwo, HR Director at FutureTech Solutions",
    },
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "CEO of Tech Innovate",
    quote:
      "Tobams Group is a true partner in digital excellence. Their technical expertise have propelled our projects to new heights. Top notch, and the results speak for themselves.",
    avatar: {
      src: "/images/chinonso-nwankwo.png",
      alt: "Sarah Johnson, CEO of Tech Innovate",
    },
  },
];

const Card = ({ name, role, quote, avatar }: Testimonial) => {
  return (
    <div className="flex h-61 w-[85vw] sm:w-[48%] lg:w-[30%] shrink-0 flex-col gap-6 rounded-2xl border-l-2 border-secondary bg-background px-6 py-5 shadow-xs">
      <div className="flex items-center gap-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-base text-foreground">{name}</span>
          <span className="text-sm text-tertiary">{role}</span>
        </div>
      </div>

      <p className="text-lg leading-[150%] text-foreground line-clamp-4">{quote}</p>
    </div>
  );
};

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  };

  const mobileTranslate = [
    'translate-x-0',
    '-translate-x-[calc(85vw+1.25rem)]',
    '-translate-x-[calc(170vw+2.5rem)]',
    '-translate-x-[calc(255vw+3.75rem)]',
  ];

  const desktopTranslate = [
    'md:translate-x-0',
    'md:-translate-x-[calc(30%+1.25rem)]',
    'md:-translate-x-[calc(60%+2.5rem)]',
    'md:-translate-x-[calc(90%+3.75rem)]',
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 gap-10 flex flex-col bg-secondary-background/30">
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="font-bold text-[40px] leading-[130%] text-foreground">
          Testimonials
        </h3>
      </div>

      {/* Track container */}
      <div className="w-full pl-6 md:pl-16">
        <div
          className={`flex flex-row gap-5 transition-transform duration-500 ease-out ${
            mobileTranslate[currentIndex] || 'translate-x-0'
          } ${desktopTranslate[currentIndex] || 'lg:translate-x-0'}`}
        >
          {testimonials.map((slide) => (
            <Card key={slide.id} {...slide} />
          ))}
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex flex-row w-full justify-end items-center pr-6 md:pr-16 gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex h-8 w-8 items-center justify-center bg-secondary/10 rounded-lg disabled:opacity-40 transition-opacity"
        >
          <ChevronIcon direction="left" className="h-4 w-3 text-secondary" />
        </button>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
          className="flex h-8 w-8 items-center justify-center bg-secondary/10 rounded-lg disabled:opacity-40 transition-opacity"
        >
          <ChevronIcon direction="right" className="h-4 w-3 text-secondary" />
        </button>
      </div>
    </section>
  );
}