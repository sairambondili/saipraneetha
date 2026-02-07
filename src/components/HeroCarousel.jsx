import Countdown from "./Countdown";
import "./hero.css"

const slides = [
  { img: "1", interval: 3000 }, // 2 sec
  { img: "2", interval: 3000 }, // 5 sec
  { img: "3", interval: 3000 }, // 8 sec
];

export default function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade vh-100 position-relative"
      data-bs-ride="carousel"
      data-bs-pause="false"
    >
      <div className="carousel-inner vh-100">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""} vh-100`}
            data-bs-interval={slide.interval}
          >
            <img
              src={`/images/carousel/car${slide.img}.JPG`}
              className="d-block w-100 vh-100 object-fit-cover"
              alt="Engagement"
            />
          </div>
        ))}
      </div>

      <div className="carousel-overlay">
        <Countdown />
      </div>
    </div>
  );
}
