
import React from 'react';
import './Header.css';

function Header() {
  return (
    
    <header className="header"
    >
      <div className="container1">
        <div className='to'><img src="./Frame (3).png" alt="to" className='hee'/></div>
        
        <div className='he'>
        <p className="subtitle3">The choice is yours.<br/> Because they don't have one.</p>
        <div><button className="button1">QUICK VIEW</button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;