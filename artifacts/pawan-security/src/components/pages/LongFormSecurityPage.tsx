import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, CheckCircle2, Phone, Sparkles, Target } from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
};

type Pillar = {
  icon: IconType;
  title: string;
  description: string;
};

type ContentBlock = {
  title: string;
  body: string;
  bullets: string[];
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type LongFormSecurityPageData = {
  title: string;
  subtitle: string;
  eyebrow: string;
  intro: string;
  heroImage: string;
  keywordChips: string[];
  metrics: Metric[];
  pillars: Pillar[];
  contentBlocks: ContentBlock[];
  processSteps: ProcessStep[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function LongFormSecurityPage({ data }: { data: LongFormSecurityPageData }) {
  useEffect(() => {
    document.title = `${data.title} | Smart CCTV India`;
    window.scrollTo(0, 0);
  }, [data.title]);

  const sectionLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#details", label: "Details" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQ" },
  ];
  const [active, setActive] = useState<string>("#overview");

  useEffect(() => {
    const ids = sectionLinks.map((s) => s.href);
    const handler = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.querySelector(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="relative overflow-hidden py-20 pt-32 sm:py-24 sm:pt-36 md:py-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:42px_42px]" />
        <motion.div
          className="absolute -top-16 -right-16 hidden h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl md:block"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 hidden h-96 w-96 rounded-full bg-blue-500/15 blur-3xl md:block"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] xl:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-4 w-4 text-cyan-300" /> {data.eyebrow}
              </div>
              <h1 className="mt-5 text-4xl font-black leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-7xl">
                {data.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
                {data.subtitle}
              </p>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                {data.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {data.keywordChips.map((chip) => (
                  <span key={chip} className="rounded-full px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-300/95 shadow-sm sm:text-sm">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
                {data.metrics.map((metric, index) => (
                  <motion.div key={metric.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.06 }} className="rounded-3xl px-5 py-4 text-white/95 shadow-lg backdrop-blur-md bg-gradient-to-r from-white/6 to-white/4 border border-white/6">
                    <div className="text-2xl font-black text-white sm:text-3xl">{metric.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/70 sm:text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
                <Button size="lg" className="h-12 px-8 w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 sm:w-auto" asChild>
                  <Link to="/contact">{data.ctaLabel ?? "Get Free Quote"} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 w-full border-white/20 bg-white/8 text-white hover:bg-white/15 sm:w-auto" asChild>
                  <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call Now</a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-cyan-400/30 via-blue-500/20 to-fuchsia-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
                  <img src={data.heroImage} alt={data.title} className="aspect-[4/3] w-full object-cover opacity-90" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-md">
                    <BadgeCheck className="h-5 w-5 text-cyan-300" />
                    <div className="mt-3 text-sm font-semibold">Premium structure</div>
                    <div className="text-xs text-white/65">Readable and polished</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-md">
                    <Target className="h-5 w-5 text-emerald-300" />
                    <div className="mt-3 text-sm font-semibold">Keyword coverage</div>
                    <div className="text-xs text-white/65">SEO-friendly and natural</div>
                  </div>
                  <div className="hidden rounded-2xl bg-white/10 p-4 text-white backdrop-blur-md sm:block">
                    <Sparkles className="h-5 w-5 text-fuchsia-300" />
                    <div className="mt-3 text-sm font-semibold">Animated finish</div>
                    <div className="text-xs text-white/65">Subtle motion with depth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-y border-white/10 bg-slate-950/70 py-4 backdrop-blur-xl">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
            <Sparkles className="h-4 w-4 text-cyan-300" /> Explore the page
          </div>
            <div className="flex flex-wrap gap-2">
            {sectionLinks.map((link) => (
              <a key={link.href} href={link.href} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors sm:text-sm ${active===link.href? 'bg-cyan-400 text-slate-950 border border-cyan-500' : 'bg-white/6 text-white/80 border border-white/10 hover:bg-white/12'}`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 py-10 shadow-lg shadow-blue-900/30">
        <div className="container mx-auto grid grid-cols-2 gap-5 px-4 text-center text-white md:grid-cols-4 md:gap-6 md:px-6">
          {data.metrics.map((metric, index) => (
            <motion.div key={metric.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
              <div className="text-2xl font-black sm:text-3xl">{metric.value}</div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/75 sm:text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="overview" className="bg-slate-950 py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 rounded-full bg-cyan-400" />
                <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Why it matters</span>
              </div>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl">{data.ctaTitle}</h2>
              <p className="mb-6 text-base leading-relaxed text-slate-300 md:text-lg">{data.ctaText}</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {data.pillars.map((pillar, index) => (
                  <motion.div key={pillar.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-3xl border border-white/10 bg-white/6 p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/25">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <img src={data.heroImage} alt={data.title} className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10" />
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.4, repeat: Infinity }} className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-slate-950/75 p-5 text-white shadow-2xl backdrop-blur-xl">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Long-form content built for SEO</div>
                    <div className="text-sm text-slate-300">Structured for readers and search intent</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">Each page expands on the keywords naturally, then closes with a clear next step so the user never hits a dead end.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="details" className="bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-8 rounded-full bg-cyan-400" />
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Detailed Coverage</span>
              <div className="h-0.5 w-8 rounded-full bg-cyan-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Built around the right search terms</h2>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">The sections below keep the content useful, detailed, and easy to scan without repeating the same sentence structure over and over.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {data.contentBlocks.map((block, index) => (
              <motion.article key={block.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-fuchsia-400" />
                <h3 className="mb-4 text-2xl font-bold text-white">{block.title}</h3>
                <p className="mb-6 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">{block.body}</p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {block.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                      <span className="text-sm leading-relaxed text-slate-200 md:text-base">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-slate-950 py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-8 rounded-full bg-cyan-400" />
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">How it works</span>
              <div className="h-0.5 w-8 rounded-full bg-cyan-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">A simple process with clear handover</h2>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">The flow is the same across every page: explain the problem, show the options, and end with a practical next step.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 md:gap-6">
            {data.processSteps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
                <div className="mb-4 text-5xl font-black leading-none text-cyan-400/20 transition-colors group-hover:text-cyan-300/30">{step.step}</div>
                <h3 className="mb-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] py-16 sm:py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_28%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-8 rounded-full bg-cyan-400" />
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Frequently Asked Questions</span>
              <div className="h-0.5 w-8 rounded-full bg-cyan-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Questions people ask before they book</h2>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">These answers help turn broad keyword traffic into a useful, trustworthy page that actually closes the loop.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 md:gap-8">
            {data.faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
                <h3 className="mb-3 text-lg font-bold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 to-primary" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4 w-4" /> Fast response and free site visit
            </div>
            <h2 className="mb-4 text-3xl font-black leading-tight text-white md:text-6xl">{data.ctaTitle}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-xl">{data.ctaText}</p>
            <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-bold sm:w-auto" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" className="h-12 border-none bg-white/10 px-8 text-base font-bold text-white hover:bg-white/20 sm:w-auto" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="h-5 w-5" /> 72488 95469</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}