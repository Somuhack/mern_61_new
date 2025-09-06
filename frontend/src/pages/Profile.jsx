import React from "react";
import MainLayout from "../Layout/MainLayout";
import { useContext } from "react";
import {Mycontext} from "../context/Mycontext";

const Profile = () => {
    const data = useContext(Mycontext)
    
  return <MainLayout>Profile:{data.name} and counter is {data.mydata}</MainLayout>;
};

export default Profile;
