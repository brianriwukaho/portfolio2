import React from "react";
import Layout from "@theme/Layout";
import Main from "../components/Main";
import Interests from "../components/Interests";
import About from "../components/About";
import Contact from "../components/Contact";

export default function MyReactPage() {
  return (
    <Layout>
      <Main />
      <Interests />
      <About />
    </Layout>
  );
}
