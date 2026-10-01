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
    <div className="project-detail-page">
      <div className="project-detail-page__header">
        <div className="section-wrapper">
          <div className="header__breadcrumbs">
            <Link href="/"><i className="fa fa-home"></i>&nbsp;Home</Link>
            <i className="fa fa-chevron-right"></i>
            <span>{project.title}</span>
          </div>
          <div className="header__landing">
            <Image
              src={`/projects/${project.thumbnail}`}
              alt=""
              className="landing__image"
              width={800}
              height={600}
            />
            <div>
              <h1 className="landing__title">{project.title}</h1>
              <p className="landing__description">{project.short_description}</p>
              <p className="landing__tech-stack-title">Tech Stack:</p>
              <div className="landing__tech-stack-list">
                {project.tech_stack.map((tech) => (
                  <div key={tech} className="badge">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-wrapper project-detail-page__details">
        {project.full_description && (
          <div className="box details__full-description">
            <div dangerouslySetInnerHTML={{ __html: project.full_description }}></div>
          </div>
        )}
        {project.links && project.links.length > 0 && (
          <div className="box details__link">
            {project.links.map((link, index) => (
              <div key={`link-${index}`}>
                <span className="link__label">{link.label}</span>:&nbsp;&nbsp;
                <a href={link.value} target="_blank" rel="noopener noreferrer" className="link__value">
                  {link.value}
                </a>
              </div>
            ))}
          </div>
        )}
        {project.images && project.images.length > 0 && (
          <>
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={`/projects/${image}`}
                alt=""
                className="details__image"
                width={1200}
                height={800}
              />
            ))}
          </>
        )}
      </div>
      <div className="project-detail-page__copyright">
        {/* config.copyright(new Date().getFullYear()) */}
        Copyright © {new Date().getFullYear()} Vincent Hadinata
      </div>
    </div>
  );
}

