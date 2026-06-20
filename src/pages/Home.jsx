
import { Link } from 'react-router';

function Home() {
  return (
    <div className="container-fluid p-0">
      
      {/* Hero Landing Section */}
      <div 
        className="text-center py-5 border-bottom border-secondary d-flex flex-column justify-content-center align-items-center" 
        style={{ minHeight: '60vh', backgroundColor: '#0a0a0a' }}
      >
        <h1 className="display-3 fw-bold text-light mb-3">
          Step Into <span className="text-burgundy">Excellence</span>
        </h1>
        <p className="lead text-secondary w-75 w-md-50 mb-5">
          Discover exclusive, custom-designed footwear crafted for those who walk their own path. 
        </p>
        
        {/* SPA Routing Link to Catalog */}
        <Link to="/catalog" className="btn btn-burgundy btn-lg px-5 py-3 text-uppercase fw-bold shadow-lg">
          Shop The Collection
        </Link>
      </div>

      {/* Featured Products Section */}
      <div className="container py-5 mt-4">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="fw-bold text-light text-uppercase mb-2">Featured Designs</h2>
            <p className="text-secondary">Signature pieces from our latest drop.</p>
          </div>
        </div>

        <div className="row justify-content-center gap-4">
          
          {/* Feature 1: The Midnight Runner */}
          <div className="col-md-5 mb-4">
            <div className="card card-custom h-100 border-secondary">
              <img 
                src="src\assets\midnight-runner.png" 
                className="card-img-top border-bottom border-secondary" 
                alt="The Midnight Runner" 
              />
              <div className="card-body text-center p-4 d-flex flex-column">
                <h4 className="card-title text-light fw-bold">The Midnight Runner</h4>
                <p className="card-text text-secondary mb-4">
                  Engineered for absolute performance and stealthy aesthetics.
                </p>
                <Link to="/catalog" className="btn btn-outline-secondary mt-auto w-100">
                  View in Catalog
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 2: Obsidian Loafer */}
          <div className="col-md-5 mb-4">
            <div className="card card-custom h-100 border-secondary">
              <img 
                src="src\assets\obsidian-loafer.png" 
                className="card-img-top border-bottom border-secondary" 
                alt="Obsidian Loafer" 
              />
              <div className="card-body text-center p-4 d-flex flex-column">
                <h4 className="card-title text-light fw-bold">Obsidian Loafer</h4>
                <p className="card-text text-secondary mb-4">
                  Redefining formal wear with deep contrasts and premium materials.
                </p>
                <Link to="/catalog" className="btn btn-outline-secondary mt-auto w-100">
                  View in Catalog
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default Home;