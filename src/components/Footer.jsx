import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-16 py-10 md:py-16 border-t backdrop-blur-xs"
      style={{
        borderColor: "var(--border-color)",
        // background: "linear-gradient(to top, color-mix(in srgb, var(--bg-secondary) 0.5%, transparent), transparent)"
      }}
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, var(--accent-glow), transparent 80%)"
        }}
      />
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          {/* Identity */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              Razeena CP
            </h3>

            <p
              className="text-sm md:text-base max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Artificial Intelligence Engineer specializing in
              autonomous systems, data intelligence, and
              production-grade engineering.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <div
              className="text-sm font-mono"
              style={{ color: "var(--accent)" }}
            >
              NAVIGATION
            </div>

            <div className="flex flex-col space-y-2 text-sm md:text-base">
              <a href="#home" className="hover:opacity-70 transition">
                Home
              </a>
              <a href="#works" className="hover:opacity-70 transition">
                Works
              </a>
              <a href="#skills" className="hover:opacity-70 transition">
                Skills
              </a>
              <a href="#education" className="hover:opacity-70 transition">
                Education
              </a>
              <a href="#contact" className="hover:opacity-70 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <div
              className="text-sm font-mono"
              style={{ color: "var(--accent)" }}
            >
              CONNECT
            </div>

            <div className="flex flex-col space-y-2 text-sm md:text-base">
              <a
                href="https://github.com/razirazz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
                style={{ color: "var(--accent)" }}
              >
                GitHub →
              </a>

              <a
                href="https://www.linkedin.com/in/razirazz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
                style={{ color: "var(--accent)" }}
              >
                LinkedIn →
              </a>

              <a
                href="https://www.instagram.com/ra_zi_ra_zz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
                style={{ color: "var(--accent)" }}
              >
                Instagram →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t flex flex-col md:flex-row md:justify-between gap-6 text-sm"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-secondary)"
          }}
        >
          <div>
            © {new Date().getFullYear()} Razeena CP. All rights reserved.
          </div>

          <div>
            Engineered with precision. Designed for impact.
          </div>
        </div>

      </div>
    </footer>
  );
}