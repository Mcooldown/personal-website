import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projectsJson from "@/data/projects.json";
import "./project-detail.scss";
import { Metadata } from "next";

interface ProjectLink {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  short_description: string;
  tech_stack: string[];
  thumbnail: string;
  slug: string;
  images: string[];
  links?: ProjectLink[];
  full_description: string;
}

const projects = projectsJson.projects as Project[];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Vincent Hadinata`,
    description: project.short_description,
    openGraph: {
      title: `${project.title} | Vincent Hadinata`,
      description: project.short_description,
      images: [
        {
          url: `/projects/${project.thumbnail}`,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail">
      <div className="section-wrapper">
        <Link href="/" className="back-link">
          <i className="fa fa-arrow-left"></i> Back to Home
        </Link>
        
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <div className="project-tech">
            {project.tech_stack.map((tech: string) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-content">
          <div className="project-description">
            <h2>About Project</h2>
            <p>{project.full_description}</p>
            
            <div className="project-links">
              {project.links?.map((link: ProjectLink, idx: number) => (
                <a
                  key={idx}
                  href={link.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="project-gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {project.images.map((img: string, idx: number) => (
                <div key={idx} className="gallery-item">
                  <Image
                    src={`/projects/${img}`}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    width={800}
                    height={600}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

