import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"
import { AnimeCardComponent } from "../../components/anime-card/anime-card.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink, CommonModule, AnimeCardComponent],
  template: `
    <section class="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-800 text-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Descubre el Mundo del Anime
              </h1>
              <p class="max-w-[600px] text-white/90 md:text-xl">
                Reseñas profesionales, calificaciones detalladas y análisis profundos de los mejores animes de todas
                las temporadas.
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <button class="bg-white text-orange-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Explorar Reseñas
              </button>
              <button class="border border-white text-white hover:bg-white/20 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Últimos Estrenos
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="relative h-[350px] w-full overflow-hidden rounded-xl">
              <img
                src="assets/hero-image.jpg"
                alt="Hero Image"
                class="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <span class="inline-block border border-orange-500 text-orange-500 px-3 py-1 text-xs rounded-full">
              Destacados
            </span>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Reseñas Populares</h2>
            <p class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Las reseñas más leídas y valoradas por nuestra comunidad
            </p>
          </div>
        </div>

        <div class="mt-8">
          <div class="flex justify-center mb-6">
            <div class="inline-flex rounded-md shadow-sm">
              <button 
                [ngClass]="{'bg-orange-500 text-white': activeTab === 'trending', 'bg-gray-800 text-gray-300': activeTab !== 'trending'}"
                class="px-4 py-2 text-sm font-medium rounded-l-lg border border-gray-700 focus:z-10 focus:outline-none"
                (click)="setActiveTab('trending')"
              >
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  Tendencias
                </span>
              </button>
              <button 
                [ngClass]="{'bg-orange-500 text-white': activeTab === 'recent', 'bg-gray-800 text-gray-300': activeTab !== 'recent'}"
                class="px-4 py-2 text-sm font-medium rounded-r-lg border border-gray-700 focus:z-10 focus:outline-none"
                (click)="setActiveTab('recent')"
              >
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Recientes
                </span>
              </button>
            </div>
          </div>

          <div *ngIf="activeTab === 'trending'" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <app-anime-card 
              *ngFor="let anime of trendingAnimes" 
              [id]="anime.id"
              [title]="anime.title"
              [image]="anime.image"
              [rating]="anime.rating"
              [tags]="anime.tags"
              [description]="anime.description"
              [author]="anime.author"
              [badge]="'Trending'"
            ></app-anime-card>
          </div>

          <div *ngIf="activeTab === 'recent'" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <app-anime-card 
              *ngFor="let anime of recentAnimes" 
              [id]="anime.id"
              [title]="anime.title"
              [image]="anime.image"
              [rating]="anime.rating"
              [tags]="anime.tags"
              [description]="anime.description"
              [author]="anime.author"
              [badge]="'Nuevo'"
            ></app-anime-card>
          </div>

          <div class="flex justify-center mt-10">
            <button class="border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Ver Más Reseñas
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <span class="inline-block border border-orange-500 text-orange-500 px-3 py-1 text-xs rounded-full">
              Categorías
            </span>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Explora por Género</h2>
            <p class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Encuentra reseñas de tus géneros favoritos
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <a 
            *ngFor="let category of categories"
            [routerLink]="['/categoria', category.name.toLowerCase()]"
            class="group relative overflow-hidden rounded-lg bg-gray-700 shadow-md transition-all hover:shadow-lg"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div class="relative p-6 flex flex-col items-center justify-center text-white">
              <h3 class="text-xl font-bold">{{category.name}}</h3>
              <p class="text-sm opacity-90">{{category.count}} reseñas</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div class="flex items-center justify-center">
            <div class="relative h-[400px] w-full overflow-hidden rounded-xl">
              <img
                src="assets/critic-image.jpg"
                alt="Anime Critic"
                class="object-cover w-full h-full"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <span class="inline-block border border-orange-500 text-orange-500 px-3 py-1 text-xs rounded-full">
                Nuestro Proceso
              </span>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Reseñas Profesionales</h2>
              <p class="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                Nuestro equipo de críticos especializados analiza cada anime considerando:
              </p>
            </div>
            <ul class="grid gap-3">
              <li *ngFor="let item of reviewCriteria" class="flex items-center gap-2">
                <div class="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f97316" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span class="text-gray-300">{{item}}</span>
              </li>
            </ul>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Conoce a Nuestros Críticos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-800 text-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Mantente Actualizado</h2>
            <p class="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Suscríbete a nuestro boletín para recibir las últimas reseñas y noticias del mundo del anime
            </p>
          </div>
          <div class="w-full max-w-md space-y-2">
            <form class="flex space-x-2">
              <input
                class="max-w-lg flex-1 bg-white/10 text-white placeholder:text-white/60 rounded-md px-4 py-2 border border-white/20"
                placeholder="tucorreo@ejemplo.com"
                type="email"
              />
              <button type="submit" class="bg-white text-orange-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Suscribirse
              </button>
            </form>
            <p class="text-xs text-white/60">
              Nunca compartiremos tu correo electrónico. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  activeTab: "trending" | "recent" = "trending"

  trendingAnimes = [
    {
      id: "1",
      title: "Demon Slayer: Kimetsu no Yaiba",
      image: "assets/anime1.jpg",
      rating: 4.8,
      tags: ["Acción", "Fantasía", "Histórico"],
      description:
        "Una reseña detallada que analiza los aspectos más destacados de este anime, incluyendo su animación, historia, personajes y banda sonora...",
      author: "Akira Tanaka",
    },
    {
      id: "2",
      title: "Jujutsu Kaisen",
      image: "assets/anime2.jpg",
      rating: 4.7,
      tags: ["Acción", "Sobrenatural", "Escolar"],
      description:
        "Una reseña detallada que analiza los aspectos más destacados de este anime, incluyendo su animación, historia, personajes y banda sonora...",
      author: "Yuki Sato",
    },
    {
      id: "3",
      title: "Attack on Titan",
      image: "assets/anime3.jpg",
      rating: 4.9,
      tags: ["Acción", "Drama", "Fantasía"],
      description:
        "Una reseña detallada que analiza los aspectos más destacados de este anime, incluyendo su animación, historia, personajes y banda sonora...",
      author: "Haruki Nakamura",
    },
  ]

  recentAnimes = [
    {
      id: "4",
      title: "Chainsaw Man",
      image: "assets/anime4.jpg",
      rating: 4.6,
      tags: ["Acción", "Sobrenatural", "Horror"],
      description:
        "Una reseña detallada que analiza los aspectos más destacados de este anime, incluyendo su animación, historia, personajes y banda sonora...",
      author: "Mei Kobayashi",
    },
    {
      id: "5",
      title: "Spy x Family",
      image: "assets/anime5.jpg",
      rating: 4.5,
      tags: ["Comedia", "Acción", "Slice of Life"],
      description:
        "Una reseña detallada que analiza los aspectos más destacados de este anime, incluyendo su animación, historia, personajes y banda sonora...",
      author: "Takeshi Yamamoto",
    },
    {
      id: "6",
      title: "Bocchi the Rock!",
      image: "assets/anime6.jpg",
      rating: 4.4,
      tags: ["Música", "Comedia", "Slice of Life"],
      description:
        "Una reseña detallada que analiza los aspectos más destacados de este anime, incluyendo su animación, historia, personajes y banda sonora...",
      author: "Sakura Ito",
    },
  ]

  categories = [
    { name: "Shonen", count: 124 },
    { name: "Seinen", count: 87 },
    { name: "Shojo", count: 56 },
    { name: "Mecha", count: 42 },
    { name: "Slice of Life", count: 38 },
    { name: "Fantasía", count: 95 },
    { name: "Acción", count: 112 },
    { name: "Romance", count: 76 },
  ]

  reviewCriteria = [
    "Calidad de animación y dirección artística",
    "Desarrollo de personajes y narrativa",
    "Banda sonora y efectos de sonido",
    "Fidelidad al material original (si aplica)",
    "Impacto cultural y relevancia",
  ]

  setActiveTab(tab: "trending" | "recent") {
    this.activeTab = tab
  }
}
