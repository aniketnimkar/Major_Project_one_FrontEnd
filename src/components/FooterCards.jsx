const FooterCards = () => {
  return (
    <div>
      <section>
        <div className="container my-4">
          <div className="row">
            {/* !-- First Card --> */}
            <div className="col-md-6">
              <div className="card bg-light mb-4 h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1584043720379-b56cd9199c94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid h-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex flex-column">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h6 className="card-subtitle mb-2 text-muted">
                          New Arrivals
                        </h6>
                      </div>
                      <div className="mt-auto">
                        <h5 className="card-title"><strong>Summer Collection</strong></h5>
                        <p className="card-text">
                          Check out our best summer collection to stay cool in
                          this season.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Second Card --> */}
            <div className="col-md-6">
              <div className="card bg-light mb-4 h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1628015081036-0747ec8f077a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid h-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex flex-column">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h6 className="card-subtitle mb-2 text-muted">
                          New Arrivals
                        </h6>
                      </div>
                      <div className="mt-auto">
                        <h5 className="card-title"><strong>Winter Collection</strong></h5>
                        <p className="card-text">
                          Check out our best winter collection to stay warm in
                          this season.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterCards;
