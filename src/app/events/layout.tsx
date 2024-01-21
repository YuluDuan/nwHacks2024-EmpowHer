import UserHeader from "@/components/UserHeader";
import { cantarell } from "../font";
import EventHeader from "@/components/eventPage/EventHeader";
import React from "react";

export default function EventLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <body className="flex h-screen bg-cover p-0 m-0 bg-green-dark">
            <section
                className={`flex flex-col ${cantarell.className} w-full`}
            >
                <EventHeader label={"EMPOWHER"}/>
                {children}
            </section>
        </body>
    );
}
