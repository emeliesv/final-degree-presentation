import { Route, BrowserRouter, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Metod from "./pages/Metod";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metod" element={<Metod />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
