export default {
  name: "Vincent Hadinata",
  path: {
    resume: 'Resume - Vincent Hadinata.pdf'
  },
  page: {
    home: "/",
    notFound: "/404"
  },
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
  copyright: (year) => `Copyright © ${year} Vincent Hadinata`,
  scrollToTop: 'Scroll to top',
  home: {
    landing: {
      top: "Hello, I'm",
      title: "VINCENT HADINATA",
      subtitle: "Software Engineering Enthusiast",
      description: `Currently, I'm working as Software Engineer at Mekari. I'm very interested to learn and implement new technologies in software development.`,
      button: "VIEW RESUME"
    },
    projects: {
      title: 'MY PROJECTS'
    }
  },
  projectDetail: {
    techStack: "Tech Stack:",
    noDetails: "No details available"
  },
  notFound: {
    title: "Page Not Found",
    description: "Sorry, your requested page doesn't exist. Please go to another page.",
    button: "BACK TO HOME"
  }
}