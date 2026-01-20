"use client";

import Image from "next/image";
import { useState } from "react";

// Business/Innovation images from Unsplash (free for commercial use)
const images = {
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  strategy: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  technology: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  collaboration: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
};

type Venture = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  features: string[];
  gradient: string;
  icon: string;
  url: string | null;
};

const ventures: Venture[] = [
  {
    id: "axis",
    name: "Axis",
    tagline: "Where Operations Align",
    description:
      "Multi-tenant SaaS facilities management platform that works across all property types through configuration—not separate codebases. One platform, total visibility.",
    status: "In Development",
    features: [
      "Multi-tenant architecture",
      "Property-type agnostic",
      "Real-time operations",
      "Configurable workflows",
    ],
    gradient: "from-blue-500 to-blue-600",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
    url: null, // Coming soon
  },
  {
    id: "coreops",
    name: "CoreOps",
    tagline: "Facilities Coordination Services",
    description:
      "Hands-on facilities management services for property owners. We handle the coordination so you can focus on what matters. Targeting Dallas-Fort Worth affluent suburbs.",
    status: "In Development",
    features: [
      "Property coordination",
      "Vendor management",
      "Preventive maintenance",
      "DFW focused",
    ],
    gradient: "from-emerald-500 to-emerald-600",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
    url: null, // Coming soon
  },
  {
    id: "k9trainpros",
    name: "K9TrainPros",
    tagline: "Connect. Train. Thrive.",
    description:
      "Dog training marketplace and dog care management app. Connects dog owners with professional trainers, featuring NFC tag integration for instant access to dog profiles.",
    status: "Launching April 2026",
    features: [
      "Trainer marketplace",
      "Dog care management",
      "NFC tag profiles",
      "Progress tracking",
    ],
    gradient: "from-amber-500 to-amber-600",
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    url: "https://k9protrain.com", // Live site
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
        relative cursor-pointer rounded-2xl border-2 transition-all duration-300 bg-cream-50
        ${isActive ? "border-gold-600 shadow-xl" : "border-cream-300 hover:border-cream-400 hover:shadow-lg"}
      `}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${venture.gradient} flex items-center justify-center`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={venture.icon} />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-gold-700">
                {venture.name}
              </h3>
              <p className="text-sm text-warm-500">{venture.tagline}</p>
            </div>
          </div>
          <span
            className={`
              rounded-full px-3 py-1 text-xs font-medium
              ${venture.status.includes("Launching") ? "bg-gold-100 text-gold-700" : "bg-cream-200 text-warm-600"}
            `}
          >
            {venture.status}
          </span>
        </div>

        <div
          className={`
            overflow-hidden transition-all duration-500
            ${isActive ? "mt-6 max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="text-warm-600 leading-relaxed">{venture.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {venture.features.map((feature, idx) => (
              <span
                key={idx}
                className="rounded-full bg-cream-200 px-4 py-2 text-sm text-warm-700"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Visit Site Button */}
          <div className="mt-6">
            {venture.url ? (
              <button
                onClick={handleVisit}
                className="inline-flex items-center gap-2 rounded-full bg-gold-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-gold-700 hover:shadow-lg"
              >
                Visit Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-warm-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </span>
            )}
          </div>
        </div>

        {!isActive && (
          <div className="mt-4 flex items-center gap-2 text-sm text-warm-500">
            <span>Click to learn more</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="min-h-screen bg-cream-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/80 backdrop-blur-md border-b border-cream-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/lazy-e-logo.png"
              alt="Lazy E Holdings"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-display text-lg font-semibold text-gold-700">
              Lazy E Holdings
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#ventures" className="text-sm text-warm-600 transition-colors hover:text-gold-600">
              Ventures
            </a>
            <a href="#about" className="text-sm text-warm-600 transition-colors hover:text-gold-600">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gold-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream-200 px-4 py-2">
                <svg className="h-4 w-4 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-warm-700">Veteran-Owned | Dallas-Fort Worth</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gold-700">
                Building Solutions
                <br />
                <span className="text-gold-gradient">That Matter</span>
              </h1>

              <p className="mt-6 text-lg text-warm-600 leading-relaxed max-w-lg">
                A Texas-based holding company developing innovative ventures in facilities management, property services, and technology.
              </p>

              {/* Stats */}
              <div className="mt-10 flex items-center gap-10">
                <div>
                  <p className="font-display text-3xl font-bold text-gold-600">3</p>
                  <p className="text-sm text-warm-500">Ventures</p>
                </div>
                <div className="h-12 w-px bg-cream-300" />
                <div>
                  <p className="font-display text-3xl font-bold text-gold-600">DFW</p>
                  <p className="text-sm text-warm-500">Based</p>
                </div>
                <div className="h-12 w-px bg-cream-300" />
                <div>
                  <p className="font-display text-3xl font-bold text-gold-600">2024</p>
                  <p className="text-sm text-warm-500">Founded</p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#ventures"
                  className="rounded-full bg-gold-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gold-700 hover:shadow-lg"
                >
                  Explore Ventures
                </a>
                <a
                  href="#contact"
                  className="rounded-full border-2 border-cream-400 px-6 py-3 text-sm font-medium text-warm-700 transition-all hover:border-gold-500 hover:bg-cream-50"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-100 to-cream-200 rounded-3xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={images.hero}
                  alt="Modern office workspace"
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

      {/* Ventures Section */}
      <section id="ventures" className="scroll-mt-20 px-6 py-24 bg-cream-200">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium text-gold-600 mb-2">Our Portfolio</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-700">
              Three Ventures, One Vision
            </h2>
            <p className="mt-4 text-warm-600 max-w-2xl mx-auto">
              Each business addresses real problems with practical solutions—built on a foundation of quality, transparency, and results.
            </p>
          </div>

          <div className="space-y-4">
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
      <section className="px-6 py-24 bg-cream-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gold-600 mb-2">How We Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-700">
              Built on Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-cream-300">
                <Image
                  src={images.strategy}
                  alt="Strategic planning"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-gold-700 mb-2">
                Strategic Focus
              </h3>
              <p className="text-warm-600">
                Every decision is intentional. We identify real problems and build practical solutions that deliver measurable results.
              </p>
            </div>

            <div className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-cream-300">
                <Image
                  src={images.technology}
                  alt="Technology development"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-gold-700 mb-2">
                Modern Technology
              </h3>
              <p className="text-warm-600">
                We leverage current tools and platforms to build efficient, scalable solutions without unnecessary complexity.
              </p>
            </div>

            <div className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-cream-300">
                <Image
                  src={images.collaboration}
                  alt="Team collaboration"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-gold-700 mb-2">
                Quality Commitment
              </h3>
              <p className="text-warm-600">
                We build things that last. Every product and service reflects our commitment to excellence and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 px-6 py-24 bg-cream-200">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-gold-600 mb-2">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-700 mb-6">
            Lazy E Holdings
          </h2>
          <p className="text-lg text-warm-600 leading-relaxed">
            Veteran-founded and based in Dallas-Fort Worth, we build technology and services that solve real problems—with discipline, precision, and a commitment to quality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 px-6 py-24 bg-cream-100">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-gold-600 mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-700 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-warm-600 mb-8">
            Interested in learning more about our ventures or exploring partnership opportunities?
          </p>

          <a
            href="mailto:admin@lazyeholdings.com"
            className="inline-flex items-center gap-3 rounded-full bg-gold-600 px-8 py-4 font-medium text-white transition-all hover:bg-gold-700 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            admin@lazyeholdings.com
          </a>

          <p className="mt-6 text-sm text-warm-500">Dallas-Fort Worth, Texas</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream-300 bg-cream-100 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/images/lazy-e-logo.png"
                alt="Lazy E Holdings"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-sm text-warm-500">
                © {new Date().getFullYear()} Lazy E Holdings LLC
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#ventures" className="text-sm text-warm-500 transition-colors hover:text-gold-600">
                Ventures
              </a>
              <a href="#about" className="text-sm text-warm-500 transition-colors hover:text-gold-600">
                About
              </a>
              <a href="#contact" className="text-sm text-warm-500 transition-colors hover:text-gold-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
