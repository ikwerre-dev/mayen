import Image from 'next/image';
import Button from './Button';
import { Heart } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    goal: number;
    raised: number;
}

function ProjectCard({ title, description, image, goal, raised }: ProjectCardProps) {
  const progressPercentage = Math.round((raised / goal) * 100);

  return (
    <div className="bg-[#061640] overflow-hidden flex flex-col h-[42rem]">
      <div className="relative h-[20rem] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-white text-lg font-semibold mb-3 line-clamp-2">{title}</h3>
          <p className="text-white/90 text-sm line-clamp-2">{description}</p>
        </div>
        
         <div className="relative mb-6">
          <div className="w-full h-1 bg-white/20 rounded-full">
            <div 
              className="relative h-full bg-[#00A3FF] rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            >
              <div 
                className="absolute -top-3" 
                style={{ right: '0' }}
              >
                <div className="bg-[#00A3FF] text-white px-3 py-2 rounded-lg  absolute bottom-0 left-1/2 -translate-x-1/2 text-sm">
                  {progressPercentage}%
                </div>
                <div className="w-2 h-2 bg-[#00A3FF] transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
              <div className="absolute -top-1 right-0 transform translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-[#00A3FF]"></div>
            </div>
          </div>
        </div>

         <div className="flex justify-between items-center mb-8">
          <div className="text-white">
            <div className="text-sm font-bold">Goal: ${goal.toLocaleString()}</div>
          </div>
          <div className="text-white">
            <div className="text-sm font-bold">Raised: ${raised.toLocaleString()}</div>
          </div>
        </div>

         <div className="flex justify-between mt-auto">
          <Button variant="whiteoutline">
            VIEW DETAILS
          </Button>
          <Button variant="primary">
            DONATE <Heart className='w-4 h-4' color='white' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
    const projects = [
        {
            title: "Financial Empowerment",
            description: "Providing resources and opportunities for individuals to achieve financial independence.",
            image: "/project1.png",
            goal: 320000,
            raised: 315000
        },
        {
            title: "Integrated Health And Education Access Project",
            description: "Bridging the gap between quality healthcare and education for underserved communities.",
            image: "/project2.png",
            goal: 400000,
            raised: 215000
        },
        {
            title: "Accessible Tech Education For Africans",
            description: "Enhancing digital access and connectivity to drive innovation and development.",
            image: "/project3.png",
            goal: 800000,
            raised: 40000
        },
        {
            title: "Training And Capacity Building",
            description: "Equipping individuals with skills and knowledge for personal and professional success.",
            image: "/project1.png",
            goal: 320000,
            raised: 315000
        },
        {
            title: "Early Money - Financial Literacy Program (EMOFIL)",
            description: "Teaching financial literacy to young minds for a secure financial future.",
            image: "/project2.png",
            goal: 400000,
            raised: 215000
        },
        {
            title: "Waste To Wealth Program",
            description: "Transforming waste into economic opportunities through sustainable recycling.",
            image: "/project3.png",
            goal: 800000,
            raised: 40000
        }
    ];

    return (
        <section className="relative py-20">
            <Image
                src="/mission1.png"
                alt="Projects Background"
                fill
                className="object-cover opacity-5"
            />
            <div className="relative z-10 max-w-7xl mx-auto  ">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-gray-600 mb-2">Our Projects</h2>
                    <h3 className="text-4xl font-bold text-[#061640]">
                        Building a Future of<br />Hope and Impact
                    </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}