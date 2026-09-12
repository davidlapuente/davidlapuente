import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Gauge,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  PaintBucket,
  Quote,
  Search,
  ServerCog,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  X,
  Wrench,
} from "lucide-react";

import davidPhoto from "../assets/david.jpg";
import clinicaPalaciosImage from "../assets/clinica-palacios.webp.asset.json";
import loteriasElPesitoImage from "../assets/loterias-el-pesito.webp.asset.json";
import monttiClassicWearImage from "../assets/montti-classic-wear.webp.asset.json";
import piscinasHnosRuizImage from "../assets/piscinas-hnos-ruiz.webp.asset.json";

// El título, descripción y etiquetas sociales se definen solo en src/routes/__root.tsx
// para evitar duplicidades; el head del root es el que se aplica en esta página.
export const Route = createFileRoute("/")({
  component: Index,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/lapuenteromerodavid/";
const EMAIL = "davidlapuente75@gmail.com";
const CALENDLY_URL = "https://calendly.com/davidlapuente75";
const INSTAGRAM_URL = "https://instagram.com/dlapue";
const X_URL = "https://x.com/dlapue";
const BLUESKY_URL = "https://bsky.app/profile/dlapue.bsky.social";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  );
}
const GOOGLE_REVIEWS_URL = "https://share.google/e2g02fJblFjJB2JsO";

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
    icon: Monitor,
    title: "Diseño Web Profesional para Empresas",
    description:
      "Páginas corporativas orientadas a conversión, con diseño moderno, optimizado para SEO y adaptado a todos los dispositivos.",
  },
  {
    icon: ShoppingCart,
    title: "Diseño de Tienda Online (eCommerce)",
    description:
      "Tiendas optimizadas para vender más en WooCommerce o Shopify, con enfoque en experiencia de usuario, velocidad y SEO.",
  },
  {
    icon: PaintBucket,
    title: "Rediseño Web y Optimización UX/UI",
    description:
      "Mejora de páginas existentes para aumentar conversiones y rendimiento.",
  },
  {
    icon: Target,
    title: "Landing Pages de Alta Conversión",
    description:
      "Diseño estratégico para campañas de marketing y captación de leads.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Web Mensual",
    description:
      "Seguridad, actualizaciones, copias de seguridad y soporte técnico continuo.",
  },
  {
    icon: Search,
    title: "Optimización SEO On-Page",
    description:
      "Estructura SEO, velocidad, etiquetas y configuración técnica básica.",
  },
  {
    icon: ServerCog,
    title: "Desarrollo Web en CMS",
    description:
      "Webs personalizadas en WordPress o Joomla, autogestionables y escalables.",
  },
  {
    icon: Gauge,
    title: "Auditoría Web Profesional",
    description:
      "Análisis completo con informe de acciones concretas para mejorar resultados.",
  },
];

const highlights = [
  "Diseño centrado en el usuario y accesibilidad web (UX/UI, W3C)",
  "Optimización SEO y contenido orientado a resultados",
  "Automatización de procesos y personalización de CMS",
];

const tools = [
  "WordPress",
  "Canva",
  "Figma",
  "Joomla",
  "Lovable",
  "Claude",
  "ChatGPT",
  "Gemini",
];

const projects = [
  {
    name: "Clínica Palacios",
    place: "Eivissa, ES",
    url: "https://www.clinicapalacios.es/",
    image: clinicaPalaciosImage.url,
    description:
      "Web corporativa en Joomla para clínica dermatológica, diseño claro orientado al paciente, SEO local y cita rápida.",
  },
  {
    name: "Piscinas Hnos Ruiz",
    place: "Sevilla, ES",
    url: "https://www.piscinashermanosruiz.com/",
    image: piscinasHnosRuizImage.url,
    description:
      "Web corporativa en WordPress, diseño visual y elegante, optimización local.",
  },
  {
    name: "Loterías El Pesito",
    place: "Córdoba, ES",
    url: "https://www.loteriaselpesito.es/",
    image: loteriasElPesitoImage.url,
    description:
      "Tienda online en Joomla para venta de Lotería Nacional, con sistema de compra integrado.",
  },
  {
    name: "Montti Classic Wear",
    place: "Córdoba, ES",
    url: "https://www.montticlassicwear.com/",
    image: monttiClassicWearImage.url,
    description:
      "eCommerce de moda y accesorios masculinos.",
  },
];

const reviews = [
  {
    name: "Margarita Cardona Cardona",
    text: "Quiero destacar el excelente trabajo de David. Ha demostrado una gran profesionalidad, atención al detalle y una capacidad increíble para entender nuestras necesidades. El resultado ha sido una página clara, atractiva y muy funcional. Además, el trato ha sido cercano y siempre dispuesto a ayudar en todo momento.",
  },
  {
    name: "Juan Copión",
    text: "Un profesional competente e implicado en su trabajo.",
  },
  {
    name: "Juan Carlos Montes",
    text: "Excelente profesional, siempre en contacto con el cliente. Lo recomiendo.",
  },
  {
    name: "Fermín Navarro",
    text: "Excelente servicio. Atento con sus clientes y precios razonables.",
  },
  {
    name: "Raúl Méndez",
    text: "Gran profesional en su trabajo y con mucha iniciativa, efectivo al 100%. Lo recomiendo sin lugar a dudas.",
  },
];

