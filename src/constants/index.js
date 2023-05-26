import {
  ai, pa, es, el, clock
} from "../assets";

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
    company_name: "",
    date: "Day 3",
    icon: clock,
    iconBg: "#383E56",

    points: [
      "Day 4",
      "Day 5",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: clock,
    iconBg: "#E6DEDD",
    date: "Day 1",
    points: [
      "Day 1",
      "Day 1"
    ],
  },
  {
    title: "",
    company_name: "",
    date: "Day 3",
    icon: clock,
    iconBg: "#383E56",

    points: [
      "Day 4",
      "Day 5",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: clock,
    iconBg: "#E6DEDD",
    date: "Day 1",
    points: [
      "Day 1",
      "Day 1"
    ],
  },
];
const Briefs = [
  {
    title: "",
    company_name: "",
    icon: ai,
    iconBg: "#383E56",
    date: "Accessibility and Inclusion",
    points: [
      "Create solutions that enhance accessibility for individuals with disabilities, making technology more inclusive and empowering for all.",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: pa,
    iconBg: "#E6DEDD",
    date: "Poverty Alleviation",
    points: [
      "Develop solutions that help alleviate poverty, provide resources or opportunities for underserved communities, or support economic empowerment.",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: es,
    iconBg: "#383E56",
    date: "Environment and Sustainability",
    points: [
      "Focus on projects that promote environmental conservation, sustainable practices, waste management, or renewable energy solutions.",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: el,
    iconBg: "#E6DEDD",
    date: "Education and Learning",
    points: [
      "Develop innovative solutions to improve access to education, enhance learning experiences, or address specific challenges in the education sector.",
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
