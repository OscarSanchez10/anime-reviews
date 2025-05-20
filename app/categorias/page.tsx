import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CategoriasPage() {
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
            <Link href="/categorias" className="text-sm font-medium text-purple-600 transition-colors">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Explora por Categorías
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Encuentra reseñas de anime por géneros, temporadas y más
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-white/60" />
                  <Input
                    type="search"
                    placeholder="Buscar categoría..."
                    className="w-full pl-10 py-6 bg-white/10 text-white placeholder:text-white/60 border-white/20 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="generos" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="generos">Géneros</TabsTrigger>
                <TabsTrigger value="temporadas">Temporadas</TabsTrigger>
                <TabsTrigger value="estudios">Estudios</TabsTrigger>
              </TabsList>

              <TabsContent value="generos" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Shonen", count: 124, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Seinen", count: 87, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Shojo", count: 56, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Mecha", count: 42, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Slice of Life", count: 38, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Fantasía", count: 95, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Acción", count: 112, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Romance", count: 76, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Comedia", count: 103, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Drama", count: 89, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Horror", count: 34, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Ciencia Ficción", count: 67, image: "/placeholder.svg?height=200&width=300" },
                  ].map((category) => (
                    <Card key={category.name} className="overflow-hidden group">
                      <Link href={`/categoria/${category.name.toLowerCase()}`}>
                        <div className="relative h-40">
                          <img
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="text-xl font-bold">{category.name}</h3>
                            <p className="text-sm opacity-90">{category.count} reseñas</p>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="temporadas" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Primavera 2023", count: 42, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Invierno 2023", count: 38, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Otoño 2022", count: 45, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Verano 2022", count: 40, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Primavera 2022", count: 43, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Invierno 2022", count: 39, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Otoño 2021", count: 44, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Verano 2021", count: 41, image: "/placeholder.svg?height=200&width=300" },
                  ].map((season) => (
                    <Card key={season.name} className="overflow-hidden group">
                      <Link href={`/temporada/${season.name.toLowerCase().replace(" ", "-")}`}>
                        <div className="relative h-40">
                          <img
                            src={season.image || "/placeholder.svg"}
                            alt={season.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="text-xl font-bold">{season.name}</h3>
                            <p className="text-sm opacity-90">{season.count} reseñas</p>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="estudios" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Studio A", count: 35, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Studio B", count: 28, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Studio C", count: 42, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Studio D", count: 19, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Studio E", count: 31, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Studio F", count: 24, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Studio G", count: 37, image: "/placeholder.svg?height=200&width=300" },
                    { name: "Studio H", count: 22, image: "/placeholder.svg?height=200&width=300" },
                  ].map((studio) => (
                    <Card key={studio.name} className="overflow-hidden group">
                      <Link href={`/estudio/${studio.name.toLowerCase().replace(" ", "-")}`}>
                        <div className="relative h-40">
                          <img
                            src={studio.image || "/placeholder.svg"}
                            alt={studio.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="text-xl font-bold">{studio.name}</h3>
                            <p className="text-sm opacity-90">{studio.count} reseñas</p>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500 text-purple-500">
                  Destacados
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Colecciones Especiales</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Reseñas agrupadas por temáticas especiales
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Los Mejores Animes de la Década",
                  description: "Una selección de los animes más influyentes y mejor valorados de los últimos 10 años.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Joyas Ocultas",
                  description: "Animes poco conocidos pero con una calidad excepcional que merecen más reconocimiento.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Clásicos Imprescindibles",
                  description: "Los animes que todo aficionado debería ver al menos una vez en la vida.",
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((collection, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Link href={`/coleccion/${i}`}>
                      <div className="relative">
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-xl font-bold">{collection.title}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{collection.description}</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-purple-600">
                          Ver colección
                        </Button>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
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
