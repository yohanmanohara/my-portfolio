import { BrowserRouter } from 'react-router-dom'
// Adjust import paths based on your actual project structure
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from  './components';


const App =() => {
 

  return (
    
   
   <BrowserRouter>

    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <Contact />
    <StarsCanvas />
   </BrowserRouter>
    
  )
}

export default App
