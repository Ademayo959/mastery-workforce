"use client";
import Link from "next/link"
import { motion } from "motion/react"

export default function Navbar() {
  return (
    <div className="w-full border-b border-gray-200">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="max-w-7xl mx-auto py-5 px-5 lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="leading-3">
          <p className="font-sora text-navy text-xl sm:text-2xl">Mastery Workforce</p>
          <p className="text-navy/70 text-sm sm:text-base">PEO Limited</p>
        </Link>
        {/* DESKTOP NAV */}
        <div className="hidden lg:flex text-[1rem] font-sora text-navy gap-6 items-center">
          <div>
            <Link href="/whoweare" className="hover:-mt-1 transition-all">Who wo are</Link>
          </div>
          <div className="relative group">
            <div className="flex items-center hover:-mt-1 transition-all">
              <Link href="/solutions">Solutions</Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            {/* Your existing dropdown */}
            <div className="absolute group-hover:block hidden z-100 flex-col border bg-white border-gray-100 shadow-md p-2 w-56 rounded-lg justify-center">
              <div className="justify-self-center my-2 py-1 hover:bg-gray-100/80 px-8 rounded-lg w-full flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <Link href="/solutions#trainings">Trainings</Link>
              </div>
              <div className="justify-self-center my-2 py-1 hover:bg-gray-100/80 px-8 rounded-lg w-full flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <Link href="/solutions#advisory">Advisory</Link>
              </div>
              <div className="justify-self-center my-2 py-1 hover:bg-gray-100/80 px-8 rounded-lg w-full flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <Link href="/solutions#outsourcing">Outsourcing</Link>
              </div>
              <div className="justify-self-center my-2 py-1 hover:bg-gray-100/80 px-8 rounded-lg w-full flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <Link href="/solutions#talent">Talent Search</Link>
              </div>
            </div>
          </div>
          <div>
            <Link href="/contact" className="hover:-mt-1 transition-all">Contact</Link>
          </div>
          <div>
            <Link href="/candidates" className="hover:-mt-1 transition-all">Candidates</Link>
          </div>
        </div>
        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/solutions" className="py-2.5 px-5 border border-navy/10">
            <p className="text-navy font-inter">Explore our Solutions</p>
          </Link>
          <Link href="/contact" className="bg-navy py-2.5 px-5 text-white">
            <p className="font-inter">Talk to an Expert</p>
          </Link>
        </div>
        {/* MOBILE MENU */}
        <details className="relative lg:hidden">
          {/* Hamburger */}
          <summary className="list-none cursor-pointer text-navy">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </summary>
          {/* Mobile Dropdown */}
          <div className="absolute right-0 top-12 z-100 w-72 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
            <div className="flex flex-col font-sora text-navy">
              <Link href="/whoweare" className="rounded-lg px-4 py-3 text-sm transition hover:bg-gray-100">
                Who We Are
              </Link>
              {/* Solutions */}
              <div className="border-t border-gray-100 py-2">
                <p className="px-4 py-2 text-xs text-navy/50">Solutions</p>
                <Link href="/solutions" className="block rounded-lg px-4 py-2.5 text-sm transition hover:bg-gray-100">Trainings</Link>
                <Link href="/solutions" className="block rounded-lg px-4 py-2.5 text-sm transition hover:bg-gray-100">Advisory</Link>
                <Link href="/solutions" className="block rounded-lg px-4 py-2.5 text-sm transition hover:bg-gray-100">Outsourcing</Link>
                <Link href="/solutions" className="block rounded-lg px-4 py-2.5 text-sm transition hover:bg-gray-100">Talent Search</Link>
              </div>
              <Link href="/contact" className="rounded-lg px-4 py-3 text-sm transition hover:bg-gray-100">Contact</Link>
              <Link href="/candidates" className="rounded-lg px-4 py-3 text-sm transition hover:bg-gray-100">Candidates</Link>
              {/* Mobile CTA */}
              <div className="mt-2 border-t border-gray-100 pt-3">
                <Link href="/solutions" className="mb-2 block rounded-lg border border-navy/10 px-4 py-3 text-center text-sm text-navy transition hover:bg-gray-50">Explore our Solutions</Link>
                <Link href="/contact" className="block rounded-lg bg-navy px-4 py-3 text-center text-sm text-white transition hover:bg-navy/90">Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </details>
      </motion.div>
    </div>
  )
};
