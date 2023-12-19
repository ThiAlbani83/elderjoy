import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-[75px]">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={30}
            alt="elderJoy logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="rounded-full bg-[#EEBE5A] text-gray-700 px-6 py-3 hover:bg-[#6F69AC] hover:text-white"
            >
              <Link href="/sign-in">Entrar</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
