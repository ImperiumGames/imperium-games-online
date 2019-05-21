import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guide } from './guide';

@Component({
    selector: 'app-guides',
    templateUrl: './guides.component.html',
    styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {
    pageId = this.location.path();

    componentWallpaper = '../assets/img/wallpaper.jpg';
    componentHeader = 'Гайды';

    cguide: Guide = {
        editprefix: '',
        viewprefix: '',
        user: '',
        repo: '',
        branch: '',
        fname: ''
    };

    // = {
    //     editprefix: 'https://github.com/',
    //     viewprefix: 'https://raw.githubusercontent.com/',
    //     user: 'ImperiumGames',
    //     repo: 'guides',
    //     branch: 'RU',
    //     fname: ''
    // };

    // raw = 'https://raw.githubusercontent.com/';
    // path = 'jfcere/ngx-markdown/master/README.md';
    // rawpath = this.raw + this.path;

    // https://raw.githubusercontent.com/ImperiumGames/guides/RU/brawler.md
    // curpath = this.location.path();
    viewpath: string;
    editpath: string;

    getGuide(fname: string): void {
        this.cguide.editprefix = 'https://github.com/';
        this.cguide.viewprefix = 'https://raw.githubusercontent.com/';
        this.cguide.user = 'ImperiumGames';
        this.cguide.repo = 'guides';
        this.cguide.branch = 'RU';
        this.cguide.fname = fname;

        this.viewpath =
            this.cguide.viewprefix +
            this.cguide.user +
            '/' +
            this.cguide.repo +
            '/' +
            this.cguide.branch +
            '/' +
            fname +
            '.md';

        this.editpath =
            this.cguide.editprefix +
            this.cguide.user +
            '/' +
            this.cguide.repo +
            '/edit/' +
            this.cguide.branch +
            '/' +
            this.cguide.fname +
            '.md';
    }

    constructor(private location: Location, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe(x => {
            this.getGuide(x.get('fname'));
            console.log(this.editpath);
            console.log(this.viewpath);
        });
    }
}
