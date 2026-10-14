import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import hero from "@/assets/track.jpg";
import cockpit from "@/assets/hero.jpg";

const APP = "https://apexsimtracker.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex — Sim Racing Performance Tracker" },
      { name: "description", content: "Log sessions, analyse telemetry, climb leaderboards and get coached with Apex Analysis — one hub for every sim you race." },
      { property: "og:title", content: "Apex — Sim Racing Performance Tracker" },
      { property: "og:description", content: "Session logging, telemetry, leaderboards, challenges and coaching for every sim you race." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [["Every", "sim supported"], ["Lap-by-lap", "telemetry"], ["Weekly", "challenges"], ["AI", "coaching"]];
const sims = ["Le Mans Ultimate", "ACC", "iRacing", "AC EVO", "Gran Turismo 7", "Assetto Corsa", "AMS2", "F1 25"];
const challenges = [
  ["Spa Hotlap", "ACC · GT3", "3d", "Hotlap"],
  ["Road Atlanta Consistency", "iRacing · MX-5", "5d", "10 laps"],
  ["Le Mans Night Stint", "LMU · Hypercar", "6d", "Stint"],
  ["Nordschleife Sprint", "AC EVO · 992 Cup", "2d", "Hotlap"],
  ["Monza Braking Test", "ACC · GT3", "4d", "Sectors"],
  ["Suzuka Clean Lap", "GT7 · Gr.3", "1d", "Hotlap"],
];
const features = [
  ["Session logging", "Every lap, car and track captured automatically across your sims."],
  ["Telemetry", "Throttle, brake and speed traces overlaid lap against lap."],
  ["Apex Analysis", "Coaching that tells you which corner to fix next — and how."],
  ["Leaderboards", "Rank against friends and the community on every combo."],
];
const drivers = [["You", "128", "42"], ["Driver 2", "96", "31"], ["Driver 3", "210", "77"], ["Driver 4", "64", "19"], ["Driver 5", "143", "50"], ["Driver 6", "88", "27"]];

const nav = [["⌂", "Home"], ["⚑", "Race"], ["▤", "Data"], ["★", "Coach"]];

function Section({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4 px-6 lg:px-8">
        <div>
          <h2 className="font-sans text-2xl font-bold">{title}</h2>
          <p className="mt-1 text-muted-foreground">{sub}</p>
        </div>
        <a href={APP} className="shrink-0 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-primary">View All</a>
      </div>
      <div className="no-scrollbar mt-6 flex gap-5 overflow-x-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center gap-2 bg-card py-3 md:flex">
        {nav.map(([i, l], idx) => (
          <a key={l} href={idx ? APP : "/"} className={`flex w-12 flex-col items-center rounded-md py-2 text-[10px] font-semibold uppercase ${idx === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            <span className="text-lg leading-none">{i}</span>{l}
          </a>
        ))}
      </aside>

      <div className="md:pl-16">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-6 bg-card px-4">
          <a href="/" className="font-display text-3xl font-black italic tracking-tight">APEX<span className="text-primary">.</span></a>
          <form action={APP} className="mx-auto hidden w-full max-w-xl overflow-hidden rounded-md border bg-background sm:flex">
            <input placeholder="Search tracks, cars and drivers" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="bg-secondary px-4 text-sm">⌕</button>
          </form>
          <a href={APP} className="ml-auto rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground sm:ml-0">Login · Register</a>
        </header>

        <section className="relative overflow-hidden">
          <img src={hero} alt="GT3 car cornering on a wet track at dusk" className="absolute inset-0 h-full w-full object-cover" width={1280} height={720} />
          <div className="absolute inset-0 bg-hero-fade" />
          <div className="relative overflow-hidden border-b py-3">
            <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
              {[...stats, ...stats, ...stats, ...stats].map(([a, b], i) => (
                <span key={i} className="text-sm"><b className="text-base">{a}</b> <span className="text-xs uppercase tracking-widest text-muted-foreground">{b}</span> <span className="ml-10 text-muted-foreground">•</span></span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
            <h1 className="font-display text-5xl font-black uppercase italic leading-[0.9] sm:text-7xl">
              Every lap, tracked.<br /><span className="text-primary">Every tenth, found.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/85">
              The performance hub for sim racers. Log every session, analyse your telemetry, take on challenges and get coached by Apex Analysis — across every major sim.
            </p>
            <a href={APP} className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90">Register Now</a>
          </div>
          <div className="no-scrollbar relative flex gap-5 overflow-x-auto px-6 pb-8 lg:px-8">
            {sims.map((s, i) => (
              <a key={s} href={APP} className="relative h-32 w-52 shrink-0 overflow-hidden rounded-md border bg-card">
                <img src={i % 2 ? cockpit : hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" style={{ objectPosition: `${(i * 15) % 100}% 50%` }} />
                <span className="relative flex h-full items-center justify-center px-3 text-center font-display text-2xl font-black uppercase italic">{s}</span>
              </a>
            ))}
          </div>
        </section>

        <Section title="⚑ Live Challenges" sub="Jump into a weekly challenge and see how you stack up against the community.">
          {challenges.map(([t, c, e, k], i) => (
            <a key={t} href={APP} className="w-72 shrink-0 overflow-hidden rounded-md border bg-card">
              <div className="relative h-28">
                <img src={i % 2 ? cockpit : hero} alt="" loading="lazy" className="h-full w-full object-cover opacity-60" style={{ objectPosition: `${(i * 23) % 100}% 50%` }} />
                <div className="absolute inset-0 bg-card-fade" />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded bg-secondary py-2"><div className="font-semibold">{k}</div><div className="text-[10px] uppercase text-muted-foreground">Type</div></div>
                  <div className="rounded bg-secondary py-2"><div className="font-semibold">{e}</div><div className="text-[10px] uppercase text-muted-foreground">Ends in</div></div>
                </div>
              </div>
            </a>
          ))}
        </Section>

        <Section title="▤ Built for faster laps" sub="Everything you need to understand your driving, in one place.">
          {features.map(([t, d], i) => (
            <div key={t} className="w-80 shrink-0">
              <div className="h-44 overflow-hidden rounded-md border bg-muted">
                <img src={i % 2 ? hero : cockpit} alt="" loading="lazy" className="h-full w-full object-cover opacity-70" style={{ objectPosition: `${(i * 30) % 100}% 50%` }} />
              </div>
              <div className="mt-3 flex gap-3">
                <span className="mt-1 h-9 w-9 shrink-0 rounded-full border-2 border-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Apex</div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            </div>
          ))}
        </Section>

        <Section title="★ Community Drivers" sub="Example driver profiles — follow drivers and compare your laps.">
          {drivers.map(([n, s, p]) => (
            <a key={n} href={APP} className="w-56 shrink-0 overflow-hidden rounded-md border bg-card text-center">
              <div className="relative h-24"><img src={cockpit} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" /></div>
              <div className="-mt-10 relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-card bg-secondary font-display text-2xl font-black italic">{n[0]}</div>
              <div className="mt-2 font-semibold">{n}</div>
              <div className="m-3 grid grid-cols-2 gap-2">
                <div className="rounded bg-secondary py-2"><div className="font-semibold">{s}</div><div className="text-[10px] uppercase text-muted-foreground">Sessions</div></div>
                <div className="rounded bg-secondary py-2"><div className="font-semibold">{p}</div><div className="text-[10px] uppercase text-muted-foreground">PBs</div></div>
              </div>
            </a>
          ))}
        </Section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-lg bg-secondary p-10 lg:grid-cols-2">
            <div>
              <h2 className="font-sans text-2xl font-bold">Stop guessing. Start improving.</h2>
              <p className="mt-4 text-muted-foreground">Ditch the spreadsheets and scattered screenshots. Apex logs every session automatically, shows exactly where you lose time and tells you what to work on next.</p>
              <a href={APP} className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Create your account</a>
            </div>
            <img src={cockpit} alt="Sim rig with telemetry on screen" loading="lazy" className="rounded-md border" width={1920} height={1088} />
          </div>
        </section>

        <footer className="mt-8 border-t">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-black italic">APEX<span className="text-primary">.</span></div>
              <p className="mt-3 text-muted-foreground">Track, analyse and improve your sim racing — across every sim.</p>
            </div>
            {[["Apex", ["Home", "Features", "Login / Register"]], ["Tools", ["Session logging", "Telemetry", "Apex Analysis"]], ["Community", ["Leaderboards", "Challenges", "Drivers"]]].map(([h, ls]) => (
              <div key={h as string}>
                <h3 className="font-sans font-semibold text-muted-foreground">{h}</h3>
                <ul className="mt-4 space-y-2 text-sm">{(ls as string[]).map((l) => <li key={l}><a href={APP} className="hover:text-primary">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Apex · apexsimtracker.com</div>
        </footer>
      </div>
    </div>
  );
}
