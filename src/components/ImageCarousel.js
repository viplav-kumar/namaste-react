import { useRef } from "react";
import { Link } from "react-router-dom";

const ImageCarousel = ({ images, title }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 480;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h3 className="carouselTitle">{title}</h3>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8592;
        </button>

        <div className="image-track" ref={scrollRef}>
          {images.map((item, index) => (
            <nav className="image-item" key={item.id ? item.id : index}>
              {title === "Top brands for you" ? (
                <Link to={"/restaurant/" + item.id}>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="carousel-image"
                  />
                  <div className="image-label">{item.label}</div>
                </Link>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="carousel-image"
                  />
                  <div className="image-label">{item.label}</div>
                </>
              )}
            </nav>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
