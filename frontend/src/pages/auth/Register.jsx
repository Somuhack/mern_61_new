import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth, provider } from "../../../config/FireBase";
import { signInWithPopup } from "firebase/auth";
const Register = () => {
  const SignupWithGoogle =async()=>{
      try {
        const result = await signInWithPopup(auth,provider)
        console.log(result.user);
        
      } catch (error) {
        
      }
  }
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/register", {
        name,
        email,
        password: pass,
      });
      //    console.log(res);
      if (res.status === 200) {
        toast.success(res.data.msg);
        setEmail("");
        setPass("");
        setName("");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else toast.error(res.data.msg);
      setEmail("");
      setPass("");
      setName("");
    } catch (error) {
      toast(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container card shadow-2xl bg-gray-900 w-90 h-120 p-7 gap-5 m-auto mt-30">
        <form onSubmit={handlesubmit} className="flex flex-col gap-10 ">
          <h1 className="font-bold text-center text-3xl text-gray-200">
            Register Now
          </h1>
          <label className="input">
            <span className="label">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input">
            <span className="label">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="input">
            <span className="label">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              value={pass}
              name="pass"
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-success">
            Sign up
          </button>
          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]" onClick={SignupWithGoogle }>
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Signup with Google
          </button>
          <p>
            Already have an Account?
            <Link to="/login">
              <button className="btn btn-link text-info p-0">Login</button>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
