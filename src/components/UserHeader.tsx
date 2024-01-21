import { sigmar_one } from "@/app/font";
import Link from "next/link";
import Image from "next/image";

const UserHeader = () => {
  return (
    <nav className="flex justify-between py-6 px-10 w-full h-24 bg-pink items-center">
      <div className="flex gap-1">
        <Image
          width={50}
          height={60}
          alt="empowher icon"
          src="/assets/icon.svg"
        />
        <p className={`${sigmar_one.className} text-5xl`}>My Profile</p>
      </div>

      <Link className="text-lg py-3 underline decoration-solid" href="/home">
        Back to Home Page
      </Link>
    </nav>
  );
};

export default UserHeader;
