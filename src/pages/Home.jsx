import { motion } from "framer-motion";
import ResearchCard from "../components/ResearchCard";

export default function Home() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        px-6 md:px-16
        pt-28
        md:pt-0
      "
    >
      <div
        className="
          w-full
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-20
        "
      >

        {/* LEFT SIDE */}
        <div className="max-w-2xl text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              tracking-tight
            "
          >
            Turning <span className="text-(--accent)">Data</span> <br />
            into <span className="text-(--accent)">Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mt-6
              md:mt-8
              text-base
              md:text-lg
              text-(--secondary)
              leading-relaxed
              max-w-xl
              mx-auto md:mx-0
            "
          >
            Data Analyst & AI Researcher building perception-driven models,
            decision systems and autonomous intelligence solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 md:mt-12"
          >
            <button
              onClick={() =>
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                px-6 md:px-8
                py-3 md:py-4
                border border-(--accent-glow) bg-(--accent-soft)
                rounded-full
                hover:bg-(--accent-soft)
                transition
              "
            >
              Explore Work
            </button>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-auto flex justify-center">
          <ResearchCard />
        </div>

      </div>
    </section>
  );
}