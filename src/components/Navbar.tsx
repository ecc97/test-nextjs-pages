import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container flex gap-5">
        <Link href="/" className="text-xl">Home</Link>
        <Link href="/about" className="text-xl">About</Link>
      </div>
    </nav>
  );
}
