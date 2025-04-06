import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative">
                        <div className="relative h-[500px] w-full">
                            <Image
                                src="/volunteer.png"
                                alt="Volunteer"
                                fill
                                className="object-cover rounded-lg pr-[3rem]"
                            />
                            <div className="absolute -bottom-10 border-t-8 border-l-8 border-white right-0 bg-[#061640] p-8 r">
                                <h2 className="text-white text-6xl font-bold">25+</h2>
                                <p className="text-white uppercase tracking-wider">Years</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg text-gray-600">Who we are</h3>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#061640]">
                                In order to change we must be sick and tired of being sick and tired.
                            </h2>
                            <p className="text-[#061640] italic">Fannie Lou Hamer</p>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Mayen Global Foundation stands at the forefront of a transformative journey, where the pursuit of comprehensive community development takes centre stage. Founded on principles of compassion, innovation, and dedication, Mayen Global Foundation has evolved to address a spectrum of challenges faced by African communities.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            As an organization deeply rooted in the African continent, our journey began with a singular focus on healthcare - a commitment to improving the health and well-being of individuals and communities across Africa. However, recognizing the intricate interplay of various factors that shape the quality of life, Mayen Global Foundation has strategically broadened its scope of operation to encompass healthcare, education, environmental awareness, waste management, and the development of sustainable communities.
                        </p>
                    </div>
                </div>

                {/* Vision & Mission Statements */}
                <div className="max-w-5xl mx-auto py-[3rem]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative bg-[#061640] p-8 py-[3rem] text-center overflow-hidden">
                            <Image
                                src="/mission1.png"
                                alt="Vision Background"
                                fill
                                className="object-cover opacity-10"
                            />
                            <div className="relative z-10">
                                <h3 className="text-white text-2xl font-bold mb-6">VISION STATEMENT</h3>
                                <p className="text-white text-sm leading-relaxed">
                                    Our vision is to be a catalyst for a thriving Africa, where every individual has access to quality healthcare, education, and a sustainable environment. Mayen Global Foundation envisions resilient and empowered communities that embody a harmonious balance between health, education, and environmental sustainability, contributing to a brighter and more prosperous future for the continent.
                                </p>
                            </div>
                        </div>

                        <div className="relative bg-[#FFA500] p-8 py-[3rem] text-center overflow-hidden">
                            <Image
                                src="/mission2.png"
                                alt="Mission Background"
                                fill
                                className="object-cover opacity-10"
                            />
                            <div className="relative z-10">
                                <h3 className="text-white text-2xl font-bold mb-6">MISSION STATEMENT</h3>
                                <p className="text-white text-sm leading-relaxed">
                                    Our mission is to empower communities through innovative healthcare solutions, transformative education, environmental stewardship, waste management, and community development initiatives. By nurturing a comprehensive approach, we aim to create lasting positive change, improving the well-being and resilience of individuals and communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}