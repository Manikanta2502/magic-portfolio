import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Manikanta",
  lastName: "Maguluri",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Student",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu","Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/manikanta2502",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/manikantamaguluri/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "manikantamaguluri1507@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Student and Upcoming SDE </>,
  subline: (
    <>
      I'm Manikanta, a Student at <InlineCode>SRM</InlineCode>, where I am specialized 
      <br /> in Cyber Security. After hours, I work on my upskilling.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Manikanta Maguluri,a Software Engineer passionate about building smart and reliable tech solutions. 
        With hands-on experience in Python, cybersecurity, and DSA, 
        I enjoy solving real-world problems and try new things in various domains.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Viral Fission",
        timeframe: "2023 - 2024",
        role: "Team Lead",
        achievements: [
          <>
            Led a team of 40+ members, overseeing task management and delegation, increasing team productivity by 35%.
          </>,
          <>
            Successfully coordinated and executed 15+ projects, ensuring timely delivery and maintaining a 95% quality
            standard.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      ,
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SRM University",
        timeframe: "2021 - 2025",
        description: <>CSE With specialization in Cyber Security</>,
      },
      {
        name: "Narayana Junior College",
        timeframe: "2019 - 2021",
        description: <>Studied Science Stream.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Built projects like an Emotion-Based Music Recommender and Fake Account Detection system using Python, Keras, and Scikit-Learn. 
        Experience includes data processing, model training, and API integration.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "CyberSecurity",
        description: <>Developed steganography tools using LSB techniques and CV2 to embed and extract hidden data, improving data confidentiality.
         Certified in ethical hacking and Linux fundamentals.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "SQL (MySQL), MongoDB",
        description: <>Used MySQL to access and query structured data with SELECT, JOIN, and filter conditions. Created and managed MongoDB databases, designing document schemas and performing CRUD operations for unstructured data.

        </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "JavaScript, HTML5/CSS",
        description: <>Created interactive and responsive web interfaces using JavaScript, HTML5, and CSS, focusing on clean UI/UX and smooth user experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Upcoming projects",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
