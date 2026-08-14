import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import OurAchievements from "./components/OurAchievements.jsx";
import SchoolStats from "./components/SchoolStats.jsx";
import { faqData } from "./data/faqData.js";


/* ── Hero Carousel Data ─────────────────────────────────────────────────── */
const heroCarouselImages = [
  {
    src: "/assets/images/graduation/graduation_photo_7.jpg",
    alt: "graduands",
    subtitle: "Virgo Praedicanda International School, Port Harcourt",
    title: "Raising Lights for the World",
    description:
      "World-Class British & Nigerian Curriculum | Cambridge International School | WAEC, SAT & IELTS Ready",
  },
  {
    src: "/assets/images/sports.png",
    alt: "Students during class activities",
    subtitle: "hybrid Curriculum",
    title: "Building Future Leaders",
    description:
      "Cambridge International and Pearson Edexcel programs preparing students for global opportunities.",
  },
  {
    src: "/assets/images/carousel1.png",
    alt: "Students engaging in collaborative learning",
    subtitle: "Christian Values",
    title: "Inspiring Young Minds",
    description:
      "Faith-based education building strong moral character and spiritual foundation.",
  },
  {
    src: "./assets/images/chinda.jpeg",
    alt: "Smiling students on campus",
    subtitle: "Proven Excellence",
    title: "Every Child Matters",
    description:
      "98 medals won this year in academic competitions and inter-house sports.",
  },
];

