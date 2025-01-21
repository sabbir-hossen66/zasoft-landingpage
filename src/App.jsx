import About from "./components/about/About"
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Partners from "./components/partners/Partners";
import Services from "./components/services/Services";

function App() {


  return (
    <div className="font-raleway">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
