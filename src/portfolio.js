/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Biswarup's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Biswarup Chatterjee's Portfolio",
    type: "website",
    //  url:"",
  },
};

//Home Page
const greeting = {
  title: "Biswarup Chatterjee",
  logo_name: "biswarup",
  nickname: "Biswarup",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1nYdeVwkv2Dcg7aL9SxCfy8g2SQRUR7jm/view?usp=sharing",
  // portfolio_repository: "",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/Biswarupcr7?tab=repositories",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/biswarup-chatterjee-94606415a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:biswarupchatterjee28@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/biswarup.chatterjee.73/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  }
];

const skills = {
  data: [
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institite of Technology",
      subtitle: "M.Tech. in Computer Science and Engineering",
      logo_path: "vitLogo.jpg",
      alt_name: "VIT Vellore",
      duration: "2017-2019",
      descriptions: [
        "⚡ I have studied Advanced software engineering subjects like ML, Advanced Data structures",
        "⚡ Secured CGPA: 8.32 on a scale of 10.",
      ],
      website_link: "https://vit.ac.in/",
    },

    {
      title: "St. Vincent Pallotti college of Engineering and Technology",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "SVPCETLogo.png",
      alt_name: "SVPCET",
      duration: "2012-2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CAO, AI etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing, Neural Networks and Java",     
        "⚡ Secured CGPA: 7.67 on a scale of 10.", 
        "⚡ The College is affiliated to Nagpur University approved by Director of Technical Education, Mumbai and AICTE, Government of India. 670. " ],
      website_link: "https://www.stvincentngp.edu.in/",
    },

    {
      title: "D.A.V Public School",
      subtitle: "HSC",
      logo_path: "DAVLogo.jpg",
      alt_name: "DAV",
      duration: "2011-2012",
      descriptions: [
        "⚡ I have studied Computer Science subject with Physics, Chemistry and Maths as ELective subject",    
        "⚡ Secured 82%.", ],
      website_link: "http://davbsp.org/",
    },
  ],
};


const certifications = {
  certifications: [

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with Dell EMC Company as Java Developer as well Automation Engineer on demand. I have also worked with Shell India Markets Private Ltd company as Data Science Research. I love exploring new things and contribute my skills for the comapany as I am flexible to work in both Developer as well as Automation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Dell EMC",
          company_url: "https://www.linkedin.com/company/dellemc/about/",
          logo_path: "DellEMCLogo.png",
          duration: "June 2019 - January 2021",
          location: "Bangalore , Karnataka",
          description:[
            " ⚡ Compliance in Cloud based application(Rembrandt-LCM) for development and automation based on Agile environment. ", 
            " ⚡ Delivered DevOps Dashboard using React.js_Python Flask within 1 month. ",
            " ⚡ Communication with partners for on-time project delivery. ", 
            " ⚡ Channelizing multiple delivery both as a front-end and back-end developer. ", 
            " ⚡ Critical bug ﬁxer. ", 
            " ⚡ Augmenting the growth of Team through timely delivery. "],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Shell India Markets Pvt. Ltd.",
          company_url: "https://www.shell.in/",
          logo_path: "shellLogo.png",
          duration: "Auguts 2018 - May 2019",
          location: "Bangalore, Karnataka",
          description:[
            "⚡ Testing Transcribe API(s) to assess the accuracy and word error rate using MS Cognitive services and Amazon AWS account. It’s the conversion of speech to text taking audio input files and converting into text and assessing the error rate.",
          "⚡ Worked on Alexa skills for business to control room for Safety Engineers by using Alexa 's voice command to bring  up information such as previous safety cases, diagrams, HazOps info etc on screens would help manage issues.",
          "⚡ Real Time Helmet Pattern detection using OpencCV which lets Safety Engineers to detect whether they are wearing the helmet or not. I closely worked with deep learning models in combination with openCV library to create a solution for this. At the end it achieved 90% of accuracy. ",],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Achievements",
      experiences: [
        {
          title: "Paper Presentation and Publishing",
          company: "Dell EMC",
          company_url: "https://www.linkedin.com/company/dellemc/about/",
          logo_path: "DellEMCLogo.png",
          duration: "October 2019",
          location: "Bangalore, Karnataka",
          description:[
            "Engineering Dashboard: The Truth of Product  Quality, Agile Lifecycle, Security Assessments,  Product Health Monitoring and field statistics  has been accepted for Oral Presentation in “8th  International Conference on Recent Challenges  in Engineering and Technology (ICRCET)”.  (10/2019)"],
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My project described here consists of working on Java domain, Selenium, React and ML. But I have more hands on Java Language. So, Looking for oppurtunities for Java developer so that I can sharpen my skills and contribute to productivity of the company.",
  // avatar_image_path: "projects_image.svg",

};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "BiswarupPhoto.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, Spring and Spring boot along with Selenium Automation Framework, React and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Rajiv Vihar, Near Om Tower, Seepat Road, S.E.C.L., Bilaspur(Chhattisgarh) - 495006",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/ZnfrFqWbEca188pZ8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9766846899",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