/* ── Hero Carousel Component ────────────────────────────────────────────── */
const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroCarouselImages.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % heroCarouselImages.length);
  };

  return (
    <div className="hero-carousel" data-aos="fade-up" data-aos-delay="200">
      {heroCarouselImages.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          <div className="hero-overlay" />

          <div className="hero-content">
            <p>{slide.subtitle}</p>
            <h2>{slide.title}</h2>
            <span>{slide.description}</span>

            <div className="hero-buttons">
              <a
                href="https://wa.me/2349132554783?text=Hello!%20I%27d%20like%20to%20book%20a%20school%20tour."
                className="hero-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a School Tour
              </a>
              <Link to="/admissions" className="hero-btn-secondary">Apply Now</Link>
              <a
                href="/assets/files/VPIS PROSPECTUS 2026-2027 ACADEMIC SESSION (1).pdf"
                className="hero-btn-secondary"
                download
              >
                Download Prospectus
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Hero Manual Arrows */}
      <button className="hero-arrow hero-prev" onClick={goToPrev} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="hero-arrow hero-next" onClick={goToNext} aria-label="Next slide">
        &#10095;
      </button>

      {/* Hero Dots */}
      <div className="hero-carousel-dots">
        {heroCarouselImages.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Accreditation Badges Section ──────────────────────────────────────── */
const accreditationBadges = [
  {
    src: "/assets/images/cambridge.png",
    alt: "Cambridge Assessment International Education",
    aos: "fade-right",
  },
  {
    src: "/assets/images/pearson.jpg",
    alt: "Pearson Edexcel",
    aos: "fade-down",
  },
  {
    src: "/assets/images/scholastic.jpg",
    alt: "Scholastic",
    aos: "fade-left",
  },
  {
    src: "/assets/images/rivers.png",
    alt: "Rivers State Ministry of Education",
    aos: "fade-right",
  },
  {
    src: "/assets/images/af.png",
    alt: "Alliance Française",
    aos: "fade-down",
  },
];

const AccreditationBadges = () => (
  <section className="accreditation-section">
    <div className="container">
      <p
        className="accreditation-label"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Accredited by:
      </p>
      <div
        className="accreditation-badge"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {accreditationBadges.map((badge, i) => (
          <img
            key={badge.src}
            className={badge.mono ? "mono-logo" : undefined}
            src={badge.src}
            alt={badge.alt}
            loading="lazy"
            decoding="async"
            data-aos={badge.aos}
            data-aos-delay={300 + i * 100}
          />
        ))}
      </div>
    </div>
  </section>
);


/* ── Why VPIS Section ──────────────────────────────────────────────── */
const WhyVPIS = () => (
  <section className="why-vpis-section">
    <div className="container">
      <div className="why-vpis-layout" data-aos="fade-up">
        <div className="why-vpis-content">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-heading-left">Why VPIS</h2>
          <p className="why-vpis-lead">
            At Virgo Praedicanda International School, we don't just prepare students for exams. 
            We prepare them for life, leadership, and global impact.
          </p>
          <p className="why-vpis-highlight">
            Every child at VPIS is <strong>discovered, developed, and deployed for greatness</strong> through 
            academic excellence, Christian character, and faith in God.
          </p>
        </div>
        <div className="why-vpis-image">
          <img
            src="/assets/images/celebration.png"
            alt="Students in classroom at VPIS"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ── Academic Advantage Section ─────────────────────────────────────────── */
const AcademicAdvantage = () => (
  <section className="academic-advantage-section">
    <div className="container">
      <div className="advantage-layout" data-aos="fade-up">
        <div className="advantage-image">
          <img
            src="/assets/images/competitions/bee/school_photo_52.jpg"
            alt="Students at academic competition"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="advantage-content">
          <p className="section-label">Excellence in Education</p>
          <h2 className="section-heading-left">Our Academic Advantage</h2>
          <h3 className="advantage-subtitle">The Dual-Pathway to Global Universities</h3>
          <ul className="advantage-list">
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Primary:</strong> Pearson Edexcel iPrimary Curriculum</span>
            </li>
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Secondary:</strong> Cambridge International - Checkpoint & IGCSE</span>
            </li>
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Global Exams:</strong> WAEC, SAT, IELTS</span>
            </li>
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Coming Soon:</strong> Sixth Form College with UK Partner</span>
            </li>
          </ul>
          <p className="advantage-conclusion">
            With VPIS, your child has access to top universities in Nigeria, UK, US, Canada, and beyond.
          </p>
          <Link to="/academics" className="btn-advantage">Explore Our Curriculum</Link>
        </div>
      </div>
    </div>
  </section>
);

/* Removed unused component - LifeAtVPIS */

/* ── Proprietor Message Preview ─────────────────────────────────────────── */
const ProprietorPreview = () => (
  <section className="proprietor-preview-section">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <p>Leadership Vision</p>
        <h2>Message from Proprietoress</h2>
      </div>
      <div className="proprietor-preview-content" data-aos="fade-up" data-aos-delay="100">
        <blockquote className="proprietor-quote">
          "At VPIS, we believe every child is a gift from God and a solution to the world. 
          Our goal is to raise leaders who are brilliant, rooted in faith, and ready to transform society."
        </blockquote>
        <p className="proprietor-attribution">
          <strong>- Dr. C.V. Dimmwobi, Proprietoress</strong>
        </p>
        <Link to="/proprietor-message" className="btn-proprietor">Read Full Message</Link>
      </div>
    </div>
  </section>
);

/* ── Documents Preview Section ──────────────────────────────────────────── */
const DocumentsPreview = () => {
  const featuredDocuments = [
    {
      title: "School Prospectus 2026-2027",
      description: "Comprehensive guide to VPIS programs and facilities",
      icon: "document",
      downloadUrl: "/assets/files/VPIS PROSPECTUS 2026-2027 ACADEMIC SESSION (1).pdf"
    },
    {
      title: "Admission Form",
      description: "Begin your application to VPIS",
      icon: "form",
      downloadUrl: "/assets/files/admission form.pdf"
    },
    {
      title: "Year Book 2026",
      description: "Celebrating our students' achievements",
      icon: "book",
      downloadUrl: "/assets/files/YEAR BOOK 2026..pdf"
    }
  ];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'document':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        );
      case 'form':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        );
      case 'book':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="documents-preview-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <p>Resources & Downloads</p>
          <h2>Important Documents</h2>
        </div>
        
        <div className="documents-preview-grid" data-aos="fade-up" data-aos-delay="100">
          {featuredDocuments.map((doc, index) => (
            <div key={index} className="document-preview-card" data-aos="fade-up" data-aos-delay={100 + index * 100}>
              <div className="document-preview-icon">
                {renderIcon(doc.icon)}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <a href={doc.downloadUrl} download className="document-preview-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
            </div>
          ))}
        </div>

        <div className="documents-preview-cta" data-aos="fade-up" data-aos-delay="400">
          <Link to="/resources" className="btn-proprietor">View All Documents</Link>
        </div>
      </div>
    </section>
  );
};

/* ── Final CTA Section ──────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="final-cta-section">
    <div className="container">
      <div className="final-cta-content" data-aos="fade-up">
        <h2>Give Your Child the VPIS Advantage</h2>
        <p>Limited spaces available for 2026/2027 Academic Session.</p>
        <div className="final-cta-buttons">
         <Link to="/admissions" className="cta-shared-btn cta-shared-btn--primary"> Apply now </Link>
          <a 
            href="https://wa.me/2349132554783?text=Hello!%20I%27d%20like%20to%20learn%20more%20about%20VPIS." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cta-secondary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* This section has been removed - content consolidated into other sections */

