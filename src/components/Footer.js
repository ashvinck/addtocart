import * as React from 'react';

// Footer 

export function Footer() {
  return (
    <div className="footer-container">
      <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website {new Date().getFullYear()}</p></div>
      </footer>
    </div>
  );
}
