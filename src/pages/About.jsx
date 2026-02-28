import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      aria-labelledby="about-heading"
      ref={ref}
      id="about"
      className="
        min-h-screen
        flex
        items-center
        px-6 md:px-16
        pt-28 md:pt-0
        pb-16 md:pb-20
      "
    >
      <div className="w-full flex flex-col justify-between items-center md:items-start">

        {/* ========================= */}
        {/* STATEMENT */}
        {/* ========================= */}
        <div className="max-w-3xl space-y-6 md:space-y-8">

          <h2 className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-extrabold
            leading-tight
            tracking-tight
          ">
            I Design{" "}
            <span style={{ color: "var(--accent)" }}>
              Intelligence.
            </span>
          </h2>

          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              leading-relaxed
              max-w-xl
            "
            style={{ color: "var(--text-secondary)" }}
          >
            From analytical dashboards to autonomous braking systems,
            I engineer data-driven architectures that convert perception into action.
          </p>

        </div>

        {/* ========================= */}
        {/* EXPERTISE BOX */}
        {/* ========================= */}
        <div
          className="
            relative
            mt-12 md:mt-16
            w-85 md:w-auto
            p-10
            rounded-3xl
            backdrop-blur-xl
            border
            flex flex-col
          "
          style={{
            borderColor: "var(--border-color)",
            background:
              "linear-gradient(to bottom right, var(--accent-soft), transparent)",
            boxShadow: "0 0 25px var(--accent-glow)"
          }}
        >

          {/* Subtle Glow */}
          <div
            className="absolute inset-0 rounded-3xl blur-2xl"
            style={{
              background: "var(--accent-soft)",
              opacity: 0.12
            }}
          />

          <div className="
            relative z-10
            grid
            gap-10
            sm:gap-12
            md:grid-cols-2
            md:gap-16
          ">

            {[
              {
                title: "Data Analysis",
                desc: "Transforming raw datasets into structured intelligence, insights, and measurable strategy."
              },
              {
                title: "Machine Learning",
                desc: "Designing predictive models that learn patterns and adapt to real-world complexity."
              },
              {
                title: "Computer Vision",
                desc: "Enabling systems to perceive environments through visual intelligence."
              },
              {
                title: "ADAS & Autonomous Systems",
                desc: "Engineering perception-driven architectures that convert detection into action."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  pl-6 sm:pl-8
                  space-y-2 sm:space-y-3
                "
              >

                {/* Vertical Accent Line */}
                <div
                  className="absolute left-0 top-1 bottom-1 w-0.5"
                  style={{
                    background: "var(--accent)",
                    opacity: 0.5
                  }}
                />

                <h3 className="
                  text-lg
                  sm:text-xl
                  font-semibold
                ">
                  {item.title}
                </h3>

                <p
                  className="
                    text-sm
                    sm:text-base
                    leading-relaxed
                  "
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* ========================= */}
        {/* CLOSING LINE */}
        {/* ========================= */}
        <div
          className="
            mt-12 md:mt-16
            pt-8 md:pt-10
            max-w-xl
          "
          style={{
            borderTop: "1px solid var(--border-color)"
          }}
        >
          <p
            className="
              text-base
              sm:text-lg
              leading-relaxed
            "
            style={{ color: "var(--text-secondary)" }}
          >
            I build systems that see, reason, decide and deploy.
          </p>
        </div>

      </div>
    </section>
  );
}