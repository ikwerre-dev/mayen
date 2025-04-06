"use client"

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className="group relative bg-white overflow-hidden block">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative h-64 w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="p-5 px-5 bg-[#061640] flex flex-row justify-between">
          <div className="flex flex-col">
            <h3 className="text-[1.5rem] font-bold text-white leading-tight">{title}</h3>
            <p className="text-white text-[.7rem] mt-2 mb-4 line-clamp-2 h-[2rem]">{description}</p>
          </div>
          <motion.div 
            className="flex flex-col items-center justify-center"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight color='white' size={32} />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServiceCards() {
  const services = [
    {
      title: 'Healthcare',
      description: 'The Foundations Services',
      image: '/service1.png',
      href: '/healthcare'
    },
    {
      title: 'Education',
      description: 'Empowering Minds for Sustainable Change',
      image: '/service2.png',
      href: '/education'
    },
    {
      title: 'Waste Management',
      description: 'Cultivating Sustainable Practices',
      image: '/service3.png',
      href: '/waste-management'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative -mt-32 pb-[5rem] px-4 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:grid-cols-3 gap-5 md:gap-8 pb-[2rem] md:py-[3rem] bg-[#FFF9F9] p-[1rem] md:p-[2rem]">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            {...service} 
          />
        ))}
      </div>
    </motion.section>
  );
}