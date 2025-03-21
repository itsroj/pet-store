import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomepagePage from "./pages/HomepagePage";
import DogsPage from "./pages/DogsPage";
import CatsPage from "./pages/CatsPage";
import SmallPetsPage from "./pages/SmallPetsPage";
import BirdsPage from "./pages/BirdsPage";
import FishPage from "./pages/BirdsPage";
import DetailsPage from ".pages/DetailsPage";
import AboutPage from ".pages/AboutPage";
import AdminsPage from ".pages/AdminsPage";
import NotFoundPage from "./pages/NotFoundPage";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomepagePage />} />
        <Route path="/pets/dogs" element={<DogsPage />} />
        <Route path="/pets/cats" element={<CatsPage />} />
        <Route path="/pets/smallpets" element={<SmallPetsPage />} />
        <Route path="/pets/birds" element={<BirdsPage />} />
        <Route path="/pets/fish" element={<FishPage />} />
        <Route path="/pets/:productId" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
