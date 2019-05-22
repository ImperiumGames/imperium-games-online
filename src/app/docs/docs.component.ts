import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from './doc';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
    pageId = this.location.path();

    componentWallpaper = '../assets/img/imperium.png';
    componentHeader = 'Документы';

    cDoc: Doc = {
        editprefix: '',
        viewprefix: '',
        user: '',
        repo: '',
        branch: '',
        fname: ''
    };

    viewpath: string;
    editpath: string;

    getDoc(fname: string): void {
        this.cDoc.editprefix = 'https://github.com/';
        this.cDoc.viewprefix = 'https://raw.githubusercontent.com/';
        this.cDoc.user = 'ImperiumGames';
        this.cDoc.repo = 'docs';
        this.cDoc.branch = 'master';
        this.cDoc.fname = fname;

        this.viewpath =
            this.cDoc.viewprefix + this.cDoc.user + '/' + this.cDoc.repo + '/' + this.cDoc.branch + '/' + fname + '.md';

        this.editpath =
            this.cDoc.editprefix +
            this.cDoc.user +
            '/' +
            this.cDoc.repo +
            '/edit/' +
            this.cDoc.branch +
            '/' +
            this.cDoc.fname +
            '.md';
    }

    constructor(private location: Location, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe(x => {
            this.getDoc(x.get('fname'));
        });
    }
}
