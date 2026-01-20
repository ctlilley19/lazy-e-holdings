"use client";

import Image from "next/image";
import { useState } from "react";

// Images for the site
const images = {
  hero: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1200&q=80", // Dallas skyline
  strategy: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", // Strategy planning
  technology: "https://www.camcode.com/wp-content/uploads/2018/06/shutterstock_2399344103-1135x675.webp", // Warehouse operations
  collaboration: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // Precision detail work
};

type Venture = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  features: string[];
  logo: string;
  url: string | null;
};

const ventures: Venture[] = [
  {
    id: "axis",
    name: "Axis",
    tagline: "Where Operations Align",
    description:
      "A multi-tenant facilities and operations management platform designed to work across all property types through configuration—not separate codebases. One platform. Total visibility.",
    status: "In Development",
    features: [
      "Property-type agnostic",
      "Configurable workflows",
      "Real-time insight",
      "Built for scale",
    ],
    logo: "/images/axis-logo.png",
    url: null,
  },
  {
    id: "coreops",
    name: "CoreOps",
    tagline: "Facilities Coordination Services",
    description:
      "Hands-on facilities coordination for property owners who don't want to manage vendors, schedules, and follow-ups themselves. We handle the coordination—so you don't have to.",
    status: "In Development",
    features: [
      "Vendor management",
      "Preventive maintenance",
      "Operational oversight",
      "DFW focused",
    ],
    logo: "/images/coreops-logo.png",
    url: null,
  },
  {
    id: "k9trainpros",
    name: "K9TrainPros",
    tagline: "Connect. Train. Thrive.",
    description:
      "A dog-training marketplace and lifetime dog-care management platform connecting owners with professional trainers. Built to support engagement during training—and long after pickup.",
    status: "Launching 2026",
    features: [
      "Trainer marketplace",
      "Progress tracking",
      "NFC-enabled profiles",
      "Lifetime records",
    ],
    logo: "/images/k9trainpros-logo.png",
    url: "https://k9protrain.com",
  },
];

