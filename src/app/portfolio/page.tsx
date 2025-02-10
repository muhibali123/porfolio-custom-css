import '../portfolio/portfolio.css'


export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="container">
        {/* Section Heading */}
        <h2 className="section-heading">
          My Portfolio
        </h2>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {/* Portfolio Item 1 */}
          <div className="portfolio-item">
            <div className="image-container">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/84a3eb212444479.6734ed929e730.png"
                alt="Feature tailwind section"
                className="portfolio-image"
              />
            </div>
            <div className="content">
              <div className="flex-container">
                <h4 className="title">
                  Designer Portfolio
                </h4>
                <a
                  href="https://www.behance.net/muhibopgaming"
                  className="portfolio-link"
                >
                  View In Behance
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="link-icon"
                  >
                    <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                  </svg>
                </a>
              </div>
              <p className="description">
              Showcasing creativity and design expertise in one elegant space.
              </p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="portfolio-item">
            <div className="image-container">
              <img
                src="https://website-builderx-assets.s3.ap-south-1.amazonaws.com/Image_60722bc0d4_d062808397.png?updated_at=2024-11-13T18:24:02.075Z"
                alt="Feature tailwind section"
                className="portfolio-image"
              />
            </div>
            <div className="content">
              <div className="flex-container">
                <h4 className="title">
                  App Dashboard
                </h4>
                <a
                  href="#"
                  className="portfolio-link"
                >
                  View In Dribbble
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="link-icon"
                  >
                    <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                  </svg>
                </a>
              </div>
              <p className="description">
              A seamless, user-friendly interface for efficient data management.
              </p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="portfolio-item">
            <div className="image-container">
              <img
                src="https://website-builderx-assets.s3.ap-south-1.amazonaws.com/Image_a99128c240_068101d94f.png?updated_at=2024-11-13T18:24:02.162Z"
                alt="Feature tailwind section"
                className="portfolio-image"
              />
            </div>
            <div className="content">
              <div className="flex-container">
                <h4 className="title">
                  Easy Rent
                </h4>
                <a
                  href="#"
                  className="portfolio-link"
                >
                  View In Dribbble
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="link-icon"
                  >
                    <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                  </svg>
                </a>
              </div>
              <p className="description">
              Simplifying the way you find and manage rental properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}