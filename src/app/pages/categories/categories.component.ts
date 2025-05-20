import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-800 text-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Explora por Categorías
            </h1>
            <p class="max-w-[600px] text-white/90 md:text-xl">
              Encuentra reseñas de anime por géneros, temporadas y más
            </p>
          </div>
          <div class="w-full max-w-md">
            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-3 text-white/60">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="search"
                placeholder="Buscar categoría..."
                class="w-full pl-10 py-6 bg-white/10 text-white placeholder:text-white/60 border-white/20 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 bg-gray-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="w-full max-w-md mx-auto grid grid-cols-3 mb-8 bg-gray-800 rounded-lg overflow-hidden">
          <button 
            [ngClass]="{'bg-orange-500 text-white': activeTab === 'generos', 'bg-gray-800 text-gray-300': activeTab !== 'generos'}"
            class="py-3 text-sm font-medium"
            (click)="setActiveTab('generos')"
          >
            Géneros
          </button>
          <button 
            [ngClass]="{'bg-orange-500 text-white': activeTab === 'temporadas', 'bg-gray-800 text-gray-300': activeTab !== 'temporadas'}"
            class="py-3 text-sm font-medium"
            (click)="setActiveTab('temporadas')"
          >
            Temporadas
          </button>
          <button 
            [ngClass]="{'bg-orange-500 text-white': activeTab === 'estudios', 'bg-gray-800 text-gray-300': activeTab !== 'estudios'}"
            class="py-3 text-sm font-medium"
            (click)="setActiveTab('estudios')"
          >
            Estudios
          </button>
        </div>

        <div *ngIf="activeTab === 'generos'" class="mt-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div *ngFor="let category of genres" class="overflow-hidden group bg-gray-800 rounded-lg">
              <a [routerLink]="['/categoria', category.name.toLowerCase()]">
                <div class="relative h-40">
                  <img
                    [src]="category.image"
                    [alt]="category.name"
                    class="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-4 text-white">
                    <h3 class="text-xl font-bold">{{category.name}}</h3>
                    <p class="text-sm opacity-90">{{category.count}} reseñas</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div *ngIf="activeTab === 'temporadas'" class="mt-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div *ngFor="let season of seasons" class="overflow-hidden group bg-gray-800 rounded-lg">
              <a [routerLink]="['/temporada', season.name.toLowerCase().replace(' ', '-')]">
                <div class="relative h-40">
                  <img
                    [src]="season.image"
                    [alt]="season.name"
                    class="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-4 text-white">
                    <h3 class="text-xl font-bold">{{season.name}}</h3>
                    <p class="text-sm opacity-90">{{season.count}} reseñas</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div *ngIf="activeTab === 'estudios'" class="mt-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div *ngFor="let studio of studios" class="overflow-hidden group bg-gray-800 rounded-lg">
              <a [routerLink]="['/estudio', studio.name.toLowerCase().replace(' ', '-')]">
                <div class="relative h-40">
                  <img
                    [src]="studio.image"
                    [alt]="studio.name"
                    class="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-4 text-white">
                    <h3 class="text-xl font-bold">{{studio.name}}</h3>
                    <p class="text-sm opacity-90">{{studio.count}} reseñas</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 bg-gray-800">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div class="space-y-2">
            <span class="inline-block border border-orange-500 text-orange-500 px-3 py-1 text-xs rounded-full">
              Destacados
            </span>
            <h2 class="text-3xl font-bold tracking-tighter text-white">Colecciones Especiales</h2>
            <p class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Reseñas agrupadas por temáticas especiales
            </p>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div *ngFor="let collection of collections; let i = index" class="overflow-hidden bg-gray-800 rounded-lg">
            <a [routerLink]="['/coleccion', i]">
              <div class="relative">
                <img
                  [src]="collection.image"
                  [alt]="collection.title"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4 text-white">
                  <h3 class="text-xl font-bold">{{collection.title}}</h3>
                </div>
              </div>
              <div class="p-4">
                <p class="text-sm text-gray-400">{{collection.description}}</p>
                <button class="mt-2 text-orange-500 hover:text-orange-400 text-sm">
                  Ver colección
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CategoriesComponent {
  activeTab: "generos" | "temporadas" | "estudios" = "generos"

  genres = [
    { name: "Shonen", count: 124, image: "assets/genre1.jpg" },
    { name: "Seinen", count: 87, image: "assets/genre2.jpg" },
    { name: "Shojo", count: 56, image: "assets/genre3.jpg" },
    { name: "Mecha", count: 42, image: "assets/genre4.jpg" },
    { name: "Slice of Life", count: 38, image: "assets/genre5.jpg" },
    { name: "Fantasía", count: 95, image: "assets/genre6.jpg" },
    { name: "Acción", count: 112, image: "assets/genre7.jpg" },
    { name: "Romance", count: 76, image: "assets/genre8.jpg" },
    { name: "Comedia", count: 103, image: "assets/genre9.jpg" },
    { name: "Drama", count: 89, image: "assets/genre10.jpg" },
    { name: "Horror", count: 34, image: "assets/genre11.jpg" },
    { name: "Ciencia Ficción", count: 67, image: "assets/genre12.jpg" },
  ]

  seasons = [
    { name: "Primavera 2023", count: 42, image: "assets/season1.jpg" },
    { name: "Invierno 2023", count: 38, image: "assets/season2.jpg" },
    { name: "Otoño 2022", count: 45, image: "assets/season3.jpg" },
    { name: "Verano 2022", count: 40, image: "assets/season4.jpg" },
    { name: "Primavera 2022", count: 43, image: "assets/season5.jpg" },
    { name: "Invierno 2022", count: 39, image: "assets/season6.jpg" },
    { name: "Otoño 2021", count: 44, image: "assets/season7.jpg" },
    { name: "Verano 2021", count: 41, image: "assets/season8.jpg" },
  ]

  studios = [
    { name: "ufotable", count: 35, image: "assets/studio1.jpg" },
    { name: "MAPPA", count: 28, image: "assets/studio2.jpg" },
    { name: "Kyoto Animation", count: 42, image: "assets/studio3.jpg" },
    { name: "Wit Studio", count: 19, image: "assets/studio4.jpg" },
    { name: "Bones", count: 31, image: "assets/studio5.jpg" },
    { name: "Madhouse", count: 24, image: "assets/studio6.jpg" },
    { name: "A-1 Pictures", count: 37, image: "assets/studio7.jpg" },
    { name: "Production I.G", count: 22, image: "assets/studio8.jpg" },
  ]

  collections = [
    {
      title: "Los Mejores Animes de la Década",
      description: "Una selección de los animes más influyentes y mejor valorados de los últimos 10 años.",
      image: "assets/collection1.jpg",
    },
    {
      title: "Joyas Ocultas",
      description: "Animes poco conocidos pero con una calidad excepcional que merecen más reconocimiento.",
      image: "assets/collection2.jpg",
    },
    {
      title: "Clásicos Imprescindibles",
      description: "Los animes que todo aficionado debería ver al menos una vez en la vida.",
      image: "assets/collection3.jpg",
    },
  ]

  setActiveTab(tab: "generos" | "temporadas" | "estudios") {
    this.activeTab = tab
  }
}
