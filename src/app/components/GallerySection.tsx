"use client"

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

function ImageModal({ src, alt, onClose }: ImageModalProps) {
    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"  onClick={onClose}>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
                <X size={32} />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: "/gallery1.png", alt: "Gallery Image 1", span: "col-span-7" },
        { src: "/gallery2.png", alt: "Gallery Image 2", span: "col-span-5", grayscale: true },
        { src: "/gallery3.png", alt: "Gallery Image 3", span: "col-span-5" },
        { src: "/gallery4.png", alt: "Gallery Image 4", span: "col-span-7" },
    ];

    return (
        <section className="py-20 bg-[#FDF8F3]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#061640]">
                        Moments of Impact-<br />Photo Gallery
                    </h2>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${image.span} relative h-[250px] rounded-3xl overflow-hidden cursor-pointer`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className={`object-cover ${image.grayscale ? 'grayscale' : ''}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline">
                        View all
                    </Button>
                </div>
            </div>

            {selectedImage && (
                <ImageModal
                    src={selectedImage}
                    alt="Gallery Image"
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </section>
    );
}