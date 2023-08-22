import React from "react";
import { FaUniversity } from "react-icons/fa";

interface EduProps {
  school: string;
  educationDate: string;
  degree: string;
  gpa: string;
  additionalInfo: string;
  setSchool: (school: string) => void;
  setEducationDate: (educationDate: string) => void;
  setDegree: (degree: string) => void;
  setGpa: (gpa: string) => void;
  setAdditionalInfo: (additionalInfo: string) => void;
  handleAddEducation: () => void; 
}

const EduExperience: React.FC<EduProps> = ({
  school,
  educationDate,
  degree,
  gpa,
  additionalInfo,
  setSchool,
  setEducationDate,
  setDegree,
  setGpa,
  setAdditionalInfo,
  handleAddEducation
}) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 mt-0"><FaUniversity className="inline-block mr-2" />Education</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="school">
        School
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        id="school"
        type="text"
        placeholder="Enter School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="educationDate">
        Date
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        id="educationDate"
        type="text"
        placeholder="Enter Date"
        value={educationDate}
        onChange={(e) => setEducationDate(e.target.value)}
      />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
        Degree
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        id="degree"
        type="text"
        placeholder="Enter Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gpa">
        GPA
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        id="gpa"
        type="text"
        placeholder="Enter GPA"
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
      />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
        Additional Info
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        id="additionalInfo"
        placeholder="Enter additional info"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleAddEducation}
      >
        +Add Education
      </button>
    </div>
  );
};

export default EduExperience;
