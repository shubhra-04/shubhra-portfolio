import React from "react";

import ibm from "../assets/certificates/ibm.png";
import oracle from "../assets/certificates/oracle.jpg";
import simplilearn from "../assets/certificates/simplilearn.jpg";
import iitroorkee from "../assets/certificates/iitroorkee.jpeg";
import sustainability from "../assets/certificates/sustainability.jpeg";

function Certificates() {
  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      image: oracle,
    },
    {
      title: "Introduction to Applied Data Science with Python",
      image: simplilearn,
    },
    {
      title: "IBM Artificial Intelligence Fundamentals",
      image: ibm,
    },
    {
      title: "Data Science Workshop - IIT Roorkee",
      image: iitroorkee,
    },
    {
      title: "Sustainability Fair 3.0 Runner-Up",
      image: sustainability,
    },
  ];

  return (
    <section id="certificates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-black text-center text-black mb-4">
          Certifications & Achievements
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16">
          Professional certifications, workshops and academic achievements.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-3 hover:shadow-red-200 transition-all duration-500"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-bold text-center text-black">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;