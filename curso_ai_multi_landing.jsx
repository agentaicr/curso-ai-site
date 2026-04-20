import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Bot, Briefcase, Search, Sparkles, Star, ArrowRight, CheckCircle2, Filter, ShieldCheck, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "IA para Negocios desde Cero",
    category: "Negocios",
    level: "Principiante",
    description: "Aprende a usar inteligencia artificial para automatizar tareas, crear contenido y mejorar procesos de negocio.",
    benefits: ["Automatización básica", "Prompts útiles", "Aplicación práctica"],
    audience: "Emprendedores y dueños de negocio",
    tag: "Más vendido",
    rating: "4.9",
    href: "#",
  },
  {
    id: 2,
    title: "Marketing con IA y Automatización",
    category: "Marketing",
    level: "Principiante",
    description: "Descubre cómo usar IA para anuncios, copys, embudos, emails y optimización de campañas.",
    benefits: ["Copys con IA", "Embudo simple", "Más productividad"],
    audience: "Marketers, afiliados y freelancers",
    tag: "Ideal para vender",
    rating: "4.8",
    href: "#",
  },
  {
    id: 3,
    title: "Agentes de IA para Productividad",
    category: "Automatización",
    level: "Intermedio",
    description: "Aprende a implementar agentes y flujos de trabajo para ahorrar tiempo en tareas repetitivas.",
    benefits: ["Flujos automatizados", "Ahorro de tiempo", "Casos reales"],
    audience: "Profesionales y equipos",
    tag: "Tendencia",
    rating: "4.8",
    href: "#",
  },
  {
    id: 4,
    title: "Prompts Profesionales para IA",
    category: "Productividad",
    level: "Principiante",
    description: "Mejora tus resultados con estructuras de prompts para trabajo, negocio, marketing y organización.",
    benefits: ["Mejores respuestas", "Plantillas listas", "Uso diario"],
    audience: "Cualquier persona que quiera empezar",
    tag: "Rápido de aprender",
    rating: "4.7",
    href: "#",
  },
  {
    id: 5,
    title: "IA para Creación de Contenido",
    category: "Marketing",
    level: "Principiante",
    description: "Crea textos, ideas, calendarios y piezas de contenido con ayuda de IA sin complicarte.",
    benefits: ["Ideas infinitas", "Mejor contenido", "Más velocidad"],
    audience: "Creadores, community managers y negocios",
    tag: "Muy práctico",
    rating: "4.7",
    href: "#",
  },
  {
    id: 6,
    title: "Ruta Completa de IA para Principiantes",
    category: "Principiantes",
    level: "Principiante",
    description: "Una guía integral para entender la IA, aprender herramientas clave y aplicarlas desde el primer día.",
    benefits: ["Base sólida", "Herramientas clave", "Pasos claros"],
    audience: "Personas sin experiencia técnica",
    tag: "Empieza aquí",
    rating: "4.9",
    href: "#",
  },
];

const categories = ["Todos", "Principiantes", "Negocios", "Marketing", "Automatización", "Productividad"];

const highlights = [
  {
    icon: Brain,
    title: "Cursos seleccionados",
    text: "Explora opciones de IA enfocadas en resultados reales y uso práctico.",
  },
  {
    icon: ShieldCheck,
    title: "Comparación sencilla",
    text: "Encuentra rápido cuál curso se adapta mejor a tu nivel y objetivo.",
  },
  {
    icon: MessageCircle,
    title: "Listo para escalar",
    text: "Ideal para usar con anuncios, Instagram y una estrategia de afiliación.",
  },
];

const faqs = [
  {
    q: "¿Necesito saber programar para empezar?",
    a: "No. La mayoría de cursos destacados aquí están pensados para principiantes y perfiles no técnicos.",
  },
  {
    q: "¿Cuál curso me conviene si tengo negocio?",
    a: "Empieza por una ruta de IA para negocios o automatización básica, porque te da aplicaciones más rápidas para ventas, contenido y procesos.",
  },
  {
    q: "¿Puedo usar esta página para varios cursos de Hotmart?",
    a: "Sí. Solo reemplaza cada botón con tu enlace de afiliado correspondiente y personaliza nombres, beneficios y categorías.",
  },
  {
    q: "¿Esta página sirve para Google Ads?",
    a: "Sí, siempre que conectes tu dominio, agregues tus políticas básicas y mantengas contenido útil y claro para el usuario.",
  },
];

