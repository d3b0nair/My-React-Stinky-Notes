import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright d3b0nair ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
