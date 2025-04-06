"use client"

import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

function EventCard({ image, date, title, description }: EventCardProps) {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:grid-cols-3 gap-8 p-[1rem] bg-white  rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="py-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-lg font-semibold text-[#061640] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link href="#" className="text-gray-600 text-xs hover:underline">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default function RecentEvents() {
  const events = [
    {
      image: "/project1.png",
      date: "MARCH 15, 2024",
      title: "Community Health Outreach",
      description: "Provided free medical check-ups and essential healthcare services to over 200 people."
    },
    {
      image: "/project2.png",
      date: "FEBRUARY 8, 2024",
      title: "Education Support Drive",
      description: "Donated learning materials to 50+ underprivileged schools."
    },
    {
      image: "/project3.png",
      date: "FEBRUARY 5, 2024",
      title: "Waste to Wealth Initiative",
      description: "Launched a recycling drive, turning waste into reusable products for income generation."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#061640] mb-2">Recent Events &</h2>
          <h3 className="text-3xl font-bold text-[#061640]">Activities</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}