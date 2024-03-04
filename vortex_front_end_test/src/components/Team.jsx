import React from 'react'
import { teamplayers } from "../constants";
import styles from "../style";
import TeamCard from './TeamCard';



const Team = () => (
  
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {teamplayers.map((card) => <TeamCard key={card.id} {...card} />)}
    </div>
  </section>
)
export default Team