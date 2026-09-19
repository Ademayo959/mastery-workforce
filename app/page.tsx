import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/hero.jpeg"
import hero2 from "@/assets/hero2.webp"
import hero3 from "@/assets/hero3.jpeg"
import intro from "@/assets/intro.jpeg"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-skyblue/10">
      <Navbar />
      {/**Hero Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-14 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-auto">
            <div className="flex gap-2 items-center mt-5 lg:mt-10">
              <div className="bg-skyblue h-[2px] w-10"></div>
              <p className="font-sora text-navy text-[12px] sm:text-[14px]">Recruitment & HR Specialist - Africa</p>
            </div>
            <div className="font-sora font-bold text-navy leading-[1.1] my-4">
              <p className="text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem]">Beyond Talent.</p>
              <p className="text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem]">Beyond Expectation.</p>
            </div>
            <div>
              <p className="w-full max-w-[560px] font-inter text-navy/70 mb-6 text-sm sm:text-base leading-6">
                Mastery Workforce PEO Limited is a recruitment and HR specialist
                company helping organisations across the continent find critical
                talent, access cutting-edge advice, and get the innovative support
                they need to grow in a challenging market.
              </p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link href="/solutions" className="py-2.5 px-5 border border-navy/10 text-center">
                  <p className="text-navy text-sm sm:text-base font-sora">Explore our Solutions</p>
                </Link>
                <Link href="/contact" className="bg-navy py-2.5 px-5 text-white text-center">
                  <p className="text-sm sm:text-base font-sora">Get in Touch</p>
                </Link>
              </div>
              {/* Trusted */}
              <div className="flex gap-2 items-center my-8">
                <div className="flex shrink-0">
                  <div className="h-8 w-8 bg-navy text-white font-sora flex rounded-full items-center border-2 border-white justify-center">
                    <p className="text-[11px] font-semibold">A</p>
                  </div>
                  <div className="h-8 w-8 bg-blue-300 text-navy font-sora flex rounded-full items-center border-2 border-white -ml-3 justify-center">
                    <p className="text-[11px] font-semibold">K</p>
                  </div>
                  <div className="h-8 w-8 bg-sky-100 text-navy font-sora flex rounded-full items-center border-2 border-white -ml-3 justify-center">
                    <p className="text-[11px] font-semibold">N</p>
                  </div>
                  <div className="h-8 w-8 bg-white text-navy font-sora flex rounded-full items-center border-2 border-white -ml-3 justify-center">
                    <p className="text-[11px] font-semibold">+</p>
                  </div>
                </div>
                <div>
                  <p className="text-navy text-[11px] sm:text-[13px] font-sora">Trusted by HR leaders across the continent</p>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="relative w-full lg:w-auto">
            <div className="bg-skyblue rounded-lg font-sora py-1.5 px-4 w-fit leading-4 float-right -mb-4 relative z-5 mr-0 lg:-mr-3">
              <p className="text-[13px] text-navy font-sora font-semibold">MW PEO Ltd</p>
              <p className="text-[11px] text-navy font-sora">Est. excellence</p>
            </div>
            <div className="w-full lg:w-[600px]">
              <Image src={hero2} alt="corporate office pic" className="rounded-2xl z-1 shadow-md w-full h-auto object-cover" />
            </div>
            <div className="bg-white grid grid-cols-2 rounded-2xl w-[280px] sm:w-80 h-[120px] -mt-16 sm:-mt-20 z-10 -ml-3 sm:-ml-6 lg:-ml-10 relative shadow-md">
              <div>
                <Image src={hero3} alt="corporate office pic" className="rounded-l-2xl w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <p className="text-navy text-[13px] sm:text-[15px]">
                  One partner, Every people needs
                </p>
                <p className="text-navy/70 text-[10px] sm:text-[11px]">
                  Search, outsourcing, advisory & training - Integrated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Intro & Value Statement section */}
      <div className="max-w-7xl mx-auto pb-18 px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 sm:mt-20 lg:mt-30 gap-10 lg:gap-0">
          <div className="px-0 lg:px-8 max-sm:hidden">
            <Image src={intro} alt="corporate office pic" className="rounded-2xl z-1 shadow-md w-full h-[350px] sm:h-[450px] lg:h-120 object-cover" />
          </div>
          <div className="px-0 lg:px-6">
            <div className="flex gap-2 items-center mt-0 lg:mt-10 mb-4">
              <div className="bg-yellow-600 h-[2px] w-10"></div>
              <p className="font-sora text-navy/70 text-[12px] tracking-wider">OUR COMMITMENT</p>
            </div>
            <p className="font-sora text-navy text-[2rem] sm:text-[2.3rem] lg:text-[2.5rem] leading-[1.2] lg:leading-12">We go beyond - or clients, candidates, and community.</p>
            <p className="text-navy/70 font-inter text-base sm:text-[1.05rem] lg:text-[1.1rem] leading-7 my-4">
              We go beyond narrowly defined client issues, beyond conventional wisdom,
              beyond the expected, to create opportunities for our clients, candidates,
              colleagues, collaborators, and community.
            </p>
            <p className="text-navy/70 font-inter text-base sm:text-[1.05rem] lg:text-[1.1rem] leading-7 my-4">
              Through a network of diversified but highly complementary lines of
              business, we've helped some of the most important and exciting
              organisations on the continent find the critical talent, access
              cutting-edge advice, and get the innovative support they require to
              grow in a challenging market.
            </p>
          </div>
        </div>
      </div>
      {/**Solutions Section */}
      <div className="bg-skyblue/20 border-y border-navy/10">
        <div className="max-w-6xl mx-auto py-18 px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
            <div>
              <p className="font-sora text-navy/70 text-[12px] tracking-wider">WHAT WE DO</p>
              <p className="font-sora text-[1.4rem] sm:text-[1.6rem] text-navy">Solutions built for African Businesses</p>
            </div>
            <div>
              <p className="text-navy/70 w-full lg:w-80">Tailored HR and workforce solutions built around what your business actually needs.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 my-8">
            <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
              <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="text-navy font-sora text-[1.2rem] my-2">Trainings</p>
                <p className="text-navy/70 font-inter text-[0.95rem]">Equipping people and teams with the skills to perform, adapt, and lead.</p>
                <div>
                  <p className="text-navy font-sora mt-2">Learn More</p>
                </div>
              </div>
            </div>
            <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
              <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div>
                <p className="text-navy font-sora text-[1.2rem] my-2">Advisory</p>
                <p className="text-navy/70 font-inter text-[0.95rem]">Strategic HR guidance to help you make smarter workforce decisions.</p>
                <div>
                  <p className="text-navy font-sora mt-2">Learn More</p>
                </div>
              </div>
            </div>
            <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
              <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-navy font-sora text-[1.2rem] my-2">Outsourcing</p>
                <p className="text-navy/70 font-inter text-[0.95rem]">Reliable workforce and HR outsourcing that lets you focus on your core business.</p>
                <div>
                  <p className="text-navy font-sora mt-2">Learn More</p>
                </div>
              </div>
            </div>
            <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
              <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <div>
                <p className="text-navy font-sora text-[1.2rem] my-2">Talent Search</p>
                <p className="text-navy/70 font-inter text-[0.95rem]">Connecting you with the right people, at the right time, for the right role.</p>
                <div>
                  <p className="text-navy font-sora mt-2">Learn More</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-navy text-white py-2 px-4 w-fit justify-self-center mt-12">
              <p>See All Solutions</p>
            </div>
          </div>
        </div>
      </div>
      {/**WHY MASTERY WORKFORCE SECTION */}
      <div>
        <div className="max-w-7xl mx-auto py-18 px-5 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div>
              <p className="font-sora text-navy/70 text-[12px] tracking-wider">
                WHY MASTERY WORKFORCE
              </p>
              <p className="font-sora text-navy text-[1.6rem] sm:text-[1.8rem] my-3">
                A Partner you can{" "}
                <span className="relative inline-block">
                  Trust
                  <svg
                    className="absolute left-0 -bottom-2 w-full h-4 overflow-visible pointer-events-none"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 7 C20 3, 35 5, 50 6 C68 7, 82 10, 98 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M2 8 C25 6, 45 7, 65 8 C80 9, 90 8, 98 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />
                  </svg>
                </span>{" "}
                with your people.
              </p>
              <p className="text-navy/70 text-base sm:text-[1.1rem] font-inter w-full lg:w-130">
                Choosing a workforce partner is a decision of confidence. Here's why organisations acroos the continent choose Mastery Workforce - and stay with us.
              </p>
              <div className="bg-navy text-white p-4 rounded-lg w-full lg:w-140 my-6">
                <p className="text-[1.1rem] sm:text-[1.3rem] my-2">
                  "Mastery Workforce understood exactly what our business needed — not just to fill roles, but to build real capability. They've become a true partner to our HR function."
                </p>
                <div className="flex gap-2 items-center">
                  <div className="bg-white/70 h-[2px] w-5 shrink-0"></div>
                  <p className="font-sora text-white/70 text-[12px] sm:text-[14px]">
                    Group HR Director, Pan-African Financial Services
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 items-center border-b border-navy/20 pb-4">
                <div className="p-2 rounded-full text-navy bg-skyblue/30 w-fit shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1rem] sm:text-[1.1rem]">Local Market Expertise</p>
                  <p className="text-navy/70 font-inter">Deep understanding of local and continental talent markets.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center border-b border-navy/20 py-4">
                <div className="p-2 rounded-full text-navy bg-skyblue/30 w-fit shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1rem] sm:text-[1.1rem]">Diversified business lines</p>
                  <p className="text-navy/70 font-inter">A diversified network of complementary business lines.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center border-b border-navy/20 py-4">
                <div className="p-2 rounded-full text-navy bg-skyblue/30 w-fit shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1rem] sm:text-[1.1rem]">Proven track record</p>
                  <p className="text-navy/70 font-inter">Proven track record with leading organisations.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center border-b border-navy/20 py-4">
                <div className="p-2 rounded-full text-navy bg-skyblue/30 w-fit shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1rem] sm:text-[1.1rem]">Custom solutions</p>
                  <p className="text-navy/70 font-inter">Solutions built around your growth, not a generic template.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center border-b border-navy/20 py-4">
                <div className="p-2 rounded-full text-navy bg-skyblue/30 w-fit shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                    fill={"currentColor"} viewBox={"0 0 24 24"}>
                    <path d="m20.24,4.76c-2.3-2.29-5.87-2.35-8.24-.19-2.37-2.16-5.93-2.09-8.24.2-2.36,2.37-2.36,6.07,0,8.43l7.53,7.52c.2.19.45.29.71.29s.51-.1.71-.29l7.53-7.52c2.36-2.36,2.36-6.06,0-8.43,0,0,0,0,0,0Zm-8.24,13.83l-6.82-6.81c-1.57-1.57-1.57-4.03,0-5.6.79-.79,1.8-1.18,2.81-1.18s2.02.39,2.8,1.18l.5.5s0,0,0,0l-2.38,2.39c-.51.52-.51,1.36,0,1.88.49.49,1.13.73,1.77.73s1.28-.24,1.77-.73l1.64-1.64,3.59,3.59-1.04,1.04-2.3-2.3-.71.71,2.3,2.3-.79.79-2.3-2.3-.71.71,2.3,2.3-.79.79-2.29-2.29-.71.71,2.29,2.29-.94.94Zm6.82-6.81l-.42.42-3.59-3.59,1.24-1.24-.71-.71-3.59,3.59c-.58.58-1.54.58-2.12,0-.13-.13-.13-.34,0-.47l3.42-3.44h0s.16-.16.16-.16c1.57-1.57,4.04-1.57,5.62,0,1.57,1.58,1.57,4.04,0,5.6Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1rem] sm:text-[1.1rem]">Partnet Mindset</p>
                  <p className="text-navy/70 font-inter">A partner mindset — for clients, candidates, and community alike.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Get in Touch Section */}
      <div className="bg-skyblue/20 border-y border-navy/10">
        <div className="max-w-7xl mx-auto py-12 sm:py-16 px-5 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
            <div>
              <div className="flex gap-2 items-center mt-0 lg:mt-10">
                <div className="bg-skyblue h-[2px] w-10"></div>
                <p className="font-sora text-navy text-[14px] fomt-bold">GET IN TOUCH</p>
              </div>
              <div className="font-sora font-semibold text-navy leading-8 sm:leading-10 my-4">
                <p className="text-[2rem] sm:text-[2.2rem] lg:text-[2.4rem]">Ready to build a stronger workforce?</p>
                <p className="text-[2rem] sm:text-[2.2rem] lg:text-[2.4rem]">Let's talk about what's next.</p>
              </div>
              <div>
                <p className="text-base sm:text-[1.1rem] text-navy/70 font-inter w-full lg:w-120">Tell us where your business is headed - a workforce specialist would respond within one business day with clear next steps.</p>
              </div>
              <div className="grid gap-3 mt-4">
                <div className="flex gap-2 items-center">
                  <div className="flex items-center justify-center rounded-md bg-white border border-navy/20 w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy/70 text-[0.8rem]">Email us</p>
                    <p className="text-navy font-sora">info@masteryworkforce.com</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center justify-center rounded-md bg-white border border-navy/20 w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy/70 text-[0.8rem]">Call us</p>
                    <p className="text-navy font-sora">+234 (0) 1 234 5678</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center justify-center rounded-md bg-white border border-navy/20 w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                  </div>
                  <div>
                    <p className="text-navy/70 text-[0.8rem]">Visit us</p>
                    <p className="text-navy font-sora">319 Borno way, Alagomeji, Yaba, Lagos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center px-5 py-16 max-sm:px-0">
                <div className="w-full max-w-lg rounded-3xl bg-white px-5 py-8 sm:px-10 md:px-12">
                  <div className="mb-7">
                    <h2 className="font-sora text-2xl font-semibold text-navy">Request a conversation</h2>
                    <p className="mt-2 text-sm text-navy/60">
                      Fields marked * are required. We reply within one business day.
                    </p>
                  </div>
                  <form className="space-y-3">
                    {/* Full Name + Company Name */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="mb-2 block font-sora text-sm font-medium text-navy">Full Name *</label>
                        <input
                          id="fullName"
                          type="text"
                          placeholder="Adaeze Okafor"
                          className="h-[38px] w-full rounded-lg border border-navy/10 bg-skyblue/20 px-4 text-sm text-navy outline-none placeholder:text-navy/55 focus:border-navy/30 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block font-sora text-sm font-medium text-navy"> Company Name * </label>
                        <input
                          id="company"
                          type="text"
                          placeholder="Acme Group Ltd."
                          className="h-[38px] w-full rounded-lg border border-navy/10 bg-skyblue/20 px-4 text-sm text-navy outline-none placeholder:text-navy/55 focus:border-navy/30 focus:bg-white"
                        />
                      </div>
                    </div>
                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-2 block font-sora text-sm font-medium text-navy">Email *</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          className="h-[38px] w-full rounded-lg border border-navy/10 bg-skyblue/20 px-4 text-sm text-navy outline-none placeholder:text-navy/55 focus:border-navy/30 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block font-sora text-sm font-medium text-navy">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+234 ..."
                          className="h-[38px] w-full rounded-lg border border-navy/10 bg-skyblue/20 px-4 text-sm text-navy outline-none placeholder:text-navy/55 focus:border-navy/30 focus:bg-white"
                        />
                      </div>
                    </div>
                    {/* Interested In */}
                    <div>
                      <label htmlFor="interest" className="mb-2 block text-sm font-sora font-medium text-navy">I'm interested in *</label>
                      <div className="relative">
                        <select id="interest" className="h-[38px] w-full appearance-none rounded-lg border border-navy/10 bg-skyblue/20 px-4 pr-12 text-sm text-navy outline-none focus:border-navy/30 focus:bg-white">
                          <option value="">Talent Search</option>
                          <option value="talent">Talent Search</option>
                          <option value="outsourcing">Outsourcing</option>
                          <option value="advisory">Advisory</option>
                          <option value="training">Training</option>
                        </select>
                        <svg className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/60" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="mb-2 block font-sora text-sm font-medium text-navy">Message *</label>
                      <textarea id="message" rows={5} placeholder="Tell us about your hiring goals, team size, and timelines..."
                        className="w-full resize-none rounded-lg border border-navy/10 bg-skyblue/20 px-4 py-4 text-sm text-navy outline-none placeholder:text-navy/55 focus:border-navy/30 focus:bg-white"
                      />
                    </div>
                    {/* Button */}
                    <button type="submit" className="h-[38px] w-full rounded-lg bg-navy text-base font-semibold text-white transition hover:bg-navy/90">
                      Get in Touch
                    </button>
                    {/* Disclaimer */}
                    <p className="pt-1 text-center text-xs text-navy/60">
                      By submitting, you agree to be contacted about our services.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
