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
    <div className="home">
      <div className="home__landing-wrapper">
        <div className="home__landing section-wrapper">
          <div className="landing__content">
            <div className="content__greetings">
              Hello, I'm
            </div>
            <div className="content__title">
              VINCENT HADINATA
            </div>
            <div className="content__subtitle">
              Software Engineer
            </div>
            <div className="content__description">
              I am a Software Engineer currently at Octomate by HRnet, with
              previous experience at Mekari and Blibli. With over 3.5 years of
              experience across frontend and backend development, I am passionate
              about learning new technologies, driving development efficiency,
              and optimizing systems to deliver impactful solutions.
            </div>
            <div className="content__actions">
              <a href={`/${config.path.resume}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="button">
                  <i className="fa fa-file button__icon" />
                  VIEW RESUME
                </button>
              </a>
              {config.contacts.map((contact, index) => (
                <a
                  key={`nav-item-contact-${index + 1}`}
                  href={contact.link}
                  className="actions__contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fa-2x ${contact.icon}`} />
                </a>
              ))}
            </div>
          </div>
          <Image
            src="/landing-image.webp"
            className="landing__image"
            alt="Vincent Hadinata"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
      <div className="section-wrapper home__projects">
        <h2 className="projects__title">
          MY PROJECTS
        </h2>
        <div className="projects__list">
          {sortedProjects.map((project) => (
            <Link key={project.id} href={`/project/${project.slug}`} className="project-item">
              <Image
                src={`/projects/${project.thumbnail}`}
                className="project-item__thumbnail"
                alt={project.title}
                width={800}
                height={600}
              />
              <div className="project-item__title">
                {project.title}
              </div>
              <div className="project-item__description">
                {project.short_description}
              </div>
              <div className="project-item__tech-stacks">
                {project.tech_stack.map((tech) => (
                  <div key={tech} className="badge">
                    {tech}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="home__copyright">
        {config.copyright(new Date().getFullYear())}
      </div>
    </div>
  );
}
