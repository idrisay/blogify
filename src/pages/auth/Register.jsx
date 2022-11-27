import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

let api_url = process.env.REACT_APP_API;

const Register = () => {
  const [info, setInfo] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });
  const navigate = useNavigate();


  const notify = (msg) => toast(msg);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
      terms: "",
    };

    if (!info.email) {
      newErrors.email = "Please fill email field!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(info.email)) {
      newErrors.email = "Invalid email address!";
    }

    if (!info.fullname) {
      newErrors.fullname = "Please fill fullname!";
    } else if (info.fullname.length < 2) {
      newErrors.fullname = "Fullname should be minimum 2 chars!";
    }

    if (!info.password) {
      newErrors.password = "Please fill password!";
    } else if (info.password.length < 8) {
      newErrors.password = "Password should be minimum 8 chars!";
    }

    if (info.password !== info.confirmPassword) {
      newErrors.confirmPassword = "Password should be matched!";
    }

    if (!info.terms) {
      newErrors.terms = "Please accept terms!";
    }

    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.fullname &&
      !newErrors.password &&
      !newErrors.confirmPassword &&
      !newErrors.terms
    ) {
      checkCredential();
    }
  };

  const checkCredential = () => {
    fetch(`${api_url}users?email=${info.email}`)
    .then((response) => response.json())
    .then((res) => {
      if(res.length == 0){
        registerUser()
      }else{
        notify('This email has been already used!')
      }
    });
  };

  const registerUser = () => {
    let data = { email: info.email, fullname: info.fullname, password: info.password}
    fetch(`${api_url}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        navigate("/login");
        notify("Registered succesfully!");
      } else {
        notify("Something went wrong! Try again.");
      }
    });
  }

  const handleCheckbox = () => {
    setInfo({ ...info, terms: !info.terms });
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center">Register</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto">
        <input
          placeholder="email"
          className={
            errors.email
              ? "border-2 border-red-400  p-2 m-2"
              : "border-2 p-2 m-2"
          }
          type="email"
          name="email"
          autoFocus
          onChange={handleChange}
        />
        <p className="text-red-500 text-center text-sm">{errors.email}</p>
        <input
          placeholder="fullname"
          className={
            errors.fullname
              ? "border-2 border-red-400  p-2 m-2"
              : "border-2 p-2 m-2"
          }
          type="fullname"
          name="fullname"
          onChange={handleChange}
        />
        <p className="text-red-500 text-center text-sm">{errors.fullname}</p>
        <input
          placeholder="password"
          className={
            errors.password
              ? "border-2 border-red-400  p-2 m-2"
              : "border-2 p-2 m-2"
          }
          type="password"
          name="password"
          onChange={handleChange}
        />
        <p className="text-red-500 text-center text-sm">{errors.password}</p>
        <input
          placeholder="confirm password"
          className={
            errors.confirmPassword
              ? "border-2 border-red-400  p-2 m-2"
              : "border-2 p-2 m-2"
          }
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <p className="text-red-500 text-center text-sm">
          {errors.confirmPassword}
        </p>
        <div className="text-center text-xl">
          <label>
            <input
              type="checkbox"
              className="m-2"
              checked={info.terms}
              onChange={handleCheckbox}
            />
            I agree the{" "}
            <a className="text-blue-400 underline italic" href="./conditions">
              terms.
            </a>
          </label>
          <p className="text-red-500 text-center text-sm">{errors.terms}</p>
        </div>
        <button className="bg-green-200 p-2 m-2">Submit</button>
      </form>
    </div>
  );
};

export default Register;
