import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samooha-pharma-village',
  templateUrl: './samooha-pharma-village.component.html',
  styleUrls: ['./samooha-pharma-village.component.scss']
})
export class SamoohaPharmaVillageComponent implements OnInit {

  public showPreLoader = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
  }

}
