import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-full bg-white z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Mayen Logo"
              width={150}
              height={50}
              className="w-auto h-8 md:h-10"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-black font-semibold text-sm hover:text-gray-600">HOME</Link>
            <Link href="/about" className="text-black font-semibold text-sm hover:text-gray-600">ABOUT US</Link>
            <Link href="/projects" className="text-black font-semibold text-sm hover:text-gray-600">PROJECTS</Link>
            <Link href="/blog" className="text-black font-semibold text-sm hover:text-gray-600">BLOG</Link>
            <Link href="/contact" className="text-black font-semibold text-sm hover:text-gray-600">CONTACT</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="primary">
              DONATE <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              VOLUNTEER
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}