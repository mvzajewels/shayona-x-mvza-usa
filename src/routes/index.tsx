import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-necklace.jpg";
import ringImg from "@/assets/piece-ring.jpg";
import earringsImg from "@/assets/piece-earrings.jpg";
import bangleImg from "@/assets/piece-bangle.jpg";
import modelImg from "@/assets/editorial-model.jpg";
import craftImg from "@/assets/craft.jpg";
import heroVideo from "@/assets/hero-video-model-slow.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MVZA × Shayona — Fine Jewelry, Reimagined" },
      { name: "description", content: "MVZA in collaboration with Shayona Jewels — heirloom Indian craftsmanship reimagined for the modern American wardrobe." },
      { property: "og:title", content: "MVZA × Shayona — Fine Jewelry, Reimagined" },
      { property: "og:description", content: "Heirloom Indian craftsmanship reimagined for the modern American wardrobe." },
    ],
  }),
  component: Index,
});

const Wordmark = ({ size = "text-2xl" }: { size?: string }) => (
  <span className={`${size} font-extralight tracking-mark text-foreground`}>MVZA</span>
);

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_82%,transparent)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-brand uppercase font-light">
          <a href="#collection" className="hover:text-accent transition-colors">Collection</a>
          <a href="#story" className="hover:text-accent transition-colors">The House</a>
          <a href="#craft" className="hover:text-accent transition-colors">Craft</a>
        </nav>
        <a href="#top" className="absolute left-1/2 -translate-x-1/2">
          <Wordmark size="text-xl md:text-2xl" />
        </a>
        <div className="flex items-center gap-6 text-[11px] tracking-brand uppercase font-light">
          <a href="#journal" className="hidden md:inline hover:text-accent transition-colors">Journal</a>
          <a href="#book" className="hover:text-accent transition-colors">Book</a>
        </div>
      </div>
      <div className="h-px w-full bg-[color-mix(in_oklab,var(--ink)_12%,transparent)]" />
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex flex-col">
      {/* Cinematic collaboration video banner */}
      <div className="relative w-full h-[70svh] md:h-[88svh] overflow-hidden bg-foreground pt-16 md:pt-20">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover anim-fade"
          style={{ animationPlayState: "running", filter: "saturate(1.05)" }}
        />
        {/* slow-motion feel via subtle slowdown */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/50" />

        {/* Top label */}
        <div className="absolute top-24 md:top-28 left-0 right-0 flex justify-center">
          <span className="text-[10px] tracking-brand uppercase text-cream/70 font-light">
            A Collaboration · Spring MMXXVI
          </span>
        </div>

        {/* Center wordmark — Shayona × MVZA */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-cream px-6 anim-rise">
          <div className="flex items-center gap-6 md:gap-10 lg:gap-14">
            <span className="font-serif italic text-3xl md:text-6xl lg:text-7xl font-light leading-none">
              Shayona
            </span>
            <span className="font-extralight tracking-mark text-2xl md:text-5xl lg:text-6xl text-accent">
              ×
            </span>
            <span className="font-extralight tracking-mark text-3xl md:text-6xl lg:text-7xl leading-none">
              MVZA
            </span>
          </div>
          <span className="mt-6 md:mt-8 text-[10px] md:text-[11px] tracking-brand uppercase text-cream/70 font-light">
            Jewellery · Reimagined for America
          </span>
          <div className="mt-8 h-px w-16 bg-cream/40" />
        </div>

        {/* Bottom corners */}
        <div className="absolute bottom-6 left-6 md:left-10 text-[10px] tracking-brand uppercase text-cream/70 font-light">
          Est. 1984 · Ahmedabad
        </div>
        <div className="absolute bottom-6 right-6 md:right-10 text-[10px] tracking-brand uppercase text-cream/70 font-light">
          New York · Spring '26
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-12 gap-0">
        {/* Left text */}
        <div className="md:col-span-6 flex flex-col justify-center px-6 md:px-16 py-20 md:py-32">
          <div className="anim-rise">
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-10">
              An Introduction · Spring Edition
            </p>
            <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-light text-foreground">
              Heirloom,<br />
              <span className="not-italic font-extralight tracking-tight">reimagined</span><br />
              <span className="italic">for her.</span>
            </h1>
            <p className="mt-10 max-w-md text-[15px] leading-relaxed text-muted-foreground font-light">
              MVZA arrives in America carrying the quiet authority of
              <span className="text-foreground"> Shayona Jewels</span> — four decades
              of Indian goldsmithing, distilled into pieces designed for the
              way she lives now.
            </p>
            <div className="mt-12 flex items-center gap-8">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 text-[11px] tracking-brand uppercase font-light"
              >
                <span className="border-b border-foreground pb-1">Discover the Edit</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#story" className="text-[11px] tracking-brand uppercase font-light text-muted-foreground hover:text-foreground transition-colors">
                Our Story
              </a>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="md:col-span-6 relative min-h-[60vh] md:min-h-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Hand-set diamond necklace on silk"
            className="absolute inset-0 w-full h-full object-cover anim-fade"
            width={1600}
            height={1920}
          />
          <div className="absolute bottom-6 right-6 text-[10px] tracking-brand uppercase text-cream/90 mix-blend-difference">
            N° 001 — Sahasra Necklace
          </div>
        </div>
      </div>

      {/* Bottom collab strip */}
      <div className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between text-[10px] tracking-brand uppercase font-light text-muted-foreground">
          <span>MVZA</span>
          <span className="text-foreground">In Partnership with Shayona Jewels · Est. 1984</span>
          <span className="hidden md:inline">New York · Ahmedabad</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["22K Gold", "Hand-set Diamonds", "Polki", "Kundan", "Bridal", "Everyday Fine", "Made in India", "Worn in America"];
  return (
    <div className="overflow-hidden border-y hairline py-6 bg-[color-mix(in_oklab,var(--bone)_60%,var(--cream))]">
      <div className="anim-marquee flex gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-serif italic text-2xl text-foreground/70">
            {t} <span className="text-accent mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Collection() {
  const pieces = [
    { img: earringsImg, name: "Vasanti Drops", category: "Earrings", price: "$1,480" },
    { img: ringImg, name: "Ekanta Solitaire", category: "Rings", price: "$2,960" },
    { img: bangleImg, name: "Charita Bangle", category: "Bracelets", price: "$2,210" },
  ];
  return (
    <section id="collection" className="py-24 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-4">N° 01 — The Edit</p>
            <h2 className="font-serif italic text-4xl md:text-6xl font-light leading-tight max-w-xl">
              Six pieces. <br/>One quiet revolution.
            </h2>
          </div>
          <a href="#" className="hidden md:inline text-[11px] tracking-brand uppercase border-b border-foreground pb-1">View All 24</a>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {pieces.map((p, i) => (
            <article key={i} className="group">
              <div className="relative overflow-hidden aspect-[4/5] bg-bone">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-[10px] tracking-brand uppercase text-cream/90 mix-blend-difference">
                  N° {String(i + 1).padStart(3, "0")}
                </span>
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <div>
                  <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-1">{p.category}</p>
                  <h3 className="font-serif italic text-2xl font-light">{p.name}</h3>
                </div>
                <span className="text-sm font-light tracking-wide">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="px-6 md:px-10 py-24 md:py-36 bg-[color-mix(in_oklab,var(--bone)_70%,var(--cream))]">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden">
          <img src={modelImg} alt="Editorial portrait" loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="md:col-span-7 md:pl-8">
          <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-6">The House · MVZA × Shayona</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05]">
            Two names. <span className="italic">One lineage</span> of light.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-8 text-[15px] leading-relaxed text-muted-foreground font-light">
            <p>
              For four decades, <span className="text-foreground">Shayona Jewels</span> has been
              the quiet authority behind India's most cherished pieces — wedding sets passed
              between generations, gold drawn fine enough to catch candlelight.
            </p>
            <p>
              <span className="text-foreground">MVZA</span> carries that craft across an ocean.
              Architected for the American wardrobe, our edit translates ceremony into the everyday —
              pieces that are at home with linen on Tuesday and silk on Saturday.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 border-t hairline pt-10">
            {[
              ["1984", "Shayona Founded"],
              ["22K", "Recycled Gold"],
              ["NYC × AMD", "Two Ateliers"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-serif text-3xl md:text-4xl font-light text-foreground">{k}</p>
                <p className="text-[10px] tracking-brand uppercase text-muted-foreground mt-2">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Craft() {
  return (
    <section id="craft" className="px-6 md:px-10 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <p className="text-[10px] tracking-brand uppercase text-muted-foreground mb-6">N° 02 — The Craft</p>
          <h2 className="font-serif italic text-4xl md:text-6xl font-light leading-[1.05]">
            Forty hours <br/>by a single hand.
          </h2>
          <p className="mt-10 max-w-lg text-[15px] leading-relaxed text-muted-foreground font-light">
            Every MVZA piece is shaped in our Ahmedabad atelier by a karigar
            who knows it from the first molten pour to the final polish. No
            assembly lines. No shortcuts. Only the slow, deliberate
            choreography of hands that have practiced this for a lifetime.
          </p>
          <div className="mt-12 space-y-4 text-sm font-light">
            {[
              ["01", "Hand-drawn design from the Ahmedabad studio"],
              ["02", "22K recycled gold, melted and drawn into wire"],
              ["03", "Stones set one by one — never glued, never rushed"],
              ["04", "Polished, weighed, hallmarked, signed MVZA"],
            ].map(([n, t]) => (
              <div key={n} className="flex gap-6 border-t hairline pt-4">
                <span className="font-serif italic text-xl text-accent w-8">{n}</span>
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 order-1 md:order-2 relative aspect-[5/6] overflow-hidden">
          <img src={craftImg} alt="Goldsmith at work" loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Journal() {
  const posts = [
    { tag: "Editorial", title: "Why she keeps the bangle on at dinner.", date: "Spring · 2026" },
    { tag: "Field Notes", title: "A morning in the Ahmedabad atelier.", date: "Spring · 2026" },
    { tag: "Conversations", title: "On inheriting gold — a letter to my daughter.", date: "Winter · 2025" },
  ];
  return (
    <section id="journal" className="px-6 md:px-10 py-24 md:py-36 border-t hairline">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            <span className="italic">Journal.</span>
          </h2>
          <p className="text-[10px] tracking-brand uppercase text-muted-foreground">N° 03 — Words</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[color-mix(in_oklab,var(--ink)_15%,transparent)]">
          {posts.map((p, i) => (
            <article key={i} className="bg-background p-8 md:p-10 min-h-[260px] flex flex-col justify-between group cursor-pointer hover:bg-bone transition-colors">
              <p className="text-[10px] tracking-brand uppercase text-accent">{p.tag}</p>
              <div>
                <h3 className="font-serif italic text-2xl md:text-3xl font-light leading-snug">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-[10px] tracking-brand uppercase text-muted-foreground">{p.date}</span>
                  <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="px-6 md:px-10 py-24 md:py-36 bg-foreground text-cream relative overflow-hidden">
      <div className="mx-auto max-w-[1100px] text-center relative z-10">
        <p className="text-[10px] tracking-brand uppercase text-cream/60 mb-8">By Appointment</p>
        <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl font-light leading-[1] text-cream">
          Sit with the piece <br/>before it sits with you.
        </h2>
        <p className="mt-10 max-w-xl mx-auto text-[15px] leading-relaxed text-cream/70 font-light">
          Private viewings in New York and Ahmedabad. One client, one room,
          the full archive in front of you. We pour the chai.
        </p>
        <a
          href="mailto:atelier@mvza.com"
          className="mt-14 inline-flex items-center gap-3 text-[11px] tracking-brand uppercase border border-cream/40 px-10 py-5 hover:bg-cream hover:text-foreground transition-colors"
        >
          Request an Appointment
        </a>
      </div>
      <div aria-hidden className="absolute -bottom-32 left-1/2 -translate-x-1/2 font-serif italic text-[20rem] md:text-[28rem] text-cream/5 select-none pointer-events-none">
        mvza
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 border-t hairline">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Wordmark size="text-3xl" />
          <p className="mt-4 text-[10px] tracking-brand uppercase text-muted-foreground">
            In Partnership with Shayona Jewels
          </p>
          <p className="mt-8 max-w-sm text-sm font-light text-muted-foreground leading-relaxed">
            Heirloom Indian craftsmanship, designed for the modern American wardrobe.
          </p>
        </div>
        {[
          { h: "House", l: ["Collection", "Bridal", "Bespoke", "Gifting"] },
          { h: "Studio", l: ["The House", "Craft", "Journal", "Press"] },
          { h: "Care", l: ["Appointments", "Sizing", "Repairs", "Contact"] },
        ].map((c) => (
          <div key={c.h} className="md:col-span-2">
            <p className="text-[10px] tracking-brand uppercase text-foreground mb-5">{c.h}</p>
            <ul className="space-y-3 text-sm font-light text-muted-foreground">
              {c.l.map((i) => (
                <li key={i}><a href="#" className="hover:text-foreground transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-1 flex md:justify-end">
          <p className="text-[10px] tracking-brand uppercase text-muted-foreground">© MMXXVI</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] mt-16 pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-brand uppercase text-muted-foreground">
        <span>New York · Ahmedabad</span>
        <span>Shayona Jewels established 1984</span>
        <span>Hallmarked · BIS 916</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Collection />
      <Story />
      <Craft />
      <Journal />
      <Book />
      <Footer />
    </main>
  );
}
