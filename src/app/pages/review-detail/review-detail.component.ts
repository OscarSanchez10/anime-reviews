import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"
import { RatingStarsComponent } from "../../components/rating-stars/rating-stars.component"

@Component({
  selector: "app-review-detail",
  standalone: true,
  imports: [RouterLink, CommonModule, RatingStarsComponent],
  template: `
    <div class="container mx-auto py-8 md:py-12 px-4">
      <a routerLink="/" class="inline-flex items-center text-sm text-gray-400 hover:text-orange-500 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Volver a reseñas
      </a>

      <div class="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <div class="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl mb-8">
            <img
              src="assets/anime-banner.jpg"
              alt="Anime Banner"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6 text-white">
              <div class="flex items-center gap-2 mb-2">
                <span class="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">Temporada Actual</span>
                <span class="text-white border border-white text-xs px-2 py-1 rounded-md">
                  Episodios: 24
                </span>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold mb-2">Demon Slayer: Kimetsu no Yaiba</h1>
              <div class="flex items-center gap-4">
                <div class="flex items-center">
                  <app-rating-stars [rating]="4.8" [readOnly]="true" size="sm"></app-rating-stars>
                  <span class="ml-1 font-medium">4.8/5</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span class="text-sm">2023</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span class="text-sm">ufotable</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                <img src="assets/critic-avatar.jpg" alt="Crítico" class="h-full w-full object-cover" />
              </div>
              <div>
                <div class="font-medium text-white">Akira Tanaka</div>
                <div class="text-xs text-gray-400">Crítico Senior • 120 reseñas</div>
              </div>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Publicado: 15 de Mayo, 2023</span>
            </div>
          </div>

          <div class="prose prose-invert max-w-none">
            <h2>Sinopsis</h2>
            <p>
              En la era Taisho de Japón, Tanjiro Kamado es un joven de buen corazón que se gana la vida vendiendo carbón. Sin embargo, su vida pacífica se hace añicos cuando un demonio masacra a toda su familia. La única sobreviviente es su hermana Nezuko, que ha sido transformada en un demonio. Tanjiro decide convertirse en un cazador de demonios para encontrar una cura para su hermana y vengar a su familia.
            </p>

            <h2>Análisis</h2>
            <p>
              Demon Slayer: Kimetsu no Yaiba ha tomado el mundo del anime por asalto, convirtiéndose en uno de los fenómenos más grandes de la industria en los últimos años. Con una combinación perfecta de animación espectacular, narrativa emotiva y personajes memorables, este anime ha logrado capturar la atención tanto de fanáticos veteranos como de recién llegados al medio.
            </p>

            <h3>Animación y Dirección Artística</h3>
            <p>
              El estudio ufotable ha establecido un nuevo estándar para la animación de anime con Demon Slayer. La integración fluida de animación tradicional con efectos CGI es simplemente impresionante, especialmente en las secuencias de combate. Los efectos de agua y fuego son particularmente notables, creando momentos visuales que quedan grabados en la memoria del espectador.
            </p>

            <div class="not-prose my-6">
              <div class="grid grid-cols-2 gap-4">
                <img
                  src="assets/scene1.jpg"
                  alt="Escena del anime 1"
                  class="rounded-lg w-full h-auto"
                />
                <img
                  src="assets/scene2.jpg"
                  alt="Escena del anime 2"
                  class="rounded-lg w-full h-auto"
                />
              </div>
              <p class="text-sm text-gray-400 text-center mt-2">
                Ejemplos de la calidad de animación y dirección artística
              </p>
            </div>

            <h3>Desarrollo de Personajes</h3>
            <p>
              Uno de los puntos fuertes de Demon Slayer es su elenco de personajes. Tanjiro es un protagonista excepcionalmente bien desarrollado, con una combinación de amabilidad y determinación que lo hace fácil de apoyar. Su relación con Nezuko es el corazón emocional de la serie, mientras que personajes secundarios como Zenitsu e Inosuke proporcionan tanto alivio cómico como profundidad sorprendente.
            </p>

            <h3>Banda Sonora</h3>
            <p>
              La música de Demon Slayer, compuesta por Yuki Kajiura y Go Shiina, complementa perfectamente la acción y la emoción en pantalla. Desde piezas orquestales épicas durante las batallas hasta melodías más suaves y emotivas para los momentos íntimos, la banda sonora eleva cada escena a nuevas alturas.
            </p>

            <h2>Conclusión</h2>
            <p>
              Demon Slayer: Kimetsu no Yaiba es un logro extraordinario en el mundo del anime. Combina una historia tradicional de superación personal con una ejecución técnica impecable, creando una experiencia que resuena con una amplia audiencia. Su éxito sin precedentes, culminando con la película Mugen Train que rompió récords de taquilla, es un testimonio de su calidad excepcional y atractivo universal.
            </p>
          </div>

          <div class="flex items-center justify-between mt-8 pt-4 border-t border-gray-700">
            <div class="flex gap-2">
              <button class="flex items-center gap-1 border border-gray-700 text-gray-300 hover:bg-gray-800 px-3 py-1.5 rounded-md text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
                Compartir
              </button>
              <button class="flex items-center gap-1 border border-gray-700 text-gray-300 hover:bg-gray-800 px-3 py-1.5 rounded-md text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Guardar
              </button>
            </div>
            <div class="flex items-center gap-1">
              <span class="text-sm text-gray-400">¿Te fue útil esta reseña?</span>
              <button class="text-green-500 hover:text-green-400 px-2 py-1 text-sm">
                Sí
              </button>
              <button class="text-red-500 hover:text-red-400 px-2 py-1 text-sm">
                No
              </button>
            </div>
          </div>

          <div class="my-8 border-t border-gray-700"></div>

          <div>
            <h3 class="text-xl font-bold mb-4 text-white">Comentarios (24)</h3>
            <div class="space-y-6">
              <div *ngFor="let i of [1, 2, 3]" class="flex gap-4">
                <div class="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img src="assets/user-avatar.jpg" alt="Usuario" class="h-full w-full object-cover" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-white">Usuario {{i}}</div>
                    <div class="text-xs text-gray-400">hace 2 días</div>
                  </div>
                  <p class="text-sm mt-1 text-gray-300">
                    Excelente reseña. Estoy totalmente de acuerdo con tu análisis sobre el desarrollo de los
                    personajes.
                  </p>
                  <div class="flex items-center gap-4 mt-2">
                    <button class="text-xs text-gray-400 hover:text-gray-300">
                      Me gusta
                    </button>
                    <button class="text-xs text-gray-400 hover:text-gray-300">
                      Responder
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button class="w-full mt-6 border border-gray-700 text-gray-300 hover:bg-gray-800 px-4 py-2 rounded-md text-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Añadir un comentario
            </button>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-lg mb-4 text-white">Calificación Detallada</h3>
            <div class="space-y-4">
              <div *ngFor="let rating of ratings">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm text-gray-300">{{rating.category}}</span>
                  <span class="text-sm font-medium text-white">{{rating.score}}/5</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-orange-500 rounded-full" 
                    [style.width.%]="rating.percentage"
                  ></div>
                </div>
              </div>
            </div>
            <div class="my-4 border-t border-gray-700"></div>
            <div class="flex items-center justify-between">
              <span class="font-bold text-white">Puntuación Final</span>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span class="ml-1 font-bold text-white">4.8/5</span>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-lg mb-4 text-white">Información del Anime</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">Título Original:</span>
                <span class="font-medium text-white">鬼滅の刃</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Estudio:</span>
                <span class="font-medium text-white">ufotable</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Director:</span>
                <span class="font-medium text-white">Haruo Sotozaki</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Temporada:</span>
                <span class="font-medium text-white">Primavera 2023</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Episodios:</span>
                <span class="font-medium text-white">24</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Emisión:</span>
                <span class="font-medium text-white">Finalizada</span>
              </div>
            </div>
            <div class="my-4 border-t border-gray-700"></div>
            <div>
              <h4 class="font-medium mb-2 text-white">Géneros</h4>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let genre of genres" class="text-xs border border-gray-700 px-2 py-1 rounded-full text-gray-300">
                  {{genre}}
                </span>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-lg mb-4 text-white">Reseñas Relacionadas</h3>
            <div class="space-y-4">
              <a *ngFor="let anime of relatedAnimes" routerLink="/resena/{{anime.id}}" class="flex gap-3 group">
                <img
                  [src]="anime.image"
                  [alt]="anime.title"
                  class="w-24 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 class="font-medium text-sm text-white group-hover:text-orange-500 transition-colors">
                    {{anime.title}}
                  </h4>
                  <div class="flex items-center mt-1">
                    <app-rating-stars [rating]="anime.rating" [readOnly]="true" size="sm"></app-rating-stars>
                    <span class="ml-1 text-xs text-gray-300">{{anime.rating}}/5</span>
                  </div>
                </div>
              </a>
            </div>
            <button class="w-full mt-2 text-orange-500 hover:text-orange-400 text-sm">
              Ver más reseñas
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ReviewDetailComponent {
  ratings = [
    { category: "Animación", score: 4.8, percentage: 96 },
    { category: "Historia", score: 4.5, percentage: 90 },
    { category: "Personajes", score: 4.7, percentage: 94 },
    { category: "Banda Sonora", score: 5.0, percentage: 100 },
    { category: "Dirección", score: 4.6, percentage: 92 },
  ]

  genres = ["Acción", "Aventura", "Fantasía", "Histórico", "Sobrenatural"]

  relatedAnimes = [
    {
      id: "2",
      title: "Jujutsu Kaisen",
      image: "assets/anime2.jpg",
      rating: 4.7,
    },
    {
      id: "3",
      title: "Attack on Titan",
      image: "assets/anime3.jpg",
      rating: 4.9,
    },
    {
      id: "4",
      title: "Chainsaw Man",
      image: "assets/anime4.jpg",
      rating: 4.6,
    },
  ]
}
