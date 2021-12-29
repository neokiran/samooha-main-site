import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Want to invest in Real estate Looking For Best Open Plots Venture In and Around Hyderabad. Contact Us: Samooha Projects +91 404261 3261' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Samooha projects contact no, Smooha Realestate company, About Samooha Project, Samooha upcoing Projects, best plots to buy in hyderabad, buy land in hyderabad, buy plots in hyderabad, plots for sale in hyderabad' }
    );
  }

}
