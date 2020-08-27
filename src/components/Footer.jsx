import React from 'react';

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>&copy; Copyright {year} eddieprogramming</footer>
  );
}

export default Footer;
