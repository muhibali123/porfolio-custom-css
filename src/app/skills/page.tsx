import Image from 'next/image';
import '../skills/skill.css'; // Import the CSS file

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-subtitle">My Skills</p>
        </div>
        <h2 className="skills-title">My Expertise</h2>
        
        <div className="skills-cards-container">
          {/* Card 1: Strategy & Direction */}
          <div className="skill-card">
            <div className="skill-image-container">
              <Image
                src="/images/Strategy_and_Direction_6b8ea36dd8_13f6c99746.png"
                alt="Strategy & Direction"
                width={80}
                height={80}
              />
            </div>
            <h4 className="skill-card-title">Design Strategy</h4>
            <div className="skill-card-description">
              Formulating impactful strategies to create cohesive and user-driven design experiences
            </div>
          </div>

          {/* Card 2: Branding & Logo */}
          <div className="skill-card">
            <div className="skill-image-container">
              <Image
                src="/images/Branding_and_Logo_f01c981c19_27e9d05f5c.png"
                alt="Branding & Logo"
                width={80}
                height={80}
              />
            </div>
            <h4 className="skill-card-title">Branding & Identity</h4>
            <div className="skill-card-description">
              Building unique brand identities that resonate with audiences and leave lasting impressions.
            </div>
          </div>

          {/* Card 3: UI & UX Design */}
          <div className="skill-card">
            <div className="skill-image-container">
              <Image
                src="/images/UI_and_UX_Design_7c9da6264e_6d9117dbf9.png"
                alt="UI & UX Design"
                width={80}
                height={80}
              />
            </div>
            <h4 className="skill-card-title">UI & UX Design</h4>
            <div className="skill-card-description">
              Designing intuitive and engaging interfaces, driven by user-centered research and testing.
            </div>
          </div>

          {/* Card 4: Webflow Development */}
          <div className="skill-card">
            <div className="skill-image-container">
              <Image
                src="/images/Webflow_Development_e3db087c0e_8ae8e835e3.png"
                alt="Webflow Development"
                width={80}
                height={80}
              />
            </div>
            <h4 className="skill-card-title">Website Development</h4>
            <div className="skill-card-description">
              Transforming designs into fully responsive, dynamic websites with Development powerful tools.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}