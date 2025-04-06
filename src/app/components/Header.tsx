"use client"

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-[100]">
      <div className="container mx-auto px-4 py-5 relative z-[60]  inset-0">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Mayen Logo"
              width={250}
              height={100}
              className="w-auto h-[3rem] md:h-10"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-black font-semibold text-sm hover:text-gray-600">HOME</Link>
            <Link href="/about" className="text-black font-semibold text-sm hover:text-gray-600">ABOUT US</Link>
            <Link href="/projects" className="text-black font-semibold text-sm hover:text-gray-600">PROJECTS</Link>
            <Link href="/blog" className="text-black font-semibold text-sm hover:text-gray-600">BLOG</Link>
            <Link href="/contact" className="text-black font-semibold text-sm hover:text-gray-600">CONTACT</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary">
              DONATE <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              VOLUNTEER
            </Button>
          </div>

          <button
            className="md:hidden z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <div className={`
        fixed inset-0 bg-white z-[50] transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden top-0
      `}>
        <div className="flex flex-col h-full pt-20">
          <div className="flex-1 px-4 py-6">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-black font-semibold text-lg">HOME</Link>
              <Link href="/about" className="text-black font-semibold text-lg">ABOUT US</Link>
              <Link href="/projects" className="text-black font-semibold text-lg">PROJECTS</Link>
              <Link href="/blog" className="text-black font-semibold text-lg">BLOG</Link>
              <Link href="/contact" className="text-black font-semibold text-lg">CONTACT</Link>
            </div>
          </div>

          <div className="px-4 py-6 border-t">
            <div className="flex flex-col space-y-3">
              <Button variant="primary" className="w-full">
                DONATE <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full">
                VOLUNTEER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}