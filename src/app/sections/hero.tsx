import React from "react";
import Button from "@/components/button/button";
import Navbar from "@/components/navbar/navbar";
import RedesButton from "@/components/RedesButton/RedesButton";

export default function Hero() {
    return (
        <section className="relative h-dvh z-[-2] bg-[url(/Hero.png)] bg-cover bg-top">
            <Navbar />
            <object
                className="absolute right-0 top-0 h-dvh w-auto object-fill z-0"
                style={{ right: "auto" }}
                data="customShadow.svg"
                type="image/svg+xml"
            ></object>
            <div className="ms-0 sm:ms-50 content-center grid h-dvh relative z-10">
                <div className="flex h-50 gap-5 w-125 px-5 items-center">
                    <RedesButton iconSize={26} />
                    <div className="flex flex-col gap-1">
                        <p className="font-primary text-white text-2xl font-bold">
                            Capturando momentos únicos com sensibilidade e estilo
                        </p>
                        <p className="font-primary text-white text-xl mt-5">Name Surname</p>
                        <div className="mt-5">
                            <Button>Ver portifólio</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
