import { useState, useContext } from "react";
import GlobalContext from "../state/globalContext";

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const user = useContext(GlobalContext).user

  function showEmail() {
      setIsEmailVisible(true);
  }

  function hideEmail() {
      setIsEmailVisible(false);
  }

  return (
    <div className="container py-5">
        
        {/* Hero Section */}
        <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-burgundy mb-3">Our Story</h1>
            <p className="lead text-secondary w-75 mx-auto">
                Redefining modern footwear through bold design, precision craftsmanship, and an unapologetic aesthetic.
            </p>
        </div>

        {/* Content Split: Image Left, Text Right */}
        <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
                <img 
                    src="src/assets/about-image.png" 
                    alt="The Design Process" 
                    className="img-fluid rounded border border-secondary shadow" 
                />
            </div>
            <div className="col-md-6 px-md-5">
                <h2 className="fw-bold text-light mb-3">The Vision</h2>
                <p className="text-secondary">
                    Every pair of shoes we create starts with a singular vision: to merge high-end fashion with everyday wearability. We believe that footwear should be more than just functional; it should be a bold statement of individuality.
                </p>
                <p className="text-secondary">
                    Drawing inspiration from modern architecture and sleek, high-contrast aesthetics, our exclusive designs are anchored by our signature palette of deep black, polished silver, and rich burgundy. 
                </p>
            </div>
        </div>

        {/* Brand Pillars / Philosophy */}
        <div className="row text-center mt-5 pt-4 border-top border-secondary">
            <div className="col-md-4 mb-4">
                <div className="card card-custom h-100 p-4 border-0">
                    <h3 className="text-burgundy fw-bold mb-3">Precision</h3>
                    <p className="text-light">
                        Every stitch and silhouette is engineered with absolute exactness, ensuring a flawless fit and a striking profile from every angle.
                    </p>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card card-custom h-100 p-4 border-0">
                    <h3 className="text-burgundy fw-bold mb-3">Materials</h3>
                    <p className="text-light">
                        We source only premium, durable components that stand the test of time, maintaining their sleek finish no matter where you walk.
                    </p>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card card-custom h-100 p-4 border-0">
                    <h3 className="text-burgundy fw-bold mb-3">Exclusivity</h3>
                    <p className="text-light">
                        Our custom runs are strictly limited. When you step into our designs, you are wearing a unique piece of wearable art.
                    </p>
                </div>
            </div>
        </div>

        {/* Email Reveal Section */}
        <div className="text-center mt-5 pt-5 border-top border-secondary">
            <h2 className="fw-bold text-light mb-3">Reach Out</h2>
            
            { 
                (isEmailVisible === true) 
                ? <p className="fs-4 text-burgundy fw-bold">contact@customshoes.com</p> 
                : <p className="text-secondary">Click the button below to reveal our contact email.</p> 
            }
           
            <div className="mt-4">
                <button className="btn btn-outline-secondary me-3" onClick={hideEmail}>Hide Email</button>
                <button className="btn btn-burgundy" onClick={showEmail}>Show Email</button>
            </div>
        </div>

        <div>
            <h2> I am {user.name}</h2>
        </div>

    </div>
  );
}

export default About;