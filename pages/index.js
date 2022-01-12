import Head from "next/head";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const { pathname } = Router;
    setIsLoggedIn(!!localStorage.getItem("secretKey"));

    if (!isLoggedIn) {
      Router.push("/login");
    } else {
      setLoaded(true);
    }
  }, [isLoggedIn]);

  const handleLogout = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      localStorage.setItem("secretKey", "");
      setIsLoggedIn(false);
    }
  };

  if (!loaded) {
    return <div>Loading...</div>; //show nothing or a loader
  }
  return (
    <div className="container">
      <h1>
        Hi, Are you lost?Here are some useful links for you t find your way
      </h1>
      <p>
        <Link href="/main">Main Page</Link>
      </p>
      <p>
        <Link href={(isLoggedIn && "/login") || ""} onClick={handleLogout}>
          {(isLoggedIn && "Login") || "Logout"}
        </Link>
      </p>
    </div>
  );
}
