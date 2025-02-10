import Image from "next/image";
import Mypic from '../../../public/images/mypic.jpg';
import '../header/header.css'; // Import custom CSS file

export default function Header() {
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-grid">
          {/* Left Section */}
          <div className="left-section">
            <div className="text-container">
              <p className="intro-text">
                Hey, I am Muhib Ali Siddiqui
              </p>
            </div>

            <div className="heading-container">
              <h1 className="main-heading">
                I create <span className="highlight-text">Web designs</span>
                <br />
                and Brand Stories.
              </h1>
              <p className="description-text">
                Crafting seamless digital experiences that blend creativity, functionality, and user-centric design to elevate brands and engage audiences
              </p>
            </div>

            <div className="button-container">
              <div className="button-wrapper">
                <a
                  href="#"
                  title=""
                  className="cta-button"
                  role="button"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <Image src={Mypic} width={502} height={465} alt="mypic" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}