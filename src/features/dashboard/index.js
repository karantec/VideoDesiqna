import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import { showNotification } from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'
import { useState } from 'react'

const statsData = [
    { title: "New Users", value: "34.7k", icon: <UserGroupIcon className='w-8 h-8' />, description: "↗︎ 2300 (22%)" },
    { title: "Total Sales", value: "$34,545", icon: <CreditCardIcon className='w-8 h-8' />, description: "Current month" },
    { title: "Pending Leads", value: "450", icon: <CircleStackIcon className='w-8 h-8' />, description: "50 in hot leads" },
    { title: "Active Users", value: "5.6k", icon: <UsersIcon className='w-8 h-8' />, description: "↙ 300 (18%)" },
]

const trainingData = {
    title: "DesiQNA Personalized Training & 1-1 Mentoring Program",
    highlights: [
        "Daily Live DSA Class (Online Test + Interview Prep + Competitive Programming) + Doubt Session from Mon-Sun",
        "558 Students from Tier-3/Tier-4 colleges have Cracked 20+ LPA offers in the last 15 months",
        "Separate Live training batch for Beginners vs Intermediates",
        "850 hours structured course on DSA (OA + Interview-Prep + CP) with 24*7 doubt Support",
        "1-1 Personalized Mentoring + Daily Live Training By Kumar K Sir (SDE @ Amazon)",
        "Separate Guidance and Personalized RoadMap for college students, freshers, working professionals, and Non-IT graduates.",
    ],
    instructor: "Kumar K Sir (SDE @ Amazon)",
    result: "High-paying offers for students through hours of personalized mentoring."
}

function Dashboard() {

    const dispatch = useDispatch()

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({ message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status: 1 }))
    }

    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

            {/** ---------------------- Different stats content 1 ------------------------- */}
            

            {/** ---------------------- Training Program Section ------------------------- */}
            <div className="bg-white shadow rounded-lg p-6 mt-8">
                <h2 className="text-xl font-bold mb-4">{trainingData.title}</h2>
                <ul className="list-disc ml-5 text-gray-700">
                    {trainingData.highlights.map((highlight, index) => (
                        <li key={index} className="mb-2">{highlight}</li>
                    ))}
                </ul>
                <p className="mt-4 text-gray-600">
                    <strong>Instructor:</strong> {trainingData.instructor}
                </p>
                <p className="mt-2 text-gray-600">
                    <strong>Results:</strong> {trainingData.result}
                </p>
            </div>

            {/** ---------------------- Different charts ------------------------- */}
          

            {/** ---------------------- Different stats content 2 ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div>

            {/** ---------------------- User source channels table  ------------------------- */}
           
        </>
    )
}

export default Dashboard
