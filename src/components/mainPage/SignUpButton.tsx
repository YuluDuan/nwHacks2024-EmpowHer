import Link from "next/link";
import {black_han_sans} from "@/app/font"

function SignUpButton () {
    return (
        <Link href="/sign-up" className={`w-32 ${black_han_sans.className} py-2 pl-2 text-center rounded-2xl bg-green text-black font-body font-bold`} >
            SIGN UP
        </Link>
    )
}
//className="rounded-md bg-green-dark text-black font-body font-bold"
export default SignUpButton;