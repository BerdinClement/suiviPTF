"use client";

import React from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  setTimeout(() => {
    console.log("logout");
  } , 1000);
  

  if (user) {
    setUser(null);
  }

  let token = localStorage.getItem("token");
  if (token) {
    localStorage.removeItem("token");
  }

  router.push("/login");

  return (
    <div></div>
  );
};

export default Logout;
