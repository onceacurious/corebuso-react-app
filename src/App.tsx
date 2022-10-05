import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product'
import SubHero from './components/SubHero'


const App = () => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <Hero />
        <SubHero />
        <Product />
      </main>
    </>
  )
}

export default App
