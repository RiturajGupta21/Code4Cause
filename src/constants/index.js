import {ai, pa, es, el, clock} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#brief",
    title: "Themes",
  },
  {
    id: "https://docs.google.com/forms/d/e/1FAIpQLScuXvahTUw-DDCptjALfoy6nPbwlZU6tF9XdX6JIfItImgVnQ/viewform",
    title: "Register",
  },
];

const themes = [
  {
    title: "Accessibility and Inclusion",
    icon: ai,
  },
  {
    title: "Poverty Alleviation",
    icon: pa,
  },
  {
    title: "Environment and Sustainability",
    icon: es,
  },
  {
    title: "Education and Learning ",
    icon: el,
  },
];

const timeline = [
  {
    title: "",
    company_name: "Registration Opens",
    date: "16th May 2023",
    icon: clock,
    iconBg: "#383E56",
    points: [
      // "",
      // "Description",
    ],
  },
  {
    title: "",
    company_name: "Themes Released",
    icon: clock,
    iconBg: "#E6DEDD",
    date: "26th May 2023",
    points: [
      // "",
      // "Description"
    ],
  },
  {
    title: "",
    company_name: "Registration Close",
    date: "16th June 2023",
    icon: clock,
    iconBg: "#383E56",
    points: [
      // "",
      // "Description",
    ],
  },
  {
    title: "",
    company_name: "Teams Distribution",
    icon: clock,
    iconBg: "#E6DEDD",
    date: "23rd June 2023",
    points: [
      // "",
      // "Description"
    ],
  },
  {
    title: "",
    company_name: "Problem Statement Submission",
    date: "30th June 2023",
    icon: clock,
    iconBg: "#383E56",
    points: [
      // "",
      // "Description",
    ],
  },
  {
    title: "",
    company_name: "Presentation cum Demonstration",
    icon: clock,
    iconBg: "#E6DEDD",
    date: "Mid August 2023",
    points: [
      // "",
      // "Description"
    ],
  },
];
const Briefs = [
  {
    title: "Accessibility and Inclusion",
    company_name: "",
    icon: ai,
    iconBg: "#383E56",
    date: "",
    points: [
      "Create solutions that enhance accessibility for individuals with disabilities, making technology more inclusive and empowering for all.", 
      "The solutions should encompass web accessibility, inclusive user interfaces, assistive technologies, mobile app design, captioning and transcription, inclusive gaming, virtual and augmented reality accessibility, inclusive education technologies, accessible communication platforms, and AI-powered accessibility solutions.",
      "Implement these advancements,to enhance digital experiences, ensure equal access to technology, and foster inclusivity in society.",
    ]
  },
  {
    title: "Poverty Alleviation",
    company_name: "",
    icon: pa,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Develop solutions that help alleviate poverty, provide resources or opportunities for underserved communities, or support economic empowerment.",
      "Leveraging technology for poverty alleviation involves promoting financial inclusion through digital banking, empowering individuals with digital skills, enabling access to marketplaces and employment opportunities.",
      "Improving healthcare through telemedicine, implementing agricultural technologies, enhancing disaster response, providing access to basic services, utilizing data-driven decision making, and fostering collaboration and knowledge sharing for collective action.",
    ],
  },
  {
    title: "Environment and Sustainability",
    company_name: "",
    icon: es,
    iconBg: "#383E56",
    date: "",
    points: [
      "Focus on projects that promote environmental conservation, sustainable practices, waste management, or renewable energy solutions.",
      "Rapid advancements in technology have led to environmental challenges, including high energy consumption, e-waste accumulation, and unsustainable practices. To address these issues, innovative solutions are needed.",
      "Developing efficient energy systems, implementing proper e-waste management, integrating renewable energy, and promoting sustainable agriculture, water management, waste recycling, transportation, climate monitoring, manufacturing, and data analytics can foster sustainability and mitigate environmental impacts, leading to a greener future.",
    ],
  },
  {
    title: "Education and Learning",
    company_name: "",
    icon: el,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Develop innovative solutions to improve access to education, enhance learning experiences, or address specific challenges in the education sector.","Technology can revolutionize education by developing personalized learning platforms, gamifying education through interactive games and simulations, utilizing virtual reality for immersive learning experiences, and implementing AI tutoring systems."
      ,"Adaptive assessment tools, collaborative learning platforms, data analytics, mobile learning apps, augmented reality, and AI-based content creation tools can also enhance education and make it more accessible and engaging for students."    
    ],
  },
];

export const Icons = [
  { name: "logo-github", link: "https://github.com/codex-iter" },
  { name: "logo-instagram", link: "https://www.instagram.com/codexiter" },
  { name: "logo-linkedin", link: "https://www.linkedin.com/company/codex-iter" },
  { name: "logo-youtube", link: "https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA" },
  { name: "logo-facebook", link: "https://www.facebook.com/codexiter" },
];

export { themes, timeline, Briefs };
