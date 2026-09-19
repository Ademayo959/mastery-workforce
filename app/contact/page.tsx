import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#F4F7F9]">
        {/* Top Header Section */}
        <div className="max-w-7xl mx-auto pt-24 pb-16 px-8 max-sm:pt-16 max-sm:px-5 max-sm:pb-10">
          <div className="flex gap-2 items-center mb-6">
            <div className="bg-skyblue h-[2px] w-8"></div>
            <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold">
              Mastery Workforce PEO Limited
            </p>
          </div>
          <p className="font-sora text-navy text-[4rem] leading-[1.1] font-bold mb-8 max-lg:text-[3rem] max-sm:text-[2.5rem]">
            Let's Talk
          </p>
          {/* Highlighted Intro Text with Left Border */}
          <div className="border-l-[3px] border-[#B3D4E8] pl-6 max-w-3xl">
            <p className="font-sora text-navy text-[1.5rem] leading-[1.3] font-semibold max-sm:text-[1.2rem]">
              Whether you're looking for the right talent, expert advice, or a workforce partner who goes further than expected — we'd love to hear from you.
            </p>
          </div>
        </div>
        {/* Main Form and Sidebar Section */}
        <div className="max-w-7xl mx-auto px-8 pb-24 grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-sm:px-5">
          {/* Left Column: Contact Form */}
          <div className="col-span-2 bg-white rounded-2xl p-10 shadow-sm border border-slate-100 max-sm:p-6">
            <p className="font-sora text-navy/60 text-[12px] tracking-wider uppercase font-semibold mb-2">
              Start a Conversation
            </p>
            <p className="font-sora text-navy text-[2rem] leading-[1.2] font-bold mb-4">
              Get in Touch
            </p>
            <p className="text-navy/70 font-inter text-[1.05rem] leading-7 mb-8 max-w-xl">
              Fill in the form below, or reach us directly, and a member of our team will respond promptly.
            </p>
            <form className="flex flex-col gap-6">
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sora text-navy font-semibold text-sm">Full Name</label>
                  <input type="text" id="name" placeholder="Your full name" className="font-inter w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F4F7F9] text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-sora text-navy font-semibold text-sm">Company Name</label>
                  <input type="text" id="company" placeholder="Your organisation" className="font-inter w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F4F7F9] text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent transition-all" />
                </div>
              </div>
              {/* Row 2: Email and Phone */}
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sora text-navy font-semibold text-sm">Email Address</label>
                  <input type="email" id="email" placeholder="you@company.com" className="font-inter w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F4F7F9] text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sora text-navy font-semibold text-sm">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Include country code" className="font-inter w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F4F7F9] text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent transition-all" />
                </div>
              </div>
              {/* Row 3: Service Dropdown */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-sora text-navy font-semibold text-sm">I'm interested in</label>
                <select
                  id="service"
                  defaultValue=""
                  className="font-inter w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F4F7F9] text-navy focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent transition-all appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="trainings">Trainings</option>
                  <option value="advisory">Advisory</option>
                  <option value="outsourcing">Outsourcing</option>
                  <option value="talent">Talent Search</option>
                </select>
              </div>
              {/* Row 4: Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sora text-navy font-semibold text-sm">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us a little about what you need support with." className="font-inter w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F4F7F9] text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent transition-all resize-none"></textarea>
              </div>
              {/* Form Footer */}
              <div className="flex items-center gap-6 mt-4 max-sm:flex-col max-sm:items-start">
                <button type="submit" className="cursor-pointer font-sora font-semibold flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg max-sm:w-full justify-center">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
                <p className="text-navy/50 font-inter text-xs max-w-[250px]">
                  We'll treat your details with care and only use them to respond to your enquiry.
                </p>
              </div>
            </form>
          </div>
          {/* Right Column: Contact Info Box */}
          <div className="col-span-1 flex flex-col gap-6 max-lg:mt-10">
            {/* Blue Info Box */}
            <div className="bg-[#B3D4E8] rounded-2xl p-8 flex flex-col">
              {/* Icon and Heading on same line */}
              <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-navy">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                  </svg>
                </div>
                <p className="font-sora text-navy text-[1.4rem] font-bold leading-tight">
                  Prefer to speak directly?
                </p>
              </div>
              <p className="font-inter text-navy/80 text-[1rem] leading-7 mb-8">
                Reach our team at <span className="font-semibold text-navy">[email address]</span> or <span className="font-semibold text-navy">[phone number]</span>. We're ready to help you find your next opportunity, your next hire, or your next solution.
              </p>
              {/* Divider */}
              <div className="border-t border-white/40 mb-8"></div>
              {/* Direct Contact Details */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sora text-navy/60 text-[11px] tracking-wider uppercase font-semibold">Email</p>
                    <p className="font-inter text-navy font-semibold text-[0.95rem]">[email address]</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-navy">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sora text-navy/60 text-[11px] tracking-wider uppercase font-semibold">Phone</p>
                    <p className="font-inter text-navy font-semibold text-[0.95rem]">[phone number]</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Text below the blue box */}
            <p className="text-navy/60 font-inter text-sm px-2 leading-relaxed">
              Your first conversation is simply a chance to understand what comes next.
            </p>
          </div>
        </div>
        {/* Bottom CTA Section */}
        <div className="w-full bg-[#E5EDF3] py-24 max-lg:py-16 max-sm:py-12">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center gap-10 max-lg:flex-col max-lg:items-start max-sm:px-5">
            <div className="flex flex-col max-w-2xl">
              <p className="font-sora text-navy/70 text-[12px] tracking-wider uppercase font-semibold mb-4">
                A Workforce Partner, Not Just a Provider
              </p>
              <p className="font-sora text-navy text-[2rem] leading-[1.2] font-bold max-sm:text-[1.6rem]">
                The right conversation can open new possibilities for people and business.
              </p>
            </div>
            <div className="shrink-0 mt-4 lg:mt-0">
              <button className="font-sora cursor-pointer font-semibold flex items-center gap-3 bg-white text-navy border border-slate-300 px-8 py-4 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-md max-sm:px-6 max-sm:py-3.5 max-sm:w-full justify-center">
                Meet Mastery Workforce
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-navy h-5 w-5">
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
