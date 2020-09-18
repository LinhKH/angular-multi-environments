import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    environmentName = '';
    environmentUrl = 'Debug api';

    constructor() {
        this.environmentName = environment.environmentName;
        this.environmentUrl = environment.apiUrl;
    }
}
