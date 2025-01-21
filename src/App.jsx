import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Partners from "./components/partners/Partners";
import Services from "./components/services/Services";

function App() {


  return (
    <div className="font-raleway">
      <Navbar />
      <About />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
