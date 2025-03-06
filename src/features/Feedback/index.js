import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { getLeadsContent } from "./leadSlice";



const VideoGrid = () => {
    const videos = [
        {
            title: "Full Stack Dev Course",
            thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQFhKgg0dgkGPQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1724497096276?e=2147483647&v=beta&t=qYJ-KBsFMn3Xi_2wZ81Jd6nZTctX0mkp-0U8MUg2zeA",
            link: "https://docs.google.com/document/d/1h62DrBM6Pilx-FuDyh3JmPOEBQQ3SPGYF4bbMF9xzHM/edit?tab=t.0",
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
           
        </div>
    );
}
function FeedbackForm() {
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

export default FeedbackForm;
