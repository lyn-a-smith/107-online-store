import { BrowserRouter, Routes, Route} from 'react-router';

import About from "./pages/About";
import Admin from "./pages/Admin";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import HelloMessage from "./components/HelloMessage";
import Footer from "./components/footer";
import NavBar from "./components/NavBar";

import GlobalProvider from './state/globalProvider';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <NavBar />

        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes> 
        </main>

        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;