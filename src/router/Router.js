import Blogs from "../pages/blog/Blog";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewBlog from "../pages/blog/NewBlog";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import EditBlog from "../pages/blog/EditBlog";
import PrivateRouter from "./PrivateRouter";
import OneBlog from "../pages/blog/OneBlog";

let currentUser = JSON.parse(localStorage.getItem("user"));

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<OneBlog />} />
        <Route
          path="/blogs"
          element={
            <PrivateRouter currentUser={currentUser}>
              <Blogs />
            </PrivateRouter>
          }
        />
        <Route
          path="/blogs/new-blog"
          element={
            <PrivateRouter currentUser={currentUser}>
              <NewBlog />
            </PrivateRouter>
          }
        />
        <Route
          path="/blogs/edit/:id"
          element={
            <PrivateRouter currentUser={currentUser}>
              <EditBlog />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Router;
