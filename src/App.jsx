import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from './components/Footer'
import ContactMe from "./components/ContactMe";
import CookieBanner from "./components/Coockies";
// import Testimonials from "./components/Testimonials";

function App() {

  return (
    <div className="relative">
      <Header />
      <main className="text-black">
        <AboutMe />
        <Services />
        <ContactMe />
        {/* <Testimonials /> */}
      </main>
      <Footer />
      <CookieBanner/>
    </div>
  )
}

export default App
