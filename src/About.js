
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="container">

        <div className='bou'>
          <img src="./Frame.png" alt="boder" className='bor'/>
          <h2 className="title">About</h2>
          <img src="./Frame.png" alt="boder" className='bor'/>
        </div>

        <p className="description">
          Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.<span className='sp'>The choice is yours. Because they don’t have one.</span>
        </p>
      </div>
    </section>
  );
}

export default About;