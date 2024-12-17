"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  //   activeClassName?: string
}

export default function ActiveLink({
  href,
  children,
  className = "",
}: //   activeClassName = 'text-blue-500 font-bold',
ActiveLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive
          ? " border-black font-semibold"
          : " border-stone-500/50 text-stone-500/50"
      }`}
    >
      {children}
    </Link>
  );
}
