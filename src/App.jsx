import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from './components/Footer'
import ContactMe from "./components/ContactMe";
import Testimonials from "./components/Testimonials";

function App() {

  return (
    <>
      <Header />
      <main className="text-black">
        <AboutMe />
        <Services />
        <ContactMe />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App
