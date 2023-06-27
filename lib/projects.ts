
import logos from "./logos";

type ProjectName =
  | "horus"
  | "ticketCreation"
  | "global"
  | "chatfiles"
  | "pokedex"
  | "studyPoint"
  | "digitGame"
  | "netflixClone"
  | "publicStore"
  | "nestCar";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live?: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  horus: {
    title: "Horus Mobility",
    description: [
      "A car **renting Website** where users can see which cars are available to get on rent",
      "This project was freelance project from **FIVER** which was done in team of consisting two people **Anshu verma** and **Deepak chattwani**",
      "This is my first **Sanity** project made using Typescript Tailwind Framer Motion and Nestjs.",
    ],
    images: {
      main: {
        link: "/project/horus/main.webp",
        width: 1280,
        height: 720,
      },
    },
    stack: [
      logos.nextjs,
      logos.react,
      logos.sanity,
      logos.typescript,
      logos.tailwind,
    ],
    links: {
      live: "https://horus-mobility.com/en",
      github: "https://github.com/anshuvermaa/horus_mobility",
    },
  },

  ticketCreation: {
    title: "Ticket creation and sharing",
    description: [
      "**Create**, **List Your Ticket**, **View** and **Purchase Tickets** for the different events hosted by others",
      "This is **fullstack** project made using **Node.js**, **Express.js**, **Mongo DB**, **Next js**, **Docker**, **Kubernetes**, **Nats Streaming Server**, **Nginx** and styled using **css**. Users can Create tickets of their event and list them,all public tickets will appean in other login people feed where they can purchase the ticket.",
      "This project is made fully for developement purpose solve the problem of syncronization ",
      "Authentication was done using jwt token and npm module which I created for common error handling",
      
    ],
    images: {
      main: {
        link: "/project/ticketCreation/main.webp",
        width: 1903,
        height: 894,
      },
    },
    stack: [
      logos.nodejs,
      logos.expressjs,
      logos.mongodb,
      logos.typescript,
      logos.javascript,
      logos.Kubernetes,
      logos.docker,
      logos.nextjs,
    ],
    links: {
      github: "https://github.com/anshuvermaa/ticket-creation",

    },
  },
  global: {
    title: "Global Voice Media",
    description: [
      "this was a another **Freelance project** from **Fiver**",
      "This project is done in **Gatby** and **Tailwind**",
      "In this project i only have done the **Tailwind** part **Gatby** part done by other team member"
    ],
    images: {
      main: {
        link: "/project/global/main.png",
        width: 1903,
        height: 894,
      },
    },
    stack: [logos.tailwind, logos.javascript],
    links: {
      github: "https://github.com/anshuvermaa/media",
      live: "https://global-voices-media-ten.vercel.app/"
    },
  },
  chatfiles: {
    title: "Chatfiles",
    description: [
      "this project is in **Langchain** latest Technologies for **AI**",
      "The frontend is built using **Next js** and styled using **Tailwind** and backend built using **python and flask**.",
      "**OpenAI** LLM is used for analysing the data of any file like text and pdf",
      "You can **query** your document and **ask question** about the topic you don't have to read whole document",
      "firstly we ask user to upload document then we extract text from it and after that we just convert text to **vector embedding** and similar way is followed for asked question",
    ],
    stack: [logos.nextjs,  logos.tailwind,logos.typescript,logos.flask,logos.python,logos.openai,logos.langchain],
    links: {
      github: "https://github.com/anshuvermaa/chatfiles",
      live: "https://chatfiles-ui.fly.dev/",
    },
    images: {
      poster: "/project/chatfiles/poster.png",
      mp4: "/project/chatfiles/video.mp4",
      webm: "/project/chatfiles/video.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
  },
  pokedex: {
    title: "Pokedex",
    description: [
      "Pokedex was a project which was made just for fun since in our childwood we like to watch pokemon",
      "In this project **React**, **Tailwind**, **Typescript**,**Sass**, **Redux**, **Firebase** **Bootstrap**",
     ],
    links: {
      github: "https://github.com/anshuvermaa/pokedex",
      live: "pokedex-beta-sandy.vercel.app",
    },
    stack: [logos.react,  logos.typescript, logos.vercel,logos.firebase,logos.redux,logos.bootstrap],
    images: {
      poster: "/project/pokemon/poster.png",
      mp4: "/project/pokemon/video.mp4",
      webm: "/project/pokemon/video.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
  },
  studyPoint: {
    title: "Study Point",
    description: [
      "This was **fullstack** web application. which was made with **next js** and for server in **Node js**",
      "This project I made for a competition named **OverEngineered**",
      "This is place where You can check which **Iit Nit or Iiit** College you can get based upon Your rank in **Jee Main** And **Jee Advanced**",
      "You also can check Different **reviews** from Youtube about those colleges",
      "You can get Contact details for **Iiits Nits and Iiits** ",
    ],
    images: {
      poster: "/project/studyPoint/poster.png",
      webm: "/project/studyPoint/video.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
    links: {
      github: "https://github.com/anshuvermaa/study_point",
    },
    stack: [
      logos.javascript,
      logos.nextjs,
      logos.expressjs,
      logos.mongodb,
      logos.nodejs,
    ],
  },
  digitGame: {
    title: "Digit Game",
    description: [
      "This is **Machine learning** project",
      "This forntend is done in **html** and **css** to integrate it with Meachine Leaning model **tensorflow.js** is used ",
      "I justv trained the model with **0-9** number images then ",
      "for image processing **OPEN CV** is used",
      "when you draw in canvas image is processed checking which number you drawed on canvas if correct the we just adding **leaves svgs to background** ",
      
    ],
    links: {
      live: "https://anshuvermaa.github.io/ml_digit_recognition/",
      github: "https://github.com/anshuvermaa/ml_digit_recognition/",
    },
    stack: [
      logos.javascript
    ],
    images: {
      poster: "/project/digitGame/poster.png",
      mp4: "/project/digitGame/video.mp4",
      webm: "/project/digitGame/video.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
  },
  netflixClone: {
    title: "Netflix Clone",
    description: [
      "this project i made after leaning the next js just to implement the leaning",
      "for the videos i used **Youtube api**",
    ],
    links: {
      github: "https://github.com/anshuvermaa/netflix_website_clone",
    },
    stack: [logos.javascript, logos.nextjs],
    images: {
      main: {
        link: "/project/netflixClone/main.png",
        height: 841,
        width: 1195,
      },
    },
  },
  publicStore: {
    title: "Public Store",
    description: [
      "This was our **Second Semester** Web Developement",
      "this was done in team consisting 4 people **Anshu Verma**, **Amit Vikram Singh** , **Sai vasanth Thallam**, **M. Dinesh**",
      "To manage inventory it had a **Admin Dashboard** where You can add product and delete existing one and also you can edit",
      "The idea was most of local store can't afford their own website for provide the a multivender store so that they can grow their bussiness"
    ],
    links: {
      github: "https://github.com/anshuvermaa/publicStore",
    },
    stack: [logos.javascript,  logos.react, logos.bootstrap, logos.mongodb,logos.expressjs],
    images: {
      main: {
        link: "/project/publicStore/main.png",
        height: 936,
        width: 1020,
      },
    },
  },
  nestCar: {
    title: "Nest car report",
    description: [
      "This is an api which made in nest js. This api hepls user to estimate their car prices, for what they should sell their car",
      "Firstly user have to give some data like **manufacturing date of car**, **color** , **model** , **brand** , **mileage** , **bought Price** accourding to there questions it will predict **the price**",
      "To protect from Spam only login users able to ask and to verfy the the information firstly every report goes to **Admin user** only if it is varified **price report is generated**",
      ],
    links: {
      github: "https://github.com/anshuvermaa/nest_car_report",
    },
    stack: [logos.typescript, logos.nest],
    images: {
      main: {
        link: "/project/nestCar/main.png",
        width: 1273,
        height: 873,
      },
    },
  },
};

export default projects;
