import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const [accentColor, setAccentColor] = useState("#7c5cff");
  const [isDark, setIsDark] = useState(true);

  const init = async (engine) => {
    await loadSlim(engine);
  };

  // 🔥 Listen for theme changes
  useEffect(() => {
    const updateTheme = () => {
      const computed = getComputedStyle(document.documentElement);
      const accent = computed.getPropertyValue("--accent").trim();

      setAccentColor(accent);

      const darkActive =
        document.documentElement.classList.contains("dark");
      setIsDark(darkActive);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 100 },
          size: { value: 2 },
          color: { value: accentColor },
          move: {
            enable: true,
            speed: 0.4
          },
          links: {
            enable: true,
            color: accentColor,
            opacity: isDark ? 0.2 : 0.08,
            distance: 120
          }
        },
        detectRetina: true
      }}
      className="fixed inset-0 -z-10"
    />
  );
}