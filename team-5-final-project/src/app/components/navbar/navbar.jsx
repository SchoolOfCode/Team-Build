import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <ul>
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            <Link href="/developers">Developers</Link>{" "}
          </li>
          <li>
            <Link href="/charity">Charity</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/partners">Our Partners</Link>
          </li>
          <li>
            {" "}
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/about">About Us</Link>
          </li>
        </ul>
        <Link href="/">User</Link>
      </div>
    </>
  );
}
