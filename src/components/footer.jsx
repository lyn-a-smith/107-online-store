import './footer.css';

function Footer() {
    return (
        <footer className="bg-dark text-light fs-6 p-1 d-flex justify-content-between">
            <h2 className='fs-5'>© 2026 My Online Store</h2>

            <nav className='d-flex gap-3 me-3'>
                <a className='text-light decoration-none' href="#">Home</a>
                <a className='text-light decoration-none' href="#">About</a>
                <a className='text-light decoration-none' href="#">Contact</a>
                <a className='text-light decoration-none' href="#">Catalog</a>
            </nav>
        </footer>
    );
}

export default Footer;