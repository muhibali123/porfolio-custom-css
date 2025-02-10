import Image from "next/image";
import Mypic from '../../../public/images/mypic.jpg';
import '../about/about.css'

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="grid">
          {/* Image Section */}
          <div className="image-section">
            <Image src={Mypic} width={502} height={465} alt="mypic" className="image-section img" />
          </div>

          {/* Content Section */}
          <div className="content-section">
            <div>
              <h2 className="heading">About Me</h2>

              <p className="paragraph">
              Passionate UI/UX designer with a knack for creating user-friendly designs. Skilled in tools like Tailwind CSS, Next.js, and TypeScript, I craft seamless interfaces. Driven by curiosity and dedication, I aim to enhance user experiences through creative problem-solving. Constantly learning, exploring, and designing impactful solutions.
              </p>

              {/* Buttons */}
              <div className="buttons">
                <a href="#" className="button-primary">
                  Hire Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.50295 4.99634L12.5032 9.99654L7.5 14.9997"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#" className="button-secondary">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.50295 4.99634L12.5032 9.99654L7.5 14.9997"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="stats">
                <div>
                  <h4 className="stat-heading">40+</h4>
                  <p className="stat-text">Total Projects</p>
                </div>
                <div>
                  <h4 className="stat-heading">05</h4>
                  <p className="stat-text">Total Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}