function Home () {
    return <>
     <header>
        
        <button className="latest-album">Get our Latest Album</button>
        <button className="play-btn">►</button>
      </header>
    <section id="tours" className='container'>
        <h2>TOURS</h2>
        <div>
          <div className="tour-item">
            <span className="tour-date">JUL16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
            <button className="buy-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JUL16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
            <button className="buy-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JUL16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
            <button className="buy-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JUL16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
            <button className="buy-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JUL16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
            <button className="buy-btn">BUY TICKETS</button>
          </div>
          {/* ... (rest of the tours content) ... */}
        </div>
      </section>

    </>
}
export default Home