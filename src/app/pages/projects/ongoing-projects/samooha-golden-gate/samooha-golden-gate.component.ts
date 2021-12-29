import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-samooha-golden-gate',
  templateUrl: './samooha-golden-gate.component.html',
  styleUrls: ['./samooha-golden-gate.component.scss']
})
export class SamoohaGoldenGateComponent implements OnInit {

  public showPreLoader = true;
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
    this.metaTagService.updateTag(
      { name: 'description', content: 'info@samoohaprojects.com' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'plot investment in hyderabad, best place to buy land in hyderabad, best investment plots in hyderabad 2020, land investment in hyderabad, best place to buy plots in hyderabad, investment plots in hyderabad, best place to invest in plots in hyderabad, best investment plots in hyderabad 2021, best place to buy land in hyderabad 2020, best place to buy open plots in hyderabad' }
    );
  }

}
