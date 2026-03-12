import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f0e] text-gray-200">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">

          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-sm font-semibold">
              R
            </div>
            <span className="text-lg font-semibold">
              Rahul Verma
            </span>
          </a>

          <div className="flex items-center gap-8 text-sm text-gray-400">

            <a href="#work" className="hover:text-white transition">
              Selected Work
            </a>

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>

            <a
              href="https://www.linkedin.com/in/rahulverma-productmanager/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              in
            </a>

            <a
              href="mailto:rahulverma.tiss@gmail.com"
              className="bg-green-600 px-5 py-2 rounded-lg text-white hover:bg-green-500 transition"
            >
              Email Me
            </a>

          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-8">

        {/* HERO */}

        <section className="pt-24 pb-20 max-w-3xl">

          <p className="text-green-400 text-sm tracking-widest mb-4">
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Product Manager building scalable fintech products
          </h1>

          <p className="text-gray-400 text-lg">
          Digital Product Manager with 8+ years building regulated financial platforms across banking and fintech.

I specialize in designing scalable onboarding and compliance systems that replace manual operations with automated digital workflows.

My work spans digital banking, investor onboarding and regulatory product infrastructure.

          </p>

        </section>

        {/* SELECTED WORK */}

        <section id="work" className="py-24">

          <p className="text-green-400 text-sm tracking-widest mb-2">
            PORTFOLIO
          </p>

          <h2 className="text-4xl font-bold mb-16">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* NRI PROJECT */}

            <Link
              href="/case-studies/nri-onboarding"
              className="group block border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 hover:-translate-y-1 transition"
            >

              <div className="overflow-hidden">
                <img
                  src="/screens/nri.jpg"
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-8">

                <h3 className="text-xl font-semibold mb-3">
                  Digital NRI Account Opening Platform
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  Built a digital onboarding platform enabling NRIs to open NRE/NRO accounts remotely using Aadhaar eKYC and Video KYC.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  <span className="bg-green-900/40 text-green-400 text-xs px-3 py-1 rounded-full">
                    0→1 Product Launch
                  </span>

                  <span className="bg-green-900/40 text-green-400 text-xs px-3 py-1 rounded-full">
                    Video KYC Integration
                  </span>

                  <span className="bg-green-900/40 text-green-400 text-xs px-3 py-1 rounded-full">
                    NRI Remote Onboarding
                  </span>

                </div>

                <p className="text-xs text-gray-500 tracking-widest">
                  DIGITAL BANKING / KYC / FINTECH
                </p>

              </div>

            </Link>


            {/* INVESTOR PROJECT */}

            <Link
              href="/case-studies/investor-onboarding"
              className="group block border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 hover:-translate-y-1 transition"
            >

              <div className="overflow-hidden">
                <img
                  src="/screens/invest.jpg"
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-8">

                <h3 className="text-xl font-semibold mb-3">
                  Automated Investor Onboarding Platform
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  Concept platform exploring automated investor onboarding and compliance workflows.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  <span className="bg-green-900/40 text-green-400 text-xs px-3 py-1 rounded-full">
                    Investor KYC Automation
                  </span>

                  <span className="bg-green-900/40 text-green-400 text-xs px-3 py-1 rounded-full">
                    RegTech Workflow
                  </span>

                  <span className="bg-green-900/40 text-green-400 text-xs px-3 py-1 rounded-full">
                    Compliance Automation
                  </span>

                  <span className="bg-green-900/40 text-green-400 text-xs px-3 py-1 rounded-full">
                    Prototype
                  </span>

                </div>

                <p className="text-xs text-gray-500 tracking-widest">
                  INVESTMENT / REGTECH / PRODUCT DESIGN
                </p>

              </div>

            </Link>

          </div>
        </section>

        {/* EXPERIENCE + STACK */}

        <section id="experience" className="py-24">

          <div className="grid md:grid-cols-2 gap-20">

            {/* EXPERIENCE */}

            <div>

              <p className="text-green-400 text-sm tracking-widest mb-2">
                CAREER PATH
              </p>

              <h2 className="text-4xl font-bold mb-12">
                Experience
              </h2>

              {/* ACCENTURE */}

              <div className="mb-12 border-l border-gray-700 pl-6">

                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">Accenture</h3>
                  <span className="text-xs text-gray-500">
                    Dec 2024 — Present
                  </span>
                </div>

                <p className="text-green-400 text-sm mb-3">
                  Product Owner
                </p>

                <p className="text-gray-400 text-sm">
                  Leading product development for regulatory taxation systems used by a US-based retirement financial services company.
                </p>

              </div>


              {/* AXIS BANK */}

              <div className="mb-12 border-l border-gray-700 pl-6">

                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">Axis Bank</h3>
                  <span className="text-xs text-gray-500">
                    2021 — 2024
                  </span>
                </div>

                <p className="text-green-400 text-sm mb-3">
                  Digital Product Owner
                </p>

                <p className="text-gray-400 text-sm mb-4">
                  Built and launched a digital NRI account opening platform integrating Aadhaar eKYC and Video KYC.
                </p>

                <a
                  href="/case-studies/nri-onboarding"
                  className="inline-block text-sm bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  Project | NRI Account Opening →
                </a>

              </div>


              {/* YES BANK */}

              <div className="border-l border-gray-700 pl-6">

                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">YES Bank</h3>
                  <span className="text-xs text-gray-500">
                    2018 — 2021
                  </span>
                </div>

                <p className="text-green-400 text-sm mb-3">
                  Product Manager
                </p>

                <p className="text-gray-400 text-sm">
                  Led digital banking engagement initiatives and built campaign management systems.
                </p>

              </div>

            </div>

            {/* STACK */}

            <div>

              <p className="text-green-400 text-sm tracking-widest mb-2">
                ARSENAL
              </p>

              <h2 className="text-4xl font-bold mb-12">
                My Stack
              </h2>

              <div className="grid grid-cols-2 gap-6">

                {[
                  ["figma", "Figma", "Design"],
                  ["jira", "Jira", "Agile"],
                  ["sql", "SQL", "Data"],
                  ["openai", "OpenAI", "AI / LLM"],
                  ["cursor", "Cursor", "AI Dev"],
                  ["lovable", "Lovable", "Prototyping"],
                ].map(([icon, name, label]) => (

                  <div
                    key={name}
                    className="group bg-[#0f172a] border border-gray-800 rounded-xl p-5 text-center hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition"
                  >

                    <p className="text-sm font-medium">
                      {name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>
        </section>

        {/* CONTACT */}

        <section className="text-center py-32">

          <h2 className="text-5xl font-bold mb-6">
            Let’s go from zero to working
          </h2>

          <p className="text-gray-400 mb-8">
            Let’s build something impactful together.
          </p>

          <a
            href="mailto:rahulverma.tiss@gmail.com"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Email Me
          </a>

        </section>

      </div>

    </main>
  );
}