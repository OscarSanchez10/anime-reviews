import Link from "next/link"
import { Star, Calendar, User, Clock, ArrowLeft, Share2, Bookmark, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function AnimeReviewPage() {
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
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-purple-600 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a reseñas
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl mb-8">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Anime Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">Temporada Actual</Badge>
                    <Badge variant="outline" className="text-white border-white">
                      Episodios: 24
                    </Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Título del Anime</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-medium">4.8/5</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="text-sm">Estudio de Animación</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="Crítico" />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Nombre del Crítico</div>
                    <div className="text-xs text-muted-foreground">Crítico Senior • 120 reseñas</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Publicado: 15 de Mayo, 2023</span>
                </div>
              </div>

              <div className="prose prose-purple max-w-none">
                <h2>Sinopsis</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h2>Análisis</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h3>Animación y Dirección Artística</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <div className="not-prose my-6">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Escena del anime 1"
                      className="rounded-lg w-full h-auto"
                    />
                    <img
                      src="/placeholder.svg?height=200&width=350"
                      alt="Escena del anime 2"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Ejemplos de la calidad de animación y dirección artística
                  </p>
                </div>

                <h3>Desarrollo de Personajes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h3>Banda Sonora</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h2>Conclusión</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    Compartir
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Bookmark className="h-4 w-4" />
                    Guardar
                  </Button>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">¿Te fue útil esta reseña?</span>
                  <Button variant="ghost" size="sm" className="text-green-600">
                    Sí
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    No
                  </Button>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-xl font-bold mb-4">Comentarios (24)</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg" alt="Usuario" />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Usuario {i}</div>
                          <div className="text-xs text-muted-foreground">hace 2 días</div>
                        </div>
                        <p className="text-sm mt-1">
                          Excelente reseña. Estoy totalmente de acuerdo con tu análisis sobre el desarrollo de los
                          personajes.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-muted-foreground">
                            Me gusta
                          </Button>
                          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-muted-foreground">
                            Responder
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-6">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Añadir un comentario
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Calificación Detallada</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Animación</span>
                        <span className="text-sm font-medium">4.8/5</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Historia</span>
                        <span className="text-sm font-medium">4.5/5</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Personajes</span>
                        <span className="text-sm font-medium">4.7/5</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Banda Sonora</span>
                        <span className="text-sm font-medium">5.0/5</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Dirección</span>
                        <span className="text-sm font-medium">4.6/5</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Puntuación Final</span>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-bold">4.8/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Información del Anime</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Título Original:</span>
                      <span className="font-medium">アニメタイトル</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estudio:</span>
                      <span className="font-medium">Nombre del Estudio</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Director:</span>
                      <span className="font-medium">Nombre del Director</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temporada:</span>
                      <span className="font-medium">Primavera 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Episodios:</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emisión:</span>
                      <span className="font-medium">Finalizada</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h4 className="font-medium mb-2">Géneros</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Acción</Badge>
                      <Badge variant="outline">Aventura</Badge>
                      <Badge variant="outline">Fantasía</Badge>
                      <Badge variant="outline">Drama</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Reseñas Relacionadas</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Link href="#" key={i} className="flex gap-3 group">
                        <img
                          src="/placeholder.svg?height=60&width=100"
                          alt="Anime relacionado"
                          className="w-24 h-16 object-cover rounded-md"
                        />
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-purple-600 transition-colors">
                            Título de Anime Relacionado {i}
                          </h4>
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-xs">4.{i}/5</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Button variant="link" className="w-full mt-2 text-purple-600">
                    Ver más reseñas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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
