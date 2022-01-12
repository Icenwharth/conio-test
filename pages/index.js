import Head from "next/head";
import React, { useEffect, useState } from "react";
import Router from "next/router";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const { pathname } = Router;
    const isLoggedIn = !!localStorage.getItem("secretKey");

    if (!isLoggedIn) {
      Router.push("/login");
    } else {
      setLoaded(true);
    }
  }, []);

  if (!loaded) {
    return <div>Loading...</div>; //show nothing or a loader
  }
  return (
    <div className="container">
      <h1>Hi</h1>
      <p>
        <a href="/main">Main Page</a>
      </p>
      <p>
        <a href="/login">Login</a>
      </p>
    </div>
  );
}
