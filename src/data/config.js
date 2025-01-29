export default {
  name: "Vincent Hadinata",
  path: {
    resume: 'Resume - Vincent Hadinata.pdf'
  },
  page: {
    home: "/",
    projects: "/projects",
    projectDetails: (slug) => `/projects/${slug}`
  },
  footer: {
    title: "Contact Me",
    description: "Feel free to contact if you're interested to work with me!",
    contacts: [
      {
        icon: "fa fa-envelope",
        link: "mailto:vincenthadinata30@gmail.com"
      },
      {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/vincenthadinata/"
      },
      {
        icon: "fab fa-github",
        link: "https://github.com/Mcooldown"
      }
    ],
    copyright: (year) => `Copyright © ${year} Vincent Hadinata`
  },
  home: {
    landing: {
      top: "Hello, I'm",
      title: "VINCENT HADINATA",
      subtitle: "Software Engineering Enthusiast",
      description: `Currently, I'm working as Software Engineer at Mekari. I'm very interested to learn and implement new technologies in software development.`,
      button: "VIEW RESUME"
    },
    projects: {
      "title-1": "Featured",
      "title-2": "Projects",
      button: "SEE ALL PROJECTS"
    }
  },
  projects: {
    "title-1": "My",
    "title-2": "Projects",
    subtitle: "These are several projects that I was involved in. Please have a look."
  },
  projectDetails: {
    techStack: "Tech Stack:",
    notFound: {
      title: "Project Not Found",
      description: "Sorry, your requested project doesn't exist. Please go to another project.",
      button: "BACK TO PROJECTS"
    },
    openLinkButton: "CLICK HERE TO OPEN",
    noDetails: "No details available"
  },
  notFound: {
    title: "Page Not Found",
    description: "Sorry, your requested page doesn't exist. Please go to another page.",
    button: "BACK TO HOME"
  }
}