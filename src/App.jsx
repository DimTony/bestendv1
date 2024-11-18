import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
// import Landing from "./pages/Landing";
// import TimeOut from "./pages/TimeOut";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Rooms from "./pages/Rooms";
import RestoAndBar from "./pages/RestoAndBar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";
// import Rooms from "./pages/Rooms";
// import About from "./pages/About";
// import RestoAndBar from "./pages/RestoAndBar";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import ChatBox from "./components/Chat/ChatBox";
// import Admin from "./pages/Admin";
// import SupportEngine from "./components/Admin/SupportEngine/SupportEngine";
// import Test from "./components/Test";
// import BookNow from "./components/BookNow";
// import { useBooking } from "./contexts/BookingContext";

function AppContent() {
  const location = useLocation();

  // const { isOpen, onClose } = useBooking();

  return (
    <>
      <Toaster />
      {/* {location.pathname !== "/admin" && <SupportEngine />} */}

      {/* <BookNow isOpen={isOpen} onClose={onClose} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/resto-and-bar" element={<RestoAndBar />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} /> */}

        {/* <Route path="/" element={<TimeOut />} /> */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
