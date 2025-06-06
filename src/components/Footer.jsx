export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 my-5">
      <a className="text-center hover:underline" href="/about">
        About Us
      </a>
      <p className="text-sm text-center">© {new Date().getFullYear()} MZMS.</p>
    </footer>
  );
}
