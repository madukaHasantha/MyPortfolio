import madukaImage from "../src/assets/images/madukaImage.jpg";
import madukaImage2 from "../src/assets/images/madukaImage2.png"
import tagsmate from "../src/assets/images/tagsmate.png"
import employee from "../src/assets/images/employee.png"
import inventory from "../src/assets/images/inventory.png"
import Hospital from "../src/assets/images/hospital.png"
import Disney from "../src/assets/images/disneyClone.png"
import jewelry from "../src/assets/images/jewelry.png"
import pharmacy from "../src/assets/images/pharmacy.png"
import bellvantage from "../src/assets/images/bellvantage.png"



const logotext = "MADUKA";
const meta = {
  title: "Maduka Senavirathna",
  description:
    "I’m Maduka Senavirathna, an Associate Software Engineer specializing in full-stack development. I have experience in React, Node.js, and TypeScript, and I’m passionate about building responsive web applications.",
};

const introdata = {
  title: "I’m Maduka Senavirathna",
  animated: {
    first: "I love coding",
    second: "I build responsive web applications",
    third: "I develop full-stack solutions",
  },
  description:
    "I'm an Associate Software Engineer with expertise in front-end and back-end development. I specialize in React, Node.js, and TypeScript, creating scalable, high-performance web solutions.",
  your_img_url: madukaImage,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I am an Associate Software Engineer with a passion for coding and building responsive web applications. With experience in both front-end and back-end development, I enjoy working with technologies like React, Node.js, and TailwindCSS. I thrive in collaborative, agile environments and am always eager to learn and improve my skills.",
};

const worktimeline = [
  {
    jobtitle: "Associate Software Engineer (Contract)",
    where: "Nova Solutions (PVT) Ltd",
    date: "June 2024 - Present",
  },
  {
    jobtitle: "Trainee Software Engineer",
    where: "EXEVE (PVT) Ltd",
    date: "August 2023 - February 2024",
  },
  {
    jobtitle: "Intern Software Engineer",
    where: "EXEVE (PVT) Ltd",
    date: "July 2022 - January 2023",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "TypeScript",
    value: 85,
  },
  {
    name: "React.js",
    value: 80,
  },
  {
    name: "Node.js (Express.js)",
    value: 85,
  },
  {
    name: "Tailwind CSS",
    value: 80,
  },
  {
    name: "MySQL",
    value: 75,
  },
  {
    name: "MongoDB",
    value: 70,
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly interfaces using React.js, Tailwind CSS, and modern JavaScript frameworks to deliver seamless user experiences.",
  },
  {
    title: "Backend Development",
    description:
      "Developing robust and scalable server-side applications using Node.js, Express.js, and MySQL/MongoDB, ensuring high performance and security.",
  },
  {
    title: "Full-Stack Solutions",
    description:
      "Offering complete web solutions by integrating front-end and back-end systems for efficient and scalable web applications tailored to client needs.",
  },
];

const dataportfolio = [
  {
    img: tagsmate,
    description:
      "Developed a responsive SaaS platform 'Tagsmate' with React, TypeScript, and TailwindCSS.",
    link: "#",
  },
  {
    img: employee,
    description:
      "Built an Employee Management System using the Strapi(Node.js) for EXEVE (PVT) Ltd.",
    link: "https://github.com/EXEVElk/Silkworm.git",
  },
  {
    img: inventory,
    description: "Inventory control system developed using React.js.",
    link: "https://github.com/madukaHasantha/Inventary_control_system.git",
  },
  {
    img: Hospital,
    description: "Hospital management system developed using Node.js stack.",
    link: "https://github.com/madukaHasantha/Hospital-management-system-for-patient.git",
  },
  {
    img: Disney,
    description: "Disney website clone developed using React.js.",
    link: "https://github.com/madukaHasantha/Disney-frontend-clone.git",
  },
  {
    img: jewelry,
    description: "jewelry management system developed using React.js.",
    link: "https://github.com/madukaHasantha/Nova-solution-assignment.git",
  },
  {
    img: pharmacy,
    description: "Pharmacy management system developed using Node.js.",
    link: "https://github.com/madukaHasantha/assignmentWireapps.git",
  },
  {
    img: bellvantage,
    description:
      ".NET Fundamentals project for Bellvantage, building scalable applications with robust architecture.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "sbmhsenavirathna.up@gmail.com",
  YOUR_FONE: "(+94)769484054",
  description:
    "Associate Software Engineer with experience in full-stack development using React, TypeScript, and Node.js. Skilled in building scalable, responsive applications and delivering solutions in agile environments.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/madukaHasantha",
  facebook: "https://web.facebook.com/maduka.senavirathne.1/",
  linkedin: "https://www.linkedin.com/in/maduka-senavirathna-1b9b5519a/",
  twitter: "https://x.com/madukaHS",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
