import { useState } from "react";

const SkillsEducation = () => {
  const [active, setActive] = useState("skills");

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center gap-4 mb-10">

          <button
            onClick={() => setActive("skills")}
            className={`px-6 py-2 rounded-lg transition ${
              active === "skills"
                ? "bg-[#8B5E3C] text-white"
                : "bg-white border"
            }`}
          >
            Skills
          </button>

          <button
            onClick={() => setActive("education")}
            className={`px-6 py-2 rounded-lg transition ${
              active === "education"
                ? "bg-[#8B5E3C] text-white"
                : "bg-white border"
            }`}
          >
            Education
          </button>

        </div>

        {/* ================= SKILLS (BOXES) ================= */}
        {active === "skills" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "Figma", "UI Design"].map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}

          </div>
        )}

        {/* ================= EDUCATION (INLINE TIMELINE) ================= */}
        {active === "education" && (
         <div className="border-l border-[#C8A27C]/50 pl-6 space-y-8">

  {/* ITEM 1 */}
  <div>
    <h4 className="font-semibold text-lg text-[#2D2D2D]">
      Matriculation
    </h4>
    <p className="text-sm text-[#6F6F6F]">
      Science Group
    </p>
    <p className="text-sm text-[#6F6F6F] mt-1 leading-relaxed">
      Completed basic science education with focus on core subjects.
    </p>
    <span className="text-xs text-[#8B5E3C] mt-1 block">
      2018 - 2020
    </span>
  </div>

  {/* ITEM 2 */}
  <div>
    <h4 className="font-semibold text-lg text-[#2D2D2D]">
      Intermediate
    </h4>
    <p className="text-sm text-[#6F6F6F]">
      ICS (Computer Science)
    </p>
    <p className="text-sm text-[#6F6F6F] mt-1 leading-relaxed">
      Studied programming basics, logic building and computer fundamentals.
    </p>
    <span className="text-xs text-[#8B5E3C] mt-1 block">
      2020 - 2022
    </span>
  </div>

  {/* ITEM 3 */}
  <div>
    <h4 className="font-semibold text-lg text-[#2D2D2D]">
      Web Development
    </h4>
    <p className="text-sm text-[#6F6F6F]">
      Self Learning
    </p>
    <p className="text-sm text-[#6F6F6F] mt-1 leading-relaxed">
      Learned React, Tailwind CSS, and modern frontend development.
    </p>
    <span className="text-xs text-[#8B5E3C] mt-1 block">
      2023 - Present
    </span>
  </div>

</div>
        )}

      </div>
    </section>
  );
};

export default SkillsEducation;