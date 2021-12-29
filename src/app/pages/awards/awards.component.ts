import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Best Hyderabad Real estate Award, 2021 issued Samooha Projects this award as we made a difference in the Real estate sector appreciating efforts and celebrating the growth of the contributors in the Real Estate industry' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Samooha projects, Smooha Realestate company, About Samooha Project, Samooha upcoing Projects, best plots to buy in hyderabad, buy land in hyderabad, buy plots in hyderabad, plots for sale in hyderabad' }
    );
  }

}
