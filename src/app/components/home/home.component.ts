import {
    Component,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
} from '@angular/core';

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
export class HomeComponent
    implements
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy {
    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
}
