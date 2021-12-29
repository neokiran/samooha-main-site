import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samooha-pharma-avenue',
  templateUrl: './samooha-pharma-avenue.component.html',
  styleUrls: ['./samooha-pharma-avenue.component.scss']
})
export class SamoohaPharmaAvenueComponent implements OnInit {

  public showPreLoader = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
  }

}
