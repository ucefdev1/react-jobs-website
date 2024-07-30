import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddJob = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');


  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      id: new Date().getTime().toString(), // Generating a unique ID for demonstration
      title,
      type,
      location,
      salary,
      description,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    addJobSubmit(jobData);
    return navigate('/jobs');
  };

  return (
    <div className="bg-gradient-to-r from-gray-400 to-gray-600 min-h-screen py-10 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Add a New Job</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter job title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="type">
              Job Type
            </label>
            <select
              id="type"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Select job type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter job location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="salary">
              Salary (MAD)
            </label>
            <select
              id="salary"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            >
              <option value="">Select salary range</option>
              <option value="10K MAD - 15K MAD">10K MAD - 15K MAD</option>
              <option value="15K MAD - 20K MAD">15K MAD - 20K MAD</option>
              <option value="20K MAD - 25K MAD">20K MAD - 25K MAD</option>
              <option value="25K MAD - 30K MAD">25K MAD - 30K MAD</option>
              <option value="30K MAD - 35K MAD">30K MAD - 35K MAD</option>
              <option value="35K MAD - 40K MAD">35K MAD - 40K MAD</option>
              <option value="40K MAD - 45K MAD">40K MAD - 45K MAD</option>
              <option value="45K MAD - 50K MAD">45K MAD - 50K MAD</option>
              <option value="50K MAD - 60K MAD">50K MAD - 60K MAD</option>
              <option value="60K MAD - 70K MAD">60K MAD - 70K MAD</option>
              <option value="70K MAD - 80K MAD">70K MAD - 80K MAD</option>
              <option value="80K MAD - 90K MAD">80K MAD - 90K MAD</option>
              <option value="90K MAD - 100K MAD">90K MAD - 100K MAD</option>
              <option value="100K MAD+">100K MAD+</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
              Job Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="5"
              placeholder="Describe the job"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="companyDescription">
              Company Description
            </label>
            <textarea
              id="companyDescription"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="5"
              placeholder="Describe the company"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactEmail">
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter contact email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactPhone">
              Contact Phone
            </label>
            <input
              type="tel"
              id="contactPhone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter contact phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
