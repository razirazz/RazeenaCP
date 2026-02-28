import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const underlineRef = useRef(null);

  // Scroll Spy
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let current = sections[0]?.id;

      for (let section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          current = section.id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Underline animation (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const activeButton = document.getElementById(`nav-${active}`);
    const underline = underlineRef.current;

    if (activeButton && underline) {
      underline.style.width = `${activeButton.offsetWidth}px`;
      underline.style.left = `${activeButton.offsetLeft}px`;
    }
  }, [active]);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setOpen(false);
    }
  };

  const magneticMove = (e) => {
    if (window.innerWidth < 768) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const strength = 0.35;

    button.style.transform = `
      translate(${x * strength}px, ${y * strength}px)
      rotateX(${y * -0.1}deg)
      rotateY(${x * 0.1}deg)
    `;
  };

  const magneticReset = (e) => {
    e.currentTarget.style.transform = "translate(0,0) rotateX(0) rotateY(0)";
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-secondary backdrop-blur-md px-6 md:px-16 py-4">

      <div className="flex justify-between items-center">

        <div className="text-(--accent) font-bold text-xl">

          <a href="#home" className="hover:opacity-70 transition">
            RAZEENA CP
          </a>
        </div>

        <div className="flex items-center gap-6">

          {/* Desktop Links */}
          <div className="hidden md:flex relative items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => scrollTo(link.id)}
                onMouseMove={magneticMove}
                onMouseLeave={magneticReset}
                className={`relative transition-all duration-300 ${active === link.id
                  ? "text-(--accent)"
                  : "text-(--secondary) hover:text-(--primary)"
                  }`}
              >
                {link.name}
              </button>
            ))}

            <span
              ref={underlineRef}
              className="absolute -bottom-1 h-0.5 bg-(--accent) transition-all duration-300"
              style={{ left: 0, width: 0 }}
            />
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-(--primary)"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-6 text-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-lg ${active === link.id
                ? "text-(--accent)"
                : "text-(--secondary)"
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}

    </nav>
  );
}