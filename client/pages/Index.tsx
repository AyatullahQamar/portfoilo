import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

interface Skill {
  category: string;
  items: string[];
}

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: Project[] = [
    {
      title: "Celebso",
      description: "Celebrity social platform with interactive features",
      link: "https://celebso-production.netlify.app/",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "CelebsOx AI Labs",
      description: "AI-powered celebrity analysis and insights platform",
      link: "https://celebsox-ai-labs.netlify.app",
      technologies: ["React", "AI/ML", "Python"],
    },
    {
      title: "Templar Order",
      description: "Historical society management application",
      link: "https://templarorder.netlify.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Jeswani Group",
      description: "Business group portfolio and services showcase",
      link: "https://jeswani-group.netlify.app",
      technologies: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "Creative Design Portfolio",
      description: "Full-stack creative design and development showcase",
      link: "https://verdant-crumble-a1910f.netlify.app/",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Personaseek",
      description: "People search and profile discovery platform with real-time filtering.",
      link: "https://personaseek-v2-1.onrender.com",
      technologies: ["React", "Node.js", "Tailwind CSS"],
    },
  ];

  const skills: Skill[] = [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "TypeScript"],
    },
    {
      category: "Web Technologies",
      items: ["React", "Next.js", "Bootstrap", "Tailwind CSS", "Node.js"],
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLite", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git/GitHub", "Postman", "VS Code", "Vite"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-transparent text-foreground">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-primary via-sky-500 to-violet-500 text-sm font-semibold text-white shadow-2xl shadow-primary/20 ring-1 ring-white/10">
              <span className="relative">AQ</span>
              <span className="absolute -right-1 top-1 h-2 w-2 rounded-full bg-white/90 shadow-sm" />
            </div>
            <span className="font-semibold tracking-[0.14em] text-sm uppercase text-muted-foreground">Qamar</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            {[
              { id: "home", label: "Home" },
              { id: "internship", label: "Internship" },
              { id: "projects", label: "Work" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/AyatullahQamar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-white"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen overflow-hidden bg-transparent px-4 pt-24">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="absolute right-10 top-28 h-72 w-72 rounded-full bg-[#0ea5e9]/15 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-[#ec4899]/10 blur-3xl" />
        <svg className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-30 text-slate-300 sm:h-[120%] sm:w-[120%]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <polygon points="50,0 100,100 0,100" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.8" />
        </svg>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center py-16">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted-foreground backdrop-blur-xl">
              Premium digital branding
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary">Computer Science graduate</p>
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                  Building web applications and digital experiences.
                </h1>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Skilled in Python, SQL, and modern web technologies, with hands-on experience in real-world projects.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button onClick={() => scrollToSection("projects")} className="portfolio-btn-primary">
                  View Work
                </button>
                <button onClick={() => scrollToSection("contact")} className="portfolio-btn-secondary">
                  Book a Call
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Projects</p>
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-sm text-muted-foreground mt-2">Live launch-ready projects</p>
              </div>
              <div className="glass-panel p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Design</p>
                <p className="text-3xl font-bold text-white">UI & UX</p>
                <p className="text-sm text-muted-foreground mt-2">Brand-focused interfaces</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel overflow-hidden p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#c084fc] to-[#38bdf8] opacity-90" />
              <div className="space-y-8 mt-6">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Signature work</p>
                  <h2 className="text-3xl font-bold text-white">Creative layouts that feel premium</h2>
                  <p className="text-muted-foreground leading-7">
                    A clean hero, strong typography, and subtle depth create a memorable first impression for your audience.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Focus</p>
                    <p className="text-white font-semibold">Brand storytelling</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Motion</p>
                    <p className="text-white font-semibold">Smooth transitions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
          </div>
        </div>
      </section>

      <section id="internship" className="bg-transparent px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Internship experience</h2>
            <p className="section-subtitle">
              Hands-on front-end development work completed during a real internship, with a focus on responsive interfaces and collaboration.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel p-10 space-y-8">
              <span className="feature-pill">Front-End Internship</span>
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-white">Bitwit Technologies</h3>
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Front-End Developer Intern • Mar ’25 – May ’25</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Detail-oriented and motivated developer with hands-on experience using HTML, CSS, JavaScript, and modern tooling to build responsive web applications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key responsibilities</h4>
                  <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                    <li>Built responsive interfaces using HTML, CSS, and JavaScript.</li>
                    <li>Integrated APIs with UI/UX and backend teams.</li>
                    <li>Debugged and optimized front-end performance.</li>
                    <li>Contributed to Agile development cycles.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Tools & technologies</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-muted-foreground">JavaScript (ES6+)</span>
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-muted-foreground">HTML5</span>
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-muted-foreground">CSS3</span>
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-muted-foreground">Tailwind CSS</span>
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-muted-foreground">Git/GitHub</span>
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-muted-foreground">Postman</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 space-y-8">
                <div>
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Professional overview</p>
                <p className="text-white font-semibold text-3xl mb-5">Motivated student developer with real internship experience.</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Skilled in building responsive web applications, managing front-end performance, and collaborating with cross-functional teams to deliver polished digital experiences.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Education & growth</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Developed practical front-end skills through a structured internship and academic study, preparing for entry-level roles in web development and product design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-transparent px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="text-center">
              <h2 className="section-title">Featured projects</h2>
              <p className="section-subtitle">
                Recent work showcasing polished interfaces, strong storytelling, and refined details.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Project</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-transparent px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills & expertise</h2>
            <p className="section-subtitle">
              Tools and capabilities I use to build premium frontend experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 fade-in-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <h3 className="text-xl font-semibold text-white mb-5">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-transparent px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Let’s create something</h2>
            <p className="section-subtitle">
              Ready to build a standout website? Reach out and let’s create something memorable.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <a href="mailto:ayatullahqamar@gmail.com" className="glass-panel p-8 transition hover:-translate-y-1">
              <Mail className="mb-5 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-muted-foreground">ayatullahqamar@gmail.com</p>
            </a>
            <a href="tel:+917412835548" className="glass-panel p-8 transition hover:-translate-y-1">
              <Phone className="mb-5 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 7412835548</p>
            </a>
            <a href="https://linkedin.com/in/Ayatullah6" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 transition hover:-translate-y-1">
              <Linkedin className="mb-5 h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">Connect with me</p>
            </a>
          </div>

          <div className="mt-16 text-center">
            <a href="https://github.com/AyatullahQamar" target="_blank" rel="noopener noreferrer">
              <button className="portfolio-btn-primary inline-flex items-center gap-2">
                <Github className="w-5 h-5" />
                View GitHub Profile
              </button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-transparent py-10 px-4 text-center text-muted-foreground">
        <div className="mx-auto max-w-7xl">
          <p>© 2025 Ayatullah Qamar</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
