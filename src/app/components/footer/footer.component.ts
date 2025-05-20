import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="w-full border-t border-gray-800 bg-gray-900 py-6 md:py-10">
      <div class="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between px-4">
        <div class="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <a routerLink="/" class="font-bold text-xl text-orange-500">
            AnimeReview
          </a>
          <p class="text-center text-sm text-gray-400 md:text-left">
            &copy; {{currentYear}} AnimeReview. Todos los derechos reservados.
          </p>
        </div>
        <div class="flex gap-4">
          <a routerLink="/acerca-de" class="text-sm text-gray-400 hover:text-orange-500">
            Acerca de
          </a>
          <a routerLink="/contacto" class="text-sm text-gray-400 hover:text-orange-500">
            Contacto
          </a>
          <a routerLink="/privacidad" class="text-sm text-gray-400 hover:text-orange-500">
            Privacidad
          </a>
          <a routerLink="/terminos" class="text-sm text-gray-400 hover:text-orange-500">
            Términos
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
