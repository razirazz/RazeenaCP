import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="contact"
      ref={revealRef}
      className="min-h-screen px-6 md:px-16 pt-24"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            Let&apos;s Build <span className="text-(--accent)">Intelligence</span> Together
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to AI research collaborations, autonomous systems projects,
            data intelligence consulting, and production-scale engineering.
          </p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border rounded-3xl p-8 md:p-12 backdrop-blur-xl"
          style={{
            borderColor: "var(--border-color)",
            background:
              "linear-gradient(to top right, var(--accent-soft), var(--bg-secondary))",
            boxShadow: "0 0 25px var(--accent-glow)",
          }}
        >

          {/* TOP GRID (Email + Phone + Social) */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-8">
              <div>
                <div className="text-sm font-mono" style={{ color: "var(--accent)" }}>
                  EMAIL
                </div>
                <div className="text-base md:text-lg">
                  <a href="mailto:cprazeena@gmail.com" className="hover:opacity-80 transition">
                    cprazeena@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm font-mono" style={{ color: "var(--accent)" }}>
                  PHONE
                </div>
                <div className="text-base md:text-lg">
                  <a href="tel:+919895137384" className="hover:opacity-80 transition">
                    +91 98951 37384
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-3 flex flex-col justify-start">
              <div className="text-sm font-mono" style={{ color: "var(--accent)" }}>
                SOCIAL
              </div>

              <a
                href="https://github.com/razirazz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base md:text-lg hover:opacity-80 transition"
                style={{ color: "var(--accent)" }}
              >
                GitHub →
              </a>

              <a
                href="https://www.linkedin.com/in/razirazz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base md:text-lg hover:opacity-80 transition"
                style={{ color: "var(--accent)" }}
              >
                LinkedIn →
              </a>
            </div>

          </div>

          {/* FULL WIDTH MAP BELOW GRID */}
          <>
            <div className="mt-12 mb-3 text-sm font-mono" style={{ color: "var(--accent)" }}>
              LOCATION
            </div>
            <div className="w-full h-87.5 md:h-105 overflow-hidden rounded-2xl">

              <iframe
                title="Location"
                src="https://www.google.com/maps?q=11.072226,75.853639&z=15&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </>

        </motion.div>

      </div>
    </section>
  );
}