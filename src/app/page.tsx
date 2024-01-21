import Image from "next/image";
import LogInButton from "@/components/mainPage/LogInButton"
import SignUpButton from "@/components/mainPage/SignUpButton"
import MainContent from "@/components/mainPage/MainContent"
import AboutUsButton from "@/components/mainPage/AboutUsButton"
import {sigmar_one} from "@/app/font";


export default function Home() {
  return (
      <main className="flex min-h-screen bg-pink flex-col items-center px-24 pt-10">
        <div className="flex py-6 px-10 h-20 bg-pink items-center">
          <div className="flex gap-1 items-center left-0">
            <Image
                src="/assets/icon.svg"
                alt="EmpowHer"
                className="dark:invert"
                width={50}
                height={24}
                priority
            />
            <h2 className={`mr-10 text-5xl ${sigmar_one.className} text-black place-items-center font-header`}>
              EmpowHer
            </h2>
          </div>
          <div className="flex flex-row gap-8 text-black space-x-5 right-0" >
            <AboutUsButton />
            <LogInButton />
            <SignUpButton />
          </div>
        </div>
        <MainContent />
      </main>
  );
}
