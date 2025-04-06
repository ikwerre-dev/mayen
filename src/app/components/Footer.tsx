import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter, Heart } from 'lucide-react';
import Button from "./Button";

export default function Footer() {
    return (
        <footer className="relative bg-[#011033] text-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/footer-bg.png"
                    alt="Footer Background"
                    fill
                    className="object-cover opacity-10"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20">
                <div className="grid md:grid-cols-12 gap-8 mb-16">
                    {/* Logo and Description */}
                    <div className="md:col-span-3">
                        <Image
                            src="/logo.png"
                            alt="Mayen Logo"
                            width={120}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-white/80 text-sm mb-6">
                            Mayen Global Foundation stands at the forefront of a transformative journey, where the pursuit of comprehensive community development takes centre stage. Founded on principles of compassion, innovation, and dedication, Mayen Global Foundation has evolved to address a spectrum of challenges faced by African communities.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/80 hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-bold mb-6">GET IN TOUCH</h3>
                        <div className="space-y-3 text-white/80 text-sm">
                            <p>30N River Rd, Desplaines, IL 60016</p>
                            <p>United States</p>
                            <p>+1 224-477-2330</p>
                            <p>contact@mayenglobalfoundation</p>
                        </div>
                    </div>

                    {/* Our Project */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-bold mb-6">OUR PROJECT</h3>
                        <div className="space-y-3 text-white/80 text-sm">
                            <Link href="#" className="block hover:text-white">&gt; Financial Empowerment</Link>
                            <Link href="#" className="block hover:text-white">&gt; Integrated Health and Education access project</Link>
                            <Link href="#" className="block hover:text-white">&gt; Accessible Tech Educations for Africans</Link>
                            <Link href="#" className="block hover:text-white">&gt; Training and Capacity Building</Link>
                            <Link href="#" className="block hover:text-white">&gt; Early Money - Financial Literacy Program (EMOFIL)</Link>
                            <Link href="#" className="block hover:text-white">&gt; Waste to Wealth Program</Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-bold mb-6">QUICK LINKS</h3>
                        <div className="space-y-3 text-white/80 text-sm mb-6">
                            <Link href="#" className="block hover:text-white">&gt; Home</Link>
                            <Link href="#" className="block hover:text-white">&gt; About Us</Link>
                            <Link href="#" className="block hover:text-white">&gt; Projects</Link>
                            <Link href="#" className="block hover:text-white">&gt; Blog</Link>
                            <Link href="#" className="block hover:text-white">&gt; Contacts</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button variant="primary" className="text-sm px-6 py-1.5 rounded-full">
                                DONATE <Heart color="white" className="w-4 h-4" />
                            </Button>
                            <Button variant="whiteoutline" className="text-sm px-6 py-1.5 rounded-full">
                                VOLUNTEER
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <p className="text-sm mb-4">Subscribe to our News and Updates</p>
                    <div className="max-w-xl mx-auto flex overflow-hidden text-sm bg-white rounded-[.5rem] ">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="flex-1 px-6 py-3 text-gray-500 placeholder-gray-400 bg-transparent outline-none"
                        />
                        <button className="px-8 py-3  bg-[#FFA500] text-white font-semibold  rounded-r-[.5rem] hover:bg-[#FFA500]/90 transition-colors">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#010615] py-[2rem]">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-sm text-white/60">
                        © 2025 Mayen Global Foundation All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}