// Footer.js
import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-title">The Generics</div>
        <div className="footer-icons">
          <ul>
            <li>
              <a href="https://www.youtube.com">
                <img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://spotify.com">
                <img src="./img/Spotify Logo.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <img src="./img/Facebook Logo.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
