import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakersPhotos:String[] = ["/assets/img/palestrante_samuel.JPG", "/assets/img/palestrante_alisson.jpg",
                            "/assets/img/palestrante_walter.jpg", "/assets/img/palestrante_matheus.jpg",
                            "/assets/img/palestrante_ana.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
