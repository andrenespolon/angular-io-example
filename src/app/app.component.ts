import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

@Component({
  standalone: true,
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <!-- <app-home></app-home> -->
        <!-- 
          Put router-outlet directive to router pages instead a single component, like before.
         -->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = "homes";
}
