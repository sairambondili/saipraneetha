export default function Engagement() {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Our Engagment 👨‍👩‍👧</h2>
      <div className="row g-4 justify-content-center">
        {[...Array(6)].map((_, i) => (
          <div className="col-md-3 col-6" key={i}>
            
            <img src={`/images/eng/eng${i+1}.JPG`} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
  );
}
