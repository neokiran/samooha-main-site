import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.scss']
})
export class CompletedProjectsComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);

    this.metaTagService.updateTag(
      { name: 'description', content: 'Our UpComing Prestigious Open Plot Ventures At Samooha Projects will be announced Soon' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Samooha projects, Smooha Realestate company, About Samooha Project, Samooha upcoing Projects, best plots to buy in hyderabad, buy land in hyderabad, buy plots in hyderabad, plots for sale in hyderabad' }
    );
  }

}
