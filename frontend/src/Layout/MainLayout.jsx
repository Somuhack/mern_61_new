import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mycontext } from "../context/Mycontext"
const MainLayout = ({ children }) => {
  const [theam,setTheame]=useState(false)
  const ThemeTroggle = ()=>{
    setTheame(!theam)
  }
  return (
    <Mycontext.Provider value={{theam,ThemeTroggle}}>
      <Header />
      <div className={`${theam?"bg-white text-black":"bg-base-200"}`}>{children}</div>
      <Footer />
    </Mycontext.Provider>
  );
};

export default MainLayout;
