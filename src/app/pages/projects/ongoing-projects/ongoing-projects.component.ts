import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ongoing-projects',
  templateUrl: './ongoing-projects.component.html',
  styleUrls: ['./ongoing-projects.component.scss']
})
export class OngoingProjectsComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);

    this.metaTagService.updateTag(
      { name: 'description', content: 'Samooha Projects Lunched Prestigious Open Plot Ventures Samooha Golden Gate, Samooha Green Pharma ONE, Pharma Valley, Pharma Village & Samooha Vari Sonthillu Near By Hyderabad. ' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'open plots ventures in hyderabad, best ventures in hyderabad, real estate ventures in hyderabad, ongoing plots in hyderabad, hmda plots for sale in hyderabad, new plot ventures in hyderabad, upcoming projects in hyderabad 2021, best plots to buy in hyderabad' }
    );
  }

}
