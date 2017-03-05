import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakersPhotos:String[] = ["/assets/img/palestrante_samuel.JPG"];
  constructor() { }

  ngOnInit() {
  }

}
