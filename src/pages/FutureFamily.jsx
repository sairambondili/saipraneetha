export default function FutureFamily() {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Future Family 👨‍👩‍👧</h2>
      <div className="row g-4 justify-content-center">
        {[...Array(1)].map((_, i) => (
          <div className="col-md-3 col-6" key={i}>
            <img src={`/images/fam${i+1}.jpg`} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
  );
}
