import Image from "next/image";

export default function ImpactSection() {
  const impacts = [
    {
      number: "6,200+",
      label: "LIVES\nIMPACTED"
    },
    {
      number: "100+",
      label: "SCHOOLS\nSUPPORTED"
    },
    {
      number: "5,000+",
      label: "INDIVIDUALS\nEMPOWERED"
    },
    {
      number: "50+",
      label: "COMMUNITY\nREACHED"
    }
  ];

  return (
    <section className="relative py-20 bg-[#061640]/95">
      <div className="absolute inset-0 z-0">
        <Image
          src="/impact.png"
          alt="Impact Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[#FFA500] text-2xl font-bold mb-16">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="text-white text-4xl md:text-5xl font-bold mb-2">{impact.number}</div>
              <div className="text-white/80 text-sm whitespace-pre-line">{impact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}