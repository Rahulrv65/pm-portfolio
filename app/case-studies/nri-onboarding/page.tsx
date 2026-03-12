import Link from "next/link";

const steps = [
  { num: "01", title: "Account Selection", desc: "Customer selects NRE/NRO account" },
  { num: "02", title: "Aadhaar OTP", desc: "Identity verified via OTP" },
  { num: "03", title: "PAN Validation", desc: "Real-time PAN verification" },
  { num: "04", title: "Customer Details", desc: "Personal details captured" },
  { num: "05", title: "Document Upload", desc: "Passport & visa uploaded" },
  { num: "06", title: "Video KYC", desc: "Live VKYC agent verification" },
  { num: "07", title: "Initial Funding", desc: "Account funded via Razorpay" },
  { num: "08", title: "Account Activation", desc: "Account gets opened in Finacle" }
];

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-gray-800 rounded-lg p-5 bg-gray-900">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-400 text-sm mt-1">{desc}</p>
    </div>
  );
}

function Arrow() {
  return <div className="text-gray-600 text-xl text-center">↓</div>;
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
      <p className="font-semibold mb-2">{title}</p>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      <div className="max-w-6xl mx-auto px-8 py-20">

        <Link
          href="/"
          className="text-gray-400 hover:text-white mb-10 inline-block"
        >
          ← Back to Home
        </Link>

        {/* HERO */}

<h1 className="text-6xl font-bold mb-6">
  Digital NRI Account Opening
</h1>

<p className="text-gray-400 text-lg max-w-3xl mb-8">
  Built a fully digital onboarding platform enabling NRIs visiting
  India to open NRE/NRO accounts using Aadhaar eKYC and Video KYC,
  eliminating manual paperwork and branch dependency.
</p>


{/* PRODUCT INFO */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-3xl text-sm">

  <div>
    <p className="text-gray-500">Role</p>
    <p className="font-medium">Product Owner</p>
  </div>

  <div>
    <p className="text-gray-500">Company</p>
    <p className="font-medium">Axis Bank</p>
  </div>

  <div>
    <p className="text-gray-500">Platform</p>
    <p className="font-medium">pace.axisbank.com</p>
  </div>

  <div>
    <p className="text-gray-500">Launch</p>
    <p className="font-medium">2024</p>
  </div>

</div>


{/* LIVE LINK */}

<div className="flex flex-col gap-3 mb-20">

  <a
    href="https://pace.axisbank.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
  >
    View Live NRI Onboarding Portal →
  </a>

  <p className="text-gray-500 text-sm max-w-xl">
    Note: The onboarding portal is geo-restricted and accessible only from
    India due to regulatory and security requirements.
  </p>

</div>

        {/* CONTEXT */}

        <section className="mb-24">

          <p className="text-green-500 tracking-widest mb-2">
            [ CONTEXT ]
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Why This Product Was Needed
          </h2>

          <p className="text-gray-400 max-w-3xl">
            Axis Bank receives thousands of NRI visits annually from customers
            wanting to open NRE/NRO accounts while visiting India.
            The existing onboarding process relied heavily on manual paperwork
            and internal verification systems, creating delays and operational
            inefficiencies.
          </p>

        </section>


        {/* PROBLEM */}

        <section className="mb-28">

          <p className="text-green-500 tracking-widest mb-2">
            [ PROBLEM ]
          </p>

          <h2 className="text-4xl font-bold mb-6">
            NRI account opening required manual branch processes
          </h2>

          <p className="text-gray-400 max-w-3xl mb-12">
            NRIs visiting India had to rely on a manual onboarding process
            involving physical branch visits, document verification and
            multiple internal approvals before an account could be activated.
          </p>


          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">

            <Card
              title="NRI Visiting India"
              desc="Customer wants to open an NRE/NRO account while visiting India."
            />

            <Card
              title="Mandatory Branch Visit"
              desc="Customers had to physically visit a bank branch to submit forms."
            />

            <Card
              title="Manual Document Verification"
              desc="Passport and visa documents were manually verified by bank staff."
            />

            <Card
              title="7–10 Day Activation"
              desc="Account activation required manual processing across multiple systems."
            />

          </div>

        </section>


        {/* GOAL */}

        <section className="mb-24">

          <p className="text-green-500 tracking-widest mb-2">
            [ GOAL ]
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Enable NRIs to open accounts digitally within minutes
          </h2>

          <p className="text-gray-400 max-w-3xl">
            The objective was to design a digital onboarding platform enabling
            NRIs visiting India to complete KYC, submit documents and fund
            their accounts online without requiring branch visits.
          </p>

        </section>

{/* PRODUCT OVERVIEW */}

<section className="mb-32">

<p className="text-green-500 tracking-widest mb-2">
[ PRODUCT OVERVIEW ]
</p>

<h2 className="text-4xl font-bold mb-16">
How the System Works
</h2>

<div className="flex flex-wrap items-center justify-center gap-6">

<div className="border border-gray-800 rounded-xl p-6 bg-gray-900 w-[220px] text-center">
<p className="font-semibold">Customer</p>
<p className="text-gray-400 text-sm mt-2">
NRI starts onboarding journey
</p>
</div>

<div className="text-gray-500 text-2xl">→</div>

<div className="border border-gray-800 rounded-xl p-6 bg-gray-900 w-[220px] text-center">
<p className="font-semibold">PACE Platform</p>
<p className="text-gray-400 text-sm mt-2">
Digital onboarding portal
</p>
</div>

<div className="text-gray-500 text-2xl">→</div>

<div className="border border-gray-800 rounded-xl p-6 bg-gray-900 w-[220px] text-center">
<p className="font-semibold">KYC Verification</p>
<p className="text-gray-400 text-sm mt-2">
Aadhaar eKYC + PAN validation
</p>
</div>

<div className="text-gray-500 text-2xl">→</div>

<div className="border border-gray-800 rounded-xl p-6 bg-gray-900 w-[220px] text-center">
<p className="font-semibold">Video KYC</p>
<p className="text-gray-400 text-sm mt-2">
Live identity verification
</p>
</div>

<div className="text-gray-500 text-2xl">→</div>

<div className="border border-gray-800 rounded-xl p-6 bg-gray-900 w-[220px] text-center">
<p className="font-semibold">Core Banking</p>
<p className="text-gray-400 text-sm mt-2">
Account created in Finacle
</p>
</div>

</div>

</section>
        {/* MY ROLE */}

        <section className="mb-24">

          <p className="text-green-500 tracking-widest mb-2">
            [ MY ROLE ]
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Product Owner – Digital Banking
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Card
              title="Product Strategy"
              desc="Defined product roadmap, MVP scope and digital onboarding experience."
            />

            <Card
              title="Architecture & Feasibility"
              desc="Evaluated internal banking systems to determine reusable platforms."
            />

            <Card
              title="Stakeholder Alignment"
              desc="Worked with compliance, risk, operations and engineering teams."
            />

            <Card
              title="Product Delivery"
              desc="Defined JIRA epics, user stories and prioritized engineering backlog."
            />

          </div>

        </section>


        {/* WHAT I LED */}

        <section className="mb-24">

          <p className="text-green-500 tracking-widest mb-2">
            [ WHAT I LED ]
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <Card title="Market Research" desc="Studied digital onboarding journeys across major Indian banks." />

            <Card title="Journey Design" desc="Designed end-to-end digital onboarding flow." />

            <Card title="System Integrations" desc="Led integration planning across internal systems and APIs." />

            <Card title="Security & Compliance" desc="Managed AppSec and InfoSec audits required for regulated platforms." />

            <Card title="Vendor Integration" desc="Integrated Razorpay payment gateway for initial funding." />

            <Card title="Launch & Adoption" desc="Led pilot rollout, training and go-to-market execution." />

          </div>

        </section>


        <section className="mb-28">

  <p className="text-green-400 tracking-widest text-sm mb-3">
    [ CUSTOMER JOURNEY ]
  </p>

  <h2 className="text-4xl font-bold mb-12">
    Digital Onboarding Flow
  </h2>

  <div className="grid md:grid-cols-4 gap-6 items-stretch">

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">01</p>
      <h3 className="font-semibold text-lg mb-2">Account Selection</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Customer selects NRE/NRO account
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">02</p>
      <h3 className="font-semibold text-lg mb-2">Aadhaar OTP</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Identity verified via OTP
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">03</p>
      <h3 className="font-semibold text-lg mb-2">PAN Validation</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Real-time PAN verification
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">04</p>
      <h3 className="font-semibold text-lg mb-2">Customer Details</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Personal details captured
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">05</p>
      <h3 className="font-semibold text-lg mb-2">Document Upload</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Passport & visa uploaded
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">06</p>
      <h3 className="font-semibold text-lg mb-2">Video KYC</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Live VKYC agent verification
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">07</p>
      <h3 className="font-semibold text-lg mb-2">Initial Funding</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Account funded via Razorpay
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-green-400 font-semibold mb-2">08</p>
      <h3 className="font-semibold text-lg mb-2">Account Activation</h3>
      <p className="text-gray-400 text-sm flex-grow">
        Account gets opened in Finacle
      </p>
    </div>

  </div>

</section>
{/* PRODUCT JOURNEY VISUALIZATION */}

<section className="mb-32">

  <p className="text-green-500 tracking-widest mb-2">
    [ PRODUCT JOURNEY VISUALIZATION ]
  </p>

  <h2 className="text-4xl font-bold mb-6">
    Illustrative Onboarding Experience
  </h2>

  <p className="text-gray-400 max-w-3xl mb-16">
    The following screens illustrate the onboarding experience designed for the
    PACE platform. Actual production UI cannot be shared publicly due to
    banking security and compliance policies.
  </p>

  <div className="grid md:grid-cols-3 gap-10">

    {/* STEP 1 */}

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

      <img
        src="/screens/onboarding1.png"
        className="w-full h-48 object-contain mb-6"
      />

      <h3 className="text-xl font-semibold mb-2">
        Permission & Onboarding Initiation
      </h3>

      <p className="text-gray-400 text-sm">
        Customer grants camera, location and microphone permissions required
        for Video KYC before starting the onboarding journey.
      </p>

    </div>


    {/* STEP 2 */}

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

      <img
        src="/screens/onboarding3.png"
        className="w-full h-48 object-contain mb-6"
      />

      <h3 className="text-xl font-semibold mb-2">
        Identity Verification (KYC)
      </h3>

      <p className="text-gray-400 text-sm">
        Customer submits identity documents and completes live selfie
        verification as part of Aadhaar based digital KYC validation.
      </p>

    </div>


    {/* STEP 3 */}

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

      <img
        src="/screens/onboarding4.png"
        className="w-full h-48 object-contain mb-6"
      />

      <h3 className="text-xl font-semibold mb-2">
        Address & Document Verification
      </h3>

      <p className="text-gray-400 text-sm">
        Customer submits address details and uploads supporting documents
        which are validated through the bank's internal verification systems
        before account activation.
      </p>

    </div>

  </div>

</section>

{/* OPERATIONS WORKFLOW */}

<section className="mb-28">

  <h2 className="text-4xl font-bold mb-12">
    Operations Workflow
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
      <p className="text-green-400 font-semibold mb-1">01</p>
      <p className="font-semibold mb-1">VKYC Recording</p>
      <p className="text-gray-400 text-sm">
        Video interaction recorded
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
      <p className="text-green-400 font-semibold mb-1">02</p>
      <p className="font-semibold mb-1">Audit Verification</p>
      <p className="text-gray-400 text-sm">
        Operations team validates VKYC session
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
      <p className="text-green-400 font-semibold mb-1">03</p>
      <p className="font-semibold mb-1">eForms Validation</p>
      <p className="text-gray-400 text-sm">
        Customer details verified internally
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
      <p className="text-green-400 font-semibold mb-1">04</p>
      <p className="font-semibold mb-1">TForms Document Check</p>
      <p className="text-gray-400 text-sm">
        Passport and visa verified
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
      <p className="text-green-400 font-semibold mb-1">05</p>
      <p className="font-semibold mb-1">CBS Account Creation</p>
      <p className="text-gray-400 text-sm">
        Account created in core banking system
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
      <p className="text-green-400 font-semibold mb-1">06</p>
      <p className="font-semibold mb-1">CKYC Registry Update</p>
      <p className="text-gray-400 text-sm">
        Customer KYC stored in CKYC registry
      </p>
    </div>

  </div>

</section>
        {/* SYSTEMS */}

        <section className="mb-24">

          <p className="text-green-500 tracking-widest mb-2">
            [ SYSTEMS ORCHESTRATED ]
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <Card title="UIDAI Aadhaar APIs" desc="Customer identity verification" />
            <Card title="PAN Verification Service" desc="PAN validation API" />
            <Card title="Video KYC Platform" desc="Live identity verification" />
            <Card title="Razorpay Payment Gateway" desc="Initial account funding" />
            <Card title="eForms System" desc="Internal customer validation" />
            <Card title="TForms System" desc="Document verification workflow" />
            <Card title="Core Banking System" desc="Account creation and funding" />
            <Card title="CKYC Registry" desc="Central KYC data storage" />

          </div>

        </section>


        {/* PRODUCT DECISION */}

        <section className="mb-24">

          <p className="text-green-500 tracking-widest mb-2">
            [ KEY PRODUCT DECISION ]
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Leveraged existing verification systems
          </h2>

          <p className="text-gray-400 max-w-3xl">
            Instead of building a new internal verification service,
            the product reused the bank's existing eForms and TForms
            platforms for document and data validation.
            This significantly reduced implementation time and
            accelerated product launch.
          </p>

        </section>


        {/* PRODUCT OPTIMIZATION */}

        <section className="mb-24">

          <p className="text-green-500 tracking-widest mb-2">
            [ PRODUCT OPTIMIZATION ]
          </p>

          <h2 className="text-3xl font-semibold mb-6">
            Improving the VKYC Experience
          </h2>

          <p className="text-gray-400 max-w-3xl">
            Early pilot launches revealed high VKYC abandonment rates.
            By simplifying instructions and improving document upload flows,
            the onboarding journey reduced VKYC drop-off by nearly 40%.
          </p>

        </section>


        {/* IMPACT */}

        <section className="mb-28">

          <p className="text-green-500 tracking-widest mb-2">
            [ IMPACT ]
          </p>

          <h2 className="text-5xl font-bold mb-12">
            Product Impact
          </h2>

          <div className="text-green-500 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <Card title="12 min Onboarding" desc="~60% faster than branch process" />

            <Card title="0 Branch Visits" desc="Fully digital onboarding" />

            <Card title="<1 Day Activation" desc="Previously required 7–10 days" />

            <Card title="Fully Digital KYC" desc="End-to-end automated journey" />

          </div>

        </section>


        {/* LEARNINGS */}

        <section className="mb-20">

          <p className="text-green-500 tracking-widest mb-2">
            [ KEY LEARNINGS ]
          </p>

          <ul className="text-gray-400 max-w-3xl space-y-4">

            <li>
              Regulated fintech products require early alignment with compliance and risk teams.
            </li>

            <li>
              External dependencies such as Aadhaar APIs can affect onboarding success rates.
            </li>

            <li>
              Digital onboarding must optimize both customer experience and internal operations workflows.
            </li>

          </ul>

        </section>


      </div>

    </main>
  );
}