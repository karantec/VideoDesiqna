import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { getLeadsContent } from "./leadSlice";
import axios from "axios";


const VideoGrid = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((video, index) => (
                <div
                    key={index}
                    className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                    <img
                        src={video.courseImage}
                        alt={video.courseName}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{video.courseName}</h3>
                        <a
                            href={video.courseLink}
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
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
        const userId = "user12345"; // Set your user ID
        const month = "JANUARY"; // Set the month
      
        dispatch(getLeadsContent());
      
        const fetchVideos = async () => {
          try {
            const response = await axios.get(
              `https://backenddesiqna.onrender.com/course/courses?userId=${userId}&month=${month}`
            );
      
            console.log(response.data.courses);
            setVideos(response.data.courses); // Assuming API returns an array of videos
          } catch (error) {
            setError("Failed to load videos.");
            console.error("API error:", error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchVideos();
      }, [dispatch]);
      

    useEffect(() => {
        dispatch(getLeadsContent());
    }, [dispatch]);

    return (
        <div className="p-6 space-y-6">
            <HomeworkSection />
            <TitleCard title="Video Resources">
                <VideoGrid data={videos}/>
            </TitleCard>
        </div>
    );
}

export default BookDemo;
