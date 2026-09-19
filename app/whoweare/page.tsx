import Navbar from "@/components/Navbar"
import hero from "@/assets/hero.jpeg"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function page() {
  return (
    <div className="bg-skyblue/10">
      <Navbar />
      {/**Hero section */}
      <div className="max-w-7xl mx-auto pb-12 px-0 ">
        <div className="grid grid-cols-2 mt-20 gap-12 items-center max-lg:grid-cols-1 max-lg:gap-10 max-sm:mt-20 max-sm:px-5">
          {/* Left Column: Text Content */}
          <div className="px-8 order-1 max-lg:order-2">
            <div className="flex gap-2 items-center mt-0 mb-4 max-lg:mt-0">
              <div className="bg-skyblue h-[2px] w-10"></div>
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase">Mastery Workforce PEO Limited</p>
            </div>
            <p className="font-sora text-navy text-[3.5rem] leading-16 font-bold max-lg:text-[2.3rem] max-lg:leading-[1.2] max-sm:text-[2rem]">
              Who We Are
            </p>
            <p className="text-navy/70 font-inter text-[1.1rem] leading-7 my-6 max-w-xl max-lg:text-[1.05rem] max-lg:my-4 max-sm:text-base">
              A workforce partner built around the belief that the right people,
              insight and opportunity can move African business forward.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="font-sora font-semibold flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                Our story
                {/* Add your icon here */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </button>
              <button className="font-sora font-semibold bg-white text-navy px-7 py-3.5 rounded-lg border border-slate-200 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                Talk to an expert
              </button>
            </div>
          </div>
          {/* Right Column: Image & Floating Card */}
          <div className="relative w-full h-[600px] order-2 mt-0 max-lg:order-1 max-lg:h-[500px] max-lg:mt-10 max-sm:h-[400px]">
            {/* Decorative Skyblue Shape */}
            <div className="absolute top-[-20px] right-[-20px] w-[25%] h-[25%] bg-skyblue rounded-3xl -z-1 block max-sm:hidden"></div>
            {/* Main Image */}
            <div className="relative w-fit h-[70%] rounded-2xl overflow-hidden shadow-md z-1">
              <Image
                src={hero} // Replace with your actual image import
                alt="Team of professionals collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Overlay Card */}
            <div className="absolute -mt-15 -ml-15 bg-white p-8 rounded-2xl shadow-lg max-w-[320px] z-10 max-sm:left-[-10px] max-sm:p-6">
              <p className="font-sora text-navy text-[1.2rem] leading-[1.3] font-bold mb-3">People and possibility, connected with purpose.</p>
              <p className="text-navy/70 font-inter text-sm leading-6">
                Because work shapes lives, teams and the communities around them.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**OUR STORY SECTION */}
      <div className="bg-white border-y border-navy/20">
        <div className="max-w-4xl mx-auto py-18">
          <div>
            <p className="font-sora text-navy/70 text-[12px] tracking-wider mb-3">OUR STORY</p>
            <p className="font-sora font-semibold w-130 leading-8 text-[1.4rem] sm:text-[2rem] text-navy">More than a recruitment agency - a workforce partner.</p>
          </div>
          <div className="mt-4">
            <p className="font-sora text-navy text-[1rem] my-4">Mastery Workforce PEO Limited is a recruitment and human resources specialist built on a straightforward conviction: talent and opportunity should not be constrained by convention. Our work begins with understanding the people, businesses and ambitions behind every engagement. We look beyond the immediate brief to understand what our clients are trying to achieve, the capabilities required to achieve it, and the people who can make that ambition a reality. This approach allows us to create meaningful opportunities for our clients, candidates, colleagues, partners and the wider communities in which we operate.</p>
            <p className="font-sora text-navy text-[1rem] my-4">Mastery has developed a range of complementary business lines that bring together expertise in Training, Advisory, Outsourcing and Talent Search. Through these capabilities, we support organisations across the continent in identifying and securing critical talent, developing their people, navigating complex workforce and business challenges, and accessing the specialist support required to operate and grow effectively.</p>
          </div>
          <div className="bg-skyblue/30 px-10 py-8 grid gap-2 grid-cols-[10%_90%] my-10 rounded-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={70} height={70} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1H3zm12 8h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Zm0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1h-5V6Z"></path></svg>
            </div>
            <div>
              <p className="font-sora text-[1.8rem] text-navy w-[85%]">We work alongside people and businesses to turn workforce ambition into enduring progress</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-sora text-navy text-[1rem] my-4">Our understanding of the African market is central to what we do. We recognise that organisations operating in the region face a distinctive combination of talent, regulatory, commercial and operational challenges. We therefore combine market knowledge with practical expertise to provide solutions that are relevant to the realities of the businesses we serve. We are more than a recruitment agency. We are a workforce partner, working alongside our clients beyond the point of recruitment to help them build capable teams, strengthen their organisations and respond effectively to changing business demands.</p>
            <p className="font-sora text-navy text-[1rem] my-4">At Mastery, our objective is simple: to connect the right people, knowledge and opportunities in ways that create lasting value for the organisations and individuals we serve.</p>
          </div>
        </div>
      </div>
      {/**OUR APPROACH SECTION */}
      <div>
        <div className="max-w-7xl mx-auto pb-18 px-0 ">
          <div className="grid grid-cols-2 mt-25 gap-0 items-start max-lg:grid-cols-1 max-lg:gap-12 max-sm:mt-20 max-sm:px-5">
            {/* Left Column: Heading & Intro */}
            <div className="px-8 flex flex-col max-lg:px-0">
              <div className="flex gap-2 items-center mb-4">
                <p className="font-sora text-navy/70 text-[12px] tracking-wider mb-1">OUR APPROACH</p>
              </div>
              <p className="font-sora text-navy text-[3rem] leading-[1.1] font-semibold max-lg:text-[2.5rem] max-sm:text-[2.2rem]">
                How we think <br className="hidden lg:block" /> about work
              </p>
              <p className="text-navy/70 font-inter text-[1.1rem] leading-7 mt-6 mb-10 max-w-md max-lg:mb-6 max-sm:text-base">
                Good workforce decisions are rarely made in isolation. We look beyond the immediate brief to understand the people, market and momentum behind it.
              </p>
              {/* Highlighted Quote Box */}
              <div className="bg-[#E5EDF3] p-6 rounded-xl max-w-md border border-slate-200/50">
                <p className="font-sora text-navy text-[1.05rem] font-semibold leading-relaxed">Care in the detail. Perspective in the partnership.</p>
              </div>
            </div>
            {/* Right Column: Feature List */}
            <div className="flex flex-col border-t border-slate-300 max-lg:mt-8">
              {/* Item 1 */}
              <div className="flex gap-6 py-5 border-b border-slate-300 items-center">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="text-navy h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora text-navy text-[1.25rem] font-semibold mb-1">
                    See the whole workforce picture
                  </p>
                  <p className="text-navy/70 font-sora text-[0.9rem] leading-5">
                    We connect immediate hiring and HR needs to the wider realities shaping your organisation.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex gap-6 py-5 border-b border-slate-300 items-center">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="text-navy h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora text-navy text-[1.25rem] font-semibold mb-1">
                    Pair local and global insight
                  </p>
                  <p className="text-navy/70 font-sora text-[0.9rem] leading-5">
                    Our perspective is grounded in African markets and informed by the best of wider workforce practice.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex gap-6 py-5 border-b border-slate-300 items-center">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5 font-bold" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20.24 4.76c-2.3-2.29-5.87-2.35-8.24-.19-2.37-2.16-5.93-2.09-8.24.2-2.36 2.37-2.36 6.07 0 8.43l7.53 7.52c.2.19.45.29.71.29s.51-.1.71-.29l7.53-7.52c2.36-2.36 2.36-6.06 0-8.43ZM12 18.59l-6.82-6.81a3.92 3.92 0 0 1 0-5.6C5.97 5.39 6.98 5 7.99 5s2.02.39 2.8 1.18l.5.5-2.38 2.39c-.51.52-.51 1.36 0 1.88.49.49 1.13.73 1.77.73s1.28-.24 1.77-.73l1.64-1.64 3.59 3.59-1.04 1.04-2.3-2.3-.71.71 2.3 2.3-.79.79-2.3-2.3-.71.71 2.3 2.3-.79.79-2.29-2.29-.71.71 2.29 2.29-.94.94Zm6.82-6.81-.42.42-3.59-3.59 1.24-1.24-.71-.71-3.59 3.59c-.58.58-1.54.58-2.12 0a.33.33 0 0 1 0-.47l3.42-3.44.16-.16c1.57-1.57 4.04-1.57 5.62 0 1.57 1.58 1.57 4.04 0 5.6Z"></path></svg>
                </div>
                <div>
                  <p className="font-sora text-navy text-[1.25rem] font-semibold mb-1">
                    Build relationships that last
                  </p>
                  <p className="text-navy/70 font-sora text-[0.9rem] leading-5">
                    We earn trust through responsiveness, candour and a genuine stake in the work we do together.
                  </p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex gap-6 py-5 border-b border-slate-300 items-center">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="text-navy h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora text-navy text-[1.25rem] font-semibold mb-1">
                    Measure success through client growth
                  </p>
                  <p className="text-navy/70 font-sora text-[0.9rem] leading-5">
                    We care about progress that endures — not transactions that simply reach a finish line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**WHO WE SERVE SECTION */}
      <div className="border-y border-navy/20">
        <div className="mx-auto max-w-7xl py-18">
          <div>
            <p className="font-sora text-navy/70 text-[12px] tracking-wider">WHO WE SERVE</p>
            <div className="leading-10">
              <p className="font-sora text-[1.4rem] sm:text-[2rem] text-navy">Work is better when everyone</p>
              <p className="font-sora text-[1.4rem] sm:text-[2rem] text-navy">has place in the conversation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10 my-8">
              <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
                <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1.2rem] my-2">Clients</p>
                  <p className="text-navy/70 font-inter text-[0.95rem]">Organisations seeking the right talent, sound advice, and dependable HR support.</p>
                </div>
              </div>
              <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
                <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1.2rem] my-2">Candidates</p>
                  <p className="text-navy/70 font-inter text-[0.95rem]">Professionals seeking meaningful roles and transformative professional growth.</p>
                </div>
              </div>
              <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
                <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1.2rem] my-2">Colleagues</p>
                  <p className="text-navy/70 font-inter text-[0.95rem]">The team working tirelessly that makes Mastery Workforce possible.</p>
                </div>
              </div>
              <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
                <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20 10c-.74 0-1.38.4-1.72 1H13V9h4c.55 0 1-.45 1-1V5.72c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V7h-3V5c0-1.65-1.35-3-3-3-1.3 0-2.41.83-2.83 2.01A3.51 3.51 0 0 0 4 7.5c0 .33.05.65.14.96C2.87 9.14 2 10.49 2 12c0 1.08.43 2.09 1.17 2.83-.11.38-.17.77-.17 1.17 0 1.96 1.41 3.59 3.31 3.93C6.86 21.16 8.11 22 9.5 22c1.93 0 3.5-1.57 3.5-3.5V17h3v1.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V16c0-.55-.45-1-1-1h-4v-2h5.28c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2s-.9-2-2-2m-9 8.5c0 .83-.67 1.5-1.5 1.5-.71 0-1.33-.5-1.47-1.2l-.21-.8H7c-1.1 0-2-.9-2-2 0-.35.08-.68.25-.98l.46-.82-.78-.51C4.35 13.31 4 12.68 4 12c0-.98.72-1.82 1.68-1.97l1.69-.26-1.06-1.35c-.2-.26-.32-.59-.32-.92 0-.83.67-1.5 1.5-1.5.11 0 .21.01.31.03l1.19.17V4.99c0-.55.45-1 1-1s1 .45 1 1v13.5Z"></path></svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1.2rem] my-2">Collaborators</p>
                  <p className="text-navy/70 font-inter text-[0.95rem]">Partners who extend what we can deliver through complementary expertise.</p>
                </div>
              </div>
              <div className="border border-navy/20 py-6 w-full px-6 rounded-md bg-white shadow-sm">
                <div className="bg-skyblue text-navy p-2 w-fit rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-sora text-[1.2rem] my-2">Community</p>
                  <p className="text-navy/70 font-inter text-[0.95rem]">The wider ecosystem we exist to strengthen, building a better tomorrow together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**OUR VISION & MISSION SECTION */}
      <div>
        <div className="max-w-7xl mx-auto py-18 px-0">
          <div className="bg-skyblue rounded-3xl p-12 lg:p-16 grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-12 max-lg:p-10 max-sm:p-8">
            {/* Left Column: Mission */}
            <div className="flex flex-col pr-4">
              <div className="flex gap-2 items-center mb-5">
                <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path><path d="m8 16 5.99-2L16 8l-6 2z"></path></svg>
                </div>
                <p className="font-sora text-navy/80 text-[12px] tracking-wider uppercase font-semibold">
                  Our Mission
                </p>
              </div>
              <p className="font-sora text-navy text-[2rem] sm:text-[2.3rem] leading-[1.2] font-semibold mb-6 max-w-md">
                To make work more human, capable and connected.
              </p>
              <p className="text-navy/80 font-inter text-[1.05rem] leading-7 max-w-md">
                We help organisations and people unlock the value in their workforce through thoughtful expertise, practical action and partnerships built to last.
              </p>
            </div>
            {/* Right Column: Vision */}
            <div className="flex flex-col lg:border-l lg:border-white/40 lg:pl-16 max-lg:border-t max-lg:border-white/40 max-lg:pt-12">
              <div className="flex gap-2 items-center mb-5">
                <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path></svg>
                </div>
                <p className="font-sora text-navy/80 text-[12px] tracking-wider uppercase font-semibold">
                  Our Vision
                </p>
              </div>
              <p className="font-sora text-navy text-[2rem] sm:text-[2.3rem] leading-[1.2] font-semibold mb-6 max-w-md">
                A future where African talent and business thrive together.
              </p>
              <p className="text-navy/80 font-inter text-[1.05rem] leading-7 max-w-md">
                We see a world of work where opportunity is accessible, organisations are strengthened by their people and progress reaches far beyond the workplace.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**START A CONVERSATION SECTION */}
      <div>
        <div className="w-full bg-[#E5EDF3] py-24 max-lg:py-16 max-sm:py-12">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center gap-10 max-lg:flex-col max-lg:items-start max-sm:px-5">
            {/* Left Column: Text Content */}
            <div className="flex flex-col max-w-2xl">
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold mb-4">Start a Conversation</p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-semibold mb-6 max-lg:text-[2.2rem] max-sm:text-[1.8rem]">
                Let's build the next chapter of your workforce together.
              </p>
              <p className="text-navy/80 font-inter text-[1.1rem] leading-7 max-w-xl max-sm:text-base">
                Tell us where your organisation is heading. We will bring the perspective, people and practical support to help you move with confidence.
              </p>
            </div>
            {/* Right Column: Button */}
            <div className="shrink-0 mt-4 lg:mt-0">
              <button className="font-sora font-semibold flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg max-sm:px-6 max-sm:py-3.5">
                Get in touch
                {/* Add your arrow up-right icon here */}
                <span className="text-lg leading-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
