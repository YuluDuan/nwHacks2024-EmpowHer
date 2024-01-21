import React from "react";
import Link from "next/link"
import {black_han_sans} from "@/app/font";

const LogInButton = () => {
    return (
        <Link href="/sign-in" className={`w-32 ${black_han_sans.className} py-2 text-center rounded-2xl bg-pink-dark text-white`}>
            LOG IN
        </Link>);
}
export default LogInButton;