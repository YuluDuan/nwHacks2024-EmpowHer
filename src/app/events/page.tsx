import React from "react";
import Image from "next/image";
import EventHeader from "@/components/eventPage/EventHeader"

const EventsPage = async () => {
    return (

        <div className="bg-green-dark flex flex-row gap-8">
            <div className="flex flex-col m-5 gap-5">
                <Image
                    src="/assets/Suggestions.svg"
                    alt="feed"
                    className="m-3 dark:invert"
                    width={210}
                    height={180}
                    priority
                />
                <Image
                    src="/assets/Areas.svg"
                    alt="Areas"
                    className="mx-3 -mt-2 dark:invert"
                    width={210}
                    height={515}
                    priority
                />
            </div>
            <div className="mt-5 -ml-2 mb-5 gap-3 flex flex-col">
                <Image
                    src="/assets/Group_68.svg"
                    alt="feed"
                    className="mt-3 dark:invert"
                    width={785}
                    height={90}
                    priority
                />
                <Image
                    src="/assets/Post1.svg"
                    alt="feed"
                    className="dark:invert"
                    width={785}
                    height={180}
                    priority
                />
                <Image
                    src="/assets/Post2.svg"
                    alt="feed"
                    className="dark:invert"
                    width={785}
                    height={180}
                    priority
                />
                <Image
                    src="/assets/Post3.svg"
                    alt="feed"
                    className="dark:invert"
                    width={785}
                    height={180}
                    priority
                />
                <Image
                    src="/assets/Post4.svg"
                    alt="feed"
                    className="dark:invert"
                    width={785}
                    height={180}
                    priority
                />
                <Image
                    src="/assets/Post5.svg"
                    alt="feed"
                    className="p-5 mb-5 dark:invert"
                    width={785}
                    height={180}
                    priority
                />
            </div>
            <div className="mt-5 -ml-2 mr-5 mb-5 gap-3 flex flex-col">
                <Image
                    src="/assets/MeetUp.svg"
                    alt="feed"
                    className="mt-3 dark:invert"
                    width={335}
                    height={737}
                    priority
                />
            </div>
        </div>
    );
};

export default EventsPage;
