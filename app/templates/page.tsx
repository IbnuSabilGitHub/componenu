import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";
import Link from "next/link";

type TechStack = {
  title: string;
  icon?: string;
}

export default async function TemplateIndexPage() {

  return (
    <div className="flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="sm:text-3xl text-2xl font-extrabold">
          The latest this product
        </h1>
        <p className="text-muted-foreground sm:text-[16.5px] text-[14.5px]">
          All the latest blogs and news, straight from the team.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
}


function TemplateCard() {
  return (
    <Link
      href={`#`}
      className="flex flex-col gap-2 items-start border rounded-md py-5 px-3 min-h-[400px] bg-card"
    >
      <h3 className="text-md font-semibold -mt-1 pr-7">componu</h3>
      <div className="w-full">
        <Image
          src='/demo-1.jpg'
          alt='demo'
          width={400}
          height={150}
          quality={80}
          className="w-full rounded-md object-cover h-[180px] border"
        />
      </div>
      <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque delectus vel itaque quia eveniet, quam numquam, quasi ipsa voluptate dignissimos autem repellendus libero officiis repudiandae harum. Nam, maxime veniam.</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <p className="text-[13px] text-muted-foreground">
          Published on october 12, 2023
        </p>
        <TechStack tech={[
          {
            title: 'Nextjs',
            icon: '/nextjs.svg'
          },
          {
            title: 'React',
            icon: '/React_light.svg'
          },
          {
            title: 'Shadcn',
            icon: '/shadcn_light.svg'
          }
        ]} />
      </div>
    </Link>
  );
}

function TechStack({ tech, max = 4 }: { tech: TechStack[]; max?: number }) {
  const displayTech = tech.slice(0, max);
  const remainingUsers = Math.max(tech.length - max, 0);

  return (
    <div className="flex items-center">
      {displayTech.map((tech, index) => (
        <Avatar
          key={tech.title}
          className={`inline-block border-2 w-9 h-9 border-background bg-background ${index !== 0 ? "-ml-3" : ""
            } `}
        >
          <AvatarImage src={tech.icon} alt={tech.title} />
          <AvatarFallback>
            {tech.title.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
      {remainingUsers > 0 && (
        <Avatar className="-ml-3 inline-block border-2 border-background hover:translate-y-1 transition-transform">
          <AvatarFallback>+{remainingUsers}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
