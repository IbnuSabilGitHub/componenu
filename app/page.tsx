"use client";
import CardSwap, { Card } from "@/components/card-swap";
import Image from "next/image";
import { FolderSync, Pencil, Code, CircleChevronRight } from 'lucide-react';
import { useBreakpointValue } from "@/lib/useBreakpointValue";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  const cardSwapWidth = useBreakpointValue({ xl: 600, base: 600 }, 600);
  const cardSwapHeight = useBreakpointValue({ xl: 500, base: 400 }, 400);
  return (
    <div className="grid lg:grid-cols-2 sm:min-h-[87.5vh] min-h-[82vh] gap-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-[1.80rem] leading-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left">
          Effortlessly build stunning documentation
        </h1>
        <p className="mb-8 md:text-lg text-base max-w-[1200px] text-secondary text-left ">
          This feature-packed documentation template, built with multiple
          frameworks including Next.js, React Router, and TanStack Router, offers
          a sleek and responsive design, perfect for all your project
          documentation needs.
        </p>
        <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
          <Link
            href={`/docs${page_routes[0].href}`}
            className={buttonVariants({
              variant: "default",
              shadow: "artisticOutline",
              className: "px-6",
              size: "lg",
            })}
          >
            Browse Components <CircleChevronRight />
          </Link>
          <Link
            href={`/docs${page_routes[0].href}`}
            className={buttonVariants({
              variant: "secondary",
              shadow: "artisticOutline",
              className: "px-6",
              size: "lg",
            })}
          >
            Browse Templates <CircleChevronRight />
          </Link>
        </div>
      </div>
      <div className="relative hidden  lg:block">
        <CardSwap
          cardDistance={100}
          verticalDistance={100}
          delay={5000}
          pauseOnHover={false}
          width={cardSwapWidth}
          height={cardSwapHeight}
          skewAmount={9}
          position="center"
        >
          <Card className="flex flex-col p-4 gap-4 border-2">
            <div className="inline-flex items-center gap-4 text-primary-foreground bg-primary p-2 rounded-lg">
              <FolderSync className="w-5 h-5" />
              <h3 className="font-medium">Reusable</h3>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden relative">
              <Image
                src="/demo-1.jpg"
                alt="Image"
                fill
                className="object-cover dark:brightness-[0.5] dark:grayscale"
              />
            </div>
          </Card>
          <Card className="flex flex-col p-4 gap-4 border-2">
            <div className="inline-flex items-center gap-4 text-primary-foreground bg-primary p-2 rounded-lg">
              <Pencil className="w-5 h-5" />
              <h3 className="font-medium">Customizable</h3>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden relative">
              <Image
                src="/demo-2.jpg"
                alt="Image"
                fill
                className="object-cover dark:brightness-[0.5] dark:grayscale"
              />
            </div>
          </Card>
          <Card className="flex flex-col p-4 gap-4 border-2">
            <div className="inline-flex items-center gap-4 text-primary-foreground bg-primary p-2 rounded-lg">
              <Code className="w-5 h-5" />
              <h3 className="font-medium">Modern UI</h3>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden relative">
              <Image
                src="/demo-3.jpg"
                alt="Image"
                fill
                className="object-cover dark:brightness-[0.5] dark:grayscale"
              />
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
}
