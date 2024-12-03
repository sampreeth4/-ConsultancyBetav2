import React, { useState } from "react";
import "/styles/Testimonials.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      quote: "The best consultants are disciplined, humble, patient, self-assured and self-aware.",
      source: "The Expert Guide to Starting a Successful Consulting Business",
      link: "https://www.wix.com/blog",
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      source: "Henry David",
      link: "https://example.com/success",
    },
    {
      quote: "Don’t be afraid to give up the good to go for the great.",
      source: "John D. Rockefeller",
      link: "https://example.com/greatness",
    },
    {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      source: "Steve Jobs",
      link: "https://example.com/steve-jobs",
    },
    {
      quote: "Hard work beats talent when talent doesn’t work hard.",
      source: "Tim Notke",
      link: "https://example.com/hard-work",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-slide">
        <div className="carousel-quote-box">
          <p className="quote">"{slides[currentSlide].quote}"</p>
          <p className="source">
            {slides[currentSlide].source}{" "}
          </p>
          {/* <p>
            <a href={slides[currentSlide].link} target="_blank" rel="noopener noreferrer">
                Wix blog
            </a>
          </p> */}
        </div>
      </div>
      <button className="carousel-arrow" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Testimonials;
