import { Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';
import "./App.css";
import ShopByCategory from './components/ShopByCategory';
import HomepagePage from "./pages/HomepagePage";
import DogsPage from "./pages/DogsPage";
import CatsPage from "./pages/CatsPage";
import SmallPetsPage from "./pages/SmallPetsPage";
import BirdsPage from "./pages/BirdsPage";
import FishPage from "./pages/FishPage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomepagePage />} />
        <Route path="/pets/dogs" element={<DogsPage />} />
        <Route path="/pets/cats" element={<CatsPage />} />
        <Route path="/pets/smallPets" element={<SmallPetsPage />} />
        <Route path="/pets/birds" element={<BirdsPage />} />
        <Route path="/pets/fish" element={<FishPage />} />
        <Route path="/pets/:productId" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;