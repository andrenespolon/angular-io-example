import type { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { DetailsComponent } from "./app/details/details.component";

const routeConfig: Routes = [
  {
    path: "",
    title: "Home Page",
    component: HomeComponent,
  },
  {
    path: "details/:id",
    title: "Details Page",
    component: DetailsComponent,
  },
];

export default routeConfig;