/* ── Academic Excellence Section ───────────────────────────────────────── */
const academicImages = [
  "/assets/images/graduation/graduation_photo_1.jpg",
  "/assets/images/graduation/graduation_photo_2.jpg",
  "/assets/images/graduation/graduation_photo_3.jpg",
];

const AcademicExcellence = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % academicImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="academic-excellence-section">
      <div className="container">
        <div className="academic-excellence-layout" data-aos="fade-up">
          <div className="academic-excellence-content">
            <p className="academic-excellence-label">Who We Are</p>
            <h2 className="academic-excellence-title">
              Excellence In Academics And Life
            </h2>
            <p className="academic-excellence-text">
              Virgo Praedicanda International School is a leading co-educational institution in Port Harcourt, Nigeria, committed to academic excellence, character formation, and global leadership development. Our name, <em>Virgo Praedicanda</em> — "The Virgin to be Proclaimed" — reflects our vision of raising exceptional children who will shine as lights in the world.
            </p>
            <p className="academic-excellence-text">
              We provide a world-class education that blends rigorous academics with strong moral and spiritual foundations, preparing our students to lead and serve with distinction both in Nigeria and across the globe.
            </p>
            <p className="academic-excellence-text">
              At VPIS, we deliver a <strong>hybrid-curriculum approach</strong> that gives our students the best of both worlds:
            </p>
            <ul className="academic-excellence-list">
              <li><strong>Primary School:</strong> British Pearson Edexcel iPrimary Curriculum</li>
              <li><strong>Secondary School:</strong> Cambridge International — Cambridge Checkpoint &amp; IGCSE</li>
              <li><strong>Examinations:</strong> WAEC, SAT, and IELTS — multiple pathways to universities in Nigeria, the UK, US, Canada, and beyond</li>
            </ul>
            <p className="academic-excellence-text">
              With a dedicated faculty, state-of-the-art facilities, and a student-centred approach, every child at VPIS is discovered, developed, and deployed for greatness. We are also advancing a proposed Sixth Form College in partnership with leading UK institutions, providing seamless pathways for A-Levels and university placement.
            </p>
          </div>
          <div className="academic-excellence-carousel">
            <div className="academic-carousel-track">
              {academicImages.map((src, i) => (
                <div
                  key={i}
                  className={`academic-carousel-slide ${i === currentImage ? "active" : ""}`}
                >
                  <img
                    src={src}
                    alt={`Academic excellence showcase ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Testimonials Section ───────────────────────────────────────────────── */
const feedbackData = [
  {
    quote:
      "VIRGO PRAEDICANDA INTERNATIONAL SCHOOL is a really wonderful school which indeed builds global champions and ensures a child is competitive. Your kid can never go there and remain dumb but they will make the child the best both morally and academically.",
    name: "ABIED Books HUB",
    initials: "A",
  },
  {
    quote:
      "For the period of time my son has spent in VIRGO PRAEDICANDA INTERNATIONAL SCHOOL there has been a lot of progress in his Academics. Therefore, I consider VIRGO PRAEDICANDA INTERNATIONAL SCHOOL as one of the best schools in Portharcourt.",
    name: "Pat Enosareba",
    initials: "P",
  },
  {
    quote:
      "This is a school every well meaning Nigerians and foreigners should attend due to its high standard and quality delivery. You get more value both in character and learning. A trial will convince you.",
    name: "Mr. N. Ikechukwu",
    initials: "M",
  },
  {
    quote:
      "VIRGO PRAEDICANDA INTERNATIONAL SCHOOL, from the short time I have spent knowing it, is a school with class. It's exciting to see and experience the high standards upheld in VIRGO PRAEDICANDA INTERNATIONAL SCHOOL, from leadership to staff to every child in the school, nothing is taken for granted, excellence is the watch word here.",
    name: "Tobor Chunu",
    initials: "T",
  },
  {
    quote:
      "They offer sound academic services. An amazing school for every child.",
    name: "Mr. David B",
    initials: "D",
  },
  {
    quote:
      "The school is amazing, my son won two awards because of their teachers. VIRGO PRAEDICANDA INTERNATIONAL SCHOOL is the best school in the world.",
    name: "Amarachi Alabraba",
    initials: "A",
  },
];

const Testimonials = () => (
  <section className="section testimonials-section" id="testimonials">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Why Parents Choose VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</h2>
      </div>
      <div className="testimonial-grid-open">
        {feedbackData.map((item, i) => (
          <div
            className="testimonial-open-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={50 + i * 80}
          >
            <p className="testimonial-open-quote">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="testimonial-open-author">
              <div className="testimonial-author-circle">{item.initials}</div>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── VPIS Gallery ───────────────────────────────────────────────────────── */
const galleryImages = [
  "/assets/images/farm/school_photo_78.jpg",
  "/assets/images/art/school_photo_69.jpg",
  "/assets/images/excursion/excursion 1.jpeg",
  "/assets/images/interhouse/school_photo_35.jpg",
  "/assets/images/home_econs/school_photo_45.jpg",
  "/assets/images/literacy/financial/school_photo_22.jpg",
  "/assets/images/competitions/science/school_photo_54.jpg",
  "/assets/images/literacy/book_day/school_photo_17.jpg",
  "/assets/images/literacy/dental/school_photo_23.jpg",
];

const VPISGallery = () => (
  <section className="vpis-gallery-section" id="gallery">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <p>Campus Life</p>
        <h2>VPIS Gallery</h2>
      </div>

      <div className="gallery-grid-3x3">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="gallery-item-simple"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <img
              src={src}
              alt={`Campus activities gallery image ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="gallery-cta" data-aos="fade-up" data-aos-delay="200">
        <Link to="/vpis-pictures" className="btn-gallery">See Full Gallery</Link>
      </div>
    </div>
  </section>
);

/* ── FAQ Section ─────────────────────────────────────────────────────────── */
const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <p>Have Questions?</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-intro" data-aos="fade-up" data-aos-delay="100">
          <p>
            Find answers to common questions about Virgo Praedicanda International School. 
            If you need more information, please don't hesitate to contact us.
          </p>
        </div>

        <div className="faq-list" data-aos="fade-up" data-aos-delay="200">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndexes.includes(index) ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndexes.includes(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndexes.includes(index) ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Contact Section ────────────────────────────────────────────────────── */
const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="container">
      <h2 className="contact-heading" data-aos="fade-up">
        Contact Us
      </h2>
      <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
        <div className="contact-campuses-grid">
          <div className="contact-img-wrap">
            <img
              src="/assets/images/chinda.jpeg"
              alt="Virgo Praedicanda Woji campus building exterior"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4>Our Campuses</h4>
              <p>
                <strong>Campus 1 (Woji):</strong>
                <br />
                No 9 Marina Close, Woji
                <br />
                Port Harcourt, Rivers State, Nigeria
              </p>
              <br />
              <p>
                <strong>Campus 2 (Chinda):</strong>
                <br />
                No 100 Chinda, Ada George
                <br />
                Port Harcourt, Rivers State, Nigeria
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.17-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h4>Phone</h4>
              <p>
                <a href="tel:+2349132554783">+234 913 255 4783</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:Virgopraedicandaintschool@gmail.com">Virgopraedicandaintschool@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── School Brand Banner ────────────────────────────────────────────────── */
const SchoolBrand = () => (
  <section className="school-brand-section">
    <div className="school-brand-inner">
      <img
        src="/assets/images/logo.png"
        className="school-brand-logo"
        alt="Virgo Praedicanda official school logo"
        loading="lazy"
        decoding="async"
      />
      <h2 className="school-brand-name">
        VIRGO PRAEDICANDA INTERNATIONAL SCHOOL
      </h2>
      <p className="school-brand-tagline">Raising Lights for the World</p>
      <p className="school-brand-desc">
        An independent Christian school committed to inspiring and nurturing
        excellent children for global impact — developing young men and women
        with active minds, compassion, and strong character rooted in faith.
      </p>
    </div>
  </section>
);

/* Removed unused component - RecentCompetitions */

/* ── App Component ──────────────────────────────────────────────────────── */
function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AccreditationBadges />
      <WhyVPIS />
      <AcademicAdvantage />
      <AcademicExcellence />
      <OurAchievements />
      <SchoolStats />
      <Testimonials />
      <ProprietorPreview />
      <VPISGallery />
      <DocumentsPreview />
      <FAQSection />
      <FinalCTA />
      <Contact />
      <SchoolBrand />
      <Footer />
    </>
  );
}

export default App;