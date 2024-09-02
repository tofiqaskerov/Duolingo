"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
  setOpen?: (isOpen: boolean) => void
};

export const SidebarItem = ({ label, iconSrc, href, setOpen }: Props) => {
  const pathName = usePathname();
  const active = pathName === href;
  const handleClick = () =>{
    if(setOpen){
      setOpen(false)
    }
  }
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href} onClick={handleClick}>
         <Image src={iconSrc} alt={label} className="mr-5 " height={32} width={32} />
        {label}
      </Link>
    </Button>
  );
};
