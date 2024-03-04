import React from 'react'
import styles from './style';

import { Billing, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials, About, Team } from "./components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <About />
        <Billing />
        <CardDeal /> 
        <Testimonials /> 
        <Clients /> 
        <CTA /> 
        <Team />
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App