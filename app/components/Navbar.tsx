import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-center items-left bg-blue-800 p-4 fixed top-0 w-full z-10">
      {/* Left side logo and company name */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          {/* Increased logo size by 1.5X (from 8 to 12) */}
          <div className="h-12 w-12 mr-2 relative">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          {/* Increased text size by 3X using text-3xl (or custom size) */}
          <span className="text-white font-semibold text-3xl">Naeem Goraya</span>
        </Link>
      </div>
    </nav>
  );
}