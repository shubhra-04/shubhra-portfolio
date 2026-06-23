import React from "react";

function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-black mb-12">
          Experience
        </h2>

        <div className="border border-gray-700 rounded-3xl p-8 mb-8 hover:border-red-500 transition-all duration-300">
          <h3 className="text-2xl font-bold">
            Social Impact Intern
          </h3>

          <p className="text-red-500 font-semibold mt-2">
            Glad Bharat Foundation
            <p className="text-gray-400 text-sm">
                Social Internship • First Year
                </p>
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>Conducted awareness campaigns in schools and communities.</li>
            <li>Participated in menstrual hygiene awareness initiatives.</li>
            <li>Assisted in organizing donation and collection drives.</li>
            <li>Worked with students and women through educational outreach programs.</li>
          </ul>
        </div>

        <div className="border border-gray-700 rounded-3xl p-8 hover:border-red-500 transition-all duration-300">
          <h3 className="text-2xl font-bold">
            Digital Marketing Intern
          </h3>

          <p className="text-red-500 font-semibold mt-2">
            Technosters Technologies
            <p className="text-gray-400 text-sm">
                Digital Marketing Internship • Second Year
                </p>
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>Performed SEO and keyword research.</li>
            <li>Created and managed social media content.</li>
            <li>Supported digital marketing campaigns and branding activities.</li>
            <li>Contributed to audience engagement and online visibility strategies.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;