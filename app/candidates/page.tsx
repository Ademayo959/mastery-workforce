import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import office from "@/assets/office.jpeg"

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#F4F7F9]">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto pt-24 pb-24 px-8 grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-12 max-sm:pt-16 max-sm:pb-16 max-sm:px-5">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center mb-6">
              <div className="bg-skyblue h-[2px] w-8"></div>
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold">
                For Candidates
              </p>
            </div>
            <p className="font-sora text-navy text-[3.5rem] leading-[1.1] font-bold mb-6 max-lg:text-[3rem] max-sm:text-[2.5rem]">
              For Candidates.
            </p>
            <p className="text-navy/70 font-inter text-[1.1rem] leading-7 mb-10 max-w-lg max-sm:text-base">
              Your next opportunity could be closer than you think. At Mastery Workforce, we don't just match CVs to job descriptions, we take the time to understand your skills, your ambitions, and where you want to go next.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="font-sora font-semibold flex items-center gap-2 bg-navy text-white px-6 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                Submit Your CV
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="h-5 w-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
              <button className="font-sora font-semibold flex items-center gap-2 bg-white text-navy border border-slate-200 px-6 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-md">
                View Open Roles
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5 text-navy">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </button>
            </div>
          </div>
          {/* Right Column: Image & Floating Card */}
          <div className="relative w-full h-[550px] max-lg:h-auto">
            {/* Decorative Skyblue Shape */}
            <div className="absolute top-[-20px] right-[-20px] w-[25%] h-[25%] bg-skyblue rounded-3xl -z-1 block max-sm:hidden"></div>
            {/* Main Image */}
            <div className="relative w-full lg:w-[85%] h-[400px] lg:h-[85%] rounded-2xl overflow-hidden shadow-md z-1 max-sm:h-[300px]">
              <Image src={office} alt="Professional candidate smiling" fill className="object-cover" />
            </div>
            {/* Floating Overlay Card */}
            <div className="relative mt-6 ml-0 bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-[320px] z-10 lg:absolute lg:-mt-20 lg:-ml-15">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path><path d="m8 16 5.99-2L16 8l-6 2z"></path></svg>
              </div>
              <p className="font-sora text-navy text-[1.2rem] leading-[1.3] font-bold mb-3">Your experience deserves a thoughtful next step.</p>
              <p className="text-navy/70 font-inter text-sm leading-6">We look beyond a CV to the potential behind it.</p>
            </div>
          </div>
        </div>
        {/* Where Opportunity Leads Banner */}
        <div className="w-full bg-[#E5EDF3] py-20 max-sm:py-12 max-sm:px-5">
          <div className="max-w-5xl mx-auto bg-[#D0E4F2] rounded-2xl p-12 flex gap-8 items-start max-sm:p-6 max-sm:flex-col max-sm:gap-6">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={29} height={29} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1H3zm12 8h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Zm0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1h-5V6Z"></path></svg>
            </div>
            <div>
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold mb-3 mt-2">
                Where Opportunity Leads
              </p>
              <p className="font-sora text-navy text-[1.8rem] leading-[1.3] font-bold max-sm:text-[1.4rem]">
                We work with some of the most important and exciting organisations on the continent, giving our candidates access to roles and opportunities that go beyond the obvious.
              </p>
            </div>
          </div>
        </div>
        {/* Start Here Section */}
        <div className="w-full bg-white py-24 max-lg:py-16 max-sm:py-12">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10 max-sm:px-5">
            {/* Left Column: Text */}
            <div className="flex flex-col max-w-lg">
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold mb-4">
                Start Here
              </p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-bold mb-6 max-sm:text-[2rem]">
                Bring us the work you are ready to do next.
              </p>
              <p className="text-navy/70 font-inter text-[1.05rem] leading-7">
                Share your CV and tell us the kind of opportunity you are looking for. Our team will keep you in mind for roles aligned with your experience, ambitions and potential.
              </p>
            </div>
            {/* Right Column: Action Card */}
            <div className="bg-[#E5EDF3] rounded-2xl p-10 flex flex-col items-start w-full max-w-md justify-self-end max-lg:justify-self-start max-sm:p-6">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path></svg>
              </div>
              <p className="font-sora text-navy text-[1.3rem] leading-[1.3] font-bold mb-3">
                Keep your next move in motion
              </p>
              <p className="font-inter text-navy/70 text-[1rem] leading-7 mb-8">
                Submit your CV for consideration, or speak with our team about the kind of role that fits your direction.
              </p>
              <button className="font-sora font-semibold flex items-center gap-2 bg-navy text-white px-6 py-3.5 rounded-lg w-full justify-center transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                Submit Your CV
                <svg xmlns="http://www.w3.org/2000/svg" className="font-light" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20.56 3.17c-.29-.2-.67-.23-.99-.08l-17 8.01a.999.999 0 0 0 .03 1.82L8 15.28V22l5.84-4.17 4.76 2.08c.13.06.26.08.4.08.18 0 .36-.05.52-.15a.99.99 0 0 0 .48-.79l1-15c.02-.35-.14-.69-.43-.89Zm-2.47 14.34-5.21-2.28L16 9l-7.65 4.25-2.93-1.28 13.47-6.34-.79 11.89Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
        {/* Talk to Us CTA Section */}
        <div className="w-full bg-[#E5EDF3] py-24 max-lg:py-16 max-sm:py-12">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center gap-10 max-lg:flex-col max-lg:items-start max-sm:px-5">
            <div className="flex flex-col max-w-2xl">
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold mb-4">
                Talk to Us
              </p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-bold mb-6 max-lg:text-[2.2rem] max-sm:text-[1.8rem]">
                Ready to explore what comes next?
              </p>
              <p className="text-navy/80 font-inter text-[1.1rem] leading-7 max-w-xl max-sm:text-base">
                Whether you are actively searching or planning ahead, we would be glad to learn more about where you want to go.
              </p>
            </div>
            <div className="shrink-0 mt-4 lg:mt-0">
              <Link href="/contact" className="font-sora font-semibold flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg max-sm:px-6 max-sm:py-3.5 max-sm:w-full justify-center">
                Contact the team
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
