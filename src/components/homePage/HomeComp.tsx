import {black_han_sans, sigmar_one} from "@/app/font";
import Link from "next/link";

function HomeComp() {
    return (
        <div
            className="flex flex-col m-5 px-12 py-10 border-black text-black border bg-pale w-11/12 items-center rounded-2xl">
            <div className={`mb-10 text-black ${sigmar_one.className} text-5xl text-center`}>
                You’re In! <br/>Explore Your community
            </div>
            <div className={`flex flex-row gap-20  justify-center my-6 mx-10 text-black ${black_han_sans.className}`}>
                <Link href="/match" className="flex border-8 justify-center items-center border-white bg-green-light text-center rounded-full h-40 w-40">
                    Match
                </Link>
                <Link href="/events" className="flex border-8 justify-center items-center border-white bg-green-dark text-center align-center rounded-full h-40 w-40">
                    Events
                </Link>
                <Link href="/chat" className="flex border-8 justify-center items-center border-white bg-green text-center align-center rounded-full h-40 w-40">
                    Chat
                </Link>
            </div>
        </div>
    )
}

export default HomeComp;