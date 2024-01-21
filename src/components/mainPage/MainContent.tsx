import React from "react";
import Image from "next/image";
import {black_han_sans, cantarell, sigmar_one} from "@/app/font";
import Link from "next/link";
function mainContent() {
    // @ts-ignore
    return (
        <div className="m-5 px-12 py-10 border-black text-black border bg-pale w-11/12 items-center rounded-2xl grid grid-cols-2">
            <div className="flex flex-col">
                <h5 className={`mt-10 ${cantarell.className} italic text-lg`}>
                    You deserved to be heard and excel
                </h5>
                <h2 className={`mb-5 text-6xl ${sigmar_one.className}`}>
                    Welcome to <br /> empowher
                </h2>
                <p className={`mb-8 ${cantarell.className}`}>
                    A vibrant community dedicated to fostering <br /> gender equality in technology
                </p>
                <Link href="/sign-up" className={`mb-8 w-32 ${black_han_sans.className} py-2 pl-1.5 text-center rounded-2xl bg-green-dark text-black text-bold`}>
                    Get Started!
                </Link>
            </div>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert right-0 align=009"
                src="/main_page.svg"
                alt="main page svg"
                width={400}
                height={400}/>
        </div>
    )
}

export default mainContent;