import { useRef } from "react";

const ImageCascader = ({ images, cascaderTitle }) => {
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
      <h3 className="FoodTypeChooserMsg">{cascaderTitle}</h3>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8592;
        </button>

        <div className="image-track" ref={scrollRef}>
          {images.map((item, index) => (
            <div className="image-item" key={item.id ? item.id : index}>
              <img src={item.src} alt={item.label} className="carousel-image" />
              <div className="image-label">{item.label}</div>
              <div className="image-label">{item.deliveryTime}</div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageCascader;
