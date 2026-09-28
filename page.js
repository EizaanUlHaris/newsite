'use client';

import { useState } from 'react';

const products = [
  { name: 'The Form Shirt', price: 'PKR 8,900', tag: '01', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Essential Trouser', price: 'PKR 11,500', tag: '02', image: 'https://images.unsplash.com/photo-1506629905607-d9c9c5d5f1d0?auto=format&fit=crop&w=1200&q=85' },
  { name: 'The Overshirt', price: 'PKR 13,900', tag: '03', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85' }
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function subscribe(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
  }

  return (
    <main>
      <div className="announcement">FARHIEN — THE FIRST EDITION / COMING SOON</div>

      <header className="nav wrap">
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Open menu">
          <span></span><span></span>
        </button>
        <a className="brand" href="#top"><img src="/logo.png" alt="Farhien" /></a>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#collection" onClick={() => setMenu(false)}>Collection</a>
          <a href="#story" onClick={() => setMenu(false)}>Story</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>
        <a className="bag" href="#contact">Bag <span>(0)</span></a>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">01 / FARHIEN</p>
          <h1>Clothing<br /><em>with intention.</em></h1>
          <p className="hero-text">A study in restraint, proportion and everyday movement. Designed for the modern wardrobe.</p>
          <a className="text-link" href="#collection">Explore the first edition <span>↘</span></a>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=90" alt="Minimal fashion editorial" />
          <div className="hero-caption"><span>F / 001</span><span>LAHORE · 2026</span></div>
        </div>
      </section>

      <section className="statement wrap">
        <p className="eyebrow">THE FARHIEN APPROACH</p>
        <h2>Less noise.<br />More <i>presence.</i></h2>
        <p>We make pieces that live quietly but stay with you. Clean silhouettes, thoughtful details and a palette made to move through seasons.</p>
      </section>

      <section className="collection wrap" id="collection">
        <div className="section-head">
          <div><p className="eyebrow">02 / FIRST EDITION</p><h2>Selected pieces</h2></div>
          <span className="count">03 / 03</span>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span>{product.tag}</span>
                <button aria-label={`View ${product.name}`}>View piece ↗</button>
              </div>
              <div className="product-meta"><h3>{product.name}</h3><p>{product.price}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="story wrap" id="story">
        <div className="story-image"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85" alt="Farhien editorial" loading="lazy" /></div>
        <div className="story-copy">
          <p className="eyebrow">03 / OUR STORY</p>
          <h2>Made for the<br /><i>in-between.</i></h2>
          <p>FARHIEN is built around the idea that good clothing does not need to ask for attention. It should feel considered, effortless and unmistakably yours.</p>
          <p>From the cut to the smallest finishing detail, every element has a reason to be there.</p>
          <a className="text-link" href="#contact">Discover FARHIEN <span>↘</span></a>
        </div>
      </section>

      <section className="manifesto">
        <div className="wrap manifesto-inner">
          <p>“WEAR LESS. FEEL MORE.”</p>
          <span>FARHIEN / 001</span>
        </div>
      </section>

      <section className="newsletter wrap" id="contact">
        <div><p className="eyebrow">04 / STAY CLOSE</p><h2>Be first to know.</h2></div>
        <div className="newsletter-right">
          <p>New pieces, private previews and notes from FARHIEN. No noise.</p>
          <form onSubmit={subscribe}>
            <input aria-label="Email address" type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit">Join ↗</button>
          </form>
          {sent && <small className="success">Thank you — you're on the list.</small>}
        </div>
      </section>

      <footer className="footer wrap">
        <div className="footer-logo"><img src="/logo.png" alt="Farhien" /></div>
        <div className="footer-links"><a href="#collection">Shop</a><a href="#story">About</a><a href="#contact">Contact</a><a href="#">Instagram</a></div>
        <div className="footer-bottom"><span>© 2026 FARHIEN</span><span>Designed with restraint.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
