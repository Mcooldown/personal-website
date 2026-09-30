import Image from "next/image";
import Link from "next/link";
import config from "@/data/config.js";
import projectsJson from "@/data/projects.json";
import "./home.scss";

interface Project {
  id: number;
  title: string;
  short_description: string;
  tech_stack: string[];
  thumbnail: string;
  slug: string;
}

export default function Home() {
  const projectsData = projectsJson.projects as Project[];
  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  return (
    <main className="home">
      <div className="home__landing-wrapper">
        <div className="home__landing section-wrapper">
          <div className="landing__content">
            <div className="content__greetings">Hello, I'm</div>
            <h1 className="content__title">VINCENT HADINATA</h1>
            <h2 className="content__subtitle">Software Engineer</h2>
            <p className="content__description">
              I am currently a Software Engineer (Frontend) at Octomate by HRnet,
              previously building software at Mekari and Blibli. With over 3.5
              years of professional experience in software development, I am
              passionate about crafting intuitive user interfaces and applying
              modern technologies to deliver impactful web experiences. Let's
              connect and explore opportunities to collaborate—feel free to reach
              out!
            </p>
            <div className="content__actions">
              <a href={`/${config.path.resume}`} target="_blank" rel="noopener noreferrer" className="btn-resume">
                <i className="fa fa-file"></i> VIEW RESUME
              </a>
              {config.contacts.map((contact, index) => (
                <a
                  key={`contact-${index}`}
                  href={contact.link}
                  className="actions__contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Link"
                >
                  <i className={`fa-2x ${contact.icon}`} />
                </a>
              ))}
            </div>
          </div>
          <Image
            src="/landing-image.webp"
            alt="Vincent Hadinata"
            width={500}
            height={500}
            className="landing__image"
            priority
          />
        </div>
      </div>
      <div className="section-wrapper home__projects">
        <h2 className="projects__title">MY PROJECTS</h2>
        <div className="projects__list">
          {sortedProjects.map((project) => (
            <Link key={project.id} href={`/project/${project.slug}`} className="project-card">
              <div className="project-card__image">
                <Image
                  src={`/projects/${project.thumbnail}`}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="thumbnail"
                />
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.short_description}</p>
                <div className="project-card__tech">
                  {project.tech_stack.map((tech: string) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="home__copyright">
        {config.copyright(new Date().getFullYear())}
      </footer>
    </main>
  );
}
