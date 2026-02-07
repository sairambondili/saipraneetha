import memories from "./memories_data.jsx";

function Memories() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Memories 💞</h2>

      <div className="row g-4">
        {memories.map((item, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="media-card">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  className="img-fluid"
                  alt="memory"
                />
              ) : (
                <video
                  className="w-100"
                  controls
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memories;
