import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }

  
  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);

    this.metaTagService.updateTag(
      { name: 'description', content: 'Samooha Projects Offers Best Real Estate Venture In Hyderabad With 10000+ Happy Customers. Buy Open Plots Near Hyderabad ' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Samooha projects, Smooha Realestate company, About Samooha Project, Samooha upcoing Projects, best plots to buy in hyderabad, buy land in hyderabad, buy plots in hyderabad, plots for sale in hyderabad' }
    );
  }

}
