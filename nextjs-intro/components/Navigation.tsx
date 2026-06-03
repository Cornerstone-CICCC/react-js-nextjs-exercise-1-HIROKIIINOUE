import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl gap-4 px-6 py-4 text-sm font-medium text-slate-700">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-sky-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
