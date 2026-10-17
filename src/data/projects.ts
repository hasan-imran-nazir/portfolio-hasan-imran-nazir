export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  challenges: string[];
  improvements: string[];
}

export const projects: Project[] = [
  {
    id: "instarecipe",
    slug: "instarecipe",
    name: "InstaRecipe",
    shortDescription:
      "A recipe-focused web application that helps users discover and explore recipes through a clean, organized interface.",
    description:
      "InstaRecipe is a recipe-focused web application that helps users discover and explore recipes through an organized interface. It was built with React and Next.js, styled with Tailwind CSS, and focused on a clean, easy-to-navigate layout across devices.",
    image: "/instarecipe.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    challenges: [
      "Designing an intuitive recipe browsing interface",
      "Structuring content for easy discovery",
      "Maintaining clean and consistent UI across pages",
    ],
    improvements: [
      "Implement recipe search and filtering",
      "Add recipe saving/bookmarking functionality",
      "Include detailed cooking instructions and ingredients",
      "Enhance overall UI/UX based on user feedback",
    ],
  },
  {
    id: "bazardor",
    slug: "bazardor",
    name: "BazarDor — Market Price Tracker",
    shortDescription:
      "A web application focused on helping users explore products and market-price information through an organized interface.",
    description:
      "BazarDor is a web application focused on helping users explore products and market-price information through an organized interface. It provides a structured way to browse and view product details in a clean, user-friendly layout.",
    image: "/bazardor.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://bazzar-dor-a7.vercel.app/",
    githubLink: "https://github.com/hasan-imran-nazir/bazzar-dor-a7",
    challenges: [
      "Creating a clean and organized product browsing experience",
      "Implementing responsive layouts for different devices",
      "Structuring component-based architecture for maintainability",
    ],
    improvements: [
      "Add search and filtering functionality for products",
      "Implement price comparison features",
      "Add user preferences and favorites",
      "Enhance data visualization for market trends",
    ],
  },
  {
    id: "fitlog",
    slug: "fitlog",
    name: "FitLog — Workout Library & Fitness Tracker",
    shortDescription:
      "A fitness web application that helps users explore workouts, organize daily training routines, and save their favorite exercises.",
    description:
      "FitLog is a fitness web application that helps users explore workouts, organize daily training routines, and save their favorite exercises. It provides a clean and intuitive interface for tracking workout completion and managing shared application state.",
    image: "/fitlog.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Context API",
      "React Toastify",
    ],
    liveLink: "https://fitlog-assignment-6.vercel.app/",
    githubLink: "https://github.com/hasan-imran-nazir/fitlog-assignment-6",
    challenges: [
      "Managing shared application state across components using React Context API",
      "Implementing smooth toast notifications for user actions",
      "Ensuring responsive design for various screen sizes",
      "Organizing workout data in a structured and accessible format",
    ],
    improvements: [
      "Add user authentication for personalized workout data",
      "Implement workout progress tracking over time",
      "Add more detailed exercise information with images or videos",
      "Integrate local storage for offline access",
    ],
  },
];
