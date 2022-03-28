import { Component, OnInit } from '@angular/core';
import { DEFAULT_PAGE, Hero, HeroService } from '../../services/hero.service';

@Component({
    selector: 'rx-hero-table',
    templateUrl: './hero-table.component.html',
    styleUrls: ['./hero-table.component.scss'],
})
export class HeroTableComponent implements OnInit {
    heroes$ = this.hero.heroes$;
    search$ = this.hero.searchBS;
    userPage$ = this.hero.userPage$;
    totalResults$ = this.hero.totalResults$;
    totalPages$ = this.hero.totalPages$;
    limit$ = this.hero.limitBS;

    constructor(public hero: HeroService) {}

    ngOnInit() {
        //setTimeout(() => this.hero.limitBS.next(10), 5000);
    }

    doSearch(event: any) {
        this.hero.searchBS.next(event.target.value);
        this.hero.pageBS.next(DEFAULT_PAGE);
    }

    movePageBy(moveBy: number) {
        const currentPage = this.hero.pageBS.getValue(); // synchronously
        this.hero.pageBS.next(currentPage + moveBy);
    }

    setLimit(limit: number) {
        this.hero.limitBS.next(limit);
        this.hero.pageBS.next(DEFAULT_PAGE);
    }
}
