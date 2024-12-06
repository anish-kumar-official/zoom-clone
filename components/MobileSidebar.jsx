"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarLinks from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="w-full w-max-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="Menu"
            height={36}
            width={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-bg2">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex gap-4 items-center">
                <Image
                  src="/icons/logo.svg"
                  alt="voom logo"
                  height={32}
                  width={32}
                />
                <p className="text-white text-2xl font-extrabold">VOOM</p>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div>
            <SheetClose asChild>
              <div className="flex flex-col gap-6 px-1 mt-6">
                {SidebarLinks.map((links) => {
                  const isActive =
                    pathname === links.url || pathname.startsWith(`${links.url}/`);
                  return (
                    <SheetClose asChild key={links.url}>
                      <Link
                        href={links.url}
                        key={links.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg justify-start text-white",
                          { "bg-blue-700": isActive },
                          { "hover:text-blue-700": !isActive }
                        )}
                      >
                        <Image
                          src={links.imgPath}
                          alt={links.label}
                          width={20}
                          height={20}
                        />
                        {links.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileSidebar;
