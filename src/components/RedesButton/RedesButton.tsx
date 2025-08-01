import * as I from "@phosphor-icons/react";
import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface RedesButton {
  className?: string;
  iconSize?: number;
  instagram?: string;
  behance?: string;
  facebook?: string;
}

export default function RedesButton({
  iconSize = 32,
  className,
  instagram,
  behance,
  facebook,
}: RedesButton) {
  const style = twMerge(
    className,
    "flex flex-col justify-center items-center gap-1 self-stretch "
  );

  return (
    <div className={style}>
      <div className="w-px flex-[1-0-0] bg-white"></div>
      <IconButton
        href={`https://www.instagram.com/${instagram ? instagram : ""}`}
        icon={<I.InstagramLogoIcon size={iconSize} color="white" />}
      />
      <IconButton
        href={`https://www.behance.net/${instagram ? instagram : ""}`}
        icon={<I.BehanceLogoIcon size={iconSize} color="white" />}
      />
      <IconButton
        href={`https://www.facebook.com/${instagram ? instagram : ""}`}
        icon={<I.FacebookLogoIcon size={iconSize} color="white" />}
      />
      <div className="w-px flex-[1-0-0] bg-white"></div>
    </div>
  );
}

interface IconButtonProps extends ComponentProps<"a"> {
  icon: React.ReactNode;
}
export function IconButton({ icon, ...props }: IconButtonProps) {
  return <a {...props}>{icon}</a>;
}