export default function CursoAiLanding() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = activeCategory === "Todos" || course.category === activeCategory;
      const text = `${course.title} ${course.description} ${course.audience} ${course.category}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-slate-300">CURSO-AI.COM</p>
              <h1 className="text-lg font-semibold">Cursos de IA recomendados</h1>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#cursos" className="text-sm text-slate-300 transition hover:text-white">Cursos</a>
            <a href="#comparativa" className="text-sm text-slate-300 transition hover:text-white">Comparativa</a>
            <a href="#faq" className="text-sm text-slate-300 transition hover:text-white">FAQ</a>
            <Button className="rounded-2xl">Explorar cursos</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <Badge className="mb-4 w-fit rounded-full bg-white/10 px-4 py-1 text-white hover:bg-white/10">
                Hub de cursos de IA
              </Badge>
              <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                Encuentra el mejor <span className="text-sky-400">curso de IA</span> según tu objetivo
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                Compara cursos de inteligencia artificial para negocios, marketing, productividad y automatización,
                aunque empieces desde cero.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-2xl text-base">
                  Ver cursos recomendados <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10">
                  Comparar opciones
                </Button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">6+</p>
                  <p className="text-sm text-slate-300">Cursos destacados</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">100%</p>
                  <p className="text-sm text-slate-300">Enfocados en aplicación práctica</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">24/7</p>
                  <p className="text-sm text-slate-300">Listo para captar tráfico</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-4"
            >
              <Card className="rounded-[28px] border-white/10 bg-white/5 text-white shadow-2xl shadow-black/30">
                <CardHeader>
                  <CardTitle className="text-2xl">¿Qué quieres lograr con IA?</CardTitle>
                  <CardDescription className="text-slate-300">
                    Empieza por el camino que más se parece a tu meta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 md:grid-cols-2">
                  {[
                    { icon: Briefcase, label: "Negocios" },
                    { icon: Bot, label: "Automatización" },
                    { icon: Sparkles, label: "Marketing" },
                    { icon: Brain, label: "Principiantes" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => setActiveCategory(item.label)}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-left transition hover:border-sky-400/50 hover:bg-slate-900"
                      >
                        <div className="rounded-2xl bg-white/10 p-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-slate-400">Explorar categoría</p>
                        </div>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-[28px] border-white/10 bg-white/[0.03] text-white">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-slate-300">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="cursos" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-sky-400">Catálogo</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Cursos destacados</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Usa el buscador y los filtros para mostrar el curso más adecuado según la intención del visitante.
              </p>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar curso, tema o perfil..."
                  className="h-12 rounded-2xl border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-400"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-2">
                <Filter className="ml-1 h-4 w-4 shrink-0 text-slate-400" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap rounded-xl px-3 py-2 text-sm transition ${
                      activeCategory === category ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="rounded-[28px] border-white/10 bg-white/[0.03] text-white shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-sky-400/30">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Badge className="mb-3 rounded-full bg-sky-500/15 text-sky-300 hover:bg-sky-500/15">{course.tag}</Badge>
                      <CardTitle className="text-2xl leading-tight">{course.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-sm text-yellow-200">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {course.rating}
                    </div>
                  </div>
                  <CardDescription className="text-slate-300">{course.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-5 flex flex-wrap gap-2">
                    <Badge variant="outline" className="rounded-full border-white/10 text-slate-200">{course.category}</Badge>
                    <Badge variant="outline" className="rounded-full border-white/10 text-slate-200">{course.level}</Badge>
                    <Badge variant="outline" className="rounded-full border-white/10 text-slate-200">{course.audience}</Badge>
                  </div>

                  <div className="space-y-3">
                    {course.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button asChild className="flex-1 rounded-2xl">
                      <a href={course.href}>Ver curso</a>
                    </Button>
                    <Button variant="outline" className="rounded-2xl border-white/15 bg-transparent text-white hover:bg-white/10">
                      Comparar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="comparativa" className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-400">Comparativa rápida</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">¿Cuál curso te conviene?</h3>
              <p className="mt-3 text-slate-300">
                Usa esta sección para orientar a visitantes que aún no tienen claro qué comprar.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10">
              <div className="grid grid-cols-4 gap-4 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-200 md:px-6">
                <div>Curso</div>
                <div>Nivel</div>
                <div>Ideal para</div>
                <div>Meta principal</div>
              </div>

              {[
                ["IA para Negocios desde Cero", "Principiante", "Emprendedores", "Automatizar y crecer"],
                ["Marketing con IA y Automatización", "Principiante", "Afiliados y marketers", "Vender más"],
                ["Agentes de IA para Productividad", "Intermedio", "Profesionales", "Ahorrar tiempo"],
                ["Ruta Completa de IA para Principiantes", "Principiante", "Nuevos en IA", "Aprender desde cero"],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-4 gap-4 border-t border-white/10 px-4 py-4 text-sm text-slate-300 md:px-6">
                  <div className="font-medium text-white">{row[0]}</div>
                  <div>{row[1]}</div>
                  <div>{row[2]}</div>
                  <div>{row[3]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <div className="rounded-[32px] border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Llamado a la acción</p>
                <h3 className="mt-2 text-3xl font-bold md:text-4xl">Convierte esta página en tu hub de afiliación</h3>
                <p className="mt-4 max-w-2xl text-slate-200">
                  Reemplaza los enlaces de ejemplo por tus enlaces de Hotmart, personaliza los cursos y publica CURSO-AI.COM para empezar a captar tráfico.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="rounded-2xl text-base">
                  Editar cursos y enlaces <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10">
                  Crear Instagram de la marca
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-400">Preguntas frecuentes</p>
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">Todo listo para personalizar</h3>
          </div>

          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <Card key={faq.q} className="rounded-[24px] border-white/10 bg-white/[0.03] text-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold">{faq.q}</h4>
                  <p className="mt-2 text-slate-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold">CURSO-AI.COM</p>
              <p className="mt-1 max-w-2xl text-sm text-slate-400">
                Aviso: esta página puede incluir enlaces de afiliado. Personaliza tus políticas, enlaces y avisos antes de publicar campañas.
              </p>
            </div>

            <div className="flex gap-3 text-sm text-slate-400">
              <a href="#" className="transition hover:text-white">Política de privacidad</a>
              <a href="#" className="transition hover:text-white">Términos</a>
              <a href="#" className="transition hover:text-white">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
