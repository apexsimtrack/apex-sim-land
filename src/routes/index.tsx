import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

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

const features = [
  { n: "01", t: "Session logging", d: "Every lap, every car, every track — captured automatically across the sims you run." },
  { n: "02", t: "Telemetry", d: "Throttle, brake, steering and speed traces overlaid lap against lap. See exactly where time goes." },
  { n: "03", t: "Apex Analysis", d: "Coaching that reads your data and tells you which corner to fix next — and how." },
  { n: "04", t: "Leaderboards", d: "Compare against friends and the wider community on the combos you actually drive." },
  { n: "05", t: "Challenges", d: "Weekly targets that give your practice a purpose and your rivals a reason to respond." },
  { n: "06", t: "Community", d: "Share setups, laps and progress with drivers chasing the same tenths." },
];

const steps = [
  { t: "Connect", d: "Link your sims in minutes." },
  { t: "Drive", d: "Race as normal. Apex records it all." },
  { t: "Improve", d: "Review, get coached, go faster." },
];

function Index() {
  return (
    <main className="min-h-screen">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl font-bold tracking-widest">
            APEX<span className="text-primary">.</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#features" className="hidden text-muted-foreground hover:text-foreground sm:block">Features</a>
            <a href="#how" className="hidden text-muted-foreground hover:text-foreground sm:block">How it works</a>
            <a href={APP} className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90">Get started</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt="Sim racing cockpit lit in red" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24">
          <p className="mb-5 font-display text-sm uppercase tracking-[0.3em] text-primary">Sim racing performance hub</p>
          <h1 className="max-w-4xl text-5xl font-bold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
            Find the tenths<br />you're <span className="text-primary">leaving</span> on track.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Log every session, dig into telemetry and get coached by Apex Analysis — one place for every sim you run.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={APP} className="rounded-md bg-primary px-7 py-4 font-display font-semibold uppercase tracking-wider text-primary-foreground shadow-glow hover:opacity-90">Start tracking free</a>
            <a href="#features" className="rounded-md border border-input px-7 py-4 font-display font-semibold uppercase tracking-wider hover:bg-secondary">See features</a>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x px-6">
          {[["Every sim", "One hub"], ["Lap-by-lap", "Telemetry"], ["AI", "Coaching"]].map(([a, b]) => (
            <div key={b} className="px-4 py-8 text-center">
              <div className="font-display text-2xl font-bold sm:text-3xl">{a}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="grid-lines relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-2xl text-4xl font-bold uppercase sm:text-5xl">Everything between you and a faster lap.</h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.n} className="group bg-background p-8 transition-colors hover:bg-card">
                <div className="font-display text-sm text-primary">{f.n}</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">{f.t}</h3>
                <p className="mt-3 text-muted-foreground">{f.d}</p>
                <div className="mt-6 h-0.5 w-8 bg-primary transition-all group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">Lights out in three steps.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.t} className="border-l-2 border-primary pl-6">
                <div className="font-display text-6xl font-bold text-muted-foreground/40">{i + 1}</div>
                <h3 className="mt-2 text-2xl font-semibold uppercase">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-xl border bg-card p-12 text-center shadow-glow sm:p-20">
          <h2 className="text-4xl font-bold uppercase sm:text-6xl">Your next PB starts here.</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Join drivers using Apex to turn practice into pace.</p>
          <a href={APP} className="mt-10 inline-block rounded-md bg-primary px-8 py-4 font-display font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">Get started free</a>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Apex · apexsimtracker.com
      </footer>
    </main>
  );
}
