import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <app-ng-style></app-ng-style>
        <hr />

        <app-css></app-css>

        <p>
            Hola mundo desde app.component
        </p>

        <app-clases></app-clases>

        <h1 [appResaltado]="'#ffee22'">Hola mundo</h1>

        <br /><br />

        <app-ng-switch></app-ng-switch>
    `,
    styles: [],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
