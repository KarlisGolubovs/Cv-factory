import React from "react";
import {
    IoMdMail,
    IoMdCall,
    IoMdMap,
    IoMdGlobe,
    IoMdBriefcase,
    IoMdSchool,
} from "react-icons/io";

interface WorkProps {
    company: string;
    jobTitle: string;
    date: string;
    description: string;
    setCompany: (company: string) => void;
    setJobTitle: (jobTitle: string) => void;
    setDate: (date: string) => void;
    setDescription: (description: string) => void;
    handleAddJob: () => void;
}

const WorkExperience: React.FC<WorkProps> = ({
    company,
    jobTitle,
    date,
    description,
    setCompany,
    setJobTitle,
    setDate,
    setDescription,
    handleAddJob
}) => {
    return (
        <div className="bg-white p-6 rounded shadow-md mb-4">
            <h2 className="text-2xl font-bold mb-4 mt-0 flex items-center">
                <IoMdBriefcase size={28} className="mr-2 inline-block" />
                Work Experience
            </h2>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                Company
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="company"
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
                Job Title
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="jobTitle"
                type="text"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(event) => setJobTitle(event.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Date
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="date"
                type="text"
                placeholder="Date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="description"
                placeholder="Job Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleAddJob}
            >
                +Add Job
            </button>
        </div>
    );
};

export default WorkExperience;
