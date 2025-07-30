"use client";

import { Playfair_Display } from "next/font/google";
import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});


const btnStyle =
  "px-4 py-4 hover:shadow-none rounded-sm cursor-pointer hover:bg-white text-2xl font-[--font-playfair] bg-white/0 hover:text-black text-white shadow-[inset_0_0_0_2px_white] transition duration-500 ease-in-out  transition-colors";

export default function Button({ className, ...props }: ComponentProps<"button">) {
  const style = twMerge(className, btnStyle);

  return <button className={style} {...props} />;
}


