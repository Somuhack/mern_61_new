// import React from 'react'
// import { useReducer } from 'react'
// import MyReduser from './reducer/AddToCard'
// import Loging from './pages/Loging'
// import  {Mycontext} from './context/Mycontext'
// import { useContext } from 'react'
// const App = () => {
//   const  name ="Ishan"
//   const [mydata,dispatch]=useReducer(MyReduser,10)
//   return (
// <>
// <Mycontext.Provider value={{name,mydata}}><Loging/></Mycontext.Provider>

//     <div>App{mydata}</div>
//     <button onClick={()=>dispatch({type:"add"})}>Inc by 1</button>
//     <button onClick={()=>dispatch({type:"sub"})}>Dec by 1</button>
//     <button onClick={()=>dispatch({type:"byvalue",payload:10})}> inc by 10</button>

// </>
//   )
// }

// export default App
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Loging"
import Profile from "./pages/auth/Profile"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PrivateRoute from "./security/PrivateRoute"
const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>} />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App