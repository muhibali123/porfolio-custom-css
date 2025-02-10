import "../testimonial/testimonial.css"
import Image from "next/image";
import t1 from "../../../public/images/t1.png"
import t2 from "../../../public/images/t2.png"
import t3 from "../../../public/images/t3.png"

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        {/* Section Heading */}
        <h2 className="section-heading">Customer Testimonials</h2>

        <div className="reviews-link-container">
          

          {/* Testimonials Grid */}
          <div className="testimonials-grid-container">
            <div className="testimonials-background"></div>

            <div className="testimonials-grid">
              {/* Testimonial 1 */}
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-body">
                    {/* Star Rating */}
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="star-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="testimonial-text">
                      <p>
                        “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”
                      </p>
                    </blockquote>
                  </div>

                  {/* Testimonial Author */}
                  <div className="testimonial-author">  
                    <Image src={t1} width={44} height={44} alt="lesile alexander">
                    </Image>
                    <div className="author-info">
                      <p className="author-name">Leslie Alexander</p>
                      <p className="author-role">Freelance React Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-body">
                    {/* Star Rating */}
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="star-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="testimonial-text">
                      <p>
                        “Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.”
                      </p>
                    </blockquote>
                  </div>

                  {/* Testimonial Author */}
                  <div className="testimonial-author">
                    <Image src={t2} width={44} height={44} alt="lesile alexander">
                    </Image>
                    <div className="author-info">
                      <p className="author-name">Jacob Jones</p>
                      <p className="author-role">Digital Marketer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-body">
                    {/* Star Rating */}
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="star-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="testimonial-text">
                      <p>
                        “I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”
                      </p>
                    </blockquote>
                  </div>

                  {/* Testimonial Author */}
                  <div className="testimonial-author">
                    <Image src={t3} width={44} height={44} alt="lesile alexander"></Image>
                    <div className="author-info">
                      <p className="author-name">Jenny Wilson</p>
                      <p className="author-role">Graphic Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Check All Reviews Link */}
          <div className="reviews-link-wrapper">
            <a href="#" className="reviews-link">
              Check all reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}