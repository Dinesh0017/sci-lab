import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-textprimary py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="relative w-72 h-12">
            <Image
              src="/assets/images/SciLab.png"
              alt="SciLab360 Logo"
              width={200}
              height={60}
              className="-mt-10"
            />
          </div>
          <p className="text-sm text-slate-500 mt-28">
            Explore interactive experiments in Physics, Chemistry, and ICT from
            anywhere.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 ">Quick Links</h3>
          <ul className="space-y-2 text-secondary">
            <li>
              <Link href="/" className="hover:text-texthover transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/physics" className="hover:text-texthover transition">
                Physics
              </Link>
            </li>
            <li>
              <Link href="/chemistry" className="hover:text-texthover transition">
                Chemistry
              </Link>
            </li>
            <li>
              <Link href="/ict" className="hover:text-texthover transition">
                ICT
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-secondary">
            <li>
              <Link href="#" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Docs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Tutorials
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="bg-buttonprimary hover:bg-buttonhover px-3 py-2 rounded text-white transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        {"© "}{year} SciLab360. All rights reserved.
      </div>
    </footer>
  );
}
