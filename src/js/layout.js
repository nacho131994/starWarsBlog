import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import AppContextProvider from "./store/context";


import { Home } from "./views/home";

import Details from "./views/Details.js";
import DetailsPlanet from "./views/DetailsPlanet.js";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Loader from "./component/loader.js";
//create your first component
const Layout = () => {

  const basename = process.env.BASENAME || "";

  return (
    <AppContextProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="people/:id" element={<Details />} />
            <Route path="planet/:id" element={<DetailsPlanet />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default Layout;
