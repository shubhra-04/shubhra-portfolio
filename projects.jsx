import React from "react";

function Projects() {
  const projects = [
    {
      title: "Student Attendance Management System",
      description:
        "A DBMS-based attendance tracking platform for managing and monitoring student attendance records efficiently.",
      tech: "Java • MySQL • DBMS",
    },
    {
      title: "Mental Health Analysis",
      description:
        "A data analysis project that studies mental health trends using datasets and visualizations.",
      tech: "Python • Pandas • Matplotlib",
    },
    {
      title: "DBMS Project",
      description:
        "A database management project involving relational database design, SQL queries and normalization.",
      tech: "SQL • MySQL • DBMS",
    },
    {
      title: "Diabetes Prediction System",
      description:
        "A machine learning model that predicts diabetes risk using healthcare datasets.",
      tech: "Python • Machine Learning • Scikit-Learn",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-black text-center text-black mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16">
          Real-world projects built during academics, internships and self-learning.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-3 hover:shadow-red-200 transition-all duration-500"
            >
              <h3 className="text-2xl font-black text-black mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              <span className="inline-block bg-[#ff2a2a] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {project.tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;