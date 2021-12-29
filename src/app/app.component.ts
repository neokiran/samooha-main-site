import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'samooha';
  public currentRoute = '';
  public showMicroSite = false;

  constructor(
    private router: Router,
    private tittleService: TitleService,
    private gtmService: GoogleTagManagerService,
    private metaTagService: Meta
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // subscribing to NavigationEnd which is about to happen
        console.log('current route: ', router.url.toString());
        this.currentRoute = router.url.toString();
        window.scrollTo(0, 0)
      }
    });
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showMicroSite = true;
    }, 100);
    this.tittleService.init();
    this.metaTagService.updateTag(
      { name: 'description', content: 'Samooha Projects One The Trusted Real estate Development Company In Hyderabad. If You want to Invest in real estate Check Out Our On Going & Up Coming Ventures.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'residencial plots in hyderabad, buy plots for investment, Buy plots in hyderabad, Buy plots in shadnagar, new realestae plots, plots for sale hyderabad' }
    );
  }
}
