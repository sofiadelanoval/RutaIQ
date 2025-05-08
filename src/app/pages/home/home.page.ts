import {Component, ElementRef, ViewChild} from '@angular/core';
import {FirestoreService} from "../../services/firestore/firestore.service";
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map', { static: true }) mapElement: ElementRef = {} as ElementRef;
  map: any;

  constructor(private firestoreService: FirestoreService) {
    this.firestoreService.getCardinals().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
