import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {

  return (
    <>
      <Header />
      <main className="text-black">
        <AboutMe />
        <Services />
      </main>
    </>
  )
}

export default App
