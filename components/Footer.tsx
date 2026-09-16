export default function Footer() {
    return (
        <div className="bg-navy px-6 py-12 text-white sm:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand / About */}
                    <div className="lg:col-span-2">
                        <h2 className="font-sora text-[1.7rem] font-semibold">Mastery Workforce PEO Limited</h2>
                        <p className="mt-3 max-w-md text-sm leading-6 text-white/65">A recruitment and HR specialist company helping organisations across the continent find critical talent, access cutting-edge advice, and get the support they need to grow.</p>
                        <p className="mt-6 font-sora text-sm font-medium text-skyblue">Beyond talent. Beyond expectation.</p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-sora text-sm font-semibold">Quick Links</h3>
                        <div className="mt-5 flex flex-col gap-3">
                            <a href="#who-we-are" className="w-fit text-sm text-white/65 transition hover:text-white">Who We Are</a>
                            <a href="#solutions" className="w-fit text-sm text-white/65 transition hover:text-white">Solutions</a>
                            <a href="#trainings" className="w-fit text-sm text-white/65 transition hover:text-white">Trainings</a>
                            <a href="#advisory" className="w-fit text-sm text-white/65 transition hover:text-white">Advisory</a>
                            <a href="#outsourcing" className="w-fit text-sm text-white/65 transition hover:text-white">Outsourcing</a>
                            <a href="#talent-search" className="w-fit text-sm text-white/65 transition hover:text-white">Talent Search</a>
                            <a href="#contact" className="w-fit text-sm text-white/65 transition hover:text-white">Contact Us</a>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="font-sora text-sm font-semibold">Stay Updated</h3>
                        <p className="mt-4 text-sm leading-6 text-white/65">Stay ahead of workforce trends — subscribe to our updates.</p>
                        <div className="mt-5 flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="h-11 w-full rounded-lg border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-skyblue"
                            />
                            <button type="button" className="h-11 rounded-lg bg-skyblue px-5 text-sm font-semibold text-navy transition hover:opacity-90">Subscribe</button>
                        </div>
                    </div>
                </div>
                {/* Divider */}
                <div className="my-10 h-px bg-white/10" />
                {/* Bottom */}
                <div className="flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Mastery Workforce PEO Limited. All rights reserved.</p>
                    <p>Beyond talent. Beyond expectation.</p>
                </div>
            </div>
        </div>
    )
};
