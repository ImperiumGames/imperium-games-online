import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Alex Playground';

    FabOptions = {
        buttons: [
            {
                icon: 'discord',
                svg: true,
                color: '#7289da',
                link: 'https://discord.gg/TUdNyDu',
                toolTip: 'Discord'
            },
            {
                icon: 'VK',
                svg: true,
                color: '#5181b8',
                link: 'https://vk.com/imperiumgames',
                toolTip: 'VK'
            },
            {
                icon: 'lock',
                svg: false
            }
        ]
    };

    desktop: MediaQueryList;

    // private mobileQueryListener: () => void;

    constructor(
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer,
        // changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        iconRegistry.addSvgIcon('discord', sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/discord.svg'));
        iconRegistry.addSvgIcon('aquila', sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/aquila.svg'));
        iconRegistry.addSvgIcon('VK', sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/VK.svg'));

        this.desktop = media.matchMedia('(min-width: 1200px) and (min-aspect-ratio: 3/2)');
        // this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        // this.mobileQuery.addListener(this.mobileQueryListener);
        // addEventListener('123', this.mobileQueryListener);
    }

    // @ViewChild('sidenav') sidenav: MatSidenav;

    // reason = '';

    // close(reason: string) {
    //     this.reason = reason;
    //     this.sidenav.close();
    // }

    // ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this.mobileQueryListener);
    //  removeEventListener('123', this.mobileQueryListener);
    // }
}
