import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">Classmap</span>

        {/* Add social links, legal links, etc. here */}
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Classmap. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
