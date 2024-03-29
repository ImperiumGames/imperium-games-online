import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Node } from './nodes.d';

@Component({
    selector: 'app-world-map',
    templateUrl: './world-map.component.html',
    styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
    Nodes: Node[];

    componentWallpaper = '../assets/img/tantibus.jpg';
    componentHeader = 'Карта ресурсов Арбореи';

    gathering = true;

    fishing = true;
    BAM69 = true;

    // Gathering
    essenceAzure = true;
    essenceCrimson = true;
    essenceEarth = true;
    essenceObsidian = true;
    essenceOpal = true;

    herbApple = true;
    herbCobseed = true;
    herbMoongourd = true;
    herbMushroom = true;
    herbVeridia = true;

    oreCobala = true;
    oreGalborne = true;
    oreNormetal = true;
    oreShadmetal = true;
    oreXermetal = true;

    pageId = this.location.path();

    constructor(private location: Location) {}

    ngOnInit() {}
}
