import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-switch',
    templateUrl: './ng-switch.component.html',
    styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
    alerta = 'success';
    colors: string[] = ['success', 'info', 'warning', 'extra'];
    acum = 0;

    constructor() {}

    ngOnInit() {}

    changeColor() {
        this.acum++;
        this.alerta = this.colors[this.acum];
        if (this.acum === 3) {
            this.acum = 0;
            return;
        }
    }
}
