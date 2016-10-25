import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component'

@Component({
    selector: "my-app",
    moduleId: module.id,
    styleUrls: ['app.component.css'],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboarad</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent{
    title = 'Tour of Heroes';
}