import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import lmuLogo from "@/assets/lmu.svg.asset.json";
import iracingLogo from "@/assets/iracing-white-figure.png.asset.json";
import f1Logo from "@/assets/f1-25.png.asset.json";
import heroBg from "@/assets/hero-car.png.asset.json";
import activityImg from "@/assets/activity-feed.png.asset.json";
import sessionsImg from "@/assets/sessions-stats.png.asset.json";
import lbImg from "@/assets/leaderboards-challenges.png.asset.json";
import communityImg from "@/assets/community.png.asset.json";
import agentImg from "@/assets/agent-pro.png.asset.json";
import proImg from "@/assets/apex-pro-telemetry.png.asset.json";
import hugoImg from "@/assets/hugo-cook.jpg.asset.json";

const APP = "https://apexsimtracker.com";
const u = (p: string) => `${APP}${p}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex — Sim Racing Performance Hub" },
      { name: "description", content: "Activity feed, session stats, leaderboards, challenges and community for iRacing, F1 25 and Le Mans Ultimate. Automatic telemetry with Apex Pro." },
      { property: "og:title", content: "Apex — Sim Racing Performance Hub" },
      { property: "og:description", content: "Centralize your sim racing data: sessions, leaderboards, challenges and community in one hub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ticker = ["Activity feed & goals", "Sessions & stats", "Leaderboards", "Challenges", "Community", "Apex Agent", "iRacing", "F1 25", "Le Mans Ultimate"];
const sims: { name: string; logo: string; white: boolean; plate?: boolean; big?: boolean }[] = [
  { name: "iRacing", logo: iracingLogo.url, white: false, big: true },
  { name: "F1 25", logo: f1Logo.url, white: false },
  { name: "Le Mans Ultimate", logo: lmuLogo.url, white: false },
];
const hub: [string, string, string][] = [
  ["Activity feed & goals", "See your sessions and weekly targets alongside the community — your home base when you're logged in.", "Logged in"],
  ["Sessions & stats", "Log performance and spot trends instead of scattering notes across spreadsheets.", "Track"],
  ["Leaderboards & challenges", "Compare laps, climb the ranks, and enter structured challenges to see where you stand.", "Compete"],
  ["Community", "Discuss setups, events, and technique with other racers — jump into discussions anytime.", "Connect"],
  ["Agent & Apex Pro", "Apex Agent uploads F1 25 telemetry automatically on Mac, Windows, and Linux — included with Apex Pro.", "Pro"],
];
const pro = ["Automatic telemetry uploads", "Apex Agent access", "Full analytics & comparisons", "Future Pro-only challenges"];
const nav: [string, string, string][] = [["", "Home", "/"], ["", "Leaderboards", "/leaderboards"], ["", "Challenges", "/challenges"], ["", "Community", "/community"], ["", "Pricing", "/pricing"]];

function Section({ title, sub, href, children }: { title: string; sub: string; href?: string; children: ReactNode }) {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4 px-6 lg:px-8">
        <div>
          <h2 className="font-sans text-2xl font-bold">{title}</h2>
          <p className="mt-1 text-muted-foreground">{sub}</p>
        </div>
        {href && <a href={u(href)} className="shrink-0 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-primary">View All</a>}
      </div>
      <div className="no-scrollbar mt-6 flex gap-5 overflow-x-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <div>
        <header className="sticky top-0 z-30 flex h-16 items-center gap-8 border-b bg-background/95 px-6 backdrop-blur">
          <a href="/" className="flex shrink-0 items-center">
            <img src={u("/icon-512.png")} alt="Apex" width={36} height={36} className="h-9 w-9" />
          </a>
          <nav className="hidden h-full items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground md:flex">
            {nav.map(([, l, p], idx) => (
              <a key={l} href={idx ? u(p) : "/"} className={`flex h-full items-center border-b-2 ${idx === 0 ? "border-primary text-primary" : "border-transparent hover:text-foreground"}`}>{l}</a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a href={u("/login")} className="rounded-lg border bg-secondary px-3 py-2 text-sm font-medium hover:bg-muted">Sign in</a>
            <a href={u("/signup")} className="rounded-lg bg-primary px-3 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90">Get started</a>
          </div>
        </header>

        <section className="relative overflow-hidden">
                    <img src={heroBg.url} alt="" className="absolute inset-x-0 top-0 h-[calc(100%-8rem)] sm:h-[calc(100%-10rem)] w-full object-cover object-[82%_90%] sm:object-[center_85%]" />
          <div className="absolute inset-0 bg-hero-fade" />
          <div className="relative overflow-hidden border-b py-3">
            <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t} <span className="ml-10 text-primary">•</span></span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
            <h1 className="font-display text-5xl font-black uppercase italic leading-[0.9] sm:text-7xl">
              Welcome to<br /><span className="text-primary">Apex.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/85">
              Your activity feed, weekly goals, sessions and stats — plus leaderboards, challenges and community. One hub for every sim you run.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={u("/signup")} className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90">Get on track</a>
              <a href={u("/challenges")} className="rounded-md border border-input bg-background/40 px-6 py-3 font-semibold hover:bg-secondary">Explore without signing in</a>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-2 px-3 pb-8 sm:gap-5 sm:px-6 lg:px-8">
            {sims.map((s, i) => (
              <a key={s.name} href={u("/leaderboards")} className="relative h-20 overflow-hidden rounded-md border bg-card sm:h-32">
                                <span className="relative flex h-full items-center justify-center p-2 sm:p-6">
                  <img src={s.logo} alt={s.name} loading="lazy" className={`${s.big ? "max-h-12 max-w-[95%] sm:max-h-20 sm:max-w-[92%]" : "max-h-9 max-w-[85%] sm:max-h-16 sm:max-w-[75%]"} object-contain ${s.white ? "brightness-0 invert" : ""} ${s.plate ? "rounded-md bg-foreground px-4 py-3" : ""}`} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <Section title="⚑ Everything in one hub" sub="Sign in for your activity feed, weekly goals, uploads and personalised stats.">
          {hub.map(([t, d, tag], i) => (
            <a key={t} href={u("/signup")} className="w-60 shrink-0 overflow-hidden rounded-md border bg-card">
              <div className={`relative aspect-video ${i < 5 ? "bg-card" : "bg-muted"}`}>
                {i < 5 ? <img src={[activityImg.url, sessionsImg.url, lbImg.url, communityImg.url, agentImg.url][i]} alt={t} loading="lazy" className="h-full w-full object-cover object-top" /> : <div className="h-full w-full bg-muted" />}
                <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">{tag}</span>
              </div>
              <div className="p-4">
                <h3 className="font-sans text-base font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </a>
          ))}
        </Section>


        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-lg bg-secondary p-10 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Apex Pro</div>
              <h2 className="mt-2 font-sans text-2xl font-bold">Automatic telemetry. Full analytics.</h2>
              <p className="mt-4 text-muted-foreground">Apex Agent uploads your F1 25 telemetry automatically on Mac, Windows and Linux — unlock it after you join.</p>
              <ul className="mt-5 space-y-2">
                {pro.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">✓</span>{p}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={u("/signup")} className="rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Get started</a>
                <a href={u("/pricing")} className="rounded-md border border-input px-5 py-2.5 font-semibold">View pricing</a>
              </div>
            </div>
            <img src={proImg.url} alt="Apex Pro telemetry" loading="lazy" className="aspect-video w-full rounded-md border object-cover" />
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-lg border bg-card p-10 md:flex-row">
            <img src={hugoImg.url} alt="Hugo Cook" loading="lazy" className="h-28 w-28 shrink-0 rounded-full border-4 border-primary object-cover object-[45%_45%]" />
            <div className="flex-1 text-center md:text-left">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">The founder</div>
              <h2 className="mt-1 font-sans text-2xl font-bold">Hugo Cook</h2>
              <p className="text-sm text-muted-foreground">Founder · Professional racing driver</p>
              <p className="mt-3 text-muted-foreground">British GT with Barwell Motorsport. Apex exists because sim prep deserved the same seriousness as real-world racing.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {["British GT Championship", "Barwell Motorsport", "#63 Lamborghini Huracán GT3 Evo2"].map((b) => (
                  <span key={b} className="rounded bg-secondary px-3 py-1 text-xs font-semibold">{b}</span>
                ))}
              </div>
            </div>
            <a href={u("/about")} className="shrink-0 rounded-md bg-secondary px-5 py-2.5 font-semibold text-primary">Read our story</a>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg border bg-card p-10 text-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Get the app</div>
              <h2 className="mt-1 font-sans text-2xl font-bold">Available on the App Store and Google Play</h2>
              <p className="mt-2 text-muted-foreground">Take Apex with you — check your sessions, leaderboards and community on the go.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border bg-background px-5 py-2.5 hover:bg-secondary">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.52 2.68-1.27z"/></svg>
                <span className="text-left leading-tight"><span className="block text-[10px] text-muted-foreground">Download on the</span><span className="block text-base font-semibold">App Store</span></span>
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border bg-background px-5 py-2.5 hover:bg-secondary">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fill="#34A853" d="M3.6 2.3 13.4 12 3.6 21.7c-.36-.2-.6-.6-.6-1.1V3.4c0-.5.24-.9.6-1.1z"/><path fill="#FBBC04" d="m16.8 15.4-3.4-3.4 3.4-3.4 3.9 2.2c1.1.6 1.1 1.8 0 2.4z"/><path fill="#EA4335" d="M16.8 15.4 13.4 12 3.6 21.7c.37.2.85.2 1.33-.07z"/><path fill="#4285F4" d="M16.8 8.6 4.93 2.37C4.45 2.1 3.97 2.1 3.6 2.3L13.4 12z"/></svg>
                <span className="text-left leading-tight"><span className="block text-[10px] text-muted-foreground">Get it on</span><span className="block text-base font-semibold">Google Play</span></span>
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-lg border bg-background p-12 text-center">
            <h2 className="font-display text-4xl font-black uppercase italic sm:text-5xl">Ready to start your <span className="text-primary">Apex</span> journey?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">Join Apex and turn scattered sessions into a clear picture of your pace.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={u("/signup")} className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Sign up free</a>
              <a href={u("/faq")} className="rounded-md border border-input px-6 py-3 font-semibold">Read the FAQ</a>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-black italic">APEX<span className="text-primary">.</span></div>
              <p className="mt-3 text-muted-foreground">One hub for every sim you run.</p>
            </div>
            {([
              ["Apex", [["About", "/about"], ["Pricing", "/pricing"], ["FAQ", "/faq"], ["Contact", "/contact"]]],
              ["Explore", [["Community", "/community"], ["Challenges", "/challenges"], ["Leaderboards", "/leaderboards"]]],
              ["Legal", [["Terms", "/terms-and-conditions"], ["Privacy", "/privacy-policy"], ["Cookies", "/cookie-policy"], ["EULA", "/eula"]]],
            ] as [string, [string, string][]][]).map(([h, ls]) => (
              <div key={h}>
                <h3 className="font-sans font-semibold text-muted-foreground">{h}</h3>
                <ul className="mt-4 space-y-2 text-sm">{ls.map(([l, p]) => <li key={l}><a href={u(p)} className="hover:text-primary">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Apex · apexsimtracker.com</div>
        </footer>
      </div>
    </div>
  );
}
