import { useState, useEffect } from 'react';
import { fetchCSVData } from './utils/csvHelper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState({
    details: [],
    education: [],
    experience: [],
    projects: [],
    skills: [],
    contact: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [details, education, experience, projects, skills, contact] = await Promise.all([
          fetchCSVData('details.csv'),
          fetchCSVData('education/education.csv'),
          fetchCSVData('experience/experience.csv'),
          fetchCSVData('project/project.csv'),
          fetchCSVData('skills.csv'),
          fetchCSVData('contact/contact.csv')
        ]);

        setData({ details, education, experience, projects, skills, contact });
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <div className="app">
      <Navbar contact={data.contact} />
      <div className="main-timeline-container">
        <Hero details={data.details} contact={data.contact} />
        <Skills skills={data.skills} />
        <Education education={data.education} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact contact={data.contact} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
