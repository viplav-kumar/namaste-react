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
      <h3 className="text-3xl font-semibold text-[#222] border-b-2 border-[#eee] font-[Segoe UI, Tahoma, sans-serif] mb-5 pb-2.5">
        {title}
      </h3>
      <div className="relative flex text-center w-full max-w-270 m-[0px auto]">
        <button
          className="absolute translate-y-[-50%]  bg-[#ffffff] text-[#000000] border-none p-3 rounded-full text-2xl cursor-pointer transition-opacity duration-300 ease-in-out z-2 top-17.5 -left-6.25"
          onClick={() => scroll("left")}
        >
          &#8592;
        </button>

        <div
          className="flex gap-15 overflow-x-hidden scroll-smooth flex-1 p-2.5"
          ref={scrollRef}
        >
          {images.map((item, index) => (
            <nav
              className="flex flex-col items-center min-w-25 cursor-pointer transition-transform transition-shadow duration-250 ease-in-out hover:-translate-y-1 hover:scale-105 animate-fadeIn"
              key={item.id ? item.id : index}
            >
              {title === "Top brands for you" ? (
                <Link className="no-underline" to={"/restaurant/" + item.id}>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-30 h-25 rounded-full object-cover border-solid border-2 border-[#f1f1f1] shadow-[0 2px 10px rgba(0, 0, 0, 0.08)] transition-shadow transition-colors duration-300 ease-in-out hover:shadow-[0 4px 16px rgba(0, 0, 0, 0.15)] hover:border-[#ff9800]"
                  />
                  <div className="mt-2.5 text-base font-medium text-[#333] text-center tracking-[0.2px]">
                    {item.label}
                  </div>
                </Link>
              ) : (
                <div>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-30 h-25 rounded-full object-cover border-solid border-2 border-[#f1f1f1] shadow-[0 2px 10px rgba(0, 0, 0, 0.08)] transition-shadow transition-colors duration-300 ease-in-out hover:shadow-[0 4px 16px rgba(0, 0, 0, 0.15)] hover:border-[#ff9800]"
                  />
                  <div className="mt-2.5 text-base font-medium text-[#333] text-center tracking-[0.2px]">
                    {item.label}
                  </div>
                </div>
              )}
            </nav>
          ))}
        </div>

        <button
          className="absolute translate-y-[-50%] bg-[#ffffff] text-[#000000] border-none p-3 rounded-full text-2xl cursor-pointer transition-opacity duration-300 ease-in-out z-2 top-17.5 -right-6.25"
          onClick={() => scroll("right")}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
