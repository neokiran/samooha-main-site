import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-samooha-vari-sontillu',
  templateUrl: './samooha-vari-sontillu.component.html',
  styleUrls: ['./samooha-vari-sontillu.component.scss']
})
export class SamoohaVariSontilluComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Samooha Vari Sonthillu. A modern day city landmark located in Ibrahimpatnam just a few minutes’ drive from Pharma City Best Place to Buy Open Plots In Hyderabad' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'best plots to buy in hyderabad, buy land in hyderabad, buy plots in hyderabad, plots for sale pharma city, pharma city plot' }
    );
  }

}
