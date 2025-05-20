import { Component, Input, Output, EventEmitter } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-rating-stars",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex">
      <ng-container *ngFor="let star of stars; let i = index">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          [ngClass]="getSizeClass()"
          viewBox="0 0 24 24" 
          [attr.fill]="i < rating ? '#f59e0b' : 'none'" 
          [attr.stroke]="i < rating ? '#f59e0b' : '#6b7280'"
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          (click)="onStarClick(i)"
          (mouseenter)="!readOnly && setHoverRating(i + 1)"
          (mouseleave)="!readOnly && setHoverRating(0)"
          [ngStyle]="{'cursor': readOnly ? 'default' : 'pointer'}"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </ng-container>
    </div>
  `,
})
export class RatingStarsComponent {
  @Input() rating = 0
  @Input() totalStars = 5
  @Input() size: "sm" | "md" | "lg" = "md"
  @Input() readOnly = false
  @Output() ratingChange = new EventEmitter<number>()

  stars: number[] = []
  hoverRating = 0

  ngOnInit() {
    this.stars = Array(this.totalStars)
      .fill(0)
      .map((_, i) => i)
  }

  onStarClick(index: number) {
    if (this.readOnly) return

    const newRating = index + 1
    this.rating = newRating
    this.ratingChange.emit(newRating)
  }

  setHoverRating(rating: number) {
    this.hoverRating = rating
  }

  getSizeClass() {
    const sizes = {
      sm: "h-3 w-3",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    }
    return sizes[this.size]
  }
}
