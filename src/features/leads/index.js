import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { getLeadsContent } from "./leadSlice";
import InputText from "../../components/Input/InputText";
import DateRangePicker from "../../components/DataPicker";

const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewCampaignModal = () => {
        dispatch(openModal({ title: "Add New Campaign", bodyType: "CAMPAIGN_ADD_NEW" }));
    };

    return (
        <div className="inline-block float-right">
            <button
                className="btn px-6 btn-sm normal-case btn-primary"
                onClick={() => openAddNewCampaignModal()}
            >
                Add New Campaign
            </button>
        </div>
    );
};

const VideoGrid = () => {
    const videos = [
        {
            title: "Motivation",
            thumbnail: "https://img.youtube.com/vi/meeNsSmxXSg/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=meeNsSmxXSg",
        },
       
       
        {
            title: "Watch this video to understand your coding plan",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEcnIAkP0A53FemEkgb1PM7VQAQga_-geqw&s",
            link: "https://drive.google.com/file/d/18XMT-L9L3TNOJoMtJmlbVbPPH_W7DjgF/view",
        },
        {
            title: "Watch this - Coding interview Video",
            thumbnail: "https://i.ytimg.com/vi/8ftRiPafAjk/maxresdefault.jpg",
            link: "https://drive.google.com/file/d/1UcZasHMtK4fhErvVamKA6Cb3fuDuBMJV/view",
        },
        {
            title: "Watch this Non-Coding session",
            thumbnail: "https://codequotient.com/blog/wp-content/uploads/2022/12/5-Common-Non-Programming-Interview-Questions-For-Fresher.jpg",
            link: "https://drive.google.com/file/d/1UoD3JAYOfRCKIGQZqHrR0xv1B7gDTbHo/view?usp=sharing",
        },
        {
            title: "Watch Coding Session video",
            thumbnail: "https://images.stockcake.com/public/8/4/c/84cd1e57-83fb-4fd0-8773-af1681b01809_large/nighttime-coding-session-stockcake.jpg",
            link: "https://drive.google.com/file/d/135T0fcU69kZX9q5TBNFWAd8FF8OU8nEL/view?usp=sharing",
        },

        {
            title: "Coding RoadMap Part 0",
            thumbnail: "https://i.ytimg.com/vi/jgQjes7MgTM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDNNrl2NWgOuDmZGBDFH15pBxuxSw",
            link: "https://drive.google.com/file/d/1SoBnpeMUBvbi6-E3pgcKtt3HG4r69ec0/view",
        },
        
        {
            title: "Coding RoadMap Part 1",
            thumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*HTbkY0abBf4kRX3cK2JUrw.png",
            link: "https://drive.google.com/file/d/16_arKkdOu7SkVeQ_6C7lux3lK-tlP3oU/view?usp=sharing",
        },
        {
            title: "Coding RoadMap Part 2",
            thumbnail: "https://www.desiqna.in/?qa=blob&qa_blobid=585268014740267471",
            link: "https://drive.google.com/file/d/1TJNiXYBMSNVsBR5foj8_hMlMQcKixlif/view",
        },
        

        
        {
            title: "Compulsory to watch before the Dev Ma’am session!",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFMVs80NojFMvnBtUywAxawgqf6dxopB0wg&s",
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
                If you are a Non-IT background person, Only watch the non-coding Session and directly attend the 1-1 session with Kumar K Sir
            </p>
            <p className="mt-2 text-gray-700">
                Homework to be done before the next session of Kumar K  Sir after the introduction Class:
            </p>
            
        </div>
    );
}
function Leads() {
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

export default Leads;
