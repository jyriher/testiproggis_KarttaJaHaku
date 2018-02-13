import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    latitude = 60.192059;
    longitude = 24.945831;
    locationChosen = false;


    origin = '';  // its a example aleatory position
    destination = '';  // its a example aleatory position


    hae() {
        this.locationChosen = true;

    }


    onChoseLocation(event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        console.log(event);
    }

}
