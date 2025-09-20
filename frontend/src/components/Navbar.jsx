import React, { useContext } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { Mycontext } from '../context/Mycontext'

const Navbar = () => {
  const navigate =useNavigate()
  const themeChange =useContext(Mycontext)
  const token = localStorage.getItem("fjsdjffjhfjw976541")
  const Logout=()=>{
    localStorage.removeItem("fjsdjffjhfjw976541")
    localStorage.clear()
    
  }
  return (
    <div className={`navbar ${themeChange.theam?"bg-white text-black":"bg-base-100"}  shadow-sm`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li>
          <NavLink to="/product">Parent</NavLink>
        </li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/"}>Home</NavLink></li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {token ?<NavLink onClick={Logout} className="btn btn-error">Logout</NavLink>:<NavLink to={"/login"} className="btn btn-info">Login</NavLink>}
    <input onChange={themeChange.ThemeTroggle} type="checkbox" value="synthwave" className=" ml-2 toggle theme-controller" />
  </div>
</div>
  )
}

export default Navbar