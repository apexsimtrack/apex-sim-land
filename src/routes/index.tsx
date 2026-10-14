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

const sims = ["iRacing", "ACC", "Assetto Corsa EVO", "Le Mans Ultimate", "rFactor 2", "F1 25", "Gran Turismo 7", "RaceRoom"];

const challenges = [
  { sim: "ACC", track: "Spa-Francorchamps", car: "GT3", tag: "Hotlap", ends: "Ends in 3d" },
  { sim: "iRacing", track: "Road Atlanta", car: "Mazda MX-5", tag: "Consistency", ends: "Ends in 5d" },
  { sim: "LMU", track: "Le Mans", car: "Hypercar", tag: "Stint", ends: "Ends in 6d" },
  { sim: "AC EVO", track: "Nürburgring GP", car: "Porsche 992 Cup", tag: "Hotlap", ends: "Ends in 2d" },
];

const features = [
  { t: "Session logging", d: "Every lap, car and track captured automatically." },
  { t: "Telemetry", d: "Throttle, brake and speed traces, lap against lap." },
  { t: "Apex Analysis", d: "Coaching that tells you which corner to fix next." },
  { t: "Leaderboards", d: "Rank against friends and the community." },
  { t: "Challenges", d: "Weekly targets that give practice a purpose." },
  { t: "Community", d: "Share laps, setups and progress." },
];

function Index() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <a href="/" className="font-display text-2xl font-bold tracking-widest">APEX<span className="text-primary">.</span></a>
            <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
              <a href="#challenges" className="hover:text-foreground">Challenges</a>
              <a href="#leaderboards" className="hover:text-foreground">Leaderboards</a>
              <a href="#features" className="hover:text-foreground">Features</a>
            </nav>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href={APP} className="hidden px-3 py-2 font-medium sm:block">Log in</a>
            <a href={APP} className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90">Sign up free</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img src={hero} alt="Sim racing cockpit lit in red" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1088} />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center sm:py-40">
          <h1 className="text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">The home of<br /><span className="text-primary">sim racing</span> performance</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Track every session, compete in challenges and climb the leaderboards — across every sim you run.</p>
          <form action={APP} className="mx-auto mt-10 flex max-w-xl overflow-hidden rounded-md border bg-card">
            <input placeholder="Search tracks, cars or drivers…" className="flex-1 bg-transparent px-5 py-4 outline-none placeholder:text-muted-foreground" />
            <button className="bg-primary px-6 font-semibold text-primary-foreground">Search</button>
          </form>
          <div className="mt-6 text-sm text-muted-foreground">Free to join · Works with all major sims</div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 px-6 py-6 font-display text-sm uppercase tracking-widest text-muted-foreground">
          {sims.map((s) => <span key={s}>{s}</span>)}
        </div>
      </section>

      <section id="challenges" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold uppercase sm:text-4xl">Live challenges</h2>
            <a href={APP} className="text-sm font-semibold text-primary">View all →</a>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((c) => (
              <a key={c.track} href={APP} className="group overflow-hidden rounded-lg border bg-card transition hover:border-primary">
                <div className="grid-lines relative h-32 bg-muted">
                  <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 text-xs font-bold uppercase text-primary-foreground">{c.sim}</span>
                  <span className="absolute bottom-3 right-3 rounded bg-background/80 px-2 py-0.5 text-xs">{c.ends}</span>
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.tag}</div>
                  <h3 className="mt-1 text-lg font-semibold">{c.track}</h3>
                  <p className="text-sm text-muted-foreground">{c.car}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="leaderboards" className="bg-card py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold uppercase sm:text-4xl">Climb the leaderboards</h2>
            <p className="mt-4 text-muted-foreground">Every lap you drive is ranked against the community on the same car and track. See the gap, study the fastest laps, and close it.</p>
            <a href={APP} className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">See leaderboards</a>
          </div>
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="border-b px-5 py-3 text-sm font-semibold">Spa · GT3 · Example</div>
            {[["1", "M. Verstap", "2:17.104", ""], ["2", "L. Ham", "2:17.388", "+0.284"], ["3", "You", "2:17.912", "+0.808"], ["4", "C. Lec", "2:18.020", "+0.916"]].map(([p, n, t, g]) => (
              <div key={p} className={`flex items-center justify-between border-b px-5 py-3 text-sm last:border-0 ${n === "You" ? "bg-primary/10" : ""}`}>
                <span className="w-6 font-display font-bold">{p}</span>
                <span className="flex-1">{n}</span>
                <span className="font-mono">{t}</span>
                <span className="w-20 text-right font-mono text-muted-foreground">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold uppercase sm:text-4xl">Everything in one place</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.t} className="rounded-lg border bg-card p-6">
                <div className="mb-4 h-1 w-8 bg-primary" />
                <h3 className="text-lg font-semibold uppercase">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-xl bg-primary p-12 text-center text-primary-foreground sm:p-16">
          <h2 className="text-3xl font-bold uppercase sm:text-5xl">Ready to go faster?</h2>
          <p className="mx-auto mt-3 max-w-md opacity-90">Join Apex free and start tracking today.</p>
          <a href={APP} className="mt-8 inline-block rounded-md bg-background px-8 py-4 font-semibold text-foreground">Create your account</a>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 text-sm text-muted-foreground">
          <span className="font-display font-bold tracking-widest text-foreground">APEX<span className="text-primary">.</span></span>
          <span>© {new Date().getFullYear()} Apex · apexsimtracker.com</span>
        </div>
      </footer>
    </main>
  );
}
