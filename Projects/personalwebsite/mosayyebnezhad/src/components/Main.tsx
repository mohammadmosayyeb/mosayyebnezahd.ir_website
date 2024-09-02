import './Styles/main.css'; // Import the main CSS
import Education from './Education';
import Experience from './Experience';
import Header from './Header';
import Skills from './Skills';





const Pdf = () => {
  return (
    <div className="App" id='resumeContent'>
      <Header />
      <div className="content">
        <Experience />
        <Skills />
      </div>
      <Education />
    </div>
  )
}

export default Pdf