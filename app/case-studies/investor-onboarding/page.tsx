import Image from "next/image"
import Link from "next/link"

export default function InvestorOnboarding() {

const prototype =
"https://preview--investwell-unified-flow.lovable.app/"

const screens = [
{
img: "/screens/Landing Page.jpg",
title: "Platform Landing",
desc: "Landing page introduces Hedge & Sachs investment platform."
},
{
img: "/screens/Onboarding.jpg",
title: "Account Creation",
desc: "Investor begins onboarding by creating an account."
},
{
img: "/screens/Regulatory Consent.jpg",
title: "Regulatory Consent",
desc: "Mandatory disclosures required under SCA regulation."
},
{
img: "/screens/Investor Classification.jpg",
title: "Investor Classification",
desc: "Investor classified as Retail or Professional."
},
{
img: "/screens/Investor Classification2.jpg",
title: "Risk Profiling",
desc: "Risk questionnaire determines investor suitability."
},
{
img: "/screens/Upload Document.jpg",
title: "KYC Upload",
desc: "Investor uploads identity and address proof."
},
{
img: "/screens/Sanction Screening.jpg",
title: "AML Screening",
desc: "Automated sanctions screening against global watchlists."
},
{
img: "/screens/Product Selection based on eligibility.jpg",
title: "Product Eligibility",
desc: "Products unlocked based on risk and classification."
}
]

return (

<div className="min-h-screen bg-[#0b0b0c] text-gray-300">


{/* NAVBAR */}

<div className="border-b border-gray-800">

<div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

<Link href="/" className="text-white text-lg font-semibold">
Rahul Verma
</Link>

<div className="flex gap-6 text-sm">
<Link href="/">Home</Link>
<Link href="/#projects">Projects</Link>
<Link href="/#about">About</Link>
</div>

</div>

</div>



<main className="max-w-6xl mx-auto px-6 py-16">


<Link
href="/"
className="text-gray-400 hover:text-white mb-10 inline-block"
>
← Back to Home
</Link>


{/* TITLE */}

<h1 className="text-4xl font-bold text-white mb-6">
Automated Investor Onboarding Platform
</h1>

<p className="text-lg text-gray-400 max-w-3xl mb-20">
A compliance-driven digital onboarding platform designed for
investment firms to replace fragmented manual onboarding
processes such as WhatsApp document submissions, email
approvals and spreadsheet-based KYC tracking.
</p>



{/* CONTEXT */}

<div className="text-green-400 text-sm tracking-widest mb-8">
[ CONTEXT ]
</div>

<h2 className="text-3xl text-white font-semibold mb-6">
Why This Product Was Needed
</h2>

<p className="text-gray-400 max-w-3xl mb-20">
Many investment firms still rely on manual onboarding workflows
where relationship managers collect documents through email
or messaging apps while operations teams track compliance
requirements in spreadsheets. This results in delays,
operational inefficiencies and regulatory risk.
</p>



{/* REGULATORY */}

<div className="text-green-400 text-sm tracking-widest mb-8">
[ REGULATORY CONTEXT ]
</div>

<h2 className="text-3xl text-white font-semibold mb-6">
Designed for SCA Compliance
</h2>

<p className="text-gray-400 max-w-3xl mb-20">
The onboarding workflow aligns with UAE Securities and
Commodities Authority (SCA) regulations including investor
classification, suitability assessment, AML screening and
audit trail generation.
</p>



{/* PROBLEM */}

<div className="text-green-400 text-sm tracking-widest mb-8">
[ PROBLEM ]
</div>

<ul className="list-disc pl-6 space-y-3 text-gray-400 mb-20">

<li>Manual KYC document collection through email or WhatsApp</li>
<li>Investor classification handled manually by RMs</li>
<li>AML screening across disconnected tools</li>
<li>No structured audit trail for regulatory inspections</li>
<li>Delayed onboarding approvals</li>

</ul>



{/* SOLUTION */}

<div className="text-green-400 text-sm tracking-widest mb-8">
[ SOLUTION ]
</div>

<p className="text-gray-400 max-w-3xl mb-20">
A digital onboarding platform embedding regulatory disclosures,
suitability checks and AML screening directly into the onboarding
workflow using a structured compliance state machine.
</p>



{/* SYSTEM DESIGN */}

<div className="text-green-400 text-sm tracking-widest mb-10">
[ SYSTEM DESIGN ]
</div>

<div className="bg-[#0f172a] border border-gray-800 rounded-lg p-8 mb-20">

<div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-sm text-center">

<div className="bg-[#020617] p-3 rounded">Account</div>
<div className="bg-[#020617] p-3 rounded">Consent</div>
<div className="bg-[#020617] p-3 rounded">Classification</div>
<div className="bg-[#020617] p-3 rounded">Risk</div>
<div className="bg-[#020617] p-3 rounded">KYC</div>
<div className="bg-[#020617] p-3 rounded">AML</div>
<div className="bg-[#020617] p-3 rounded">Eligibility</div>
<div className="bg-[#020617] p-3 rounded">Agreement</div>
<div className="bg-[#020617] p-3 rounded">Investment</div>

</div>

</div>



{/* SYSTEM ARCHITECTURE */}

<div className="text-green-400 text-sm tracking-widest mb-10">
[ SYSTEM ARCHITECTURE ]
</div>

<div className="bg-[#0f172a] border border-gray-800 rounded-lg p-8 mb-20">

<div className="flex flex-wrap items-center justify-center gap-4 text-sm">

<div className="bg-[#020617] px-5 py-3 rounded">
Investor UI
</div>

<span className="text-gray-500">→</span>

<div className="bg-[#020617] px-5 py-3 rounded">
Onboarding Engine
</div>

<span className="text-gray-500">→</span>

<div className="bg-[#020617] px-5 py-3 rounded">
Compliance Layer
</div>

<span className="text-gray-500">→</span>

<div className="bg-[#020617] px-5 py-3 rounded">
CRM / Ops Dashboard
</div>

</div>

</div>



{/* INVESTOR JOURNEY */}

<div className="text-green-400 text-sm tracking-widest mb-10">
[ INVESTOR JOURNEY ]
</div>

<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">

{screens.map((s,i)=>(
<div key={i} className="bg-[#0f172a] border border-gray-800 rounded-lg p-4">

<Image
src={s.img}
alt={s.title}
width={320}
height={220}
className="rounded mb-3"
/>

<h3 className="text-white text-sm font-semibold mb-1">
{s.title}
</h3>

<p className="text-gray-400 text-xs">
{s.desc}
</p>

</div>
))}

</div>



{/* PROTOTYPE */}

<div className="text-green-400 text-sm tracking-widest mb-8">
[ PROTOTYPE ]
</div>

<p className="text-gray-400 mb-6">
Explore the working prototype demonstrating the investor
onboarding workflow.
</p>

<a
href={prototype}
target="_blank"
className="bg-white text-black px-6 py-3 rounded font-medium"
>
View Interactive Prototype →
</a>



{/* IMPACT */}

<div className="text-green-400 text-sm tracking-widest mt-20 mb-8">
[ EXPECTED IMPACT ]
</div>

<ul className="list-disc pl-6 space-y-3 text-gray-400">

<li>Reduce onboarding time from days to minutes</li>
<li>Improve SCA regulatory compliance</li>
<li>Create structured compliance audit trail</li>
<li>Reduce RM and operations workload</li>
<li>Deliver seamless digital investor onboarding</li>

</ul>


</main>

</div>

)
}