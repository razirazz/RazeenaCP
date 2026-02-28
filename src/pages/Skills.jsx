import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Skills() {
  const revealRef = useScrollReveal();

  const skillCategories = [
    {
      title: "Core Engineering Foundations",
      skills: [
        "Python (Advanced System-Level Implementation)",
        "SQL (Complex Queries, Optimization, Data Modeling)",
        "JavaScript & React",
        "Algorithmic Thinking & Structured Debugging",
        "Version Control & Production Discipline",
      ],
    },
    {
      title: "Intelligence Systems",
      skills: [
        "Machine Learning (Classification, Regression, Ensembles)",
        "Deep Learning (CNN, Transfer Learning)",
        "Model Evaluation & Bias Control",
        "Feature Engineering & Data Integrity Design",
        "End-to-End AI Pipeline Architecture",
      ],
    },
    {
      title: "Data & Decision Architecture",
      skills: [
        "Data Cleaning & Transformation Pipelines",
        "Metric Design & Performance Modeling",
        "Dashboard Systems (Tableau | PowerBI)",
        "Structured Problem Decomposition",
        "From Raw Data → Insight → Decision",
      ],
    },
    {
      title: "Product & System Execution",
      skills: [
        "Full-Stack Development",
        "Responsive UI Engineering",
        "Interactive Animations",
        "Deployment & Live Production Hosting",
        "Scalable Architecture Thinking",
      ],
    },
    {
      title: "Personal Operating System",
      skills: [
        "Analytical Depth & Systems Thinking",
        "Independent Research & Self-Learning",
        "Precision & Attention to Detail",
        "Clear Technical Communication",
        "Long-Term Vision & Strategic Focus",
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={revealRef}
      className="min-h-screen px-6 md:px-16 flex items-center pt-24"
    >
      <div className="w-full mx-auto space-y-16 flex items-center flex-col md:items-start">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            Engineering <span style={{ color: "var(--accent)" }}>
              Intelligence
            </span> Across Systems
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Core competencies spanning artificial intelligence, autonomous
            systems, automotive protocol engineering, data intelligence,
            and full-stack production deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid w-90 md:w-full md:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border rounded-3xl p-8 backdrop-blur-xl"
              style={{
                borderColor: "var(--border-color)",
                background:
                  "linear-gradient(to top right, var(--accent-soft), var(--bg-secondary))",
                boxShadow: "0 0 25px var(--accent-glow)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <ul
                className="space-y-3 text-sm md:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: "var(--accent)" }}>•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}