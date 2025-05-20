import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div class="container mx-auto flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-2">
          <a routerLink="/" class="font-bold text-2xl text-orange-500">
            AnimeReview
          </a>
        </div>
        <nav class="hidden md:flex gap-6">
          <a routerLink="/" routerLinkActive="text-orange-500" [routerLinkActiveOptions]="{exact: true}" class="text-sm font-medium hover:text-orange-500 transition-colors">
            Inicio
          </a>
          <a routerLink="/resenas" routerLinkActive="text-orange-500" class="text-sm font-medium hover:text-orange-500 transition-colors">
            Reseñas
          </a>
          <a routerLink="/categorias" routerLinkActive="text-orange-500" class="text-sm font-medium hover:text-orange-500 transition-colors">
            Categorías
          </a>
          <a routerLink="/temporadas" routerLinkActive="text-orange-500" class="text-sm font-medium hover:text-orange-500 transition-colors">
            Temporadas
          </a>
          <a routerLink="/noticias" routerLinkActive="text-orange-500" class="text-sm font-medium hover:text-orange-500 transition-colors">
            Noticias
          </a>
        </nav>
        <div class="flex items-center gap-4">
          <div class="relative hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="search"
              placeholder="Buscar anime..."
              class="w-[200px] pl-8 md:w-[250px] rounded-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
          <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
