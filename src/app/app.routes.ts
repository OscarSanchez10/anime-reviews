import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "resena/:id",
    loadComponent: () => import("./pages/review-detail/review-detail.component").then((m) => m.ReviewDetailComponent),
  },
  {
    path: "categorias",
    loadComponent: () => import("./pages/categories/categories.component").then((m) => m.CategoriesComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]
