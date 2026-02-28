import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Education() {
  const revealRef = useScrollReveal();

  const educationData = [
    {
      title: "Data Analyst Intern",
      organization: "Knovista",
      duration: "2025 - 2026",
      description:
        "Worked on campaign performance analytics, ROI modeling, and decision-support dashboards for marketing intelligence.",
    },
    {
      title: "Conference Paper Publication",
      organization: "International Conference on Machine Learning & Data Engineering (ICMLDE)",
      duration: "2024",
      description:
        "Published research on AI-based Automated Braking Decision Systems for Advanced Driver Assistance Systems (ADAS).",
    },
    {
      title: "Data Science Training",
      organization: "Acmegrade",
      duration: "2023 - 2024",
      description:
        "Hands-on training in machine learning, model evaluation, data preprocessing, and predictive analytics.",
    },
    {
      title: "Xplora Women Hackathon - GIS Enabled Tourism Web App",
      organization: "ICFOSS",
      duration: "2023",
      description:
        "Participated in building a GIS-enabled tourism web application focused on spatial data integration and user accessibility.",
    },
    {
      title: "M.Sc Computer Science with Artificial Intelligence",
      organization: "Department of Computer Science, University of Kerala",
      duration: "2022 - 2024",
      description:
        "Advanced academic specialization in Artificial Intelligence, Machine Learning, and system-level computational modeling.",
    },
    {
      title: "Full Stack Python Intern",
      organization: "Rizz Technologies",
      duration: "2021 -2022",
      description:
        "Worked on backend logic, API integration, and full-stack web application development.",
    },
    {
      title: "B.Sc Computer Science",
      organization: "LBS College, University of Calicut",
      duration: "2019 - 2022",
      description:
        "Core foundation in algorithms, databases (SQL), operating systems, and computer networks.",
    },
    {
      title: "Higher Secondary Education - Computer Science",
      organization: "MVHSS (NCERT Curriculum)",
      duration: "2017 - 2019",
      description:
        "Early foundation in programming, computational thinking, and core computer science principles.",
    },
  ];

  return (
    <section
      id="education"
      ref={revealRef}
      className="min-h-screen px-6 md:px-16 pt-24"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            Education & Professional Development Timeline
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Academic foundation in Artificial Intelligence, Computer Science,
            and advanced system design.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className="absolute -left-1 md:left-1/2 top-0 md:-translate-x-1/2 w-0.5 h-full"
            style={{ background: "var(--border-color)" }}
          />

          <div className="space-y-12">

            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`
                    relative flex flex-row items-center
                    ${isLeft ? "md:justify-start" : "md:justify-end"}
                  `}
                >

                  {/* Timeline Dot */}
                  <div
                    className="absolute -left-1 md:left-1/2 w-4 h-4 rounded-full z-10 -translate-x-1/2 "
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 10px var(--accent-glow)",
                    }}
                  />

                  {/* Card */}
                  <div
                    className={`
                      w-full md:w-[45%] border rounded-3xl p-6 md:p-10 backdrop-blur-xl
                      ml-8 md:ml-0
                      ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                    `}
                    style={{
                      borderColor: "var(--border-color)",
                      background:
                        "linear-gradient(to top right, var(--accent-soft), var(--bg-secondary))",
                      boxShadow: "0 0 25px var(--accent-glow)",
                    }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold">
                      {item.title}
                    </h3>

                    <div
                      className="text-sm md:text-base mt-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.organization}
                    </div>

                    <div
                      className="text-sm font-mono mt-2"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.duration}
                    </div>

                    <p
                      className="mt-4 text-sm md:text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}