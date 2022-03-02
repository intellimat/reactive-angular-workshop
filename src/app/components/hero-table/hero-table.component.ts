import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../../services/hero.service';

@Component({
    selector: 'rx-hero-table',
    templateUrl: './hero-table.component.html',
    styleUrls: ['./hero-table.component.scss'],
})
export class HeroTableComponent implements OnInit {
    heroes$ = this.hero.heroes$;

    constructor(public hero: HeroService) {}

    ngOnInit() {}

    doSearch(event: any) {
        this.hero.searchBS.next(event.target.value);
    }
}
