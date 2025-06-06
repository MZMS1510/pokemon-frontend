import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 my-5">
      <Link className="text-center hover:underline" to="/about">
        About Us
      </Link>
      <p className="text-sm text-center">© {new Date().getFullYear()} MZMS.</p>
    </footer>
  );
}
