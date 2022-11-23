import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] max-w-7xl mx-auto">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
