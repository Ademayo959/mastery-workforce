import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#F4F7F9]">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto pt-24 pb-16 px-8 max-sm:pt-16 max-sm:px-5 max-sm:pb-10">
          <div className="flex gap-2 items-center mb-4">
            <div className="bg-skyblue h-[2px] w-8"></div>
            <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold">What We Do</p>
          </div>
          <p className="font-sora text-navy text-[4rem] leading-[1.1] font-bold mb-6 max-lg:text-[3rem] max-sm:text-[2.5rem]">Solutions.</p>
          <p className="text-navy/70 font-inter text-[1.1rem] leading-7 max-w-3xl max-sm:text-base">
            Our solutions are built around one goal: helping your organisation get the talent, guidance, and support it needs to grow, even in a challenging market. Each line of business stands strong on its own, and works even better together.
          </p>
        </div>
        {/* Sub-Navigation Bar */}
        <div className="w-full bg-white border-y border-slate-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-8 max-sm:px-5">
            <div className="flex gap-10 overflow-x-auto hide-scrollbar">
              <a href="#trainings" className="font-sora text-navy text-sm py-5 whitespace-nowrap border-b-2 border-transparent hover:border-navy transition-colors">Trainings</a>
              <a href="#advisory" className="font-sora text-navy/60 text-sm py-5 whitespace-nowrap border-b-2 border-transparent hover:border-navy transition-colors">Advisory</a>
              <a href="#outsourcing" className="font-sora text-navy/60 text-sm py-5 whitespace-nowrap border-b-2 border-transparent hover:border-navy transition-colors">Outsourcing</a>
              <a href="#talent" className="font-sora text-navy/60 text-sm py-5 whitespace-nowrap border-b-2 border-transparent hover:border-navy transition-colors">Talent Search</a>
            </div>
          </div>
        </div>
        {/* Section 01: Trainings */}
        <div id="trainings" className="w-full bg-white py-24 max-lg:py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12 max-sm:px-5">
            {/* Left Column */}
            <div className="flex flex-col pt-4">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-4">01 — Trainings</p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-bold mb-6 max-sm:text-[2rem]">Building Skills That Move Your Business Forward.</p>
              <p className="text-navy/70 font-inter text-[1.05rem] leading-7 mb-10 max-w-lg">
                A capable workforce doesn't happen by accident. Our training solutions are designed to close skills gaps, sharpen performance, and prepare your people and your leaders for what's next. Whether you need to onboard new hires faster, upskill existing teams, or develop future leaders, we design and deliver training programmes rooted in real business outcomes, not just checkboxes.
              </p>
              {/* Quote Box */}
              <div className="bg-[#E5EDF3] p-8 rounded-2xl max-w-lg flex gap-4">
                <div className="shrink-0 w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={29} height={29} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1H3zm12 8h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Zm0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1h-5V6Z"></path></svg>
                </div>
                <p className="font-sora text-navy text-[1.15rem] font-bold leading-snug">Training rooted in real business outcomes, not just checkboxes.</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-6">What We Offer</p>
              <div className="grid grid-cols-2 gap-4 mb-8 max-sm:grid-cols-1">
                {/* Card 1 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Skills development and technical training</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Leadership and management development</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Onboarding and induction programmes</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M17 17.76v-5.35l2.91-2.91L21 8.41c.38-.38.58-.88.58-1.42s-.21-1.04-.59-1.41L18.4 3c-.38-.38-.88-.58-1.41-.58s-1.04.21-1.41.59L13.8 4.8l-2.21 2.21H6.24l-3.35 12.3 1.82 1.82 12.3-3.35Zm0-13.35 2.59 2.58-1.09 1.09-2.59-2.59 1.08-1.08ZM7.77 9h4.65l2.09-2.09L17.1 9.5l-2.09 2.09v4.65L7 18.42l3.43-3.43h.08c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5v.08L5.58 17l2.18-8.01Z"></path></svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Custom-built training curricula for specific business needs</p>
                </div>
                {/* Card 5 (Spans 2 columns) */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow col-span-2 max-sm:col-span-1">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Ongoing capability-building support</p>
                </div>
              </div>
              <button className="font-sora font-semibold flex items-center gap-2 bg-navy text-white px-6 py-3.5 rounded-lg self-start transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                Talk to Us About Training
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Section 02: Advisory */}
        <div id="advisory" className="w-full bg-[#E5EDF3] py-24 max-lg:py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12 max-sm:px-5">
            {/* Left Column (Grid) */}
            <div className="flex flex-col order-2 lg:order-1">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-6">What We Offer</p>
              <div className="grid grid-cols-2 gap-4 mb-8 max-sm:grid-cols-1">
                {/* Card 1 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path><path d="m8 16 5.99-2L16 8l-6 2z"></path></svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">HR strategy and organisational design</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Policy development and compliance guidance</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6m0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4"></path><path d="M12 22c5.42 0 10-4.58 10-10S17.42 2 12 2 2 6.58 2 12s4.58 10 10 10m0-18c4.34 0 8 3.66 8 8s-3.66 8-8 8-8-3.66-8-8 3.66-8 8-8"></path><path d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path></svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Performance management frameworks</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Compensation and benefits advisory</p>
                </div>
                {/* Card 5 (Spans 2 columns) */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow col-span-2 max-sm:col-span-1">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Change management support</p>
                </div>
              </div>
              <button className="font-sora font-semibold flex items-center gap-2 bg-navy text-white px-6 py-3.5 rounded-lg self-start transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                Speak with an Advisor
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
            {/* Right Column (Text) */}
            <div className="flex flex-col pt-4 order-1 lg:order-2">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-4">02 — Advisory</p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-bold mb-6 max-sm:text-[2rem]">
                Strategic HR Guidance for Smarter Decisions.
              </p>
              <p className="text-navy/70 font-inter text-[1.05rem] leading-7 mb-10 max-w-lg">
                Good people decisions start with good advice. Our advisory service gives you access to seasoned HR and workforce experts who understand both the local market and global best practice, so you can make confident decisions about structure, policy, performance, and people strategy. We work alongside your leadership team as a trusted extension of your business, not an outside voice offering generic recommendations.
              </p>
              {/* Quote Box */}
              <div className="bg-[#B3D4E8] p-8 rounded-2xl max-w-lg flex gap-4">
                <div className="shrink-0 w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={29} height={29} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1H3zm12 8h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Zm0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1h-5V6Z"></path></svg>
                </div>
                <p className="font-sora text-navy text-[1.15rem] font-bold leading-snug">A trusted extension of your business, never an outside voice.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 03: Outsourcing */}
        <div id="outsourcing" className="w-full bg-white py-24 max-lg:py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12 max-sm:px-5">
            {/* Left Column */}
            <div className="flex flex-col pt-4">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-4">03 — Outsourcing</p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-bold mb-6 max-sm:text-[2rem]">
                Dependable Workforce Outsourcing, So You Can Focus on What Matters.
              </p>
              <p className="text-navy/70 font-inter text-[1.05rem] leading-7 mb-10 max-w-lg">
                Managing the operational side of HR and staffing can pull focus away from your core business. Our outsourcing solutions take that weight off your shoulders, handling everything from staffing and payroll administration to HR operations with the reliability and compliance your business needs.
              </p>
              {/* Quote Box */}
              <div className="bg-[#E5EDF3] p-8 rounded-2xl max-w-lg flex gap-4">
                <div className="shrink-0 w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={29} height={29} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1H3zm12 8h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Zm0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1h-5V6Z"></path></svg>
                </div>
                <p className="font-sora text-navy text-[1.15rem] font-bold leading-snug">
                  Operational support with the reliability your business needs.
                </p>
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-6">What We Offer</p>
              <div className="grid grid-cols-2 gap-4 mb-8 max-sm:grid-cols-1">
                {/* Card 1 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10 13H8c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm7.73-11.49c-.08-.22-.19-.42-.3-.62v-.01c-.69-1.14-1.93-1.89-3.42-1.89-2.28 0-4 1.72-4 4s1.72 4 4 4c1.49 0 2.73-.74 3.42-1.89v-.01c.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18M9 10c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2m6 0q-.165 0-.33-.03c-.22.66-.56 1.27-.98 1.81.41.13.84.22 1.31.22 2.28 0 4-1.72 4-4s-1.72-4-4-4c-.47 0-.9.09-1.31.22.43.53.76 1.14.98 1.81.11-.01.21-.03.33-.03 1.18 0 2 .82 2 2s-.82 2-2 2m1 3h-1.11c.6.58 1.08 1.27 1.44 2.03C17.83 15.2 19 16.46 19 18h-2v1c0 .35-.07.69-.18 1H20c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5"></path></svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Staff outsourcing and workforce management</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Payroll administration</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">HR operations support</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Compliance and regulatory management</p>
                </div>
                {/* Card 5 (Spans 2 columns) */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow col-span-2 max-sm:col-span-1">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path><path d="M12.28 8.82 12 9.1l-.28-.28c-1.09-1.1-2.81-1.1-3.91 0a2.794 2.794 0 0 0 0 3.95L11.99 17l4.18-4.23a2.794 2.794 0 0 0 0-3.95 2.73 2.73 0 0 0-3.91 0Z"></path></svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Employee lifecycle administration</p>
                </div>
              </div>
              <button className="font-sora font-semibold flex items-center gap-2 bg-navy text-white px-6 py-3.5 rounded-lg self-start transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                Explore Outsourcing Solutions
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Section 04: Talent Search */}
        <div id="talent" className="w-full bg-[#E5EDF3] py-24 max-lg:py-16 border-b border-navy/10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12 max-sm:px-5">
            {/* Left Column (Grid) */}
            <div className="flex flex-col order-2 lg:order-1">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-6">
                What We Offer
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8 max-sm:grid-cols-1">
                {/* Card 1 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Executive search</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M9 4h6v2H9zM4 20V8h3v12zm5 0V8h6v12zm8 0V8h3v12z"></path></svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Specialist and technical recruitment</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-navy h-5 w-5" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10 13H8c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm7.73-11.49c-.08-.22-.19-.42-.3-.62v-.01c-.69-1.14-1.93-1.89-3.42-1.89-2.28 0-4 1.72-4 4s1.72 4 4 4c1.49 0 2.73-.74 3.42-1.89v-.01c.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18M9 10c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2m6 0q-.165 0-.33-.03c-.22.66-.56 1.27-.98 1.81.41.13.84.22 1.31.22 2.28 0 4-1.72 4-4s-1.72-4-4-4c-.47 0-.9.09-1.31.22.43.53.76 1.14.98 1.81.11-.01.21-.03.33-.03 1.18 0 2 .82 2 2s-.82 2-2 2m1 3h-1.11c.6.58 1.08 1.27 1.44 2.03C17.83 15.2 19 16.46 19 18h-2v1c0 .35-.07.69-.18 1H20c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5"></path></svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Volume/bulk hiring</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Confidential and succession searches</p>
                </div>
                {/* Card 5 (Spans 2 columns) */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow col-span-2 max-sm:col-span-1">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E5EDF3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-navy h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                  </div>
                  <p className="font-sora text-navy font-semibold text-[0.95rem] leading-snug">Market mapping and talent intelligence</p>
                </div>
              </div>
              <button className="font-sora font-semibold flex items-center gap-2 bg-navy text-white px-6 py-3.5 rounded-lg self-start transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                Start Your Search
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
            {/* Right Column (Text) */}
            <div className="flex flex-col pt-4 order-1 lg:order-2">
              <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-4">04 — Talent Search</p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-bold mb-6 max-sm:text-[2rem]">Finding the People Who Move Your Business Forward.</p>
              <p className="text-navy/70 font-inter text-[1.05rem] leading-7 mb-10 max-w-lg">
                The right hire changes everything. Our talent search practice goes beyond keyword-matching CVs, we understand your business, your culture, and the real capability you need, then go find it, whether that's a specialist, a senior leader, or a hard-to-find niche skill set. We work across industries and seniority levels, drawing on a deep network built over years of trusted relationships with top talent across the continent.
              </p>
              {/* Quote Box */}
              <div className="bg-[#B3D4E8] p-8 rounded-2xl max-w-lg flex gap-4">
                <div className="shrink-0 w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-navy" width={29} height={29} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1H3zm12 8h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Zm0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1h-5V6Z"></path></svg>
                </div>
                <p className="font-sora text-navy text-[1.15rem] font-bold leading-snug">We find the capability your business truly needs.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom CTA Section */}
        <div className="w-full bg-white py-24 max-lg:py-16 max-sm:py-12">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center gap-10 max-lg:flex-col max-lg:items-start max-sm:px-5">
            {/* Left Column: Text Content */}
            <div className="flex flex-col max-w-2xl">
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold mb-4">A Connected Workforce Partner</p>
              <p className="font-sora text-navy text-[2.5rem] leading-[1.15] font-bold mb-6 max-lg:text-[2.2rem] max-sm:text-[1.8rem]">One partner for the people decisions that shape what comes next.</p>
              <p className="text-navy/80 font-inter text-[1.1rem] leading-7 max-w-xl max-sm:text-base">Start with the service you need today, and build a partnership that keeps pace with your organisation tomorrow.</p>
            </div>
            {/* Right Column: Button */}
            <div className="shrink-0 mt-4 lg:mt-0">
              <button className="font-sora font-semibold flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg max-sm:px-6 max-sm:py-3.5">
                Talk to Our Team
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
