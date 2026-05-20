import Catalog from "./pages/Catalog";

import HelloMessage from "./components/HelloMessage";
import Footer from "./components/footer";
import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />

      <Catalog />

      <Footer />
    </div>
  );
}

export default App;