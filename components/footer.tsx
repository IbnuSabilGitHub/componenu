import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-secondary w-full h-16">
      <div className="container m-auto flex items-center  sm:gap-0 gap-4 h-full text-paragraph text-sm sm:py-0 py-3 max-sm:px-4">
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="#"
            >
              componenu
            </Link>
            .
          </p>
      </div>
    </footer>
  );
}


