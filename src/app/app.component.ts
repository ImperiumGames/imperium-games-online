import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
        toolTip: 'Discord',
      },
      {
        icon: 'VK',
        svg: true,
        color: '#5181b8',
        link: 'https://vk.com/club55768625',
        toolTip: 'VK',
      },
      {
        icon: 'lock',
        svg: false,
      },
    ],
  };

  desktop: MediaQueryList;

  // private mobileQueryListener: () => void;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    // changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    iconRegistry.addSvgIcon(
      'discord',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/discord.svg')
    );
    iconRegistry.addSvgIcon(
      'aquila',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/aquila.svg')
    );
    iconRegistry.addSvgIcon(
      'aquila_menu',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/aquila_menu.svg')
    );
    iconRegistry.addSvgIcon(
      'VK',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/VK.svg')
    );

    iconRegistry.addSvgIcon(
      'archer',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/archer.svg')
    );
    iconRegistry.addSvgIcon(
      'berserker',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/berserker.svg')
    );
    iconRegistry.addSvgIcon(
      'brawler',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/brawler.svg')
    );
    iconRegistry.addSvgIcon(
      'gunner',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/gunner.svg')
    );
    iconRegistry.addSvgIcon(
      'lancer',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/lancer.svg')
    );
    iconRegistry.addSvgIcon(
      'mystic',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/mystic.svg')
    );
    iconRegistry.addSvgIcon(
      'ninja',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/ninja.svg')
    );
    iconRegistry.addSvgIcon(
      'priest',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/priest.svg')
    );
    iconRegistry.addSvgIcon(
      'reaper',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/reaper.svg')
    );
    iconRegistry.addSvgIcon(
      'slayer',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/slayer.svg')
    );
    iconRegistry.addSvgIcon(
      'sorcerer',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/sorcerer.svg')
    );
    iconRegistry.addSvgIcon(
      'valkyrie',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/valkyrie.svg')
    );
    iconRegistry.addSvgIcon(
      'warrior',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/ico/warrior.svg')
    );

    this.desktop = media.matchMedia(
      '(min-width: 1200px) and (min-aspect-ratio: 3/2)'
    );
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
