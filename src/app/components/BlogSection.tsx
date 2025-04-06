"use client"

import Image from "next/image";
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import Button from './Button';

interface BlogPostProps {
  image: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

function BlogPost({ image, date, author, title, description }: BlogPostProps) {
  return (
    <div className="bg-[#061640] overflow-hidden ">
      <div className="relative h-[15rem]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs  text-gray-300 mb-3">
          <span>{date}</span>
          <span>|</span>
          <span>{author}</span>
          <div className="flex items-center gap-3 ml-auto">
            <button className="hover:text-[#fff]">
              <Heart size={18} />
            </button>
            <button className="hover:text-[#fff]">
              <MessageCircle size={18} />
            </button>
            <button className="hover:text-[#fff]">
              <Share2 size={18} />
            </button>
          </div>
        </div>
        <h3 className="text-[#fff] text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-6 line-clamp-2">{description}</p>
        <Button variant="whiteoutline">
          Read More
        </Button>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const posts = [
    {
      image: "/blog1.png",
      date: "January 20, 2025",
      author: "ADMIN",
      title: "Transforming Communities Through Waste Recycling",
      description: "Discover how our Waste to Wealth Program is turning environmental challenges into economic opportunities."
    },
    {
      image: "/blog2.png",
      date: "January 20, 2025",
      author: "ADMIN",
      title: "Empowering Women Through Financial Independence",
      description: "Financial empowerment is key to gender equality. Read stories of transformation from our beneficiaries."
    },
    {
      image: "/blog3.png",
      date: "January 20, 2025",
      author: "ADMIN",
      title: "Health & Education: A Twin Path To A Better Future",
      description: "Learn how our Integrated Health and Education Access Project is creating a sustainable impact."
    }
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 h-[40%] z-0">
        <Image
          src="/blog-bg.png"
          alt="Blog Background"
          fill
          className="object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-[2rem] py-20">
        <div className="text-center mb-16">
          <h2 className="text-[#FFA500] text-lg font-medium mb-2">Our Blog</h2>
          <h3 className="text-white text-4xl font-bold">
            Check out our<br />Latest News
          </h3>
        </div>
        <div className="grid bg-white  py-[2rem] px-[2rem] md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}