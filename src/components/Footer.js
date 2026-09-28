"use client";

import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-zinc-950 font-bold">
                <BookOpen className="w-5 h-5 text-zinc-950" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">StudyNook</span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Find, list, and book quiet private study rooms across university libraries. Empowering academic productivity with seamless scheduling.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-teal-300 transition-colors">
                  Available Rooms
                </Link>
              </li>
              <li>
                <Link href="/add-room" className="hover:text-teal-300 transition-colors">
                  Host a Room
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-teal-300 transition-colors">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>support@studynook.edu</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+1 (800) 555-NOOK</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Central Campus Library, Wing B</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons with X New Logo */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Follow Us
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Stay updated with new campus room additions and reservation tools.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all text-zinc-400"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* X New Logo SVG */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all text-zinc-400"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all text-zinc-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all text-zinc-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} StudyNook Inc. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Campus Library Guidelines</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
