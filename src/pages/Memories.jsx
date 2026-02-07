export default function Memories() {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Our Memories ❤️</h2>
      <div className="row g-4">
        {[...Array(4)].map((_, i) => (
          <div className="col-md-3 col-6" key={i}>
            <img src={`/images/mem/mem${i+1}.jpeg`} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
  );
}
