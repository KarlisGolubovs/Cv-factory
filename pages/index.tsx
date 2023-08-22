import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import PersonalDetails from "../app/components/PersonalDetails";
import WorkExperience from "../app/components/WorkExperience";
import Education from "../app/components/Education";
import {
    IoMdMail,
    IoMdCall,
    IoMdMap,
    IoMdGlobe,
    IoMdBriefcase,
    IoMdSchool,
} from "react-icons/io";

const FormPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [objective, setObjective] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [location, setLocation] = useState("");
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [school, setSchool] = useState("");
    const [educationDate, setEducationDate] = useState("");
    const [degree, setDegree] = useState("");
    const [gpa, setGpa] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [cvContent, setCVContent] = useState("");
    const [jobExperiences, setJobExperiences] = useState<any[]>([]);
    const [educations, setEducations] = useState<any[]>([]);


    const handleAddJob = () => {
        const newJobExperience: any = {
            company,
            jobTitle,
            date,
            description,
        };

        setJobExperiences(prevExperiences => [...prevExperiences, newJobExperience]);

        setCompany("");
        setJobTitle("");
        setDate("");
        setDescription("");
    };

    const handleAddEducation = () => {
        const newEducation: any = {
            school,
            educationDate,
            degree,
            gpa,
            additionalInfo,
        };

        setEducations(prevEducations => [...prevEducations, newEducation]);

        setSchool("");
        setEducationDate("");
        setDegree("");
        setGpa("");
        setAdditionalInfo("");
    };

    const handleDownloadResume = async () => {
        console.log('cvContent:', cvContent);

        try {
            const response = await fetch('/api/download-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pdfContent: cvContent }),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'downloaded_resume.pdf';
                a.click();
            } else {
                console.error('Error generating PDF');
            }
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };
    return (

        <div className="flex flex-col md:flex-row md:space-x-4 p-8 items-start">
            <div className="w-full md:w-1/3">
                <PersonalDetails
                    name={name} email={email} objective={objective} phone={phone} website={website} location={location}
                    setName={setName} setEmail={setEmail} setObjective={setObjective} setPhone={setPhone} setWebsite={setWebsite} setLocation={setLocation} />
                <WorkExperience
                    company={company} jobTitle={jobTitle} date={date} description={description}
                    setCompany={setCompany} setJobTitle={setJobTitle} setDate={setDate} setDescription={setDescription} handleAddJob={handleAddJob} />
                <Education
                    school={school} educationDate={educationDate} degree={degree} gpa={gpa} additionalInfo={additionalInfo}
                    setSchool={setSchool} setEducationDate={setEducationDate} setDegree={setDegree} setGpa={setGpa} setAdditionalInfo={setAdditionalInfo} handleAddEducation={handleAddEducation} />
            </div>
            <div className="a4-container md:w-2/3">
                <div
                    id="pdf-content" className="p-12 bg-gray-50 rounded-lg">
                    <p id="name" className="name text-4xl text-black font-extrabold mb-4">{name}</p>
                    <p id="title" className="title text-black text-xl mb-4">{objective}</p>

                    <div id="contact-info" className="contact-info grid grid-cols-2 gap-4 mb-4">
                        <div id="email" className="email flex items-center">
                            {email && <IoMdMail size={20} className="mr-2" />}
                            {email}
                        </div>
                        <div id="phone" className="phone flex items-center">
                            {phone && <IoMdCall size={20} className="mr-2" />}
                            {phone}
                        </div>
                        <div id="location" className="location flex items-center">
                            {location && <IoMdMap size={20} className="mr-2" />}
                            {location}
                        </div>
                        <div id="website" className="website flex items-center">
                            {website && <IoMdGlobe size={20} className="mr-2" />}
                            {website}
                        </div>
                    </div>

                    {jobExperiences.length > 0 && (
                        <div>
                            <div id="work-experience" className="work-experience flex gap-x-2 mt-4 items-center mb-4">
                                <IoMdBriefcase size={24} className="mr-2" />
                                <p className="font-semibold text-2xl text-black">WORK EXPERIENCE</p>
                            </div>

                            {jobExperiences.map((experience, index) => (
                                <div id={`job-${index}`} key={index} className="job text-black pl-8 mb-4">
                                    <p id="company" className="company font-semibold text-xl mb-2">
                                        {experience.company}
                                    </p>
                                    <div className="font-medium">DATE: {experience.date}</div>
                                    <div id="job-title" className="job-title flex justify-between mb-2">
                                        <div className="font-medium">Title: {experience.jobTitle}</div>
                                    </div>
                                    <p className="font-semibold mb-2">Responsibilities:</p>
                                    <ul className="list-disc list-inside">
                                        {experience.description
                                            .split('\n')
                                            .map((item, i) => item.trim())
                                            .filter((item) => item !== '')
                                            .map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {educations.length > 0 && (
                        <div>
                            <div id="education" className="education flex gap-x-2 mt-4 items-center mb-4">
                                <IoMdSchool size={24} className="mr-2" />
                                <p className="font-semibold text-2xl text-black">EDUCATION</p>
                            </div>

                            {educations.map((education, index) => (
                                <div id={`education-${index}`} key={index} className="text-black pl-8 mb-4">
                                    <p className="font-semibold text-xl mb-2">{education.school}</p>
                                    <p className="font-medium">Date: {education.educationDate}</p>
                                    <div className="flex justify-between mb-2">
                                        <p className="font-medium">{education.degree}</p>
                                    </div>
                                    <p>GPA: {education.gpa}</p>
                                    {education.additionalInfo && (
                                        <p className="text-black mt-2">
                                            {education.additionalInfo}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                <button
                    type="button"
                    className="absolute top-0 right-0 text-black text-sm focus:outline-none"
                    onClick={handleDownloadResume}
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default FormPage;
