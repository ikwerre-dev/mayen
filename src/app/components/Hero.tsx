import Image from "next/image";
import Button from "./Button";
import { Heart } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative ">
            <Image
                src="/hero.png"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-[#020F33]/71"></div>

            <div className="relative py-[18rem] h-full flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Connecting Lives,
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                    Transforming Communities.
                </h1>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary">
                        DONATE <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        VOLUNTEER
                    </Button>
                </div>
            </div>
        </section>
    );
}