import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-samooha-green-pharma-one',
  templateUrl: './samooha-green-pharma-one.component.html',
  styleUrls: ['./samooha-green-pharma-one.component.scss']
})
export class SamoohaGreenPharmaOneComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Samooha-s prestigious venture of open plots near Pharma city and Amazon Data Center - Samooha Green Pharma One facilitated with clubhouse and resorts.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'best plots to buy in hyderabad, buy land in hyderabad, buy plots in hyderabad, plots for sale pharma city, pharma city plot' }
    );
  }

}
