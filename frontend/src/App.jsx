import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Dictionary from "./pages/Dictionary";
import Progress from "./pages/Progress";
import Feedback from "./pages/Feedback";
import Minigame from "./pages/Minigame";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/minigame" element={<Minigame />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


