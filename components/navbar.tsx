import { ModeToggle } from "@/components/theme-toggle";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
// import AlgoliaSearch from "./algolia-search";

export const NAVLINKS = [
    {
        title: "Documentation",
        href: `/docs${page_routes[0].href}`,
    },
    {
        title: "Templates",
        href: "/templates",
    },
    {
        title: "Examples",
        href: "#",
    },
    {
        title: "Guides",
        href: "#",
    },
    {
        title: "Community",
        href: "#",
    },
];

const algolia_props = {
    appId: process.env.ALGOLIA_APP_ID!,
    indexName: process.env.ALGOLIA_INDEX!,
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
};

export function Navbar() {
    return (
        <nav className="w-full h-24 sticky top-0 z-50  smooth-theme-transition">
            <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
                <div className="flex items-center sm:gap-5 gap-2.5">
                    <SheetLeftbar />
                    <div className="lg:flex hidden">
                        <Logo />
                    </div>
                </div>
                <div className="
                    md:flex
                    hidden
                    bg-card
                    items-center
                    gap-2
                    border-2
                    border-border
                    rounded-md
                    overflow-clip
                    ">
                    <NavMenu />
                </div>
                <div className="flex items-center sm:justify-normal justify-between sm:gap-4">
                    <Link
                        href="#"
                        className={cn(
                            buttonVariants({
                                variant: "ghost",
                                size: "icon",
                            }),
                        )
                        }
                    >
                        <Github className="h-[1.1rem] w-[1.1rem]" />
                    </Link>
                    <Link
                        href="#"
                        className={buttonVariants({
                            variant: "ghost",
                            size: "icon",
                        })}
                    >
                        <Instagram className="h-[1.1rem] w-[1.1rem]" />
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}

export function Logo() {
    return (
        <Link href="/" className="flex items-center flex gap-2.5">
            <h2 className="text-md font-bold text font-code text-primary">ComponeNU</h2>
        </Link>
    );
}

export function NavMenu({ isSheet = false }) {
    return (
        <>
            {NAVLINKS.map((item) => {
                const Comp = (
                    <Anchor
                        key={item.title + item.href}
                        activeClassName="!text-primary dark:font-medium font-semibold"
                        absolute
                        className="
                            flex
                            items-center
                            gap-1
                            sm:text-sm
                            px-3
                            py-1.5
                            text-paragraph
                            font-medium 
                            hover:text-hover
                            "

                        href={item.href}
                    >
                        {item.title}
                    </Anchor>
                );
                return isSheet ? (
                    <SheetClose key={item.title + item.href} asChild>
                        {Comp}
                    </SheetClose>
                ) : (
                    Comp
                );
            })}
        </>
    );
}
