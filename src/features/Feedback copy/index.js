import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { getLeadsContent } from "./leadSlice";
import axios from "axios";

const VideoGrid = ({ data }) => {
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
      <h3 className="text-lg font-semibold text-red-600">Homework Section</h3>
      <p>Complete the assigned exercises before the next session.</p>
    </div>
  );
}

function OffCampus({ userId, month }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const month = (localStorage.getItem("month") || "JANUARY").toUpperCase(); // Ensure uppercase
    const topic = "OFF_CAAMPUS_COURSE"; // Set topic as per new API requirement

    if (!userId) {
      setError("User not found! Please log in.");
      setLoading(false);
      return;
    }

    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://backenddesiqna-1.onrender.com//course/courses?userId=${userId}&topic=${topic}&month=${month}`
        );
        setVideos(response.data.courses);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to load videos.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <HomeworkSection />
      <TitleCard title="Video Resources">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : videos.length > 0 ? (
          <VideoGrid data={videos} />
        ) : (
          <p className="text-center text-gray-500">No videos available.</p>
        )}
      </TitleCard>
    </div>
  );
}

export default OffCampus;
