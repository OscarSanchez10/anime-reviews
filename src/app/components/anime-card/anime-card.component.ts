import { Component, Input } from "@angular/core"
import { RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"
import { RatingStarsComponent } from "../rating-stars/rating-stars.component"

@Component({
  selector: "app-anime-card",
  standalone: true,
  imports: [RouterLink, CommonModule, RatingStarsComponent],
  template: `
    <div class="overflow-hidden transition-all hover:shadow-lg bg-gray-800 rounded-lg group">
      <a [routerLink]="['/resena', id]">
        <div class="relative">
          <img [src]="image" [alt]="title" class="w-full h-48 object-cover transition-transform group-hover:scale-105" />
          <div class="absolute top-2 right-2">
            <span class="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">{{badge}}</span>
          </div>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg text-white">{{title}}</h3>
            <div class="flex items-center">
              <app-rating-stars [rating]="rating" [readOnly]="true" size="sm"></app-rating-stars>
              <span class="ml-1 text-sm font-medium">{{rating}}</span>
            </div>
          </div>
          <div class="flex gap-2 flex-wrap mt-2">
            <ng-container *ngFor="let tag of tags">
              <span class="text-xs border border-gray-700 px-2 py-1 rounded-full text-gray-300">
                {{tag}}
              </span>
            </ng-container>
          </div>
          <p class="text-sm text-gray-400 line-clamp-3 mt-3">
            {{description}}
          </p>
          <div class="flex justify-between items-center mt-4">
            <div class="text-xs text-gray-500">
              Por <span class="font-medium text-gray-400">{{author}}</span>
            </div>
            <span class="text-orange-500 hover:text-orange-400 text-sm font-medium">
              Leer más
            </span>
          </div>
        </div>
      </a>
    </div>
  `,
})
export class AnimeCardComponent {
  @Input() id = "1"
  @Input() title = "Título del Anime"
  @Input() image = "/assets/placeholder.jpg"
  @Input() rating = 4.5
  @Input() tags: string[] = ["Acción", "Aventura"]
  @Input() description = "Descripción del anime..."
  @Input() author = "Nombre del Crítico"
  @Input() badge = "Nuevo"
}
