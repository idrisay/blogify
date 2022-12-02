import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer />
    </div>
  );
}

export default App;
