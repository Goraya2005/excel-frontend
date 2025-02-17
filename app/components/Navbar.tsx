import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-dark-blue p-4 fixed top-0 w-full z-10">
      {/* Left side logo and company name */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8 mr-2 relative">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="text-white font-semibold">Naeem Goraya</span>
        </Link>
      </div>
    </nav>
  );
}