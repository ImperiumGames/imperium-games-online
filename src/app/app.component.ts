import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Alex Playground';

    @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';

    close(reason: string) {
        this.reason = reason;
        this.sidenav.close();
    }
}