function Index() {
  const rootRef = useReveal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      {/* Navegación */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-semibold tracking-tight">
            David <span className="text-primary">Lapuente</span>
          </span>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#sobre-mi" className="transition-colors hover:text-foreground">
              Sobre mí
            </a>
            <a href="#servicios" className="transition-colors hover:text-foreground">
              Servicios
            </a>
            <a href="#proyectos" className="transition-colors hover:text-foreground">
              Proyectos
            </a>
            <a href="#resenas" className="transition-colors hover:text-foreground">
              Reseñas
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contacto
            </a>
          </div>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
        {isMobileMenuOpen && (
          <div className="border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 text-base text-muted-foreground">
              <a href="#sobre-mi" onClick={closeMobileMenu} className="transition-colors hover:text-foreground">
                Sobre mí
              </a>
              <a href="#servicios" onClick={closeMobileMenu} className="transition-colors hover:text-foreground">
                Servicios
              </a>
              <a href="#proyectos" onClick={closeMobileMenu} className="transition-colors hover:text-foreground">
                Proyectos
              </a>
              <a href="#resenas" onClick={closeMobileMenu} className="transition-colors hover:text-foreground">
                Reseñas
              </a>
              <a
                href="#contacto"
                onClick={closeMobileMenu}
                className="inline-flex w-fit items-center rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
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
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 sm:flex-row sm:py-32">
          <div className="reveal shrink-0 sm:order-2">
            <div
              className="rounded-2xl p-1.5"
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
                className="size-40 rounded-2xl object-cover sm:size-52"
              />
            </div>
          </div>
          <div className="reveal flex-1 text-center sm:order-1 sm:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Diseñador web sénior · UX/UI · SEO
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              David Lapuente Romero
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Transformo tus ideas en una web que conecta, inspira y genera
              resultados. Tu viaje junto a mí comienza aquí.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Quiero una web que convierta <ArrowRight className="size-4" />
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <CalendarCheck className="size-4" /> Reservar una llamada
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="reveal max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Diseñador Web Sénior especialista en UX/UI mediante estrategias
              intuitivas de CMS y SEO
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Más de 20 años diseñando experiencias digitales que combinan
              estética, funcionalidad y resultados medibles. He liderado
              proyectos de UX/UI, implementación de CMS (WordPress y Joomla) y
              estrategias SEO que han impulsado el crecimiento orgánico y
              mejorado la conversión de clientes en sectores como E-commerce,
              Salud y Construcción.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Destaco en: diseño centrado en el usuario y accesibilidad web
              (UX/UI, W3C), optimización SEO y contenido orientado a resultados,
              automatización de procesos y personalización de CMS.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="reveal rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground"
              >
                <Sparkles className="mb-3 size-5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <div className="reveal mt-10">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Herramientas y tecnologías
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="reveal">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              El poder del diseño web
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Estos son los servicios con los que puedo ayudarte a crecer.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Proyectos */}
      <section id="proyectos" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="reveal">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Últimos proyectos
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Una selección de trabajos recientes para empresas y negocios.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="reveal overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar la web de ${project.name}`}
                  className="block overflow-hidden border-b border-border"
                >
                  <img
                    src={project.image}
                    alt={`Portada de la web de ${project.name}`}
                    width={720}
                    height={450}
                    loading="lazy"
                    className="aspect-[8/5] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  />
                </a>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-primary">
                        {project.place}
                      </p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar la web de ${project.name}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-5" />
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas */}
      <section id="resenas" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="reveal">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Reseñas
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Lo que dicen las personas y empresas con las que he trabajado.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="reveal rounded-2xl border border-border bg-card p-6"
              >
                <Quote className="size-5 text-primary" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {review.text}
                </p>
                <footer className="mt-4 flex items-center gap-2">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <cite className="font-display text-sm font-semibold not-italic">
                    {review.name}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="reveal mt-8 text-sm text-muted-foreground">
            Puedes leer todas las reseñas en{" "}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              mi perfil de Google
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
              Empieza hoy: crea, conecta y crece
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Cuéntame tu idea o reserva un hueco en mi agenda y vemos juntos
              cómo llevar tu web al siguiente nivel.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <CalendarCheck className="size-4" /> Ir a mi página de reservas
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Mail className="size-4" /> {EMAIL}
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
        </div>
      </section>

      {/* Pie de página */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} David Lapuente Romero. Todos los
            derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn de David Lapuente Romero"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Instagram de David Lapuente Romero"
              className="transition-colors hover:text-primary"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de X (Twitter) de David Lapuente Romero"
              className="transition-colors hover:text-primary"
            >
              <XIcon className="size-5" />
            </a>
            <a
              href={BLUESKY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Bluesky de David Lapuente Romero"
              className="transition-colors hover:text-primary"
            >
              <BlueskyIcon className="size-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Enviar correo a David Lapuente Romero"
              className="transition-colors hover:text-primary"
            >
              <Mail className="size-5" />
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar una llamada con David Lapuente Romero"
              className="transition-colors hover:text-primary"
            >
              <CalendarCheck className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
