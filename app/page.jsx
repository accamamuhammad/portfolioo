import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <main>
      <Nav />
      <h1 className="text-blue-500">Home page</h1>
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default HomePage;