function VentureCard({
  venture,
  isActive,
  onClick,
}: {
  venture: Venture;
  isActive: boolean;
  onClick: () => void;
}) {
  const handleVisit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (venture.url) {
      window.open(venture.url, "_blank");
    }
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer rounded-xl md:rounded-2xl border transition-all duration-300 bg-black-100
        ${isActive ? "border-gold-primary shadow-2xl shadow-gold-primary/20" : "border-gray-800 hover:border-gray-700 hover:shadow-xl"}
      `}
    >
      <div className="p-4 md:p-8">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src={venture.logo}
              alt={`${venture.name} logo`}
              width={48}
              height={48}
              className="rounded-lg md:rounded-xl md:w-[60px] md:h-[60px]"
            />
            <div>
              <h3 className="font-display text-base md:text-xl font-semibold text-gold-shimmer">
                {venture.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-400">{venture.tagline}</p>
            </div>
          </div>
          <span
            className={`
              rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium whitespace-nowrap
              ${venture.status.includes("Launching") ? "bg-gold-primary/20 text-gold-light" : "bg-gray-800 text-gray-400"}
            `}
          >
            {venture.status}
          </span>
        </div>

        <div
          className={`
            overflow-hidden transition-all duration-500
            ${isActive ? "mt-4 md:mt-6 max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">{venture.description}</p>

          <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
            {venture.features.map((feature, idx) => (
              <span
                key={idx}
                className="rounded-full bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-300"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-4 md:mt-6">
            {venture.url ? (
              <button
                onClick={handleVisit}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-black transition-all hover:shadow-lg hover:shadow-gold-primary/30"
              >
                Visit Site
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-500">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </span>
            )}
          </div>
        </div>

        {!isActive && (
          <div className="mt-3 md:mt-4 flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-gray-500">
            <span>Tap to learn more</span>
            <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeVenture, setActiveVenture] = useState<string | null>("axis");

  return (
    <div className="min-h-screen bg-black-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black-300/90 backdrop-blur-md border-b border-gray-800 safe-area-top">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <a href="#" className="flex items-center gap-2 md:gap-4">
            <Image
              src="/images/lazy-e-logo-zoomed.jpg"
              alt="Lazy E Holdings"
              width={44}
              height={44}
              className="rounded-lg md:w-14 md:h-14"
            />
            <span className="hidden sm:block font-display text-lg md:text-xl font-semibold text-gold-shimmer">
              Lazy E Holdings
            </span>
          </a>

          {/* Mobile: Contact button only */}
          <a
            href="#contact"
            className="md:hidden rounded-full bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark px-4 py-2 text-xs font-medium text-black"
          >
            Contact
          </a>

          {/* Desktop: Full nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#ventures" className="text-sm text-gray-400 transition-colors hover:text-gold-primary">
              Ventures
            </a>
            <a href="#about" className="text-sm text-gray-400 transition-colors hover:text-gold-primary">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark px-5 py-2.5 text-sm font-medium text-black transition-all hover:shadow-lg hover:shadow-gold-primary/30"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Headline */}
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gold-shimmer">
                Building Tools
                <br />
                <span className="text-gold-gradient">That Make Life Easier</span>
              </h1>

              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We build practical software and services that remove friction from operations—so people can focus on what actually matters.
              </p>

              <p className="mt-4 text-sm md:text-base text-gray-300 font-medium">
                Veteran-owned. Operator-led. Built to scale.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
                <a
                  href="#ventures"
                  className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark px-6 py-3 text-sm font-medium text-black transition-all hover:shadow-lg hover:shadow-gold-primary/30"
                >
                  Explore Our Ventures
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-gold-primary hover:text-gold-primary"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800">
                <Image
                  src={images.hero}
                  alt="Dallas Fort Worth skyline"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal Strip */}
      <section className="px-4 md:px-6 py-8 md:py-12 bg-black-200 border-y border-gray-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">Veteran-Owned</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">Dallas–Fort Worth Based</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">Operator-Built</span>
            </div>
          </div>
          <p className="mt-4 text-center text-xs md:text-sm text-gray-500 max-w-2xl mx-auto">
            Real-world operations experience • Government, commercial, and private-sector exposure • Technology designed from the field—not a pitch deck
          </p>
        </div>
      </section>

      {/* What Lazy E Holdings Is - Clarity Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-black-300">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm font-medium text-gold-primary mb-2">Who We Are</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              A Holding Company Built by an Operator
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Lazy E Holdings is a Texas-based holding company that builds and operates focused ventures in <span className="text-gray-200">facilities, operations, and service-driven platforms</span>.
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
              Each venture is created to solve a <span className="text-gray-200">specific, real problem</span>—validated through hands-on experience managing complex environments, large budgets, and mission-critical operations.
            </p>
            <p className="mt-6 text-lg md:text-xl text-gray-300 font-medium">
              We don&apos;t build ideas. We build <span className="text-gold-shimmer">tools that get used</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="scroll-mt-20 px-4 md:px-6 py-16 md:py-24 bg-black-200">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 md:mb-12 text-center">
            <p className="text-sm font-medium text-gold-primary mb-2">Our Portfolio</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              Our Ventures
            </h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Each Lazy E venture is independent, focused, and purpose-built—while sharing the same operational DNA. We&apos;re always building. This is just the beginning.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {ventures.map((venture) => (
              <VentureCard
                key={venture.id}
                venture={venture}
                isActive={activeVenture === venture.id}
                onClick={() => setActiveVenture(activeVenture === venture.id ? null : venture.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Images */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-black-300">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-sm font-medium text-gold-primary mb-2">How We Work</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              Built on Principles, Not Trends
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="group text-center md:text-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 md:mb-6 border border-gray-800">
                <Image
                  src={images.strategy}
                  alt="Strategic planning"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-gold-shimmer mb-2">
                Strategic Focus
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Every venture starts with a real operational problem—not a market buzzword.
              </p>
            </div>

            <div className="group text-center md:text-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 md:mb-6 border border-gray-800">
                <Image
                  src={images.technology}
                  alt="Technology development"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-gold-shimmer mb-2">
                Modern, Practical Technology
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                We leverage modern tools only when they make systems faster, simpler, or more reliable.
              </p>
            </div>

            <div className="group text-center md:text-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 md:mb-6 border border-gray-800">
                <Image
                  src={images.collaboration}
                  alt="Team collaboration"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-gold-shimmer mb-2">
                Quality Over Noise
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                We build products and services meant to last—designed for people who actually use them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 px-4 md:px-6 py-16 md:py-24 bg-black-200">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm font-medium text-gold-primary mb-2">About</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              Built From the Field—Not Theory
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Founder Info */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <Image
                  src="/images/lazy-e-logo-zoomed.jpg"
                  alt="Lazy E Holdings Logo"
                  width={64}
                  height={64}
                  className="rounded-2xl md:w-20 md:h-20"
                />
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-gold-shimmer">Clayton Lilley</h3>
                  <p className="text-sm md:text-base text-gray-400">Founder & CEO</p>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
                <p>
                  Clayton is a former United States Marine Corps Combat Engineer with extensive experience in <span className="text-gray-200">facilities management, infrastructure planning, and operational leadership</span>.
                </p>
                <p>His background includes:</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Managing facilities supporting <span className="text-gray-200">2,500–10,000+ personnel</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Planning and executing <span className="text-gray-200">$150M+ infrastructure projects</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Overseeing <span className="text-gray-200">multi-million-dollar operating budgets</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Leading <span className="text-gray-200">100+ projects</span> under strict safety and quality constraints</span>
                  </li>
                </ul>
                <p className="pt-2">
                  After years inside broken systems, Clayton founded Lazy E Holdings with a simple principle: <span className="text-gray-200">Technology should reduce effort—not create more of it.</span>
                </p>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="space-y-4 md:space-y-6">
              <div className="p-4 md:p-6 rounded-2xl border border-gray-800 bg-black-300">
                <h4 className="font-display text-base md:text-lg font-semibold text-gold-shimmer mb-2 md:mb-3">Our Mission</h4>
                <p className="text-sm md:text-base text-gray-400">
                  To eliminate friction in everyday operations—so people spend less time managing systems and more time living their lives.
                </p>
              </div>

              <div className="p-4 md:p-6 rounded-2xl border border-gray-800 bg-black-300">
                <h4 className="font-display text-base md:text-lg font-semibold text-gold-shimmer mb-2 md:mb-3">Why &quot;Lazy E&quot;?</h4>
                <p className="text-sm md:text-base text-gray-400">
                  The best systems require the least effort to use. We engineer simplicity—building solutions that work hard so you don&apos;t have to.
                </p>
              </div>

              <div className="p-4 md:p-6 rounded-2xl border border-gray-800 bg-black-300">
                <h4 className="font-display text-base md:text-lg font-semibold text-gold-shimmer mb-2 md:mb-3">The Approach</h4>
                <p className="text-sm md:text-base text-gray-400">
                  Military discipline meets practical problem-solving. We identify real problems, build focused solutions, and iterate based on what actually works—not what sounds good in a pitch deck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 px-4 md:px-6 py-16 md:py-24 bg-black-300">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-gold-primary mb-2">Get in Touch</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer mb-3 md:mb-4">
            Let&apos;s Build Something That Works
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
            Interested in our ventures or exploring a partnership?
          </p>

          <a
            href="mailto:admin@lazyeholdings.com"
            className="inline-flex items-center gap-2 md:gap-3 rounded-full bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-black transition-all hover:shadow-xl hover:shadow-gold-primary/30"
          >
            <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            admin@lazyeholdings.com
          </a>

          <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500">Dallas-Fort Worth, Texas</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black-300 px-4 md:px-6 py-6 md:py-8 safe-area-bottom">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/images/lazy-e-logo.png"
                alt="Lazy E Holdings"
                width={32}
                height={32}
                className="rounded-lg md:w-10 md:h-10"
              />
              <span className="text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Lazy E Holdings LLC
              </span>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <a href="#ventures" className="text-xs md:text-sm text-gray-500 transition-colors hover:text-gold-primary">
                Ventures
              </a>
              <a href="#about" className="text-xs md:text-sm text-gray-500 transition-colors hover:text-gold-primary">
                About
              </a>
              <a href="#contact" className="text-xs md:text-sm text-gray-500 transition-colors hover:text-gold-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
