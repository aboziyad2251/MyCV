"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  certifications, competencies, contact, education, experience, languages,
  metrics, person, projects, ui, type Lang,
} from "@/content/cv";

type L = { en: string; ar: string };

export default function Site() {
  const [lang, setLang] = useState<Lang>("en");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let initial: Lang = "en";
    try {
      const saved = localStorage.getItem("cv-lang");
      if (saved === "ar" || saved === "en") initial = saved;
      else if (navigator.language?.toLowerCase().startsWith("ar")) initial = "ar";
    } catch {}
    if (location.hash === "#ar") initial = "ar";
    setLang(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${person.name[lang]} | ${person.title[lang]}`;
    try { localStorage.setItem("cv-lang", lang); } catch {}
  }, [lang]);

  const t = (v: L) => v[lang];
  const nav: [string, L][] = [
    ["about", ui.nav.about], ["experience", ui.nav.experience], ["projects", ui.nav.projects],
    ["skills", ui.nav.skills], ["contact", ui.nav.contact],
  ];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const from = String(f.get("email") || "");
    const msg = String(f.get("message") || "");
    const subject = encodeURIComponent(`CV website: message from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur text-white border-b border-white/10">
        <div className="px-5 sm:px-8"><div className="wrap flex items-center justify-between gap-4 h-16">
          <a href="#top" className="font-display text-lg sm:text-xl text-white whitespace-nowrap">
            {t(person.name)}<span className="text-gold">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80" aria-label="Main">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:text-gold transition-colors">{t(label)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="h-10 px-3 rounded-md border border-gold/60 text-gold text-sm font-semibold hover:bg-gold hover:text-navy transition-colors"
              aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <a href={contact.cvPdf} download className="hidden sm:inline-flex h-10 items-center px-4 rounded-md bg-gold text-navy text-sm font-bold hover:bg-gold-light transition-colors">
              {t(ui.download)}
            </a>
            <button type="button" className="md:hidden h-10 w-10 grid place-items-center rounded-md border border-white/20" aria-expanded={menu} aria-label="Menu" onClick={() => setMenu(!menu)}>
              <span aria-hidden className="block w-5 h-0.5 bg-white shadow-[0_6px_0_#fff,0_-6px_0_#fff]" />
            </button>
          </div>
        </div></div>
        {menu && (
          <nav className="md:hidden border-t border-white/10 px-5 pb-4" aria-label="Mobile">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="block py-3 text-white/90 border-b border-white/5">{t(label)}</a>
            ))}
            <a href={contact.cvPdf} download className="mt-3 inline-flex h-11 items-center px-4 rounded-md bg-gold text-navy font-bold">{t(ui.download)}</a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section id="about" className="relative overflow-hidden bg-navy text-white section">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#C8A44E 1px,transparent 1px),linear-gradient(90deg,#C8A44E 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div aria-hidden className="pointer-events-none absolute -top-40 end-[-10%] h-[520px] w-[520px] rounded-full bg-gold/20 blur-3xl" />
          <div className="wrap relative grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <div>
              <p className="text-gold font-semibold">{t(person.location)}</p>
              <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] mt-3" style={{ textWrap: "balance" }}>
                {t(person.name)}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-gold-light font-medium">{t(person.title)}</p>
              <p className="mt-5 text-lg text-white/80 max-w-2xl">{t(person.tagline)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex h-12 items-center px-6 rounded-md bg-gold text-navy font-bold hover:bg-gold-light transition-colors">{t(ui.hire)}</a>
                <a href={contact.cvPdf} download className="inline-flex h-12 items-center px-6 rounded-md border border-white/30 hover:border-gold hover:text-gold transition-colors">{t(ui.download)}</a>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
              {metrics.map((m) => (
                <div key={m.value} className="bg-navy-800 p-5">
                  <dt className="sr-only">{t(m.label)}</dt>
                  <dd className="font-display text-3xl sm:text-4xl text-gold whitespace-nowrap">{m.value}</dd>
                  <dd className="mt-1 text-sm text-white/70">{t(m.label)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="wrap relative mt-14 max-w-3xl text-white/75 leading-relaxed">{t(person.summary)}</div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="wrap">
            <h2 className="h2">{t(ui.experience)}</h2>
            <ol className="mt-10 relative border-s-2 border-gold/40 ms-2">
              {experience.map((r) => (
                <li key={r.org.en} className="ps-8 pb-12 last:pb-0 relative">
                  <span aria-hidden className="absolute -start-[9px] top-1.5 h-4 w-4 rounded-full bg-gold ring-4 ring-paper" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-2xl text-navy">{t(r.org)}</h3>
                    <span className="text-sm font-semibold text-gold-dark whitespace-nowrap">{t(r.period)} · {t(r.place)}</span>
                  </div>
                  <p className="mt-1 font-semibold text-navy-600">{t(r.title)}</p>
                  {r.context && <p className="mt-1 text-sm text-navy/60">{t(r.context)}</p>}
                  {r.points.length > 0 && (
                    <ul className="mt-4 space-y-2 text-navy/80 max-w-3xl">
                      {r.points.map((p) => (
                        <li key={p.en} className="flex gap-3"><span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>{t(p)}</span></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section bg-white">
          <div className="wrap">
            <h2 className="h2">{t(ui.projects)}</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((p) => (
                <article key={p.name.en} className="rounded-xl border border-navy/10 bg-paper p-6 hover:border-gold transition-colors">
                  <div className="flex justify-between gap-3 text-sm"><span className="font-semibold text-gold-dark">{t(p.role)}</span><span className="text-navy/50 whitespace-nowrap">{p.year}</span></div>
                  <h3 className="mt-3 font-display text-xl text-navy">{t(p.name)}</h3>
                  <p className="mt-2 text-navy/75">{t(p.text)}</p>
                </article>
              ))}
            </div>
            <p className="mt-8"><a href={contact.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark">GitHub ↗</a></p>
          </div>
        </section>

        {/* SKILLS + EDUCATION */}
        <section id="skills" className="section">
          <div className="wrap grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="h2">{t(ui.skills)}</h2>
              <div className="mt-8 space-y-6">
                {competencies.map((c) => (
                  <div key={c.group.en}>
                    <h3 className="font-semibold text-gold-dark">{t(c.group)}</h3>
                    <p className="mt-1 text-navy/80">{t(c.items)}</p>
                  </div>
                ))}
                <div>
                  <h3 className="font-semibold text-gold-dark">{t(ui.languages)}</h3>
                  <p className="mt-1 text-navy/80">{t(languages)}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="h2">{t(ui.education)}</h2>
              <ul className="mt-8 space-y-5">
                {education.map((e) => (
                  <li key={e.name.en} className="border-b border-navy/10 pb-4">
                    <p className="font-semibold">{t(e.name)}</p>
                    <p className="text-navy/70 text-sm flex flex-wrap justify-between gap-2"><span>{t(e.org)}</span><span className="whitespace-nowrap">{t(e.year)}</span></p>
                  </li>
                ))}
              </ul>
              <h2 className="h2 mt-12">{t(ui.certs)}</h2>
              <ul className="mt-6 space-y-2 text-navy/80">
                {certifications.map((c) => (
                  <li key={c.en} className="flex gap-3"><span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>{t(c)}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section bg-navy text-white">
          <div className="wrap grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight" style={{ textWrap: "balance" }}>{t(ui.contact)}</h2>
              <dl className="mt-8 space-y-4">
                <div><dt className="text-sm text-gold">{t(ui.phone)}</dt><dd><a href={`tel:${contact.phoneTel}`} className="text-lg hover:text-gold" dir="ltr">{contact.phoneDisplay}</a></dd></div>
                <div><dt className="text-sm text-gold">Email</dt><dd><a href={`mailto:${contact.email}`} className="text-lg hover:text-gold break-all">{contact.email}</a></dd></div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center px-5 rounded-md bg-gold text-navy font-bold hover:bg-gold-light">WhatsApp</a>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center px-5 rounded-md border border-white/30 hover:border-gold hover:text-gold">LinkedIn</a>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center px-5 rounded-md border border-white/30 hover:border-gold hover:text-gold">GitHub</a>
                </div>
              </dl>
            </div>
            <form onSubmit={onSubmit} className="rounded-xl bg-navy-800 border border-white/10 p-6 space-y-4">
              <label className="block"><span className="text-sm text-white/70">{t(ui.form.name)}</span>
                <input name="name" required className="mt-1 w-full h-12 rounded-md bg-navy border border-white/15 px-3 text-base text-white" /></label>
              <label className="block"><span className="text-sm text-white/70">{t(ui.form.email)}</span>
                <input name="email" type="email" required className="mt-1 w-full h-12 rounded-md bg-navy border border-white/15 px-3 text-base text-white" dir="ltr" /></label>
              <label className="block"><span className="text-sm text-white/70">{t(ui.form.message)}</span>
                <textarea name="message" required rows={5} className="mt-1 w-full rounded-md bg-navy border border-white/15 p-3 text-base text-white" /></label>
              <button type="submit" className="h-12 px-6 rounded-md bg-gold text-navy font-bold hover:bg-gold-light">{t(ui.form.send)}</button>
              <p className="text-xs text-white/50">{t(ui.form.note)}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-navy border-t border-white/10 text-white/50 text-sm px-5 py-6">
        <div className="wrap flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {t(person.name)}. {t(ui.rights)}</span>
          <span dir="ltr">moh-cv.kohlestate-ksa.online</span>
        </div>
      </footer>
    </>
  );
}
