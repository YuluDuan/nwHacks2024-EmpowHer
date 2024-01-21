import {black_han_sans} from "@/app/font";
import Link from "next/link";

function AboutUsButton () {
    return (
        <Link href="/sign-up" className={`w-20 ${black_han_sans.className} py-2 text-bottom text-black font-bold`}>
            About Us
        </Link>
    )
}
//className="rounded-md bg-green-dark text-black font-body font-bold"
export default AboutUsButton;