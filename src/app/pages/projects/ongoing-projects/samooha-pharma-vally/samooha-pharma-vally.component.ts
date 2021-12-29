import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samooha-pharma-vally',
  templateUrl: './samooha-pharma-vally.component.html',
  styleUrls: ['./samooha-pharma-vally.component.scss']
})
export class SamoohaPharmaVallyComponent implements OnInit {

  public showPreLoader = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
  }

}
