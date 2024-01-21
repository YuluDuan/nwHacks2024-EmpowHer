import Image from "next/image";
import {sigmar_one} from "@/app/font";
import Link from "next/link";

const EventHeader = (props: { label: string }) => {
    return (
        <main className="bg-green-dark">
            <nav className="flex justify-between py-6 px-10 w-full h-24 bg-green-light items-center">
                <div className="flex gap-1">
                    <Image
                        width={50}
                        height={60}
                        alt="empowher icon"
                        src="/assets/icon.svg"
                    />
                    <p className={`${sigmar_one.className} text-5xl text-black`}>
                        {props.label}
                    </p>
                </div>

                <Link className="text-lg py-3 underline decoration-solid" href="/home">
                    Back to Home Page
                </Link>
            </nav>
        </main>
    )
}

export default EventHeader;