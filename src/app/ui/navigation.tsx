"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface propstyp {
  navLinks: {
    id: number;
    name: string;
    href: string;
  }[];
}

export function Navigation({ navLinks }: propstyp) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <div>
            <Link
              className={isActive ? "text-blue" : "text-black"}
              href={`blog/${link.href}`}
              key={link.name}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}
