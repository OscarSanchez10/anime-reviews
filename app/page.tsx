import Link from "next/link"
import { Star, TrendingUp, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-2xl text-purple-600">
              AnimeReview
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Inicio
            </Link>
            <Link href="/reseñas" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Reseñas
            </Link>
            <Link href="/categorias" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Categorías
            </Link>
            <Link href="/temporadas" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Temporadas
            </Link>
            <Link href="/noticias" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Noticias
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar anime..."
                className="w-[200px] pl-8 md:w-[250px] rounded-full bg-muted"
              />
            </div>
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Descubre el Mundo del Anime
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    Reseñas profesionales, calificaciones detalladas y análisis profundos de los mejores animes de todas
                    las temporadas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-purple-700 hover:bg-gray-100">Explorar Reseñas</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Últimos Estrenos
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=350&width=600"
                    alt="Hero Image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500 text-purple-500">
                  Destacados
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Reseñas Populares</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Las reseñas más leídas y valoradas por nuestra comunidad
                </p>
              </div>
            </div>

            <Tabs defaultValue="trending" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="trending" className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    Tendencias
                  </TabsTrigger>
                  <TabsTrigger value="recent" className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Recientes
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="trending" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <AnimeReviewCard key={i} trending={true} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <AnimeReviewCard key={i} trending={false} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                Ver Más Reseñas
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500 text-purple-500">
                  Categorías
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explora por Género</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encuentra reseñas de tus géneros favoritos
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {[
                { name: "Shonen", count: 124 },
                { name: "Seinen", count: 87 },
                { name: "Shojo", count: 56 },
                { name: "Mecha", count: 42 },
                { name: "Slice of Life", count: 38 },
                { name: "Fantasía", count: 95 },
                { name: "Acción", count: 112 },
                { name: "Romance", count: 76 },
              ].map((category) => (
                <Link
                  href={`/categoria/${category.name.toLowerCase()}`}
                  key={category.name}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="relative p-6 flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} reseñas</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=550"
                    alt="Anime Critic"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="border-purple-500 text-purple-500">
                    Nuestro Proceso
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Reseñas Profesionales</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Nuestro equipo de críticos especializados analiza cada anime considerando:
                  </p>
                </div>
                <ul className="grid gap-3">
                  {[
                    "Calidad de animación y dirección artística",
                    "Desarrollo de personajes y narrativa",
                    "Banda sonora y efectos de sonido",
                    "Fidelidad al material original (si aplica)",
                    "Impacto cultural y relevancia",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100">
                        <Star className="h-4 w-4 text-purple-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700">Conoce a Nuestros Críticos</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mantente Actualizado</h2>
                <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Suscríbete a nuestro boletín para recibir las últimas reseñas y noticias del mundo del anime
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-white/60"
                    placeholder="tucorreo@ejemplo.com"
                    type="email"
                  />
                  <Button type="submit" className="bg-white text-purple-700 hover:bg-gray-100">
                    Suscribirse
                  </Button>
                </form>
                <p className="text-xs text-white/60">
                  Nunca compartiremos tu correo electrónico. Puedes darte de baja en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-10">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <Link href="/" className="font-bold text-xl text-purple-600">
              AnimeReview
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} AnimeReview. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/acerca-de" className="text-sm text-muted-foreground hover:text-purple-600">
              Acerca de
            </Link>
            <Link href="/contacto" className="text-sm text-muted-foreground hover:text-purple-600">
              Contacto
            </Link>
            <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-purple-600">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-sm text-muted-foreground hover:text-purple-600">
              Términos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AnimeReviewCard({ trending }: { trending: boolean }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img src="/placeholder.svg?height=200&width=400" alt="Anime Cover" className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className="bg-purple-600">{trending ? "Trending" : "Nuevo"}</Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Título del Anime</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">4.8</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">
            Acción
          </Badge>
          <Badge variant="outline" className="text-xs">
            Aventura
          </Badge>
          <Badge variant="outline" className="text-xs">
            Fantasía
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          Una reseña detallada que analiza los aspectos más destacados de este anime, incluyendo su animación, historia,
          personajes y banda sonora...
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          Por <span className="font-medium">Nombre del Crítico</span>
        </div>
        <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
          Leer más
        </Button>
      </CardFooter>
    </Card>
  )
}
