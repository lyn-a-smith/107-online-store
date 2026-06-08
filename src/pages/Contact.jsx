// src/pages/Contact.jsx
function Contact() {
    return (
      <div className="container py-5 text-center">
        <h1 className="text-burgundy fw-bold mb-4">Get In Touch</h1>
        <p className="text-secondary mb-5">Interested in commissioning a custom pair? Reach out below.</p>
        
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form className="text-start">
                    <div className="mb-3">
                        <label className="form-label text-light">Name</label>
                        <input type="text" className="form-control bg-dark text-light border-secondary" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light">Email</label>
                        <input type="email" className="form-control bg-dark text-light border-secondary" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light">Inquiry</label>
                        <textarea className="form-control bg-dark text-light border-secondary" rows="4" placeholder="Tell us about your custom design ideas..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-burgundy w-100 mt-2">Send Message</button>
                </form>
            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;