import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public showPreLoader = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoader = false;
    }, 500);
  }

}
