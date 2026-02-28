import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Works() {
  const revealRef = useScrollReveal();
  const containerRef = useRef(null);

  const [expandedCard, setExpandedCard] = useState(null);
  const [overflowMap, setOverflowMap] = useState({});

  const projects = [
    {
      id: "01",
      title: "Campaign Performance Intelligence System",
      tagline: "ROI Modeling → Classification → Decision Support",
      description: "End-to-end marketing campaign intelligence system analyzing ROI-driven performance signals. Performed structured data preprocessing, feature engineering, categorical extraction, and leakage elimination before training a Random Forest classifier to predict campaign profitability. Achieved ~82% accuracy with precision-recall optimization and hyperparameter tuning. Complemented modeling with interactive Tableau dashboards enabling KPI tracking, drill-through campaign analysis, and cost-efficiency evaluation to support strategic marketing decisions.",
      tech: "Python • Random Forest • Excel (Feature Engineering) • Tableau • Scikit-Learn",
      metrics: [
        { label: "Accuracy", value: "0.80" },
        { label: "Precision", value: "0.78" },
        { label: "Recall", value: "0.84" },
        { label: "F1 Score", value: "0.81" },
      ],
      link: "https://github.com/razirazz/Data-Analysis/blob/main/campaign_knovista.ipynb",
      linkLabel: "View GitHub",
    },
    {
      id: "02",
      title: "Perception-Driven Autonomous Braking System",
      tagline: "Visual Detection → Context Modeling → Braking Intelligence",
      description:
        "Engineered a perception-to-decision ADAS pipeline integrating YOLOv8 object detection with ResNet18 classification to predict braking actions from visual scene context. Implemented dataset preprocessing using BDD100K, distance-aware feature modeling, and controlled evaluation to eliminate bias and leakage. Achieved 0.95 accuracy with optimized F1 performance, validating real-time braking decision capability for autonomous driving scenarios.",
      tech: "YOLOv8 • ResNet18 • BDD100K • PyTorch • Computer Vision",
      metrics: [
        { label: "Accuracy", value: "0.95" },
        { label: "Brake F1", value: "0.94" },
        { label: "No Brake F1", value: "0.92" },
      ],
      link: "https://www.sciencedirect.com/science/article/pii/S1877050925013924",
      linkLabel: "View Paper",
    },
    {
      id: "03",
      title: "Automotive CAN Protocol Signal Decoder",
      tagline: "CAN 2.0A Frame Parsing → Bit-Level Signal Extraction",
      description:
        "Developed a CAN Bus signal decoding system to interpret 8-byte hexadecimal data frames from automotive ECUs. Implemented bit-level signal extraction using byte order handling (Intel/Motorola), start-bit mapping, scaling, and offset transformation to convert raw payload data into physical signal values. Structured parsing logic for CAN 2.0A frames and validated data integrity using CRC-aware frame breakdown.",
      tech: "Python • Bitwise Parsing • CAN 2.0A • Automotive Communication Protocol",
      metrics: [
        { label: "Protocol Standard", value: "CAN 2.0A (11-bit ID)" },
        { label: "Payload Size", value: "8 Bytes" },
        { label: "Signal Extraction", value: "Bit-Level Decoding" },
        { label: "Scaling Model", value: "Offset Transform" },
      ],
      link: "https://github.com/razirazz/CAN-Bus-Decode",
      linkLabel: "View GitHub",
    },
    {
      id: "04",
      title: "SYPHYR – Full Stack Production System",
      tagline: "Design → Backend → Deployment",
      description:
        "Architected and deployed a full-stack web application for SYPHYR, integrating UI design, backend logic, and production hosting. Built modular system components to support dynamic content rendering, user interaction workflows, and scalable deployment in a live production environment.",
      tech: "Full Stack Python • Deployment • UI Architecture",
      metrics: [
        { label: "Status", value: "Live Production" },
        { label: "Domain", value: "syphyr.co" },
      ],
      link: "https://syphyr.co",
      linkLabel: "Visit Website",
    },
  ];

  const totalCards = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Auto collapse on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", () => {
      setExpandedCard(null);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="works"
      ref={revealRef}
      className="min-h-screen px-6 md:px-16 pt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight"> Selected Research & Production Systems </h2>
          <p className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }} >
            A curated selection of engineered systems spanning data intelligence,
            autonomous decision-making, automotive protocol decoding,
            and full-stack production deployment.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mt-10"
          style={{ height: `${totalCards * 100}vh` }}
        >
          {projects.map((project, index) => {

            const contentRef = useRef(null);

            const cardStart = index / totalCards;
            const cardEnd = (index + 1) / totalCards;

            const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

            const scale = useTransform(
              scrollYProgress,
              [cardStart, cardEnd],
              [1, 0.98]
            );

            const isExpanded = expandedCard === index;

            // Detect overflow
            useEffect(() => {
              const el = contentRef.current;
              if (!el) return;

              const checkOverflow = () => {
                const card = el.closest(".card-container");
                if (!card) return;

                const cardHeight = card.clientHeight;
                const limitHeight = cardHeight * 0.8;

                const hasOverflow =
                  el.scrollHeight > limitHeight;

                setOverflowMap(prev => ({
                  ...prev,
                  [index]: hasOverflow
                }));
              };

              checkOverflow();
              window.addEventListener("resize", checkOverflow);
              return () =>
                window.removeEventListener("resize", checkOverflow);
            }, []);
            const hasOverflow = overflowMap[index];

            return (
              <motion.div
                key={project.id}
                style={{
                  scale: isExpanded ? 1 : scale,
                  zIndex: isExpanded ? 999 : index + 1,
                }}
                className="sticky top-8 flex items-center justify-center h-screen"
              >
                <div
                  onClick={() =>
                    hasOverflow &&
                    setExpandedCard(isExpanded ? null : index)
                  }
                  className={`card-container md:max-w-6xl mx-auto border rounded-3xl p-6 md:p-10 backdrop-blur-3xl min-h-[85%] h-[85%] transition-all duration-300 ${isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                  style={{
                    borderColor: "var(--border-color)",
                    background:
                      "linear-gradient(to top right, var(--accent-soft), var(--bg-secondary))",
                    boxShadow: "0 0 25px var(--accent-glow)",
                  }}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">

                    {/* LEFT */}
                    <div ref={contentRef} className="max-w-2xl space-y-4 md:space-y-6">
                      <div
                        className="text-xs md:text-sm font-mono tracking-wider"
                        style={{ color: "var(--accent)" }}
                      >
                        PROJECT {project.id}
                      </div>

                      <h3 className="text-xl md:text-3xl font-bold">
                        {project.title}
                      </h3>

                      <div
                        className="text-xs md:text-sm uppercase tracking-wide"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {project.tagline}
                      </div>

                      <p
                        className="text-sm md:text-base leading-relaxed overflow-hidden"
                        style={{
                          maxHeight:
                            isMobile && hasOverflow && !isExpanded
                              ? "80%"
                              : "none",
                          color: "var(--text-secondary)"
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Show ONLY if mobile + overflow */}
                      {!isExpanded && hasOverflow && (
                        <div className="text-xs opacity-70 md:hidden">
                          Tap to read more →
                        </div>
                      )}

                      {(!isMobile || isExpanded || !hasOverflow) && (
                        <>
                          <div
                            className="text-sm pt-4 border-t"
                            style={{
                              borderColor: "var(--border-color)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {project.tech}
                          </div>

                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm mt-2 inline-block"
                              style={{ color: "var(--accent)" }}
                            >
                              {project.linkLabel}
                            </a>
                          )}
                        </>
                      )}
                    </div>

                    {/* METRICS */}
                    <div
                      className={`min-w-65 flex flex-col justify-center space-y-4 ${isMobile && hasOverflow && !isExpanded ? "hidden md:flex" : ""
                        }`}
                    >
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex justify-between text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span>{metric.label}</span>
                          <span style={{ color: "var(--accent)" }}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}