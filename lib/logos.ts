type logoNames =
  | "graphql"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "typescript"
  | "vercel"
  | "nodejs"
  | "javascript"
  | "redux"
  | "sass"
  | "bash"
  | "framerMotion"
  | "flutter"
  | "tailwind"
  | "jetpack"
  | "sanity"
  | "flask"
  | "firebase"
  | "docker"
  | "nest"
  | "python"
  | "openai"
  | "langchain"
  | "Kubernetes";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
    
  };
};

const logos: Logos = {
  graphql: {
    label: "GraphQl",
    logo: "/assets/icons/graphql.svg",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/assets/icons/nestjs.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "/assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/assets/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/assets/icons/nextjs.svg",
    invert: true,
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "/assets/icons/vercel.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
  },
  flutter: {
    label: "flutter",
    logo: "/assets/icons/flutter.svg",
  },
  tailwind: {
    label: "tailwind",
    logo: "/assets/icons/tailwind.svg",
  },
  jetpack: {
    label: "jetpack compose",
    logo: "/assets/icons/jetpack.png",
  },
  sanity: {
    label: "sanity",
    logo: "/assets/icons/sanity.svg",
  },
  flask: {
    label: "flask",
    logo: "/assets/icons/flask.svg",
    invert: true,
  },
  firebase: {
    label: "firebase",
    logo: "/assets/icons/firebase.svg",
  },
  docker: {
    label: "docker",
    logo: "/assets/icons/docker.svg",
  },
  Kubernetes: {
    label: "Kubernetes",
    logo: "/assets/icons/Kubernete.svg",
  },
  nest: {
    label: "nest js",
    logo: "/assets/icons/nest.svg",
  },
  python: {
    label: "python",
    logo: "/assets/icons/python.svg",
  },
  openai: {
    label: "Open AI",
    logo: "/assets/icons/openai.png",
    invert: true,
  },
  langchain: {
    label: "Langchain",
    logo: "/assets/icons/langchain.png",
  },
};

export default logos;
