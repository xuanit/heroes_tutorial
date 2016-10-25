import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router}from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
    constructor(
        private heroesService: HeroService,
        private router: Router
    ){};
    ngOnInit():void {
        this.heroesService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
    heroes: Hero[];
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
