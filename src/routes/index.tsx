import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Briefcase,
  Compass,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  Rocket,
  Users,
} from "lucide-react";

import davidPhoto from "../assets/david.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Lapuente Romero — Profesional y consultor" },
      {
        name: "description",
        content:
          "Conoce a David Lapuente Romero: perfil profesional, servicios de consultoría y acompañamiento, experiencia y vías de contacto directas.",
      },
      {
        property: "og:title",
        content: "David Lapuente Romero — Profesional y consultor",
      },
      {
        property: "og:description",
        content:
          "Perfil profesional, servicios y contacto de David Lapuente Romero.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/lapuenteromerodavid/";
const EMAIL = "davidlapuente75@gmail.com";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const elements = root.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

const services = [
  {
    icon: Compass,
    title: "Consultoría estratégica",
    description:
      "Análisis de la situación actual y definición de una hoja de ruta clara para alcanzar tus objetivos profesionales o de negocio.",
  },
  {
    icon: Rocket,
    title: "Impulso de proyectos",
    description:
      "Acompañamiento en el lanzamiento y la consolidación de proyectos, desde la idea inicial hasta la ejecución.",
  },
  {
    icon: Users,
    title: "Mentoría profesional",
    description:
      "Sesiones personalizadas para desarrollar habilidades, tomar mejores decisiones y crecer en tu carrera.",
  },
];

const experience = [
  {
    icon: Briefcase,
    period: "Actualidad",
    title: "Consultor independiente",
    place: "España",
    description:
      "Acompaño a profesionales y empresas en la definición y ejecución de sus proyectos.",
  },
  {
    icon: GraduationCap,
    period: "Formación continua",
    title: "Desarrollo profesional",
    place: "España",
    description:
      "Formación permanente en gestión, comunicación y nuevas tecnologías.",
  },
];

function Index() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      {/* Navegación */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-semibold tracking-tight">
            David <span className="text-primary">Lapuente</span>
          </span>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#sobre-mi" className="transition-colors hover:text-foreground">
              Sobre mí
            </a>
            <a href="#servicios" className="transition-colors hover:text-foreground">
              Servicios
            </a>
            <a href="#experiencia" className="transition-colors hover:text-foreground">
              Experiencia
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Cabecera destacada */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 300px at 70% 20%, oklch(0.828 0.111 230.3 / 0.12), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-24 sm:flex-row sm:py-32">
          <div className="reveal flex-1 text-center sm:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Bienvenido a mi web
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              David Lapuente Romero
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Profesional orientado a resultados. Ayudo a personas y empresas a
              convertir ideas en proyectos reales, con cercanía y compromiso.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Hablemos <ArrowRight className="size-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="reveal shrink-0">
            <div
              className="rounded-full p-1.5"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.828 0.111 230.3), oklch(0.627 0.265 303.9))",
              }}
            >
              <img
                src={davidPhoto}
                alt="Foto de perfil de David Lapuente Romero"
                width={200}
                height={200}
                className="size-40 rounded-full object-cover sm:size-52"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="reveal max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Sobre mí
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Soy David Lapuente Romero, un profesional al que le apasiona
              trabajar con personas. Creo en la comunicación honesta, el trabajo
              bien hecho y la mejora continua como motores de cualquier proyecto
              que merezca la pena.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Mi objetivo es aportar claridad: entender dónde estás, a dónde
              quieres llegar y acompañarte en el camino con un plan realista y
              medible.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="reveal">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Servicios
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Estas son las áreas en las que puedo ayudarte.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="reveal group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="size-5" />
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="reveal">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Experiencia y formación
            </h2>
          </div>
          <div className="mt-10 space-y-8">
            {experience.map((item) => (
              <article key={item.title} className="reveal flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div className="mt-2 w-px flex-1 bg-border" />
                </div>
                <div className="pb-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    {item.period}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-8 text-sm text-muted-foreground">
            Puedes ver mi trayectoria completa en{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              mi perfil de LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="reveal">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Trabajamos juntos?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Cuéntame tu idea o proyecto y vemos cómo puedo ayudarte. Respondo
              personalmente a cada mensaje.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Mail className="size-4" /> {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Linkedin className="size-4" /> Escríbeme por LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} David Lapuente Romero. Todos los
            derechos reservados.
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de David Lapuente Romero"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
