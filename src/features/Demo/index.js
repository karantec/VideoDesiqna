import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { getLeadsContent } from "./leadSlice";



const VideoGrid = () => {
    const videos = [
        {
            title: "Do our Resume Course for Better Results",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPc-Pgzw_zhO4mE6ihQ-5ZpJ5s3giDlwfs1pGUTKUcQlPOyeneWaAk_a_hOX9BfqlEVP4&usqp=CAU",
            link: "https://docs.google.com/document/d/1mx1bsI3uXiE0oBrWziKYjJ6BiF-MYqvk5OzeAQbG-uc/edit?tab=t.0",
        },
        {
            title: "Change your LinkedIn according to Our Course",
            thumbnail: "https://miro.medium.com/v2/resize:fit:1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg",
            link: "https://docs.google.com/document/d/18xnQg5l3lRdXFKxzCyaebviRsXe0oKmQVu-UJ2WFyDc/edit?tab=t.0",
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
                Modify Your Resume & LinkedIn According to Our Course to Stand Out!!
            </p>
            <p className="mt-2 text-gray-700">
                Why Modifying Resume and LinkedIn Important?
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Good Resume and LinkedIn Profile is the Key to Apply Off-Campus.</li>
                <li>Highlight your skills and achievements effectively through our course guidelines.</li>
                <li>Stand out among the competition with a professional profile and resume.</li>
            </ul>
        </div>
    );
}
function RequestDemo() {
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

export default RequestDemo;