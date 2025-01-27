import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { getLeadsContent } from "./leadSlice";



const VideoGrid = () => {
    const videos = [
        {
            title: "Watch this video to understand your coding plan",
            thumbnail: "",
            link: "https://drive.google.com/file/d/18XMT-L9L3TNOJoMtJmlbVbPPH_W7DjgF/view",
        },
        {
            title: "Watch this - Coding interview Video",
            thumbnail: "data:image/png;base64,",
            link: "https://drive.google.com/file/d/1UcZasHMtK4fhErvVamKA6Cb3fuDuBMJV/view",
        },
        {
            title: "Watch this Non-Coding session",
            thumbnail: "",
            link: "https://drive.google.com/file/d/1UoD3JAYOfRCKIGQZqHrR0xv1B7gDTbHo/view?usp=sharing",
        },
        {
            title: "Watch Coding Session video",
            thumbnail: "",
            link: "https://drive.google.com/file/d/135T0fcU69kZX9q5TBNFWAd8FF8OU8nEL/view?usp=sharing",
        },
        {
            title: "Compulsory to watch before the Dev Ma’am session!",
            thumbnail: "",
            link: "https://drive.google.com/file/d/1XTbQ4zaDrP3vmQsB7GsQW0dobci2MwF5/view?usp=sharing",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
                <div
                    key={index}
                    className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                        <a
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-primary"
                        >
                            Watch Now
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

function HomeworkSection() {
    return (
        <div className="p-4 mb-6 border border-red-500 bg-red-100 rounded-lg">
            <p className="text-red-600 font-semibold">
                If you are a Non-IT background person, you can skip the homework and directly attend the 1-1 session with Kumar K.
            </p>
            <p className="mt-2 text-gray-700">
                Homework to be done before the next session of Kumar K after the introduction:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Complete the tasks mentioned in the previous session.</li>
                <li>Review the coding material shared in the introduction session.</li>
                <li>Prepare questions or doubts to discuss in the next session.</li>
            </ul>
        </div>
    );
}
function BookDemo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeadsContent());
    }, [dispatch]);

    return (
        <div className="p-6 space-y-6">
            <HomeworkSection />
            <TitleCard title="Video Resources">
                <VideoGrid />
            </TitleCard>
        </div>
    );
}

export default BookDemo;
