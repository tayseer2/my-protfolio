import Contact from "../4-contact/Contact";
import Header from "../1-header/Header";
import Footer from "../5-footer/Footer";
import "./contactV2.css"



export default function ContactV2() {
  return (
    <div className="container">
      <Header />

        <div className="contactV2">
        <Contact />
        </div>

      <div className="divider"></div>
      <Footer />
    </div>
  )
}
