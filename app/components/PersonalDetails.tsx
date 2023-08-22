import React from "react";

interface PDProps {
  name: string;
  email: string;
  objective: string;
  phone: string;
  website: string;
  location: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setObjective: (objective: string) => void;
  setPhone: (phone: string) => void;
  setWebsite: (website: string) => void;
  setLocation: (location: string) => void;
}

const PersonalDetails: React.FC<PDProps> = ({
  name,
  email,
  objective,
  phone,
  website,
  location,
  setName,
  setEmail,
  setObjective,
  setPhone,
  setWebsite,
  setLocation
}) => {
  return (
    <form className="bg-white p-6 rounded shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-4 mt-0">Personal Details</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="objective">
            Objective
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            id="objective"
            type="text"
            placeholder="Software Enginner"
            value={objective}
            onChange={(event) => setObjective(event.target.value)}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            id="phone"
            type="text"
            placeholder="Your phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
            Website
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            id="website"
            type="text"
            placeholder="Your personal website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
            id="location"
            type="text"
            placeholder="Your location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </form>

  );
};

export default PersonalDetails;