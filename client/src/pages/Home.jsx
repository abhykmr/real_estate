// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import CurrentProjects from "../components/CurrentProjects";
import projects from "../data/projects"; // Import centralized projects data

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CurrentProjects projects={projects} />
    </div>
  );
};

export default Home;
