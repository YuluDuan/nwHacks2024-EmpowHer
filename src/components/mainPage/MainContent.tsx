import React from "react";
import Image from "next/image";
function mainContent() {
    // @ts-ignore
    return (
        <div className="m-5 p-8 border-black text-black border bg-pale w-11/12 items-center rounded-2xl grid grid-cols-2">
            <div className="flex flex-col">
                <h5 className="mt-10 font-bold text-2xl">
                    We want you to feel safe and included
                </h5>
                <h2 className="mb-5 text-6xl">
                    Welcome to <br /> empowher
                </h2>
                <p className="mb-5 ">
                    A platform empowering female-identifying individuals in <br /> personal and professional development
                </p>
                <button className="mb-8 w-20 p-2 rounded-2xl bg-green-dark text-black text-bold">
                    Get Started!
                </button>
            </div>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert right-0 align=009"
                src="/main_page.svg"
                alt="main page svg"
                width={380}
                height={380}/>
        </div>
    )
}

export default mainContent;