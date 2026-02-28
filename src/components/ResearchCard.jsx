import { useState } from "react";

export default function ResearchCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 12;
    const y = (e.clientX - rect.left - rect.width / 2) / 12;

    setRotate({ x: -x, y });
  };

  const metrics = [
    {
      label: "No Brake",
      accuracy: 0.944,
      precision: 0.92,
      recall: 0.93,
      f1: 0.92
    },
    {
      label: "Brake",
      accuracy: 0.95,
      precision: 0.93,
      recall: 0.94,
      f1: 0.93
    }
  ];

  return (
    <div
      className="perspective-[1500px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          background: `
            linear-gradient(
              to bottom right,
              var(--accent-soft),
              transparent
            )
          `,
          borderColor: "var(--border-color)",
          boxShadow: "0 0 60px var(--accent-glow)"
        }}
        className="
          relative
          w-90 md:w-115
          min-h-96
          flex flex-col
          p-8 md:p-10
          rounded-3xl
          backdrop-blur-xl
          border
          transition-transform duration-200
          transform-gpu
        "
      >

        {/* Subtle Glow Layer */}
        <div
          className="absolute inset-0 rounded-3xl blur-2xl"
          style={{
            background: "var(--accent-soft)",
            opacity: 0.2
          }}
        />

        {/* Title */}
        <h3
          style={{
            transform: "translateZ(60px)",
            color: "var(--accent)"
          }}
          className="font-semibold text-lg mb-6"
        >
          Autonomous Braking System
        </h3>

        {/* Description */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="space-y-4 text-sm leading-relaxed"
        >
          <p style={{ color: "var(--text-secondary)" }}>
            Perception-driven braking decision system using
            YOLOv8 for object detection and ResNet18 for
            decision modeling on BDD100K dataset.
          </p>
        </div>

        {/* ===================== */}
        {/* Metrics Section */}
        {/* ===================== */}
        <div
          style={{ transform: "translateZ(45px)" }}
          className="mt-6 text-xs sm:text-sm"
        >

          <div
            className="grid grid-cols-5 gap-2 pb-2 border-b"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div />
            <div className="text-center">Acc</div>
            <div className="text-center">Prec</div>
            <div className="text-center">Rec</div>
            <div className="text-center">F1</div>
          </div>

          {metrics.map((m, i) => (
            <div
              key={i}
              className="grid grid-cols-5 gap-2 py-2 border-b"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div
                className="font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {m.label}
              </div>

              <div className="text-center" style={{ color: "var(--accent)" }}>
                {m.accuracy}
              </div>

              <div className="text-center" style={{ color: "var(--text-secondary)" }}>
                {m.precision}
              </div>

              <div className="text-center" style={{ color: "var(--text-secondary)" }}>
                {m.recall}
              </div>

              <div className="text-center" style={{ color: "var(--text-secondary)" }}>
                {m.f1}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            transform: "translateZ(30px)",
            borderTop: "1px solid var(--border-color)",
            color: "var(--text-secondary)"
          }}
          className="mt-auto pt-6 text-xs"
        >
          Deep Learning • Computer Vision • ADAS
        </div>

      </div>
    </div>
  );
}