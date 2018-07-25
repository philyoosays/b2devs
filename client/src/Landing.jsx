import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';

export default function Landing() {
  return(
    <div className="landingcontainer">
      <section className="landingblurb">
        <article className="landingdevside">
          <h2>Are you a new dev and need projects for your experience and portfolio?</h2>
          <h1>Developers</h1>
          <Link to="/register/devs"><button>Get Started</button></Link>
        </article>
        <article className="landingbizside">
          <h2>Is your business too small to afford a developer for a project idea?</h2>
          <h1>Small Businesses<br/> and Non-Profits</h1>
          <Link to="/register/business"><button>Get Started</button></Link>
        </article>
      </section>
    </div>
  );
}
