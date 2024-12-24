"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const currentPath = usePathname();
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href={"/"}
            data-active={currentPath === "/"}
            className="data-[active=true]:underline outline-offset-4"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/produtos"}
            data-active={currentPath === "/produtos"}
            className="data-[active=true]:underline outline-offset-4"
          >
            Produtos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
