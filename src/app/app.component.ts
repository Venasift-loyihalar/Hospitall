import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ServicesComponent } from "./services/services.component";
import { TeamComponent } from "./team/team.component";
import { HappyComponent } from "./happy/happy.component";
import { FooterComponent } from "./footer/footer.component";
import { BlogComponent } from "./blog/blog.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, AboutUsComponent, ServicesComponent, TeamComponent, HappyComponent, FooterComponent, BlogComponent]
})
export class AppComponent {
  title = 'HosPI';
}
