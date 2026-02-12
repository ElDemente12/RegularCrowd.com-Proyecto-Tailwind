import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { Home } from './Pages/Home.jsx'
import { Discography } from './Pages/Discography.jsx'
import { Members } from './Pages/Members.jsx'
import { News } from './Pages/News.jsx'
import { Shop } from './Pages/Shop.jsx'
import { PressKit } from './Pages/PressKit.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discography" element={<Discography />} />
      <Route path="/members" element={<Members />} />
      <Route path="/news" element={<News />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/press-kit" element={<PressKit />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
