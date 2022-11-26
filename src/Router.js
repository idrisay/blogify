import Blogs from "./pages/blog/Blog";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewBlog from "./pages/blog/NewBlog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EditBlog from "./pages/blog/EditBlog";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/new-blog" element={<NewBlog />} />
        <Route path="/blogs/edit/:id" element={<EditBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Router;
